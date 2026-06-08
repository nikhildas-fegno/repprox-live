"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { primaryNav, secondaryNav } from "@/data/nav";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/container";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [productOpen, setProductOpen] = React.useState(false);

  // Reset open menus on navigation. Adjusting state during render (rather than
  // in an effect) avoids the extra commit-then-rerender cascade — see
  // https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
  const [lastPathname, setLastPathname] = React.useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
    setProductOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md supports-[backdrop-filter]:bg-paper/70">
      <Container className="flex h-18 items-center justify-between gap-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded-sm"
        >
          <span className="flex size-9 items-center justify-center rounded-sm border border-ink/20 bg-ink text-paper transition-colors group-hover:border-accent group-hover:bg-accent">
            <span className="font-mono text-sm font-semibold">X</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-[#0f172a] font-bold tracking-tight">RepPro X</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-soft">
              Field Force Automation
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >
              <button
                type="button"
                aria-expanded={productOpen}
                aria-haspopup="true"
                onClick={() => setProductOpen((open) => !open)}
                className="flex items-center gap-1.5 rounded-sm px-4 py-2.5 font-mono text-[13px] uppercase tracking-[0.1em] text-ink-soft transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                {group.label}
                <ChevronDown
                  aria-hidden="true"
                  className={cn("size-3.5 transition-transform duration-200", productOpen && "rotate-180")}
                />
              </button>
              <AnimatePresence>
                {productOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                    className="absolute left-0 top-full w-80 overflow-hidden rounded-md border border-ink/12 bg-card shadow-xl shadow-ink/[0.06]"
                  >
                    <ul role="menu" className="p-2">
                      {group.items.map((item) => (
                        <li key={item.href} role="none">
                          <Link
                            role="menuitem"
                            href={item.href}
                            className="block rounded-sm px-4 py-3 transition-colors hover:bg-paper-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                          >
                            <span className="block font-display text-base font-semibold">{item.label}</span>
                            {item.description && (
                              <span className="mt-0.5 block text-[13px] leading-snug text-muted-foreground">
                                {item.description}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          {secondaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-sm px-4 py-2.5 font-mono text-[13px] uppercase tracking-[0.1em] transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
                pathname === link.href ? "text-ink" : "text-ink-soft",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="ghost" size="sm">
            <Link href="/contact">Sign in</Link>
          </Button>
          <Button asChild variant="accent" size="sm">
            <Link href="/contact">
              Request a demo
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="flex size-11 items-center justify-center rounded-sm border border-ink/15 text-ink lg:hidden"
        >
          {mobileOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden border-t border-ink/10 bg-paper lg:hidden"
          >
            <Container>
              <nav aria-label="Mobile" className="flex flex-col gap-1 py-6">
                {primaryNav.flatMap((group) => group.items).concat(secondaryNav).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-sm px-3 py-3 font-display text-lg font-semibold transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 flex flex-col gap-3">
                  <Button asChild variant="outline">
                    <Link href="/contact">Sign in</Link>
                  </Button>
                  <Button asChild variant="accent">
                    <Link href="/contact">
                      Request a demo
                      <ArrowUpRight aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
