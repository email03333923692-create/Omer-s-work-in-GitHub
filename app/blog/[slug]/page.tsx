import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/blog/MDXContent";
import { getAllBlogMeta, getBlogPost, getBlogSlugs } from "@/lib/blog";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.meta.title,
    description: post.meta.excerpt,
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt,
      images: post.meta.cover ? [post.meta.cover] : undefined,
      type: "article",
      publishedTime: post.meta.date,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const all = getAllBlogMeta();
  const related = all.filter((p) => p.slug !== params.slug).slice(0, 3);

  return (
    <article>
      <header className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(5,7,10,0.4) 0%, rgba(5,7,10,0.95) 100%), url(${post.meta.cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container-page relative py-24">
          <Link
            href="/blog"
            className="text-xs uppercase tracking-[0.25em] text-white/60 hover:text-white"
          >
            ← Back to blog
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.meta.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/80 backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>
          <h1 className="display-h1 mt-6 max-w-4xl">{post.meta.title}</h1>
          <p className="mt-6 text-sm uppercase tracking-[0.25em] text-white/60">
            By {post.meta.author} ·{" "}
            {new Date(post.meta.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            · {post.meta.readingTime}
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container-page max-w-3xl">
          <MDXContent source={post.content} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="section pt-0">
          <div className="container-page">
            <p className="eyebrow">Read next</p>
            <h2 className="display-h2 mt-3 gradient-text">More from the journey</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-2xl border border-white/10 bg-ink-900 p-6 transition-colors hover:bg-white/[0.04]"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                    {new Date(p.date).toLocaleDateString()}
                  </p>
                  <h3 className="mt-3 font-display text-xl leading-tight tracking-wide group-hover:text-electric">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
