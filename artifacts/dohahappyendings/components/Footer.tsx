import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-gold-500/10 bg-[#060106]/90 backdrop-blur-2xl">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-14 h-14">
                <Image src="/logo-transparent.png" alt="DohaHappyEndings" fill className="object-contain drop-shadow-[0_0_8px_rgba(201,72,106,0.5)]" />
              </div>
              <div>
                <p className="font-display text-base font-bold text-gold-gradient tracking-wide">DOHA</p>
                <p className="font-body text-[9px] tracking-[0.35em] text-silver-600 uppercase">Happy Endings</p>
              </div>
            </Link>
            <p className="font-body text-sm text-silver-600 leading-relaxed mb-6 max-w-xs">
              Doha&apos;s most exclusive and discreet connection platform. Where luxury meets desire with absolute privacy.
            </p>
            <div className="space-y-2">
              <a href="mailto:support@dohahappyendings.com" className="flex items-center gap-2 font-body text-sm text-silver-700 hover:text-gold-400 transition-colors">
                <Mail className="w-3.5 h-3.5" /> support@dohahappyendings.com
              </a>
              <div className="flex items-center gap-2 font-body text-sm text-silver-700">
                <MapPin className="w-3.5 h-3.5" /> Doha, Qatar
              </div>
            </div>
            <div className="flex items-center gap-3 mt-5">
              {[Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full glass flex items-center justify-center text-silver-600 hover:text-gold-400 hover:border-gold-500/40 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: "Platform", links: [{ label: "Browse Profiles", href: "/browse" }, { label: "Premium Access", href: "/premium" }, { label: "How It Works", href: "/how-it-works" }] },
            { title: "Join", links: [{ label: "Pleasure Giver", href: "/signup/giver" }, { label: "Client", href: "/signup/client" }, { label: "Sign In", href: "/login" }] },
            { title: "Legal", links: [{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Service", href: "/terms" }, { label: "18+ Policy", href: "/age-policy" }] },
          ].map((group) => (
            <div key={group.title}>
              <p className="font-display text-xs font-semibold text-gold-500 uppercase tracking-[0.25em] mb-5">{group.title}</p>
              <ul className="space-y-3">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="font-body text-sm text-silver-600 hover:text-silver-300 transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-gold-500/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-silver-700">© {new Date().getFullYear()} DohaHappyEndings. All rights reserved. Adults 18+ only.</p>
          <p className="font-body text-xs text-silver-700 italic">Discretion is our promise. Privacy is our foundation.</p>
        </div>
      </div>
    </footer>
  );
}
