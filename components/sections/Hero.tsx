"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Download, Calendar, ChevronDown } from "lucide-react";

export function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Simplified background gradient for better performance */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-accent/10" />


            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Main heading with animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
                            <span className="gradient-text">Evram Ehab</span>
                        </h1>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl sm:text-2xl md:text-3xl mb-4 text-muted-foreground"
                    >
                        Software Engineer & Technical Consultant
                    </motion.p>

                    {/* Sub-tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-base sm:text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto"
                    >
                        Specialized in .NET backend development and full-stack solutions.
                        Helping teams build scalable, high-performance systems.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a
                            href="#contact"
                            className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2 !text-white">
                                <Calendar className="w-5 h-5" />
                                Let's Collaborate
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>

                        <a
                            href="/CV/Evrams-CV.pdf"
                            download
                            className="px-8 py-4 glass-card hover:bg-primary/10 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            <Download className="w-5 h-5" />
                            Download CV
                        </a>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    >
                        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                            <span className="text-sm">Scroll to explore</span>
                            <ChevronDown className="w-6 h-6 animate-bounce" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
