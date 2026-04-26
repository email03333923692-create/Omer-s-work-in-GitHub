"use client";

import { motion } from "framer-motion";
import { player } from "@/content/player";
import { SectionHeader } from "../shared/SectionHeader";

const tiles = [
  {
    label: "Instagram",
    handle: "@abdulahadomer.10",
    href: player.socials.instagram,
    color: "from-pink-500/30 via-rose-500/10 to-transparent",
    description: "Match-day, training, and lifestyle reels.",
  },
  {
    label: "YouTube",
    handle: "@abdulahadomer10",
    href: player.socials.youtube,
    color: "from-red-500/30 via-red-500/10 to-transparent",
    description: "Long-form match cuts, vlogs, and breakdowns.",
  },
  {
    label: "TikTok",
    handle: "@abdulahadomer.10",
    href: player.socials.tiktok ?? "#",
    color: "from-cyan-400/30 via-cyan-400/10 to-transparent",
    description: "Quick skill cuts and behind-the-scenes.",
  },
];

export function SocialFeed() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeader
          eyebrow="Follow the journey"
          title="Social Hub"
          subtitle="Daily content across Instagram, YouTube, and TikTok — match cuts, training breakdowns, and behind the scenes."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {tiles.map((t, i) => (
            <motion.a
              key={t.label}
              href={t.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.05]"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${t.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="relative">
                <p className="eyebrow">{t.label}</p>
                <p className="mt-3 font-display text-3xl tracking-wider">
                  {t.handle}
                </p>
                <p className="mt-3 text-sm text-white/60">{t.description}</p>
                <p className="mt-8 text-xs uppercase tracking-[0.25em] text-white/50 group-hover:text-white">
                  Open profile →
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
