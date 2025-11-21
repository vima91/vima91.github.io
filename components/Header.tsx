"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(true);
    const [lastScrollY, setLastScrollY] = React.useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show/hide header based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
                setMobileMenuOpen(false); // Close mobile menu on scroll down
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

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

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

                    {/* Desktop Navigation Links */}
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

                    {/* Right Side: Theme Toggle + Mobile Menu Button */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />

                        {/* Mobile Hamburger Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden glass-card p-3 hover:scale-110 transition-transform"
                            aria-label="Toggle mobile menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-5 h-5 text-primary" />
                            ) : (
                                <Menu className="w-5 h-5 text-primary" />
                            )}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 glass-card rounded-lg overflow-hidden animate-in fade-in slide-in-from-top-5 duration-300">
                        <div className="flex flex-col">
                            {navLinks.map((link, index) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    className={`px-4 py-3 text-base font-medium hover:bg-primary/10 transition-colors ${index !== navLinks.length - 1 ? "border-b border-border/50" : ""
                                        }`}
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
