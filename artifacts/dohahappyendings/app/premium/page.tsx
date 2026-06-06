"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Crown, Lock, Star, Shield, Eye, Zap, ChevronRight, Check, Sparkles, Heart } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";

const lockedProfiles = [
  { name: "Elara", age: 25, img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop&q=85", service: "Elite Companion" },
  { name: "Jade", age: 23, img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=500&fit=crop&q=85", service: "Luxury GFE" },
  { name: "Mia", age: 27, img: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=500&fit=crop&q=85", service: "Private Dance" },
  { name: "Vera", age: 24, img: "https://images.unsplash.com/photo-1485875437342-9b39470b3d95?w=400&h=500&fit=crop&q=85", service: "Overnight" },
  { name: "Kira", age: 26, img: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=400&h=500&fit=crop&q=85", service: "Travel Partner" },
  { name: "Nova", age: 22, img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=500&fit=crop&q=85", service: "Secret Sessions" },
];

const tiers = [
  {
    name: "Velvet",
    icon: Eye,
    price: "QAR 299",
    period: "/ month",
    color: "from-silver-700/30 to-silver-900/30",
    border: "border-silver-400/20",
    accent: "text-silver-300",
    cta: "Start Velvet",
    features: [
      "Browse all verified profiles",
      "5 private messages / day",
      "Save up to 10 favourites",
      "See standard availability",
      "Basic matching",
    ],
  },
  {
    name: "Obsidian",
    icon: Crown,
    price: "QAR 699",
    period: "/ month",
    popular: true,
    color: "from-wine-800/40 to-wine-900/60",
    border: "border-gold-500/40",
    accent: "text-gold-gradient",
    cta: "Go Obsidian",
    features: [
      "Everything in Velvet",
      "Unlimited private messaging",
      "Unlock all premium profiles",
      "Priority booking access",
      "Real-time availability",
      "Incognito browsing mode",
      "Dedicated concierge",
    ],
  },
  {
    name: "Noir Elite",
    icon: Sparkles,
    price: "QAR 1,499",
    period: "/ month",
    color: "from-[#1a0a10]/80 to-[#080208]/80",
    border: "border-rose-gold/40",
    accent: "text-rose-gradient",
    cta: "Join Noir Elite",
    features: [
      "Everything in Obsidian",
      "Personal matchmaking service",
      "Exclusive member-only events",
      "Video profile access",
      "VIP experience packages",
      "24/7 personal concierge",
      "Anonymous payments",
    ],
  },
];

export default function PremiumPage() {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);
  const [unlockModal, setUnlockModal] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">

      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(168,41,78,0.18)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_80%,rgba(201,131,106,0.08)_0%,transparent_55%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Hero section ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center pt-10 mb-20"
        >
          <motion.div
            animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-6"
          >
            <Crown className="w-16 h-16 text-gold-400 mx-auto drop-shadow-[0_0_20px_rgba(201,72,106,0.7)]" />
          </motion.div>

          <div className="mb-4 inline-flex items-center gap-2 glass px-5 py-2 rounded-full border-gold-glow">
            <Lock className="w-3.5 h-3.5 text-gold-400" />
            <span className="font-body text-xs text-silver-300 tracking-[0.3em] uppercase">Exclusive Access</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-silver-100 mt-6 mb-5 leading-tight italic">
            View Premium<br />
            <motion.span
              className="text-gold-gradient"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              Happy Endings
            </motion.span>
          </h1>

          <p className="font-body text-silver-400 text-xl max-w-xl mx-auto leading-relaxed mb-10">
            Unlock the full experience. Premium members access exclusive profiles,
            unlimited messaging, and experiences that exist nowhere else in Doha.
          </p>

          <motion.button
            onClick={() => setUnlockModal(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative group overflow-hidden inline-flex items-center gap-3 bg-wine-gradient text-white font-body font-semibold text-lg px-12 py-5 rounded-full shadow-gold-glow"
          >
            <Lock className="w-5 h-5" />
            Unlock Premium Now
            <ChevronRight className="w-5 h-5" />
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </motion.div>

        {/* ── Locked profiles grid ── */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-body text-gold-500 text-xs uppercase tracking-[0.3em] mb-3">Exclusive Members Only</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-silver-100 italic">
              The Hidden <span className="text-gold-gradient">Collection</span>
            </h2>
            <p className="font-body text-silver-500 mt-3 max-w-md mx-auto">
              These extraordinary givers exist exclusively for our premium members.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {lockedProfiles.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -5, scale: 1.03 }}
                onClick={() => setUnlockModal(true)}
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
              >
                <div className="relative h-52 sm:h-60">
                  {/* Blurred photo */}
                  <Image
                    src={p.img}
                    alt="Premium member"
                    fill
                    className="object-cover locked-blur group-hover:blur-[8px] transition-all duration-300"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-[#080208]/60 backdrop-blur-[1px]" />

                  {/* Lock icon */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                    >
                      <Lock className="w-8 h-8 text-gold-400 drop-shadow-[0_0_10px_rgba(201,72,106,0.8)] mb-2" />
                    </motion.div>
                    <span className="font-display text-lg font-bold text-white italic">{p.name}</span>
                    <span className="font-body text-xs text-gold-400 mt-1">{p.service}</span>
                  </div>

                  {/* Hover CTA */}
                  <div className="absolute inset-0 flex items-end justify-center pb-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-body text-xs text-white bg-wine-gradient px-4 py-1.5 rounded-full flex items-center gap-1.5">
                      <Crown className="w-3 h-3" /> Unlock
                    </span>
                  </div>

                  {/* Top badge */}
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center">
                    <Crown className="w-3 h-3 text-gold-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Teaser count */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="font-body text-silver-600 text-sm">
              <span className="text-gold-400 font-semibold">+340 more</span> exclusive profiles hidden behind premium access
            </p>
          </motion.div>
        </div>

        {/* ── Membership Tiers ── */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="font-body text-gold-500 text-xs uppercase tracking-[0.3em] mb-3">Choose Your Tier</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-silver-100 italic">
              Premium <span className="text-gold-gradient">Membership</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                onHoverStart={() => setHoveredTier(tier.name)}
                onHoverEnd={() => setHoveredTier(null)}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative rounded-3xl border ${tier.border} bg-gradient-to-b ${tier.color} backdrop-blur-2xl p-8 cursor-pointer overflow-hidden`}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 flex justify-center">
                    <div className="bg-wine-gradient text-white font-body text-xs font-semibold px-5 py-1.5 rounded-b-xl tracking-widest uppercase">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Glow effect on hover */}
                <AnimatePresence>
                  {hoveredTier === tier.name && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 rounded-3xl pointer-events-none"
                      style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(168,41,78,0.12) 0%, transparent 70%)" }}
                    />
                  )}
                </AnimatePresence>

                {/* Top glow line */}
                {tier.popular && <div className="absolute inset-x-0 top-0 h-px bg-gold-gradient" />}

                <div className="relative z-10 pt-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-5">
                    <tier.icon className="w-6 h-6 text-gold-400" />
                  </div>

                  <p className={`font-display text-2xl font-bold italic mb-1 ${tier.popular ? "text-gold-gradient" : tier.name === "Noir Elite" ? "text-rose-gradient" : "text-silver-gradient"}`}>
                    {tier.name}
                  </p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="font-display text-4xl font-bold text-silver-100">{tier.price}</span>
                    <span className="font-body text-sm text-silver-600">{tier.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                        <span className="font-body text-sm text-silver-400">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3.5 rounded-full font-body font-semibold text-sm transition-all hover:scale-[1.03] active:scale-[0.98]
                    ${tier.popular
                      ? "bg-wine-gradient text-white shadow-gold-glow-sm"
                      : "glass border-gold-glow text-silver-200 hover:text-gold-300"}`}
                  >
                    {tier.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Premium benefits strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="liquid-glass rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden mb-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(168,41,78,0.08)_0%,transparent_70%)]" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-silver-100 italic mb-8">
              Why Go <span className="text-gold-gradient">Premium?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Eye,     label: "340+ Exclusive Profiles",    sub: "Hidden from standard members" },
                { icon: Zap,     label: "Priority Booking",           sub: "Always first in queue" },
                { icon: Shield,  label: "Full Anonymity Mode",        sub: "Zero digital footprint" },
                { icon: Heart,   label: "Concierge Matching",         sub: "Personal curation service" },
              ].map((b) => (
                <div key={b.label} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-4">
                    <b.icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <p className="font-display font-semibold text-silver-100 italic mb-1">{b.label}</p>
                  <p className="font-body text-xs text-silver-600">{b.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      {/* ── Unlock Modal ── */}
      <AnimatePresence>
        {unlockModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            onClick={() => setUnlockModal(false)}
          >
            <div className="absolute inset-0 bg-[#080208]/80 backdrop-blur-xl" />
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative liquid-glass rounded-3xl p-10 max-w-md w-full text-center overflow-hidden premium-glow"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gold-gradient" />
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="inline-block mb-5"
              >
                <Crown className="w-14 h-14 text-gold-400 mx-auto drop-shadow-[0_0_16px_rgba(201,72,106,0.7)]" />
              </motion.div>
              <h3 className="font-display text-3xl font-bold text-silver-100 italic mb-3">
                Unlock Premium
              </h3>
              <p className="font-body text-silver-400 mb-8 leading-relaxed">
                Create an account or sign in to access exclusive profiles,
                unlimited messaging, and the full Happy Endings experience.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/signup"
                  onClick={() => setUnlockModal(false)}
                  className="w-full flex items-center justify-center gap-2 bg-wine-gradient text-white font-body font-semibold py-4 rounded-full hover:scale-[1.03] transition-transform shadow-gold-glow-sm"
                >
                  <Star className="w-4 h-4" /> Create Premium Account
                </Link>
                <Link
                  href="/login"
                  onClick={() => setUnlockModal(false)}
                  className="w-full glass border-gold-glow text-silver-300 font-body font-medium py-3.5 rounded-full hover:text-gold-300 transition-colors"
                >
                  Already a member? Sign In
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
