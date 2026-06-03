"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    body: `We collect information you provide directly: email address, display name, age verification, location (district only), and profile information. We do not collect or store government IDs beyond the verification process. Payment information is handled exclusively by our encrypted payment processor and never stored on our servers.`,
  },
  {
    icon: Lock,
    title: "How We Use Your Information",
    body: `Your information is used solely to operate the DohaHappyEndings platform — to verify identity, enable profile discovery, facilitate encrypted messaging between members, and process payments. We never sell, rent, or share your personal information with third parties for marketing purposes.`,
  },
  {
    icon: Eye,
    title: "Privacy & Anonymity",
    body: `All browsing is private by default. Client profiles are never visible publicly. Message contents are encrypted end-to-end. We operate a strict no-log policy on messaging and browsing activity. Premium members gain access to full incognito mode, which removes all activity traces.`,
  },
  {
    icon: Shield,
    title: "Data Security",
    body: `We employ AES-256 encryption for all stored data, TLS 1.3 for all data in transit, regular third-party security audits, and zero-knowledge authentication for passwords. In the event of any breach, affected users are notified within 24 hours.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_-5%,rgba(153,27,27,0.12)_0%,transparent_60%)] pointer-events-none" />
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-14">
          <p className="font-body text-gold-400 text-xs uppercase tracking-[0.3em] mb-3">Legal</p>
          <h1 className="font-display text-5xl font-bold text-silver-100 italic mb-4">Privacy <span className="text-gold-gradient">Policy</span></h1>
          <p className="font-body text-silver-500">Last updated: June 2025 · DohaHappyEndings is committed to protecting your privacy above all else.</p>
        </motion.div>

        <div className="space-y-5">
          {sections.map((s, i) => (
            <GlassCard key={s.title} className="p-7" delay={i * 0.1}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-600/10 border border-gold-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <s.icon className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-semibold text-silver-100 italic mb-3">{s.title}</h2>
                  <p className="font-body text-silver-500 text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-body text-silver-700 text-xs text-center mt-10">
          For privacy concerns, contact <a href="mailto:privacy@dohahappyendings.com" className="text-gold-400 hover:underline">privacy@dohahappyendings.com</a>
        </motion.p>
      </div>
    </div>
  );
}
