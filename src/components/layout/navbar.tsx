"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown, Menu, X, ShoppingBag, Truck, Navigation, ClipboardList, TrendingUp, BookOpen, Briefcase } from "lucide-react";

import { cn } from "@/lib/utils";
import { primaryNav, secondaryNav } from "@/data/nav";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/container";

const solutionIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "/solutions/sales-force-automation": ShoppingBag,
  "/solutions/distribution": Truck,
  "/solutions/route-planning": Navigation,
  "/solutions/task-survey": ClipboardList,
  "/solutions/promotion-pricing": TrendingUp,
  "/resources/blogs": BookOpen,
  "/resources/case-studies": Briefcase,
};

// Split primaryNav: Solutions stays in main flow, Resources goes after secondaryNav[0..-2]
const solutionsGroup = primaryNav.find((g) => g.label === "Solutions")!;
const resourcesGroup = primaryNav.find((g) => g.label === "Resources")!;
// secondaryNav without last item (Contact), then Contact at end
const midLinks = secondaryNav.slice(0, -1);   // Features, Industries, Pricing, About
const lastLink = secondaryNav[secondaryNav.length - 1]; // Contact

type NavGroup = typeof solutionsGroup;

function DropdownGroup({
  group,
  openGroup,
  setOpenGroup,
}: {
  group: NavGroup;
  openGroup: string | null;
  setOpenGroup: (v: string | null) => void;
}) {
  const isOpen = openGroup === group.label;
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenGroup(group.label)}
      onMouseLeave={() => setOpenGroup(null)}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setOpenGroup(isOpen ? null : group.label)}
        className={cn(
          "flex items-center gap-0.5 cursor-pointer rounded-lg pl-3.5 pr-2 py-2 text-base font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8]/30",
          isOpen ? "text-[#2A58DA]" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
        )}
      >
        {group.label}
        <ChevronDown
          aria-hidden="true"
          className={cn("size-2.5 text-slate-400 transition-transform duration-200", isOpen && "rotate-180 text-slate-600")}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.14, ease: "easeOut" }}
            className="absolute left-0 top-full w-[26rem] overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-xl shadow-slate-900/10"
          >
            <ul role="menu" className="p-2">
              {group.items.map((item) => {
                const Icon = solutionIcons[item.href];
                return (
                  <li key={item.href} role="none">
                    <Link
                      role="menuitem"
                      href={item.href}
                      className="group/item flex items-center gap-3 lg:gap-4 rounded-lg px-3 py-3.5 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8]/30"
                    >
                      {Icon && (
                        <div className="size-10 shrink-0 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 group-hover/item:bg-[#1d4ed8]/10 group-hover/item:text-[#1d4ed8] transition-colors duration-150">
                          <Icon className="size-6" />
                        </div>
                      )}
                      <div>
                        <span className="block text-[15.5px] font-semibold text-slate-800 group-hover/item:text-[#1d4ed8] transition-colors duration-150">
                          {item.label}
                        </span>
                        {item.description && (
                          <span className="mt-0.5 block text-[14px] leading-snug text-slate-400">{item.description}</span>
                        )}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openGroup, setOpenGroup] = React.useState<string | null>(null);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = React.useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const lastScrollY = React.useRef(0);
  const idleTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const openGroupRef = React.useRef<string | null>(null);

  React.useEffect(() => {
    openGroupRef.current = openGroup;
  }, [openGroup]);

  React.useEffect(() => {
    const clearIdle = () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
    const startIdle = () => {
      clearIdle();
      idleTimer.current = setTimeout(() => {
        if (window.scrollY > 60 && !mobileOpen && !openGroupRef.current) setIsVisible(false);
      }, 3000);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      if (mobileOpen) { setIsVisible(true); clearIdle(); return; }
      if (currentScrollY < 60) { setIsVisible(true); clearIdle(); }
      else if (currentScrollY > lastScrollY.current) { setIsVisible(false); clearIdle(); }
      else { setIsVisible(true); startIdle(); }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearIdle();
    };
  }, [mobileOpen]);

  const [lastPathname, setLastPathname] = React.useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
    setOpenGroup(null);
    setMobileSolutionsOpen(false);
    setMobileResourcesOpen(false);
    setIsVisible(true);
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out border-b",
        isVisible ? "translate-y-0" : "-translate-y-full",
        isScrolled
          ? "bg-white/90 backdrop-blur-lg border-slate-200/60 shadow-sm"
          : "bg-white/10 border-transparent",
      )}
    >
      <Container className="flex items-center justify-between gap-6 h-[5rem]">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8]/40 rounded-lg"
        >
          <Image src="/logo.png" alt="RepProX Logo" width={60} height={60} className="object-contain" />
          <span className="font-display text-[#1D6BD9] text-[1.25rem] lg:text-[1.5rem] font-bold tracking-tight">
            RepProX
          </span>
        </Link>

        {/* Desktop nav — order: Home | Solutions | mid links | Resources | Contact */}
        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          <Link
            href="/"
            className={cn(
              "rounded-lg px-3.5 py-2 text-base font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8]/30",
              pathname === "/" ? "text-[#2A58DA]" : "text-slate-600 hover:text-[#2A58DA]",
            )}
          >
            Home
          </Link>

          <DropdownGroup group={solutionsGroup} openGroup={openGroup} setOpenGroup={setOpenGroup} />

          {midLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3.5 py-2 text-base font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8]/30",
                pathname === link.href ? "text-[#2A58DA]" : "text-slate-600 hover:text-[#2A58DA]",
              )}
            >
              {link.label}
            </Link>
          ))}

          <DropdownGroup group={resourcesGroup} openGroup={openGroup} setOpenGroup={setOpenGroup} />

          <Link
            href={lastLink.href}
            className={cn(
              "rounded-lg px-3.5 py-2 text-base font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8]/30",
              pathname === lastLink.href ? "text-[#2A58DA]" : "text-slate-600 hover:text-[#2A58DA]",
            )}
          >
            {lastLink.label}
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            variant="outline"
            size="default"
            className="h-12 rounded-full border-[#1d4ed8]/25 font-semibold text-[#1d4ed8] hover:text-[#1d4ed8] transition-all duration-200 hover:border-[#1d4ed8]/50 hover:bg-[#1d4ed8]/6 hover:shadow-sm"
          >
            <Link target="_blank" href={process.env.NEXT_PUBLIC_LOGIN_URL || "/login"}>Log In</Link>
          </Button>
          <Button
            asChild
            variant="accent"
            size="default"
            className="h-12 w-full sm:w-auto border-0 bg-linear-to-r from-[#1d4ed8] to-[#0ea5ff] font-bold text-white shadow-lg shadow-[#1d4ed8]/25 transition-all duration-600 rounded-full hover:from-[#2563eb] hover:to-[#38bdf8]"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Request Demo
              <ArrowUpRight className="size-4.5 transition-transform duration-300" />
            </Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="flex size-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span key="x" initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X aria-hidden="true" className="size-4" />
              </motion.span>
            ) : (
              <motion.span key="menu" initial={{ rotate: 45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -45, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Menu aria-hidden="true" className="size-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </Container>

      {/* Mobile nav panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <Container>
              <nav aria-label="Mobile" className="flex flex-col py-4 pb-7">
                <ul className="flex flex-col gap-0.5">
                  <li>
                    <Link href="/" className={cn("block rounded-lg px-3 py-2.5 text-[15px] font-semibold transition-colors hover:bg-slate-50", pathname === "/" ? "text-[#1d4ed8]" : "text-slate-700 hover:text-slate-900")}>
                      Home
                    </Link>
                  </li>

                  {/* Solutions */}
                  <li>
                    <button type="button" onClick={() => setMobileSolutionsOpen((o) => !o)}
                      className={cn("flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-[15px] font-semibold transition-colors", mobileSolutionsOpen ? "bg-slate-50 text-slate-900" : "text-slate-700 hover:bg-slate-50")}>
                      <span>{solutionsGroup.label}</span>
                      <ChevronDown aria-hidden="true" className={cn("size-4 text-slate-400 transition-transform duration-200", mobileSolutionsOpen && "rotate-180 text-[#1d4ed8]")} />
                    </button>
                    <AnimatePresence initial={false}>
                      {mobileSolutionsOpen && (
                        <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.18, ease: "easeOut" }} className="overflow-hidden ml-3 mt-0.5 pl-3 flex flex-col gap-0.5">
                          {solutionsGroup.items.map((item) => (
                            <li key={item.href}>
                              <Link href={item.href} className={cn("block rounded-lg px-3 py-2 text-[14px] font-medium transition-colors hover:bg-slate-50", pathname === item.href ? "text-[#1d4ed8]" : "text-slate-600 hover:text-slate-900")}>
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>

                  {/* Mid links */}
                  {midLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={cn("block rounded-lg px-3 py-2.5 text-[15px] font-semibold transition-colors hover:bg-slate-50", pathname === link.href ? "text-[#1d4ed8]" : "text-slate-700 hover:text-slate-900")}>
                        {link.label}
                      </Link>
                    </li>
                  ))}

                  {/* Resources */}
                  <li>
                    <button type="button" onClick={() => setMobileResourcesOpen((o) => !o)}
                      className={cn("flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-[15px] font-semibold transition-colors", mobileResourcesOpen ? "bg-slate-50 text-slate-900" : "text-slate-700 hover:bg-slate-50")}>
                      <span>{resourcesGroup.label}</span>
                      <ChevronDown aria-hidden="true" className={cn("size-4 text-slate-400 transition-transform duration-200", mobileResourcesOpen && "rotate-180 text-[#1d4ed8]")} />
                    </button>
                    <AnimatePresence initial={false}>
                      {mobileResourcesOpen && (
                        <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.18, ease: "easeOut" }} className="overflow-hidden ml-3 mt-0.5 pl-3 flex flex-col gap-0.5">
                          {resourcesGroup.items.map((item) => (
                            <li key={item.href}>
                              <Link href={item.href} className={cn("block rounded-lg px-3 py-2 text-[14px] font-medium transition-colors hover:bg-slate-50", pathname === item.href ? "text-[#1d4ed8]" : "text-slate-600 hover:text-slate-900")}>
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>

                  {/* Contact */}
                  <li>
                    <Link href={lastLink.href} className={cn("block rounded-lg px-3 py-2.5 text-[15px] font-semibold transition-colors hover:bg-slate-50", pathname === lastLink.href ? "text-[#1d4ed8]" : "text-slate-700 hover:text-slate-900")}>
                      {lastLink.label}
                    </Link>
                  </li>
                </ul>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <Button asChild variant="accent" className="w-full font-semibold rounded-full shadow-md shadow-accent/20">
                    <Link href="/contact">
                      Request a demo
                      <ArrowUpRight aria-hidden="true" className="size-4" />
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
