"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  delay?: number;
}

export function GlassCard({ children, className, hover = true, glow = false, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -5, scale: 1.015 } : undefined}
      className={cn(
        "liquid-glass rounded-2xl transition-all duration-500 relative overflow-hidden",
        glow && "hover:shadow-gold-glow hover:border-gold-500/30",
        className
      )}
    >
      {/* Subtle inner glow top edge */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
      {children}
    </motion.div>
  );
}
