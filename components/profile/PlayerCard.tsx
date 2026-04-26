import { player } from "@/content/player";

const meta: Array<[label: string, value: string]> = [
  ["Position", "Attacking Midfielder"],
  ["Secondary", "CM · LW"],
  ["Foot", "Right (left 7/10)"],
  ["Height", "1.78 m"],
  ["Weight", "68 kg"],
  ["Age", "17"],
  ["Nationality", "Pakistani"],
  ["City", "Lahore, Pakistan"],
  ["Languages", "English · Urdu · Punjabi"],
  ["Current club", "Independent"],
  ["Availability", "Open to trials"],
];

export function PlayerCard() {
  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="relative lg:col-span-5">
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-electric/30 via-transparent to-neon/30 blur-2xl" />
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 bg-ink-900">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(5,7,10,0) 50%, rgba(5,7,10,0.85) 100%), url(https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=1400&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative flex h-full flex-col justify-end p-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">
              Player Card · 2025
            </p>
            <p className="mt-2 font-display text-4xl leading-none tracking-wider">
              ABDUL AHAD<br />OMER
            </p>
            <div className="mt-6 flex items-center justify-between">
              <span className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.25em]">
                {player.position}
              </span>
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-electric/40 bg-ink-950 shadow-glow">
                <span className="font-display text-3xl text-electric">10</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="glass-strong p-6 sm:p-8">
          <p className="eyebrow">Player Bio</p>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/80">
            {player.bio}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
            {meta.map(([k, v]) => (
              <div key={k} className="border-l border-white/10 pl-3">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                  {k}
                </p>
                <p className="mt-1 text-sm font-medium">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
