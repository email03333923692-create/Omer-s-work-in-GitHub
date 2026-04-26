import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { BlogCard } from "@/components/blog/BlogCard";
import { getAllBlogMeta } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from inside the journey — youth football, the No. 10 mindset, training structure, and more.",
};

export default function BlogIndexPage() {
  const posts = getAllBlogMeta();

  return (
    <>
      <PageHero
        eyebrow="Notes from inside the journey"
        title="Blog"
        subtitle="Tactics, training, mindset, and the realities of youth football. Written from the pitch."
      />
      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
