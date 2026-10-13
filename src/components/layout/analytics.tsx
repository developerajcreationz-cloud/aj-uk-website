"use client";

import Script from "next/script";
import Link from "next/link";
import { useSyncExternalStore } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const KEY = "aj-cookie-consent";
const EVENT = "aj-consent-change";

type Choice = "granted" | "denied" | null;

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function read(): Choice {
  try {
    const v = window.localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function write(value: Exclude<Choice, null> | "reset") {
  try {
    if (value === "reset") window.localStorage.removeItem(KEY);
    else window.localStorage.setItem(KEY, value);
  } catch {
    // storage unavailable: the choice simply applies to this visit
  }
  window.dispatchEvent(new Event(EVENT));
}

/** True when analytics is configured, so the footer only offers cookie settings when they matter. */
export const analyticsEnabled = Boolean(GA_ID);

export function openCookieSettings() {
  write("reset");
}

/**
 * Loads GA4 only after the visitor accepts (UK PECR / GDPR). Nothing is loaded or stored until then,
 * and the banner is not rendered at all when no GA ID is configured.
 */
export function Analytics() {
  // Server snapshot is "denied" so the banner never renders during prerender or hydration.
  const choice = useSyncExternalStore(subscribe, read, () => "denied" as Choice);
  if (!GA_ID) return null;

  return (
    <>
      {choice === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}
      {choice === null && (
        <div
          role="dialog"
          aria-label="Cookie preferences"
          className="fixed inset-x-4 bottom-4 z-[90] max-w-md rounded-2xl border border-ink/10 bg-cream p-5 text-ink shadow-2xl shadow-black/20 md:bottom-6 md:left-6 md:right-auto"
        >
          <p className="text-sm leading-relaxed text-ink/75">
            We use Google Analytics cookies to see which pages are useful. They stay off unless you accept.{" "}
            <Link href="/privacy/#cookies" className="underline underline-offset-4 hover:text-violet">
              Read how we use cookies
            </Link>
            .
          </p>
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              data-cursor-hover
              onClick={() => write("granted")}
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-violet"
            >
              Accept
            </button>
            <button
              type="button"
              data-cursor-hover
              onClick={() => write("denied")}
              className="rounded-full border border-ink/20 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}
