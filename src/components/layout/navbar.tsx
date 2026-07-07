import { useNavigate, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { SECTIONS, SITE, type Section } from "@/lib/navigation";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_OFFSET = 64; // fixed navbar height (h-16)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const lastY = useRef(0);
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  // Scroll state: elevate the bar, and hide on scroll-down / reveal on scroll-up.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (mobileOpen) {
        setHidden(false);
      } else if (y > 120 && y > lastY.current + 4) {
        setHidden(true);
      } else if (y < lastY.current - 4) {
        setHidden(false);
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  // Active-section highlighting via IntersectionObserver (home page only).
  useEffect(() => {
    if (!isHome) return;

    const observed: { section: Section; el: HTMLElement }[] = [];
    for (const section of SECTIONS) {
      if (!section.domId) continue;
      const el = document.getElementById(section.domId);
      if (el) observed.push({ section, el });
    }

    const onScrollTop = () => {
      if (window.scrollY < 200) setActiveId("home");
    };
    window.addEventListener("scroll", onScrollTop, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = observed.find((o) => o.el === entry.target);
            if (match) setActiveId(match.section.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    observed.forEach((o) => observer.observe(o.el));
    onScrollTop();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScrollTop);
    };
  }, [isHome]);

  const scrollToSection = useCallback((domId: string | null) => {
    if (domId === null) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(domId);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  const handleNav = useCallback(
    (section: Section) => {
      setMobileOpen(false);
      setActiveId(section.id);
      if (isHome) {
        scrollToSection(section.domId);
      } else {
        // Navigate home first, then scroll once the section is mounted.
        navigate({ to: "/" }).then(() => {
          window.setTimeout(() => scrollToSection(section.domId), 120);
        });
      }
    },
    [isHome, navigate, scrollToSection],
  );

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,box-shadow] duration-300",
        scrolled || mobileOpen ? "glass-nav shadow-card" : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6"
      >
        <button
          type="button"
          onClick={() => handleNav(SECTIONS[0])}
          className="font-display text-lg font-semibold tracking-tight transition-transform duration-300 hover:scale-105"
          aria-label={`${SITE.name} — home`}
        >
          HG<span className="text-gradient-brand">.</span>
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {SECTIONS.map((section) => {
            const active = isHome && activeId === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => handleNav(section)}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "nav-underline relative rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {section.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border lg:hidden"
          >
            <div className="mx-auto flex max-w-[1280px] flex-col gap-1 px-4 py-4 sm:px-6">
              {SECTIONS.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => handleNav(section)}
                  aria-current={isHome && activeId === section.id ? "true" : undefined}
                  className={cn(
                    "min-h-11 rounded-lg px-3 py-2.5 text-left text-sm transition-colors duration-300",
                    isHome && activeId === section.id
                      ? "bg-accent text-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground",
                  )}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
