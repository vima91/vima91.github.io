"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="glass-card p-3 hover:scale-110 transition-transform">
                <div className="w-5 h-5" />
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="glass-card p-3 hover:scale-110 transition-transform group"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun className="w-5 h-5 text-primary rotate-0 scale-100 transition-all group-hover:rotate-90" />
            ) : (
                <Moon className="w-5 h-5 text-primary rotate-0 scale-100 transition-all group-hover:-rotate-90" />
            )}
        </button>
    );
}
