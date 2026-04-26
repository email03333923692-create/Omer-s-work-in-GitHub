import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="font-display text-[140px] leading-none tracking-tight gradient-text sm:text-[220px]">
        404
      </p>
      <p className="eyebrow">Off-target</p>
      <h1 className="display-h2 mt-3">This pass didn't connect.</h1>
      <p className="mt-4 max-w-md text-white/60">
        The page you're looking for is offside. Let's reset and play out from
        the back.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to home <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
