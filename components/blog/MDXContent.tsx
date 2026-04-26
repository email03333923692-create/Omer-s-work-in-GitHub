import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  h1: (p: any) => (
    <h1 className="font-display text-4xl tracking-wide mt-12 mb-4" {...p} />
  ),
  h2: (p: any) => (
    <h2 className="font-display text-3xl tracking-wide mt-12 mb-3" {...p} />
  ),
  h3: (p: any) => (
    <h3 className="font-display text-2xl tracking-wide mt-8 mb-3" {...p} />
  ),
  p: (p: any) => (
    <p className="text-base leading-relaxed text-white/80 my-5" {...p} />
  ),
  ul: (p: any) => (
    <ul className="list-disc pl-6 space-y-2 my-5 text-white/80" {...p} />
  ),
  ol: (p: any) => (
    <ol className="list-decimal pl-6 space-y-2 my-5 text-white/80" {...p} />
  ),
  li: (p: any) => <li className="leading-relaxed" {...p} />,
  blockquote: (p: any) => (
    <blockquote
      className="my-8 border-l-2 border-electric pl-5 italic text-white/85 text-lg"
      {...p}
    />
  ),
  a: (p: any) => (
    <a
      className="text-electric underline-offset-4 hover:underline"
      target="_blank"
      rel="noreferrer"
      {...p}
    />
  ),
  strong: (p: any) => (
    <strong className="text-white font-semibold" {...p} />
  ),
  hr: () => <hr className="my-10 border-white/10" />,
  code: (p: any) => (
    <code
      className="rounded bg-ink-800 px-1.5 py-0.5 font-mono text-[13px] text-neon"
      {...p}
    />
  ),
};

export function MDXContent({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />;
}
