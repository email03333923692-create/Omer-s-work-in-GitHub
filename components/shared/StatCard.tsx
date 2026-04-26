"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";

type Props = {
  label: string;
  value: number;
  suffix?: string;
  accent?: "electric" | "neon";
};

export function StatCard({ label, value, suffix, accent = "electric" }: Props) {
  const accentClass =
    accent === "neon"
      ? "from-neon/30 to-transparent"
      : "from-electric/30 to-transparent";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04]"
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accentClass} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div className="relative">
        <p className="font-display text-5xl tracking-tight">
          <AnimatedCounter value={value} suffix={suffix} />
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/50">
          {label}
        </p>
      </div>
    </motion.div>
  );
}
