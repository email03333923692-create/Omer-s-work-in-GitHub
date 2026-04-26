import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { MediaGrid } from "@/components/media/MediaGrid";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Match highlights, training cuts, skills, interviews, and photography — Abdul Ahad Omer.",
};

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Highlights · Training · Photography"
        title="Media"
        subtitle="Match cuts, training reels, photo collections, and interview clips. Filter to find what you need."
      />
      <section className="section">
        <div className="container-page">
          <MediaGrid />
        </div>
      </section>
    </>
  );
}
