import Link from "next/link";
import { CTAButton } from "../shared/CTAButton";

export function CTASection() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900 p-10 sm:p-16">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute inset-0 bg-radial-glow" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Scouts · Academies · Brands</p>
              <h2 className="display-h2 mt-3 gradient-text">
                Ready to back the next No. 10?
              </h2>
              <p className="mt-4 max-w-xl text-base sm:text-lg text-white/70">
                Available for trials, academy intake, and showcase tournaments.
                Sponsors welcome to open a conversation about long-term
                partnerships.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <CTAButton href="/contact" variant="primary">
                Open a conversation
              </CTAButton>
              <CTAButton href="/press-kit" variant="neon">
                Press kit & CV
              </CTAButton>
              <Link
                href="/sponsors"
                className="text-xs uppercase tracking-[0.25em] text-white/60 hover:text-white"
              >
                Sponsor opportunities →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
