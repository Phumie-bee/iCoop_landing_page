"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "What is iCoop?", href: "#about" },
  { label: "Why iCoop?", href: "#why-icoop" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm py-0"
          : "bg-background/80 backdrop-blur-xl py-2 "
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2" aria-label="iCoop home">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-sm shadow-primary/25">
            <span className="font-extrabold text-sm text-white tracking-tight">
              iC
            </span>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-foreground">
            i<span className="text-primary">Coop</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-slate-500 hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="#pricing"
            className="text-base font-semibold text-foreground hover:text-primary transition-colors"
          >
            Log in
          </a>
          <a
            href="#cta"
            className="text-base font-semibold bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary/90 transition-colors shadow-sm"
          >
            Get started
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 text-foreground rounded-md hover:bg-muted transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden shadow-lg shadow-black/5"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="h-px bg-border w-full my-2" />
              <a
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Log in
              </a>
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-semibold bg-primary text-primary-foreground px-4 py-2.5 rounded-md hover:bg-primary/90 transition-colors text-center shadow-sm"
              >
                Get started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
