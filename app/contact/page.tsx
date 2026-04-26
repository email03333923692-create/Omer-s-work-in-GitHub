import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { player } from "@/content/player";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Open a conversation with Abdul Ahad Omer — sponsorships, academy intake, scouting, media, or general inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Open a conversation"
        title="Contact"
        subtitle="Sponsors, academies, scouts, and media — drop a message and we'll be in touch."
      />

      <section className="section">
        <div className="container-page grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <InquiryForm showPhone />
          </div>

          <aside className="lg:col-span-2 space-y-6">
            <div className="glass-strong p-6">
              <p className="eyebrow">Direct</p>
              <h3 className="font-display text-2xl mt-2">Email</h3>
              <a
                href={`mailto:${player.socials.email}`}
                className="mt-2 block text-electric hover:text-electric-400"
              >
                {player.socials.email}
              </a>
            </div>

            <div className="glass-strong p-6">
              <p className="eyebrow">Social</p>
              <h3 className="font-display text-2xl mt-2">Follow & DM</h3>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <a
                  href={player.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/80 hover:text-white"
                >
                  Instagram → @abdulahadomer.10
                </a>
                <a
                  href={player.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/80 hover:text-white"
                >
                  YouTube → @abdulahadomer10
                </a>
                {player.socials.tiktok && (
                  <a
                    href={player.socials.tiktok}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/80 hover:text-white"
                  >
                    TikTok → @abdulahadomer.10
                  </a>
                )}
              </div>
            </div>

            <div className="glass-strong p-6">
              <p className="eyebrow">Based in</p>
              <h3 className="font-display text-2xl mt-2">Lahore, Pakistan</h3>
              <p className="mt-2 text-sm text-white/65">
                Available to travel internationally for trials, showcases, and
                partnership work.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
