"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled
          ? "border-b border-white/10 bg-ink-950/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-electric/40 bg-ink-900 shadow-glow">
            <span className="font-display text-2xl text-electric leading-none">
              10
            </span>
            <span className="absolute -inset-0.5 rounded-full border border-electric/20 group-hover:border-electric/60 transition-colors" />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-xl tracking-wider text-white">
              ABDUL AHAD OMER
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
              Footballer · No. 10
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {site.navigation.slice(0, 8).map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors",
                  active ? "text-white" : "text-white/60 hover:text-white"
                )}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute inset-x-2 -bottom-0.5 h-px bg-electric shadow-glow"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact" className="btn-primary text-xs">
            Book a trial
          </Link>
        </div>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-5 bg-white transition-transform",
                open && "translate-y-1.5 rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-2.5 h-0.5 w-5 bg-white transition-transform",
                open && "-translate-y-1 -rotate-45"
              )}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden border-t border-white/10 bg-ink-950/95 backdrop-blur-xl"
          >
            <div className="container-page grid gap-1 py-6">
              {site.navigation.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-wide transition-colors",
                      active
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link href="/contact" className="btn-primary mt-3 w-full text-xs">
                Book a trial
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
