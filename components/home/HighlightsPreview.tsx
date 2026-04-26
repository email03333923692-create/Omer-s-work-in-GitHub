"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { media } from "@/content/media";
import { SectionHeader } from "../shared/SectionHeader";

export function HighlightsPreview() {
  const featured = media.filter((m) => m.type === "video").slice(0, 4);

  return (
    <section className="section">
      <div className="container-page">
        <div className="flex items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Match · Training · Skills"
            title="Latest Highlights"
            subtitle="Cinematic cuts of recent matches, training sessions, and skill work — produced for scouts, recruiters, and partners."
          />
          <Link
            href="/media"
            className="hidden sm:inline-flex text-xs uppercase tracking-[0.25em] text-white/60 hover:text-white"
          >
            View all media →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((m, i) => (
            <motion.a
              key={m.id}
              href={m.src}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
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
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-black/30 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:border-electric group-hover:shadow-glow">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-1 text-white"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/80 backdrop-blur-sm">
                    {m.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="font-display text-xl tracking-wide">{m.title}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/50">
                  {m.source} · {new Date(m.date).toLocaleDateString()}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
