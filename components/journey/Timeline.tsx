"use client";

import { motion } from "framer-motion";
import { journey } from "@/content/journey";

const typeBadge: Record<string, string> = {
  club: "border-electric/40 text-electric bg-electric/10",
  trial: "border-neon/40 text-neon bg-neon/10",
  milestone: "border-yellow-400/40 text-yellow-300 bg-yellow-400/10",
  training: "border-purple-400/40 text-purple-300 bg-purple-400/10",
  academy: "border-pink-400/40 text-pink-300 bg-pink-400/10",
};

export function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-electric/40 via-white/10 to-neon/40 sm:left-1/2 sm:-translate-x-1/2" />
      <ul className="space-y-10">
        {journey.map((j, i) => {
          const right = i % 2 === 1;
          return (
            <motion.li
              key={j.year + j.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
              className="relative grid sm:grid-cols-2 sm:gap-12"
            >
              <span className="absolute left-4 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-electric shadow-glow sm:left-1/2" />
              <div
                className={`pl-12 sm:pl-0 ${
                  right ? "sm:col-start-2 sm:pl-12" : "sm:text-right sm:pr-12"
                }`}
              >
                <p className="font-display text-3xl tracking-tight text-electric">
                  {j.year}
                </p>
                <p className="mt-2 font-display text-2xl tracking-wider">
                  {j.title}
                </p>
                <p className="mt-1 text-sm text-white/60">{j.club}</p>
                <span
                  className={`mt-3 inline-block rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.25em] ${typeBadge[j.type]}`}
                >
                  {j.type}
                </span>
                <p className="mt-4 max-w-md text-sm text-white/70 sm:ml-auto">
                  {j.description}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
