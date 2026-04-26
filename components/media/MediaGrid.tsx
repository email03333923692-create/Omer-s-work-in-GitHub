"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { media } from "@/content/media";
import { FilterTabs } from "./FilterTabs";

const filters = [
  { value: "all", label: "All" },
  { value: "match", label: "Match" },
  { value: "training", label: "Training" },
  { value: "skills", label: "Skills" },
  { value: "interview", label: "Interview" },
  { value: "photo", label: "Photos" },
];

export function MediaGrid() {
  const [filter, setFilter] = useState("all");

  const items = useMemo(
    () => (filter === "all" ? media : media.filter((m) => m.category === filter)),
    [filter]
  );

  return (
    <div>
      <FilterTabs options={filters} value={filter} onChange={setFilter} />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((m, i) => (
          <motion.a
            key={m.id}
            href={m.src}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900"
          >
            <div className="relative aspect-video overflow-hidden">
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${m.thumbnail})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
              {m.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black/30 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:border-electric group-hover:shadow-glow">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-1 text-white"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
              <div className="absolute left-3 top-3 flex gap-2">
                <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/80 backdrop-blur-sm">
                  {m.category}
                </span>
                {m.source && (
                  <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/60 backdrop-blur-sm">
                    {m.source}
                  </span>
                )}
              </div>
            </div>
            <div className="p-5">
              <p className="font-display text-lg tracking-wide leading-tight">
                {m.title}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/50">
                {new Date(m.date).toLocaleDateString()}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
