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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "liquid-glass py-1 shadow-[0_8px_50px_rgba(0,0,0,0.9)]"
          : "py-2 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* ── Logo ── BIG on every screen ── */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 overflow-visible">
              <Image
                src="/logo-transparent.png"
                alt="DohaHappyEndings"
                fill
                sizes="(max-width: 640px) 56px, (max-width: 768px) 64px, 72px"
                className="object-contain drop-shadow-[0_0_12px_rgba(255,215,0,0.75)] group-hover:drop-shadow-[0_0_26px_rgba(255,215,0,1)] transition-all duration-500"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-base font-black leading-none text-gold-gradient tracking-[0.35em]">DOHA</p>
              <p className="font-body text-[10px] tracking-[0.45em] text-silver-500 uppercase mt-1 font-medium">Happy Endings</p>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-body text-sm font-semibold tracking-wide transition-colors duration-300 group
                  ${link.label === "Premium"
                    ? "text-gold-400 hover:text-gold-300"
                    : "text-silver-400 hover:text-white"}`}
              >
                {link.label === "Premium" && <Crown className="inline w-3 h-3 mr-1 mb-0.5 text-gold-400" />}
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300
                  ${link.label === "Premium" ? "bg-ember-gradient" : "bg-gold-gradient"}`} />
              </Link>
            ))}
          </nav>

          {/* ── Desktop CTAs ── */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="font-body text-sm font-semibold text-silver-400 hover:text-white transition-colors px-4 py-2 tracking-wide">
              Sign In
            </Link>
            <Link
              href="/signup"
              className="relative group overflow-hidden font-body text-sm font-bold text-black px-7 py-2.5 rounded-full btn-gold tracking-wide"
            >
              <span className="relative z-10">Join Now</span>
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>

          {/* ── Mobile toggle ── */}
          <button
            className="md:hidden text-silver-300 hover:text-gold-400 transition-colors p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
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
                  className="font-body text-silver-200 hover:text-white transition-colors font-semibold py-2.5 border-b border-white/5 last:border-0 tracking-wide text-base"
                >
                  {link.label === "Premium" && <Crown className="inline w-3.5 h-3.5 mr-2 text-gold-400" />}
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-2">
                <Link href="/login" onClick={() => setMobileOpen(false)} className="text-center font-body text-silver-200 border border-gold-500/40 rounded-full py-3 font-semibold hover:border-gold-400 transition-colors text-base">
                  Sign In
                </Link>
                <Link href="/signup" onClick={() => setMobileOpen(false)} className="text-center font-body text-black btn-gold rounded-full py-3 font-bold text-base">
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
