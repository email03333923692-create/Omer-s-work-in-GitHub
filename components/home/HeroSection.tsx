"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { player } from "@/content/player";
import { CTAButton } from "../shared/CTAButton";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div
        className="absolute inset-0 mask-fade-b opacity-[0.07]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1487466365202-1afdb86c764e?auto=format&fit=crop&w=2400&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="container-page relative grid min-h-[88vh] items-center gap-12 py-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            ATTACKING MIDFIELDER · NO. 10 · OPEN TO TRIALS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="display-h1 mt-4"
          >
            <span className="block gradient-text">ABDUL AHAD</span>
            <span className="block text-white">OMER</span>
            <span className="mt-3 block font-display text-3xl tracking-[0.25em] text-electric sm:text-4xl">
              @10
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-white/70"
          >
            {player.tagline} — A creative attacking midfielder building a serious
            career in football. Vision-first football. Decisions under pressure.
            The badge, then the trophy.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <CTAButton href="/player-profile" variant="primary">
              View Player Profile
            </CTAButton>
            <CTAButton href="/media" variant="neon">
              Watch Highlights
            </CTAButton>
            <CTAButton href="/press-kit" variant="ghost">
              Download CV
            </CTAButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.25em] text-white/40"
          >
            <span>● {player.position}</span>
            <span>● {player.foot}-footed</span>
            <span>● {player.height}</span>
            <span>● {player.nationality}</span>
            <span>● {player.age} yrs</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <PlayerHeroCard />
        </motion.div>
      </div>
    </section>
  );
}

function PlayerHeroCard() {
  return (
    <div className="relative mx-auto aspect-[3/4] w-full max-w-md">
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-electric/40 via-electric/0 to-neon/40 blur-2xl" />
      <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-ink-900">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(5,7,10,0.1) 0%, rgba(5,7,10,0.85) 100%), url(https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=1200&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative flex h-full flex-col justify-between p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">
                Player Card
              </p>
              <p className="mt-1 font-display text-xl tracking-wider">
                ABDUL AHAD OMER
              </p>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-electric/40 bg-ink-950 shadow-glow">
              <span className="font-display text-3xl text-electric">10</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              { k: "POS", v: "AM" },
              { k: "FOOT", v: "R" },
              { k: "AGE", v: "17" },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-xl border border-white/10 bg-white/[0.04] py-3"
              >
                <p className="font-display text-2xl tracking-tight">{s.v}</p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                  {s.k}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <Link
              href="/stats"
              className="text-xs uppercase tracking-[0.25em] text-white/70 hover:text-white"
            >
              Stats →
            </Link>
            <span className="rounded-full border border-neon/30 bg-neon/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-neon">
              Available
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
