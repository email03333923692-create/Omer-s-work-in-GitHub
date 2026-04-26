export const site = {
  name: "Abdul Ahad Omer | @10",
  shortName: "Abdul Ahad Omer",
  description:
    "Official portfolio of Abdul Ahad Omer — attacking midfielder, No. 10. Player profile, stats, highlights, blog, and contact for academies, scouts, and sponsors.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://abdulahadomer.com",
  twitter: "@abdulahadomer10",
  ogImage: "/og.svg",
  navigation: [
    { href: "/", label: "Home" },
    { href: "/player-profile", label: "Profile" },
    { href: "/journey", label: "Journey" },
    { href: "/stats", label: "Stats" },
    { href: "/media", label: "Media" },
    { href: "/training", label: "Training" },
    { href: "/blog", label: "Blog" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/academies", label: "Academies" },
    { href: "/press-kit", label: "Press Kit" },
    { href: "/contact", label: "Contact" },
  ],
};
