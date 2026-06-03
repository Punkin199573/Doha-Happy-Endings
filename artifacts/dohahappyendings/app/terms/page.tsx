"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";

const terms = [
  { title: "Age Requirement", body: "You must be at least 18 years of age to access or use DohaHappyEndings. By creating an account, you confirm that you are an adult under the laws of your jurisdiction. We reserve the right to terminate any account suspected of being underage." },
  { title: "Account Conduct", body: "Members agree to interact with honesty, mutual respect, and in compliance with applicable laws. Harassment, coercion, fraud, or any non-consensual activity is grounds for immediate permanent ban and referral to authorities." },
  { title: "Service Agreements", body: "All arrangements between Pleasure Givers and Clients are made directly between those individuals. DohaHappyEndings facilitates connection only and is not a party to any personal service agreements. Terms, compensation, and boundaries are entirely the members' responsibility." },
  { title: "Content & Photos", body: "Profile photos must depict the actual member and must not include minors or non-consensual material. We reserve the right to remove any content that violates these terms without notice. Repeated violations result in permanent account removal." },
  { title: "Payment & Refunds", body: "Platform fees are non-refundable once services have been rendered. Disputed bookings are reviewed within 48 hours. Fraudulent chargebacks result in immediate account termination. All prices are in QAR unless stated otherwise." },
  { title: "Limitation of Liability", body: "DohaHappyEndings provides a connection platform only. We are not liable for the conduct of members beyond our platform. Members agree to hold DohaHappyEndings harmless from any disputes arising from personal arrangements." },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_-5%,rgba(153,27,27,0.12)_0%,transparent_60%)] pointer-events-none" />
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-14">
          <p className="font-body text-gold-400 text-xs uppercase tracking-[0.3em] mb-3">Legal</p>
          <h1 className="font-display text-5xl font-bold text-silver-100 italic mb-4">Terms of <span className="text-gold-gradient">Service</span></h1>
          <p className="font-body text-silver-500">Last updated: June 2025 · Please read these terms carefully before using DohaHappyEndings.</p>
        </motion.div>

        <div className="space-y-4">
          {terms.map((t, i) => (
            <GlassCard key={t.title} className="p-7" delay={i * 0.08}>
              <div className="flex items-start gap-3">
                <span className="font-display text-gold-600 font-bold text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="font-display text-xl font-semibold text-silver-100 italic mb-2">{t.title}</h2>
                  <p className="font-body text-silver-500 text-sm leading-relaxed">{t.body}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-10 p-6 liquid-glass rounded-2xl text-center">
          <FileText className="w-8 h-8 text-gold-500 mx-auto mb-3" />
          <p className="font-body text-silver-500 text-sm">By using DohaHappyEndings you agree to these terms. Questions? <a href="mailto:legal@dohahappyendings.com" className="text-gold-400 hover:underline">legal@dohahappyendings.com</a></p>
        </motion.div>
      </div>
    </div>
  );
}
