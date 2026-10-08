"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Magnetic } from "@/components/magnetic";

const PROJECT_TYPES = ["Branding", "Website", "Social & Content", "Not sure yet"];

type Status = "idle" | "sending" | "sent";

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="group block">
      <span className="text-xs font-medium uppercase tracking-wide text-cream/45">{label}</span>
      <input
        {...props}
        className="mt-2 w-full border-b border-cream/20 bg-transparent pb-3 text-base text-cream outline-none transition-colors duration-300 placeholder:text-cream/25 focus:border-lilac"
      />
    </label>
  );
}

export function Contact() {
  const [projectType, setProjectType] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("hello@ajcreationz.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — silently ignore, email is still selectable text
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 1100);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-cream/10 bg-ink px-6 py-24 text-cream md:px-10 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-[460px] w-[460px] rounded-full bg-gradient-to-tr from-lilac/15 to-transparent blur-[130px]"
      />

      <div className="relative mx-auto grid max-w-[1440px] gap-16 md:grid-cols-2 md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col justify-between gap-12"
        >
          <div>
            <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-cream/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-lilac" />
              </span>
              Currently booking new projects
            </p>
            <h2 className="font-display text-[11vw] font-medium leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
              Let&apos;s build
              <br />
              <em className="bg-gradient-to-r from-plum via-violet to-lilac bg-clip-text font-serif italic text-transparent">
                something good
              </em>
              .
            </h2>
            <p className="mt-6 max-w-sm text-balance text-base leading-relaxed text-cream/60">
              Tell us a bit about the project and we&apos;ll get back to you within one business
              day.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Magnetic strength={0.15} className="w-fit">
              <button
                type="button"
                data-cursor-hover
                onClick={handleCopy}
                className="group flex items-center gap-3 text-2xl font-medium tracking-tight text-cream transition-colors duration-300 hover:text-lilac sm:text-3xl"
              >
                hello@ajcreationz.com
                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cream/20 transition-all duration-300 group-hover:border-lilac group-hover:bg-lilac group-hover:text-ink">
                  <AnimatePresence mode="wait" initial={false}>
                    {copied ? (
                      <motion.svg
                        key="check"
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.6, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        width="14"
                        height="14"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path d="M2 6l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </motion.svg>
                    ) : (
                      <motion.svg
                        key="copy"
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.6, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        width="13"
                        height="13"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
                        <path d="M2.5 8V2.5A1 1 0 0 1 3.5 1.5H8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      </motion.svg>
                    )}
                  </AnimatePresence>
                </span>
              </button>
            </Magnetic>
            <p className="text-xs text-cream/40">
              {copied ? "Copied to clipboard" : "Click to copy"}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
        >
          <AnimatePresence mode="wait">
            {status === "sent" ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex h-full min-h-[360px] flex-col items-start justify-center gap-4 rounded-2xl border border-lilac/30 bg-lilac/5 p-10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lilac text-ink">
                  <svg width="18" height="18" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="font-display text-2xl text-cream">Message sent.</h3>
                <p className="max-w-xs text-sm text-cream/60">
                  Thanks for reaching out — we&apos;ll reply within one business day.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-8"
              >
                <div className="grid gap-8 sm:grid-cols-2">
                  <Field label="Name" name="name" type="text" placeholder="Jane Doe" required />
                  <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
                </div>

                <div>
                  <span className="text-xs font-medium uppercase tracking-wide text-cream/45">
                    Project type
                  </span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {PROJECT_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        data-cursor-hover
                        onClick={() => setProjectType(type)}
                        className={`rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                          projectType === type
                            ? "border-lilac bg-lilac text-ink"
                            : "border-cream/20 text-cream/70 hover:border-cream/40"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="block">
                  <span className="text-xs font-medium uppercase tracking-wide text-cream/45">
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about the project…"
                    required
                    className="mt-2 w-full resize-none border-b border-cream/20 bg-transparent pb-3 text-base text-cream outline-none transition-colors duration-300 placeholder:text-cream/25 focus:border-lilac"
                  />
                </label>

                <Magnetic strength={0.25} className="w-fit">
                  <button
                    type="submit"
                    data-cursor-hover
                    disabled={status === "sending"}
                    className="group inline-flex items-center gap-3 rounded-full bg-lilac px-7 py-4 text-sm font-medium text-ink transition-colors duration-300 hover:bg-cream disabled:opacity-70"
                  >
                    {status === "sending" ? "Sending…" : "Send message"}
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-lilac transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-45">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 10L10 2M10 2H3.5M10 2V8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                </Magnetic>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
