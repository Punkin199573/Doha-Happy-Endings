"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, ChevronRight } from "lucide-react";

export default function AgePolicyPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(153,27,27,0.12)_0%,transparent_65%)] pointer-events-none" />
      <div className="max-w-xl w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="liquid-glass rounded-3xl p-10 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gold-600/10 border border-gold-600/20 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-gold-400" />
          </div>
          <h1 className="font-display text-4xl font-bold text-silver-100 italic mb-4">
            Adults <span className="text-gold-gradient">Only</span>
          </h1>
          <p className="font-body text-silver-400 leading-relaxed mb-6">
            DohaHappyEndings is an adult platform restricted exclusively to individuals aged 18 years or older. Access by anyone under 18 is strictly prohibited.
          </p>
          <p className="font-body text-silver-500 text-sm leading-relaxed mb-6">
            By accessing this website, you confirm that you are at least 18 years of age, that accessing adult content is legal in your jurisdiction, and that you are not offended by adult material.
          </p>
          <p className="font-body text-silver-600 text-sm mb-8">
            We employ age verification technology and cooperate fully with law enforcement to prevent underage access.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 bg-wine-gradient text-white font-body font-semibold px-8 py-3.5 rounded-full hover:scale-105 transition-transform shadow-gold-glow-sm">
            I confirm I am 18+ <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
