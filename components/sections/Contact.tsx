"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Send } from "lucide-react";

export function Contact() {
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "submitting") return;
    const form = event.currentTarget;
    setState("submitting");
    const body = new URLSearchParams();
    new FormData(form).forEach((value, key) => { if (typeof value === "string") body.append(key, value); });
    try {
      const response = await fetch("/form.html", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() });
      if (!response.ok) throw new Error("Message could not be sent");
      form.reset();
      setState("success");
    } catch { setState("error"); }
  }
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div>
          <p className="eyebrow">06 / Start a conversation</p>
          <h2 id="contact-title">Let&apos;s discuss<br />your engineering<br />team.</h2>
          <p className="contact-intro">Have an engineering leadership opportunity? I&apos;d like to hear about the team, the product, and the challenges ahead.</p>
          <a className="email-link" href="mailto:e@evram.me">e@evram.me <ArrowUpRight aria-hidden="true" /></a>
          <div className="contact-links">
            {[["LinkedIn", "https://www.linkedin.com/in/evram-ehab/"], ["GitHub", "https://github.com/vima91"], ["Book a conversation", "https://calendly.com/evram-ehab"]].map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label} <ArrowUpRight size={16} aria-hidden="true" /></a>)}
            <a href="/contact.vcf" download="Evram-Ehab.vcf">Save contact ↓</a>
          </div>
        </div>
        <div className="contact-form-card">
          <h3>Send a note.</h3><p>Introduce yourself and the opportunity.</p>
          <form name="contact" method="POST" action="/form.html" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <p hidden><label>Leave this empty<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
            <label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required maxLength={120} placeholder="Name" />
            <label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" />
            <label htmlFor="message">What do you have in mind?</label><textarea id="message" name="message" rows={4} required maxLength={5000} placeholder="Tell me about the role and your team…" />
            <button type="submit" className="button primary" disabled={state === "submitting"}>{state === "submitting" ? "Sending…" : "Send message"}<Send size={18} aria-hidden="true" /></button>
            <p className="form-status" role="status" aria-live="polite">{state === "success" ? "Thanks—your message has been sent." : state === "error" ? <>The message couldn&apos;t be sent. Please try again or email <a href="mailto:e@evram.me">e@evram.me</a>.</> : ""}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
