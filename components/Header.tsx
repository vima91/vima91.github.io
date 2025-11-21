"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(true);
    const [lastScrollY, setLastScrollY] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show/hide header based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            // Add glass effect when scrolled
            setIsScrolled(currentScrollY > 50);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
                } ${isScrolled ? "glass py-3" : "bg-transparent py-4"}`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="#home"
                        className="text-xl sm:text-2xl font-bold gradient-text font-[family-name:var(--font-space-grotesk)]"
                    >
                        Evram Ehab
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-1 lg:gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="px-3 lg:px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Theme Toggle */}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />

                        {/* Mobile Menu Button (simplified - shows nav links on mobile) */}
                        <div className="md:hidden">
                            <div className="flex flex-col gap-1 items-end">
                                {navLinks.slice(1, 4).map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className="text-xs opacity-70 hover:opacity-100 transition-opacity"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
