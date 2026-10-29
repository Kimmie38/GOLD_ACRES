"use client";

import { Send } from "lucide-react";
import type { FormEvent } from "react";
import { site } from "@/lib/site";

const field =
  "mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-ink-soft/50 transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 focus:outline-none";

/** There is no backend, so the form composes an email in the visitor's mail app. */
export default function ContactForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const subject = `Enquiry from ${get("name")}${get("interest") ? ` (${get("interest")})` : ""}`;
    const body = [get("message"), "", `Name: ${get("name")}`, get("phone") && `Phone: ${get("phone")}`].filter((l) => l !== "").join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-medium">
        Your name
        <input name="name" required autoComplete="name" className={field} placeholder="Jane Doe" />
      </label>
      <label className="text-sm font-medium">
        Phone (optional)
        <input name="phone" type="tel" autoComplete="tel" className={field} placeholder="+234 …" />
      </label>
      <label className="text-sm font-medium sm:col-span-2">
        I&rsquo;m interested in
        <select name="interest" className={field} defaultValue="">
          <option value="">Choose one…</option>
          <option>Reading &amp; literacy</option>
          <option>After-school tutoring</option>
          <option>Adult learning</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="text-sm font-medium sm:col-span-2">
        Message
        <textarea name="message" required rows={5} className={field} placeholder="Tell us a little about the learner and what you're looking for." />
      </label>
      <button type="submit" className="btn-dark sm:col-span-2 sm:justify-self-start">
        Send message <Send className="size-4" />
      </button>
    </form>
  );
}
