import Link from "next/link";
import { site } from "@/lib/site";
import { player } from "@/content/player";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950">
      <div className="container-page grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-electric/40 bg-ink-900 shadow-glow">
              <span className="font-display text-2xl text-electric leading-none">
                10
              </span>
            </div>
            <div>
              <p className="font-display text-2xl tracking-wider">
                ABDUL AHAD OMER
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                Footballer · Attacking Midfielder
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm text-white/60">
            {player.bio}
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={player.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost text-xs"
            >
              Instagram
            </a>
            <a
              href={player.socials.youtube}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost text-xs"
            >
              YouTube
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2 text-sm text-white/70">
            {site.navigation.slice(0, 7).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Work with us</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link href="/sponsors" className="hover:text-white">
                Sponsors & Brands
              </Link>
            </li>
            <li>
              <Link href="/academies" className="hover:text-white">
                Academies & Scouts
              </Link>
            </li>
            <li>
              <Link href="/press-kit" className="hover:text-white">
                Press Kit
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
          <p className="mt-6 eyebrow mb-2">Direct</p>
          <a
            href={`mailto:${player.socials.email}`}
            className="text-sm text-white/80 hover:text-white"
          >
            {player.socials.email}
          </a>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-page flex flex-col items-start justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.shortName}. All rights reserved.
          </p>
          <p>Built for the next chapter. Designed in pursuit of the badge.</p>
        </div>
      </div>
    </footer>
  );
}
