export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} Evram Ehab. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Home
                        </a>
                        <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            About
                        </a>
                        <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
