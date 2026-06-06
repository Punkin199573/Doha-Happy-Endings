"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GlassCard } from "@/components/GlassCard";
import { Shield, Star, Zap, Eye, Heart, Lock, ChevronRight, Crown, Sparkles } from "lucide-react";

const stats = [
  { value: "10K+", label: "Active Members" },
  { value: "98%", label: "Satisfaction" },
  { value: "100%", label: "Discreet" },
  { value: "24/7", label: "Support" },
];

const features = [
  { icon: Lock,   title: "Absolute Privacy",    desc: "End-to-end encrypted messaging. Your identity stays yours — always." },
  { icon: Shield, title: "Verified Profiles",   desc: "Every giver undergoes identity verification. Zero fakes, guaranteed." },
  { icon: Star,   title: "Elite Selection",     desc: "A curated network of premium pleasure givers across all of Doha." },
  { icon: Zap,    title: "Instant Connection",  desc: "Our smart matching puts you face-to-face in seconds." },
  { icon: Eye,    title: "Discreet Browsing",   desc: "Browse privately. No activity logs shared with anyone." },
  { icon: Heart,  title: "Perfect Chemistry",   desc: "Advanced matching for true compatibility and mutual satisfaction." },
];

const testimonials = [
  { quote: "The most sophisticated platform I've encountered. Privacy is genuinely respected — you feel it in every detail.", name: "A.K.", role: "Premium Client", stars: 5 },
  { quote: "As a pleasure giver, this platform gave me full control. I choose my clients, my terms, my experience.", name: "S.M.", role: "Verified Pleasure Giver", stars: 5 },
  { quote: "Elegant, fast, discreet. Exactly the kind of experience Doha has been missing for too long.", name: "R.H.", role: "Elite Member", stars: 5 },
];

const profilePreviews = [
  { name: "Aria", age: 24, img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&q=85" },
  { name: "Luna", age: 26, img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop&q=85" },
  { name: "Sofia", age: 22, img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop&q=85" },
];

function Particle({ style }: { style: React.CSSProperties }) {
  return <div className="particle" style={style} />;
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div className="relative overflow-hidden">

      {/* ═══════════════ HERO ═══════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-24 px-4 overflow-hidden">

        {/* Atmospheric background layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-5%,rgba(168,41,78,0.2)_0%,transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_80%,rgba(107,21,48,0.12)_0%,transparent_60%)] pointer-events-none" />

        {/* Floating orbs */}
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full pointer-events-none -top-60 -left-60"
          style={{ background: "radial-gradient(circle, rgba(168,41,78,0.07) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none -bottom-40 -right-40"
          style={{ background: "radial-gradient(circle, rgba(201,131,106,0.06) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <Particle key={i} style={{
            left: `${8 + i * 8}%`,
            bottom: `${10 + (i % 4) * 12}%`,
            "--dur": `${6 + (i % 5)}s`,
            "--delay": `${(i * 0.7) % 5}s`,
            "--drift": `${(i % 3 - 1) * 30}px`,
            opacity: 0,
          } as React.CSSProperties} />
        ))}

        {/* Content — parallax */}
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 flex flex-col items-center text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 flex items-center gap-2 glass px-5 py-2.5 rounded-full border-gold-glow"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="font-body text-[11px] font-medium text-silver-300 tracking-[0.3em] uppercase">
              Doha&apos;s Most Exclusive Platform
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-center text-5xl sm:text-7xl md:text-8xl lg:text-[6rem] font-bold leading-[1.04] max-w-5xl mb-7"
          >
            Where{" "}
            <motion.span
              className="text-gold-gradient italic"
              animate={{ opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              Desire
            </motion.span>
            <br />
            Meets{" "}
            <span className="text-silver-gradient">Discretion</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-body text-silver-400 text-lg sm:text-xl max-w-xl mb-12 leading-relaxed"
          >
            Doha&apos;s premier luxury connection platform. Verified profiles, encrypted conversations,
            and experiences crafted for the most discerning tastes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <Link
              href="/signup/giver"
              className="group relative overflow-hidden flex items-center gap-2 bg-wine-gradient text-white font-body font-semibold text-base px-9 py-4 rounded-full hover:scale-105 active:scale-95 transition-transform shadow-gold-glow-sm"
            >
              <Crown className="w-4 h-4" />
              Join as Pleasure Giver
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/browse"
              className="flex items-center gap-2 glass border-gold-glow text-silver-200 font-body font-semibold text-base px-9 py-4 rounded-full hover:text-gold-300 hover:border-gold-400/50 transition-all"
            >
              Explore Profiles
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-5 w-full max-w-3xl"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -3 }}
                className="glass rounded-2xl p-5 text-center cursor-default"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                <p className="font-display text-3xl font-bold text-gold-gradient mb-1">{stat.value}</p>
                <p className="font-body text-xs text-silver-500 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════ PROFILE PREVIEW ═══════════════ */}
      <section className="py-16 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-body text-gold-500 text-xs uppercase tracking-[0.3em] font-medium mb-3">Featured Givers</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-silver-100 mb-3">
              Meet the <span className="text-gold-gradient italic">Elite</span>
            </h2>
            <p className="font-body text-silver-500 max-w-md mx-auto">Verified. Extraordinary. Discreet. Available across Doha.</p>
          </motion.div>

          <div className="flex gap-6 justify-center flex-wrap">
            {profilePreviews.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 40, rotate: i === 1 ? 0 : i === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: i === 1 ? 0 : i === 0 ? -1.5 : 1.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, rotate: 0, scale: 1.03 }}
                className="relative w-56 rounded-3xl overflow-hidden shadow-glass-lg group cursor-pointer"
              >
                <div className="relative h-72">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Veil gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080208] via-transparent to-transparent" />
                  {/* Name */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-display text-lg font-bold text-white">{p.name}, {p.age}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Shield className="w-3 h-3 text-gold-400" />
                      <span className="font-body text-xs text-gold-300">Verified</span>
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-wine-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link href="/browse" className="inline-flex items-center gap-2 font-body text-gold-400 hover:text-gold-300 transition-colors font-medium">
              View all profiles <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ FEATURES ═══════════════ */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(168,41,78,0.07)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-body text-gold-500 text-xs uppercase tracking-[0.3em] font-medium mb-3">Why Choose Us</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-silver-100 mb-4">
              Built for the <span className="text-gold-gradient italic">Discerning</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <GlassCard key={f.title} className="p-7" glow delay={i * 0.08}>
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-5">
                  <f.icon className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-silver-100 mb-3 italic">{f.title}</h3>
                <p className="font-body text-silver-500 text-sm leading-relaxed">{f.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ HOW IT WORKS ═══════════════ */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(107,21,48,0.1)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-gold-500 text-xs uppercase tracking-[0.3em] font-medium mb-3">Simple Process</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-silver-100 mb-4">
              Three Steps to <span className="text-gold-gradient italic">Bliss</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { num: "01", title: "Create Your Account", desc: "Sign up as a Pleasure Giver or Client in minutes with our seamless, private onboarding." },
              { num: "02", title: "Explore & Connect",   desc: "Browse verified profiles, save favourites, and reach out through encrypted private messaging." },
              { num: "03", title: "Experience Bliss",   desc: "Set terms, meet discreetly, and create experiences that linger long after the night ends." },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.18 }}
                className="text-center"
              >
                <div className="relative inline-block mb-7">
                  <motion.div
                    className="w-20 h-20 rounded-full gold-border-animated flex items-center justify-center mx-auto"
                    animate={{ boxShadow: ["0 0 0px rgba(201,72,106,0)", "0 0 30px rgba(201,72,106,0.35)", "0 0 0px rgba(201,72,106,0)"] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
                  >
                    <span className="font-display text-2xl font-bold text-gold-gradient">{step.num}</span>
                  </motion.div>
                </div>
                <h3 className="font-display text-xl font-semibold text-silver-100 mb-3 italic">{step.title}</h3>
                <p className="font-body text-silver-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="text-center mt-14">
            <Link href="/signup" className="inline-flex items-center gap-2 bg-wine-gradient text-white font-body font-semibold px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-gold-glow-sm">
              Begin Your Journey <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="font-body text-gold-500 text-xs uppercase tracking-[0.3em] font-medium mb-3">Member Stories</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-silver-100">
              Trusted by <span className="text-gold-gradient italic">Thousands</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <GlassCard key={t.name} className="p-7" delay={i * 0.12}>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="font-body text-silver-300 text-base leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-display font-semibold text-silver-100">{t.name}</p>
                  <p className="font-body text-xs text-gold-500 mt-0.5">{t.role}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PREMIUM CTA ═══════════════ */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="liquid-glass rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden"
          >
            {/* Background gradient pulse */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(168,41,78,0.1) 0%, transparent 70%)" }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <div className="relative z-10">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block mb-6"
              >
                <Crown className="w-14 h-14 text-gold-400 mx-auto drop-shadow-[0_0_12px_rgba(201,72,106,0.6)]" />
              </motion.div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-silver-100 mb-5 italic">
                Your Next Chapter Awaits
              </h2>
              <p className="font-body text-silver-400 max-w-lg mx-auto mb-10 text-lg leading-relaxed">
                Join thousands of discerning members who have already discovered Doha&apos;s finest
                connection experience. Discreet. Verified. Extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup/giver" className="group relative overflow-hidden flex items-center justify-center gap-2 bg-wine-gradient text-white font-body font-semibold px-9 py-4 rounded-full hover:scale-105 active:scale-95 transition-transform shadow-gold-glow">
                  <Crown className="w-4 h-4" /> I&apos;m a Pleasure Giver
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link href="/signup/client" className="flex items-center justify-center gap-2 glass border-gold-glow text-silver-200 font-body font-semibold px-9 py-4 rounded-full hover:text-gold-300 transition-all">
                  I&apos;m a Client <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
