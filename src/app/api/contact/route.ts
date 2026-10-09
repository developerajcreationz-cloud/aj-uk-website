import nodemailer from "nodemailer";

export const runtime = "nodejs";

const TO = process.env.CONTACT_TO ?? "developerajcreationz@gmail.com";
const MAX = { name: 120, email: 200, projectType: 60, message: 5000 };

// Simple in-memory throttle: 5 submissions / 10 min per IP (per server instance).
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[\r\n]+/g, " ").trim().slice(0, max) : "";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: bots fill this hidden field; pretend success.
  if (body.company) return Response.json({ ok: true });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) return Response.json({ error: "Too many requests" }, { status: 429 });

  const name = clean(body.name, MAX.name);
  const email = clean(body.email, MAX.email);
  const projectType = clean(body.projectType, MAX.projectType) || "Not specified";
  const message =
    typeof body.message === "string" ? body.message.trim().slice(0, MAX.message) : "";

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please complete all fields" }, { status: 400 });
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
      subject: `New enquiry: ${projectType} — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`,
    });
  } catch (err) {
    console.error("Contact form: send failed", err);
    return Response.json({ error: "Could not send message" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
