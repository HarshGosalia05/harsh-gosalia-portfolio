import { useCallback } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { SECTIONS, SITE, SOCIALS, CONTACT, type Section } from "@/lib/navigation";

const NAV_OFFSET = 64;

const QUICK_LINKS = SECTIONS.filter((s) =>
  ["projects", "experience", "certificates", "achievements", "contact"].includes(s.id),
);

const FOOTER_SOCIALS = [
  { label: "GitHub", href: SOCIALS.github, icon: Github, external: true },
  { label: "LinkedIn", href: SOCIALS.linkedin, icon: Linkedin, external: true },
  { label: "Email", href: `mailto:${CONTACT.email}`, icon: Mail, external: false },
  { label: "Resume", href: CONTACT.resume, icon: FileText, external: true },
];

export function Footer() {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

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
      if (isHome) {
        scrollToSection(section.domId);
      } else {
        navigate({ to: "/" }).then(() => {
          window.setTimeout(() => scrollToSection(section.domId), 120);
        });
      }
    },
    [isHome, navigate, scrollToSection],
  );

  return (
    <footer className="relative overflow-hidden border-t border-border">
      {/* Subtle blue top glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-px left-1/2 h-px w-2/3 -translate-x-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--brand) 70%, transparent), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[680px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand) 30%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand + tagline */}
          <div className="sm:col-span-2 lg:col-span-2">
            <button
              type="button"
              onClick={() => handleNav(SECTIONS[0])}
              className="font-display text-2xl font-bold tracking-tight"
              aria-label={`${SITE.name} — home`}
            >
              HG<span className="text-gradient-brand">.</span>
            </button>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              AI Engineer building intelligent, production-grade software — turning machine learning
              ideas into elegant, real-world products.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {FOOTER_SOCIALS.map(({ label, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-secondary/50 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/60 hover:text-brand hover:shadow-glow"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick nav */}
          <nav aria-label="Footer navigation" className="lg:col-span-1">
            <h3 className="font-display text-sm font-semibold tracking-tight">Quick Navigation</h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((section) => (
                <li key={section.id}>
                  <button
                    type="button"
                    onClick={() => handleNav(section)}
                    className="text-sm text-muted-foreground transition-colors hover:text-brand"
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-sm font-semibold tracking-tight">Get in touch</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-brand">
                  {CONTACT.email}
                </a>
              </li>
              <li>{CONTACT.location}</li>
            </ul>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-border py-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-muted-foreground">© 2026 {SITE.name}</p>
          <p className="text-xs text-muted-foreground">
            Made with React, TypeScript, Tailwind CSS and Loveable
          </p>
        </div>
      </div>
    </footer>
  );
}
