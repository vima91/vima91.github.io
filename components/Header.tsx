"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [["#projects", "Work"], ["#leadership", "Leadership"], ["#experience", "Experience"], ["#contact", "Contact"]];

export function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  return (
    <header className="site-header" onKeyDown={event => { if (event.key === "Escape" && open) { setOpen(false); menuButton.current?.focus(); } }}>
      <div className="wrap header-inner">
        <a className="wordmark" href="#home" aria-label="Evram Ehab, home" onClick={() => setOpen(false)}>EVRAM<span>.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">{links.map(([href, title]) => <a href={href} key={href}>{title}</a>)}</nav>
        <div className="header-controls">
          <ThemeToggle />
          <a className="header-resume" href="/CV/Evrams-CV.pdf" download="Evram-Ehab-Resume.pdf">Resume <ArrowUpRight size={16} aria-hidden="true" /></a>
          <button ref={menuButton} className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}</button>
        </div>
      </div>
      <nav id="mobile-nav" aria-label="Mobile navigation" className="mobile-nav" hidden={!open}>
        {links.map(([href, title]) => <a href={href} key={href} onClick={() => setOpen(false)}>{title}<ArrowUpRight size={18} aria-hidden="true" /></a>)}
        <a href="/CV/Evrams-CV.pdf" download="Evram-Ehab-Resume.pdf" onClick={() => setOpen(false)}>Download resume<ArrowUpRight size={18} aria-hidden="true" /></a>
      </nav>
    </header>
  );
}
