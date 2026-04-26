# Abdul Ahad Omer · @10 — Football Portfolio

Premium player portfolio, digital CV, and brand foundation for **Abdul Ahad Omer**, attacking midfielder (No. 10).

A modern, cinematic Next.js site built to function as:

- A **player portfolio** for scouts, academies, and brands
- A **stats dashboard** with season-by-season output and attribute analysis
- A **media platform** for highlights, training cuts, and photography
- A **blog** for tactical and youth-football writing
- A **press kit** with downloadable CV and brand assets
- A **lead-capture surface** for sponsors, academies, and media

## Tech stack

| Area | Stack |
| --- | --- |
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS · custom design tokens |
| Animation | Framer Motion |
| Charts | Recharts |
| Content | TS data + MDX (blog) |
| Forms | React Server Actions + Zod |
| Database | Prisma + SQLite |
| SEO | Next.js Metadata API · sitemap · robots · JSON-LD |

## Routes

`/` · `/player-profile` · `/journey` · `/stats` · `/media` · `/training` · `/blog` · `/blog/[slug]` · `/sponsors` · `/academies` · `/contact` · `/press-kit` · `/about`

Plus: `/sitemap.xml` · `/robots.txt` · `/api/inquiry` (POST).

## Project structure

```
app/                  Next.js App Router pages, layouts, actions, API
components/           UI components grouped by domain
  layout/             Navbar, Footer
  shared/             CTAButton, StatCard, AnimatedCounter, etc.
  home/               Homepage sections
  profile/            Player profile blocks
  journey/            Timeline
  stats/              StatsTable, charts
  media/              MediaGrid, FilterTabs
  blog/               BlogCard, MDXContent
  forms/              InquiryForm (server-action driven)
content/              Typed data + MDX blog
  blog/*.mdx          Blog posts
lib/                  Utilities (cn, db, blog, site, validators)
prisma/               schema.prisma + dev.db
public/               cv.txt, og.svg, favicon.svg
types/                Shared TypeScript types
```

## Local development

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env

# 3. Provision the SQLite database
npm run db:push

# 4. Start the dev server
npm run dev
```

Open http://localhost:3000.

## Brand identity

- **Ink Black** `#05070A`
- **Electric Blue** `#1E90FF`
- **Neon Green** `#39FF7A`
- **White** `#FFFFFF`

Type: **Bebas Neue** (display) · **Inter** (UI) · **JetBrains Mono** (numbers).

## License

All content © Abdul Ahad Omer. Code released under MIT for the project author's own use.
