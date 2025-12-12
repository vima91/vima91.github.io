"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Mail, Send, Linkedin, Github, Twitter, Calendar, User, MessageSquare } from "lucide-react";

export function Contact() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formState, setFormState] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
    const [showQR, setShowQR] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState("submitting");

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("/form.html", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
            });

            if (response.ok) {
                setFormState("success");
                form.reset();
                setTimeout(() => setFormState("idle"), 5000);
            } else {
                setFormState("error");
                setTimeout(() => setFormState("idle"), 5000);
            }
        } catch {
            setFormState("error");
            setTimeout(() => setFormState("idle"), 5000);
        }
    };

    const socialLinks = [
        {
            icon: Linkedin,
            label: "LinkedIn",
            href: "https://linkedin.com/in/evram-ehab",
            color: "hover:text-blue-500"
        },
        {
            icon: Github,
            label: "GitHub",
            href: "https://github.com/vima91",
            color: "hover:text-gray-400"
        },
        {
            icon: Twitter,
            label: "Twitter",
            href: "https://twitter.com/evram_ehab",
            color: "hover:text-sky-500"
        },
        {
            icon: Calendar,
            label: "Calendly",
            href: "https://calendly.com/evram-ehab",
            color: "hover:text-green-500"
        },
    ];

    return (
        <section id="contact" className="py-20 sm:py-32 bg-muted/20" ref={ref}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Section heading */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center font-[family-name:var(--font-space-grotesk)]">
                        Let&apos;s <span className="gradient-text">Connect</span>
                    </h2>

                    <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Interested in collaboration or consulting services? Reach out and let&apos;s discuss how we can work together.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <div className="glass-card">
                            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                onSubmit={handleSubmit}
                                className="space-y-4"
                            >
                                {/* Netlify form fields */}
                                <input type="hidden" name="form-name" value="contact" />
                                <input type="hidden" name="bot-field" />

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Name
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                            placeholder="Your name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message
                                    </label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                            placeholder="Tell me about your project or consultation needs..."
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={formState === "submitting"}
                                    className="w-full py-3 px-6 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {formState === "submitting" ? (
                                        <>Sending...</>
                                    ) : formState === "success" ? (
                                        <>Message Sent! ✓</>
                                    ) : formState === "error" ? (
                                        <>Error - Please try again</>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            {/* Direct Email */}
                            <div className="glass-card">
                                <h3 className="text-2xl font-semibold mb-4">Direct Email</h3>
                                <a
                                    href="mailto:e@evram.me"
                                    className="flex items-center gap-3 text-lg text-primary hover:text-accent transition-colors group"
                                >
                                    <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                    <span>e@evram.me</span>
                                </a>
                            </div>

                            {/* Social Links */}
                            <div className="glass-card">
                                <h3 className="text-2xl font-semibold mb-4">Connect Online</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {socialLinks.map((social) => {
                                        const Icon = social.icon;
                                        return (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex items-center gap-2 p-3 rounded-lg bg-background/50 hover:bg-background transition-all hover:scale-105 ${social.color}`}
                                            >
                                                <Icon className="w-5 h-5" />
                                                <span className="font-medium">{social.label}</span>
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* VCard Download */}
                            <div className="glass-card text-center">
                                <p className="text-sm text-muted-foreground mb-2">Save my contact information</p>
                                <a
                                    href="/contact.vcf"
                                    download="Evram-Ehab.vcf"
                                    className="text-primary hover:text-accent transition-colors font-medium inline-block mb-2"
                                >
                                    📇 Add to Contacts
                                </a>

                                <div className="mt-2">
                                    <button
                                        onClick={() => setShowQR(!showQR)}
                                        className="text-xs text-muted-foreground hover:text-primary transition-colors underline"
                                    >
                                        {showQR ? "Hide QR Code" : "Scan QR Code instead"}
                                    </button>
                                </div>

                                {showQR && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.3 }}
                                        className="mt-4 p-4 bg-white rounded-lg inline-block"
                                    >
                                        <Image
                                            src="/contact-qr.png"
                                            alt="Contact vCard QR Code"
                                            className="w-48 h-48"
                                            width={192}
                                            height={192}
                                            unoptimized
                                        />
                                        <p className="text-xs text-gray-600 mt-2">Scan to add contact</p>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
