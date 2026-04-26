import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { BlogMeta } from "@/types";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getBlogPost(slug: string): {
  meta: BlogMeta;
  content: string;
} | null {
  const candidates = [
    path.join(BLOG_DIR, `${slug}.mdx`),
    path.join(BLOG_DIR, `${slug}.md`),
  ];
  const file = candidates.find((p) => fs.existsSync(p));
  if (!file) return null;

  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);

  const meta: BlogMeta = {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    date: data.date ?? new Date().toISOString(),
    author: data.author ?? "Abdul Ahad Omer",
    cover: data.cover ?? "",
    tags: data.tags ?? [],
    readingTime: data.readingTime ?? "5 min read",
  };

  return { meta, content };
}

export function getAllBlogMeta(): BlogMeta[] {
  return getBlogSlugs()
    .map((slug) => getBlogPost(slug)?.meta)
    .filter((m): m is BlogMeta => Boolean(m))
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
