"use client";

import { motion } from "framer-motion";
import { player } from "@/content/player";
import { SectionHeader } from "../shared/SectionHeader";

export function StrengthsBlock() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeader
          eyebrow="Player Profile"
          title="Built for the modern game"
          subtitle="A press-resistant playmaker with the technical floor of a No. 8 and the creative ceiling of a No. 10."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {player.strengths.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04]"
            >
              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-electric/40 bg-electric/10 text-xs font-bold text-electric">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-2xl tracking-wide">{s}</p>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
