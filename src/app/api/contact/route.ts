import nodemailer from "nodemailer";
import { SITE } from "@/config/site";

export const runtime = "nodejs";

const TO = process.env.CONTACT_TO ?? "developerajcreationz@gmail.com";
const MAX = { name: 120, email: 200, projectType: 60, message: 5000 };

// In-memory throttles (per server instance; a restart resets them). Counts attempts, so retrying while blocked stays blocked.
const WINDOW_MS = 10 * 60 * 1000;
const HOUR_MS = 60 * 60 * 1000;
const LIMITS = { perIp: 5, perEmail: 3, sentPerHour: 30 };
const MAX_TRACKED_KEYS = 5000;
const hits = new Map<string, number[]>();

/** Records one attempt for `key` and reports whether it is now over `max` within `windowMs`. */
function overLimit(key: string, max: number, windowMs: number) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.delete(key);
  hits.set(key, recent);
  // Keep memory bounded: forged client IPs must not be able to grow this map forever.
  for (const oldest of hits.keys()) {
    if (hits.size <= MAX_TRACKED_KEYS) break;
    hits.delete(oldest);
  }
  return recent.length > max;
}

/**
 * Client IP for throttling. X-Forwarded-For can be forged at its left end, so when the number of proxies in front of
 * the app is known, set TRUSTED_PROXY_HOPS and the address that many entries from the right is used instead.
 * Unset (0) keeps the first entry. The per-email and sitewide limits do not depend on this header either way.
 */
function clientIp(request: Request) {
  const parts = (request.headers.get("x-forwarded-for") ?? "")
    .split(",")
    .map((p) => p.trim())
    .filter(Boolean);
  if (parts.length === 0) return "unknown";
  const hops = Number(process.env.TRUSTED_PROXY_HOPS ?? 0);
  return hops > 0 ? parts[Math.max(0, parts.length - hops)] : parts[0];
}

/** Only our own pages may post here. Extra origins (such as a Hostinger preview URL) go in CONTACT_ALLOWED_ORIGINS. */
function originAllowed(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  const allowed = [SITE.url, ...(process.env.CONTACT_ALLOWED_ORIGINS ?? "").split(",")].map((o) => o.trim());
  if (allowed.includes(origin)) return true;
  try {
    return process.env.NODE_ENV !== "production" && new URL(origin).hostname === "localhost";
  } catch {
    return false;
  }
}

const clean = (v: unknown, max: number) =>
  typeof v === "string"
    ? v
        .replace(/[\r\n]+/g, " ")
        .trim()
        .slice(0, max)
    : "";

export async function POST(request: Request) {
  if (!originAllowed(request)) return Response.json({ error: "Forbidden" }, { status: 403 });
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return Response.json({ error: "Unsupported content type" }, { status: 415 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: bots fill this hidden field; pretend success.
  if (body.company) return Response.json({ ok: true });

  if (overLimit(`ip:${clientIp(request)}`, LIMITS.perIp, WINDOW_MS)) {
    return Response.json({ error: "Too many requests" }, { status: 429 });
  }

  const name = clean(body.name, MAX.name);
  const email = clean(body.email, MAX.email);
  const projectType = clean(body.projectType, MAX.projectType);
  const message = typeof body.message === "string" ? body.message.trim().slice(0, MAX.message) : "";

  // No whitespace, commas, quotes or angle brackets, so the address cannot add recipients to the Reply-To header.
  if (!name || !message || !projectType || !/^[^\s@,<>"';]+@[^\s@,<>"';]+\.[^\s@,<>"';]+$/.test(email)) {
    return Response.json({ error: "Please complete all fields" }, { status: 400 });
  }

  // Past validation: cap repeats from one address, and the total sent, so a flood cannot fill the inbox.
  if (
    overLimit(`email:${email.toLowerCase()}`, LIMITS.perEmail, WINDOW_MS) ||
    overLimit("sent:all", LIMITS.sentPerHour, HOUR_MS)
  ) {
    return Response.json({ error: "Too many requests" }, { status: 429 });
  }

  const { SMTP_HOST = "smtp.hostinger.com", SMTP_PORT = "465", SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: SMTP_USER / SMTP_PASS not configured");
    return Response.json({ error: "Email is not configured" }, { status: 500 });
  }

  const port = Number(SMTP_PORT);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"AJ Creationz Website" <${SMTP_USER}>`,
      to: TO,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `New enquiry: ${projectType}, ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`,
    });
  } catch (err) {
    console.error("Contact form: send failed", err);
    return Response.json({ error: "Could not send message" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
