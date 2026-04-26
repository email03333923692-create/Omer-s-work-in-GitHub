import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "neon" | "ghost";

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
};

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  neon: "btn-neon",
  ghost: "btn-ghost",
};

export function CTAButton({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  external,
  type = "button",
}: Props) {
  const cls = cn(variantClass[variant], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noreferrer" className={cls}>
          {children}
          <span aria-hidden>→</span>
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
        <span aria-hidden>→</span>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
      <span aria-hidden>→</span>
    </button>
  );
}
