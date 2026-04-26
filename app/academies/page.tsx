import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { CTAButton } from "@/components/shared/CTAButton";
import { offerings, scoutSummary } from "@/content/academies";

export const metadata: Metadata = {
  title: "Academies & Scouts",
  description:
    "For academies, clubs, and scouts — a quick-scan summary, full match footage, and trial availability.",
};

export default function AcademiesPage() {
  return (
    <>
      <PageHero
        eyebrow="For Academies, Clubs & Scouts"
        title="Discovery"
        subtitle="A quick-scan scouting summary, supporting media, and direct line to discuss trials and intake."
      >
        <div className="flex flex-wrap gap-3">
          <CTAButton href="/press-kit" variant="primary">
            Download Profile (PDF)
          </CTAButton>
          <CTAButton href="/media" variant="ghost">
            Watch Highlights
          </CTAButton>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 glass-strong p-6 sm:p-8">
            <p className="eyebrow">Scout Summary</p>
            <h3 className="font-display text-3xl mt-2">At a glance</h3>
            <dl className="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {scoutSummary.map((s) => (
                <div key={s.label} className="border-l border-white/10 pl-4">
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                    {s.label}
                  </dt>
                  <dd className="mt-1 text-sm text-white/85 leading-relaxed">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="glass-strong p-6 sm:p-8">
            <p className="eyebrow">Available on Request</p>
            <h3 className="font-display text-3xl mt-2">What we provide</h3>
            <ul className="mt-6 space-y-4">
              {offerings.map((o) => (
                <li key={o.title}>
                  <p className="font-semibold">{o.title}</p>
                  <p className="mt-1 text-sm text-white/65">{o.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page max-w-3xl">
          <SectionHeader
            eyebrow="Get in touch"
            title="Trial & intake inquiries"
            subtitle="Send a brief and we'll respond within 48 hours."
            align="center"
          />
          <InquiryForm
            defaultType="academy"
            hideTypePicker
            showPhone
            title="Academy / scout inquiry"
            subtitle="Tell us about the club or programme."
          />
        </div>
      </section>
    </>
  );
}
