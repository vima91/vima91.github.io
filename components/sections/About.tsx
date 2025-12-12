"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export function About() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Calculate years of experience dynamically
    const yearsOfExperience = new Date().getFullYear() - 2015;

    return (
        <section id="about" className="py-20 sm:py-32" ref={ref}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Section heading */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center font-[family-name:var(--font-space-grotesk)]">
                        Who Am <span className="gradient-text">I?</span>
                    </h2>

                    {/* About content */}
                    <div className="glass-card space-y-6 text-lg leading-relaxed">
                        <p>
                            I&apos;m a software engineer with deep expertise in <span className="text-primary font-semibold">.NET backend development</span> and
                            a proven track record of building scalable, high-performance systems across diverse industries.
                        </p>

                        <p>
                            My experience spans from{" "}
                            <span className="text-accent font-semibold">healthcare platforms</span> and{" "}
                            <span className="text-accent font-semibold">e-commerce solutions</span> to{" "}
                            <span className="text-accent font-semibold">enterprise systems</span> for government and multinational corporations.
                            I&apos;ve led teams, architected complex microservices and monolith solutions, and delivered projects for major clients including WTS, DHL, Saudi Government Ministry of Culture, and my own beloved <a href="https://vosita.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors font-semibold">Vosita</a>.
                        </p>

                        <p>
                            What sets me apart is my <span className="text-primary font-semibold">adaptability</span>—I&apos;m not just a specialist,
                            I&apos;m a problem solver who can learn and master any technology needed to deliver exceptional results. Whether it&apos;s full-stack development,
                            DevOps automation, technical architecture, or even hiring a full-fledged, high-standard team to deliver an exceptional project, I bring a comprehensive approach to every challenge.
                        </p>

                        <p>
                            I&apos;m passionate about continuous improvement, mentoring teams, and leveraging modern technologies to create efficient,
                            maintainable solutions that drive real business value.
                        </p>

                        <p>
                            I&apos;m currently obsessed with <span className="text-primary font-semibold">AI</span> and how it is transforming the world, especially software engineering and it&apos;s ability to save on development, testing and even automation costs, while maintaining quality.
                        </p>

                        {/* Quick stats or highlights */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border">
                            {[
                                { value: `${yearsOfExperience}+`, label: "Years Experience" },
                                { value: "8+", label: "Companies" },
                                { value: "15+", label: "Major Projects" },
                                { value: "∞", label: "Technologies" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    className="text-center"
                                >
                                    <div className="text-3xl font-bold gradient-text font-[family-name:var(--font-space-grotesk)]">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
