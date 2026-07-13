import { useCallback, useState } from "react";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SOCIALS, CONTACT } from "@/lib/navigation";
import { TypingText } from "./typing-text";
import portrait from "@/assets/harsh-gosalia.png";

const ROLES = ["AI & Machine Learning Engineer", "Automation Engineer", "Software Engineer"];

const CONTACTS = [
  { label: "GitHub", href: SOCIALS.github, icon: Github, external: true },
  { label: "LinkedIn", href: SOCIALS.linkedin, icon: Linkedin, external: true },
  { label: "Email", href: `mailto:${CONTACT.email}`, icon: Mail, external: false },
  { label: "Phone", href: `tel:${CONTACT.phone.replace(/\s/g, "")}`, icon: Phone, external: false },
  {
    label: "Location",
    href: "https://maps.google.com/?q=Ahmedabad,Gujarat,India",
    icon: MapPin,
    external: true,
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
} as const;

// A few subtle drifting blue particles for the dark background.
const PARTICLES = [
  { top: "12%", left: "8%", size: 6, delay: 0, dur: 9 },
  { top: "28%", left: "82%", size: 4, delay: 1.2, dur: 11 },
  { top: "62%", left: "16%", size: 5, delay: 0.6, dur: 10 },
  { top: "78%", left: "72%", size: 7, delay: 2, dur: 12 },
  { top: "44%", left: "48%", size: 3, delay: 1.6, dur: 8 },
  { top: "18%", left: "60%", size: 4, delay: 0.9, dur: 13 },
  { top: "88%", left: "36%", size: 5, delay: 1.4, dur: 10 },
];

/** Portrait with lazy load, smooth fade-in and a graceful branded fallback. */
function ProfileImage() {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  // Ref callback guards against a cached/complete image whose `onLoad`
  // fires before React attaches the listener (would leave it invisible).
  const imgRef = useCallback((node: HTMLImageElement | null) => {
    if (node?.complete && node.naturalWidth > 0) setLoaded(true);
  }, []);

  if (errored) {
    return (
      <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 rounded-[1.4rem] bg-gradient-to-br from-brand/15 to-brand-cyan/10 text-center">
        <span className="text-6xl" aria-hidden="true">
          👤
        </span>
        <div>
          <p className="font-display text-lg font-semibold">Harsh Gosalia</p>
          <p className="mt-0.5 text-sm text-muted-foreground">AI &amp; ML Engineer</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {!loaded && (
        <div className="absolute inset-1.5 animate-pulse rounded-[1.4rem] bg-secondary/60" />
      )}
      <img
        ref={imgRef}
        src={portrait}
        alt="Portrait of Harsh Gosalia, AI & Machine Learning Engineer"
        width={340}
        height={425}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
        className={`w-full rounded-[1.4rem] object-contain transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden">
      {/* Dark gradient + glow backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_20%,color-mix(in_oklab,var(--brand)_18%,transparent),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_10%_90%,color-mix(in_oklab,var(--brand-cyan)_12%,transparent),transparent_70%)]" />
        {PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-brand/50 blur-[1px]"
            style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
            animate={{ y: [0, -22, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{
              duration: p.dur,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:py-0">
        {/* LEFT */}
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 font-mono text-xs tracking-widest text-muted-foreground uppercase backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            AI &amp; ML Engineer
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="block text-muted-foreground text-2xl font-medium sm:text-3xl">
              Hi, I&apos;m
            </span>
            <span className="mt-1 block">Harsh Gosalia</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 min-h-[1.6em] font-display text-xl font-semibold sm:text-2xl"
          >
            <TypingText roles={ROLES} />
          </motion.p>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground"
          >
            AI &amp; Automation-focused Computer Science Engineering (AI/ML) student at GLS
            University with hands-on experience in Machine Learning, Deep Learning, Large Language
            Models (LLMs), Retrieval-Augmented Generation (RAG), Multi-Agent AI Systems, Computer
            Vision, Workflow Automation (n8n), React, FastAPI and AWS. Passionate about building
            intelligent, scalable and real-world AI solutions.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="group">
              <Link to="/projects">
                View Projects
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <Button asChild size="lg" variant="outline">
                <a href={CONTACT.resume} target="_blank" rel="noreferrer">
                  <FileText />
                  View Resume
                </a>
              </Button>
              <Button asChild variant="outline" className="h-10 w-10 shrink-0 px-0" title="Download Resume">
                <a href={CONTACT.resume} download="Harsh_Gosalia_Resume.pdf">
                  <Download />
                  <span className="sr-only">Download Resume</span>
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            {CONTACTS.map(({ label, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                aria-label={label}
                title={label}
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary/50 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:text-brand hover:shadow-glow"
              >
                <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[17rem] lg:justify-self-end"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Soft blue glow behind the photo only */}
            <div className="absolute inset-x-4 bottom-2 top-6 -z-10 rounded-[2rem] bg-brand/25 blur-3xl" />
            {/* Thin premium glass card */}
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-brand/30 bg-card/30 p-1.5 shadow-card backdrop-blur-xl transition-all duration-500 hover:border-brand/50 hover:shadow-glow">
              {/* Slow light reflection sweep */}
              <span className="pointer-events-none absolute -inset-y-8 left-0 z-10 w-1/3 animate-sheen bg-gradient-to-r from-transparent via-white/12 to-transparent" />
              <div className="relative">
                <ProfileImage />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
