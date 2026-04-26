import { player } from "@/content/player";
import { site } from "@/lib/site";

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: player.name,
    alternateName: player.brand,
    url: site.url,
    image: `${site.url}${site.ogImage}`,
    jobTitle: "Footballer (Attacking Midfielder)",
    nationality: player.nationality,
    height: player.height,
    weight: player.weight,
    sameAs: [
      player.socials.instagram,
      player.socials.youtube,
      player.socials.tiktok,
    ].filter(Boolean),
    knowsAbout: [
      "Football",
      "Attacking midfielder",
      "Youth football",
      "Pakistan football",
    ],
    description: player.bio,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
