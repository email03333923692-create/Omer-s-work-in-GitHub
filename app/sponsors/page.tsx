import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { sponsorTiers, sponsorValueProps } from "@/content/sponsors";

export const metadata: Metadata = {
  title: "Sponsors & Brands",
  description:
    "Partner with Abdul Ahad Omer — sponsor opportunities, brand integration tiers, and audience value.",
};

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Brand Partnerships"
        title="Sponsors"
        subtitle="Get on board early. Build a long-term brand story alongside an emerging football career."
      />

      <section className="section">
        <div className="container-page">
          <SectionHeader
            eyebrow="Why partner"
            title="The value on offer"
            subtitle="Targeted reach, original content, and authentic on-field integration — built for brands that want to win with football."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {sponsorValueProps.map((v, i) => (
              <div key={v.title} className="glass-strong p-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-electric/40 bg-electric/10 font-display text-electric">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl tracking-wide">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">
                      {v.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <SectionHeader
            eyebrow="Partnership Tiers"
            title="How we work together"
            subtitle="Open to bespoke deals — these tiers are starting points, not boxes."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {sponsorTiers.map((t, i) => (
              <div
                key={t.tier}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.06]"
              >
                <p className="font-display text-3xl tracking-tight text-electric group-hover:text-neon transition-colors">
                  0{i + 1}
                </p>
                <h3 className="mt-3 font-display text-xl tracking-wide">
                  {t.tier}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page max-w-3xl">
          <InquiryForm
            defaultType="sponsor"
            hideTypePicker
            title="Sponsor inquiry"
            subtitle="Tell us about the brand and the campaign."
          />
        </div>
      </section>
    </>
  );
}
