import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cloud,
  GraduationCap,
  BarChart3,
  BookOpen,
  Brain,
  Monitor,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Certificate {
  icon: LucideIcon;
  title: string;
  issuer: string;
  category: string;
  description: string;
  verifyUrl: string;
}

const CERTIFICATES: Certificate[] = [
  {
    icon: Cloud,
    title: "Oracle Cloud Infrastructure AI Foundations Associate",
    issuer: "Oracle",
    category: "Artificial Intelligence",
    description:
      "Demonstrates foundational knowledge of AI and machine learning services on Oracle Cloud Infrastructure, including OCI Vision, Language and Speech.",
    verifyUrl: "#",
  },
  {
    icon: GraduationCap,
    title: "AICTE Edunet Foundation Internship",
    issuer: "AICTE · Shell · Edunet Foundation",
    category: "Internship",
    description:
      "A structured industry internship program sponsored by AICTE, Shell and Edunet Foundation, covering real-world AI and data science project experience.",
    verifyUrl: "#",
  },
  {
    icon: BarChart3,
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte",
    category: "Data Analytics",
    description:
      "Completed a virtual job simulation focused on data analytics, business intelligence, data cleaning, visualization and client storytelling.",
    verifyUrl: "#",
  },
  {
    icon: BookOpen,
    title: "NPTEL — Recommender Systems",
    issuer: "IIT Kharagpur",
    category: "Machine Learning",
    description:
      "An in-depth course on recommender system design, collaborative filtering, content-based filtering and matrix factorization techniques.",
    verifyUrl: "#",
  },
  {
    icon: Brain,
    title: "IBM SkillsBuild — Artificial Intelligence",
    issuer: "IBM",
    category: "Artificial Intelligence",
    description:
      "IBM-certified training in AI fundamentals, neural networks, deep learning concepts and responsible AI practices through the SkillsBuild platform.",
    verifyUrl: "#",
  },
  {
    icon: Monitor,
    title: "Microsoft Power BI Workshop",
    issuer: "Microsoft",
    category: "Data Analytics",
    description:
      "Hands-on workshop covering data modeling, DAX calculations, interactive dashboard design and business intelligence reporting with Power BI.",
    verifyUrl: "#",
  },
];

const STATS: { label: string; value: string }[] = [
  { label: "Professional Certificates", value: "20+" },
  { label: "Internships", value: "2+" },
  { label: "Industry Programs", value: "10+" },
  { label: "Learning Hours", value: "500+" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26, scale: 0.985, filter: "blur(6px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Certificates() {
  return (
    <section id="certificates" className="relative scroll-mt-16 overflow-hidden py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 font-mono text-xs tracking-widest text-muted-foreground uppercase backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Featured Certificates
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Professional Certifications &amp; Learning Journey
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A curated collection of my most valuable certifications in Artificial Intelligence,
            Machine Learning, Data Analytics, Cloud Computing, Software Engineering and Professional
            Development.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={i}
              className="group rounded-2xl border border-border bg-card/40 p-5 text-center backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-glow"
            >
              <div className="font-display text-3xl font-bold text-brand sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((cert, i) => (
            <motion.article
              key={cert.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={i}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-glow"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                <div
                  className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-110"
                  style={{
                    background: `linear-gradient(${135 + i * 30}deg, color-mix(in oklab, var(--brand) 30%, transparent), color-mix(in oklab, var(--brand-cyan) 22%, transparent))`,
                  }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,color-mix(in_oklab,var(--background)_70%,transparent))]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <cert.icon className="h-14 w-14 text-foreground/80" strokeWidth={1.4} />
                  </div>
                </div>
                {/* Category badge */}
                <span className="absolute top-4 left-4 rounded-full border border-brand/30 bg-background/70 px-3 py-1 text-xs font-medium text-brand backdrop-blur">
                  {cert.category}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold">{cert.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {cert.description}
                </p>

                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border">
                  <Button asChild size="sm" variant="outline" className="group/btn">
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Verify Certificate
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-14 flex justify-center"
        >
          <Button asChild size="lg" className="group">
            <Link to="/certificates">
              View All Certificates
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
