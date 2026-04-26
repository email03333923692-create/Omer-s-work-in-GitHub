import Link from "next/link";
import type { BlogMeta } from "@/types";

export function BlogCard({ post }: { post: BlogMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900 transition-colors hover:border-white/20"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `url(${post.cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/80 backdrop-blur-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.25em] text-white/50">
          {new Date(post.date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}{" "}
          · {post.readingTime}
        </p>
        <h3 className="mt-3 font-display text-2xl tracking-wide leading-tight group-hover:text-electric transition-colors">
          {post.title}
        </h3>
        <p className="mt-3 text-sm text-white/60 line-clamp-2">{post.excerpt}</p>
      </div>
    </Link>
  );
}
