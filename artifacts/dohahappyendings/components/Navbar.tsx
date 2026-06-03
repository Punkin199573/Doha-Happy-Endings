"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Crown } from "lucide-react";

const navLinks = [
  { label: "Browse",       href: "/browse" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Premium",      href: "/premium" },
  { label: "About",        href: "/about" },
  { label: "Contact",      href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "liquid-glass py-2 shadow-[0_8px_40px_rgba(0,0,0,0.8)]"
          : "py-3 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* ── Logo (BIG) ── */}
          <Link href="/" className="flex items-center gap-4 group flex-shrink-0">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 overflow-visible">
              <Image
                src="/logo-transparent.png"
                alt="DohaHappyEndings"
                fill
                sizes="96px"
                className="object-contain drop-shadow-[0_0_12px_rgba(185,28,28,0.6)] group-hover:drop-shadow-[0_0_24px_rgba(220,38,38,0.9)] transition-all duration-500 scale-110"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-lg font-bold leading-none text-gold-gradient tracking-widest">DOHA</p>
              <p className="font-body text-[10px] tracking-[0.4em] text-silver-500 uppercase mt-1">Happy Endings</p>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-body text-sm font-medium tracking-wide transition-colors duration-300 group
                  ${link.label === "Premium"
                    ? "text-ember-500 hover:text-ember-400"
                    : "text-silver-400 hover:text-silver-100"}`}
              >
                {link.label === "Premium" && <Crown className="inline w-3 h-3 mr-1 mb-0.5 text-ember-500" />}
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300
                  ${link.label === "Premium" ? "bg-ember-gradient" : "bg-gold-gradient"}`} />
              </Link>
            ))}
          </nav>

          {/* ── Desktop CTAs ── */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="font-body text-sm font-medium text-silver-400 hover:text-silver-100 transition-colors px-4 py-2 tracking-wide">
              Sign In
            </Link>
            <Link
              href="/signup"
              className="relative group overflow-hidden font-body text-sm font-semibold text-white px-6 py-2.5 rounded-full bg-wine-gradient hover:scale-105 active:scale-95 transition-all shadow-gold-glow-sm"
            >
              <span className="relative z-10 tracking-wide">Join Now</span>
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>

          {/* ── Mobile toggle ── */}
          <button
            className="md:hidden text-silver-300 hover:text-gold-400 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden liquid-glass mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-silver-300 hover:text-silver-100 transition-colors font-medium py-2 border-b border-white/5 last:border-0 tracking-wide"
                >
                  {link.label === "Premium" && <Crown className="inline w-3 h-3 mr-1.5 text-ember-500" />}
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-2">
                <Link href="/login" onClick={() => setMobileOpen(false)} className="text-center font-body text-silver-300 border border-gold-600/30 rounded-full py-2.5 font-medium hover:border-gold-500/60 transition-colors">
                  Sign In
                </Link>
                <Link href="/signup" onClick={() => setMobileOpen(false)} className="text-center font-body text-white bg-wine-gradient rounded-full py-2.5 font-semibold shadow-gold-glow-sm">
                  Join Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
