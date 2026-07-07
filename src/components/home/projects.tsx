import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  ScanEye,
  Workflow,
  FileSearch,
  BarChart3,
  FileUser,
  Github,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SOCIALS } from "@/lib/navigation";

interface Project {
  icon: LucideIcon;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  details: string;
  category?: string;
  badge?: string;
}

const PROJECTS: Project[] = [
  {
    icon: Workflow,
    title: "Incident Response Agent",
    description:
      "An AI-powered Incident Investigation platform developed during HackBaroda 2026. The system uses a multi-agent workflow, Retrieval-Augmented Generation (RAG), historical incident learning, root cause analysis, automated remediation recommendations, analytics dashboard, and investigation history to reduce incident resolution time.",
    tech: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "LangChain",
      "OpenAI",
      "ChromaDB",
      "RAG",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "",
    demo: "",
    details: "#",
    category: "Featured AI Project",
    badge: "HackBaroda 2026 — Round 2 Finalist",
  },
  {
    icon: ScanEye,
    title: "Real-Time Object Detection",
    description:
      "A computer vision pipeline detecting and tracking objects in live video streams with high accuracy.",
    tech: ["Python", "OpenCV", "TensorFlow", "YOLO"],
    github: SOCIALS.github,
    demo: "#",
    details: "#",
    category: "Computer Vision",
  },
  {
    icon: Workflow,
    title: "Automated Workflow Engine",
    description:
      "No-code automation connecting APIs, webhooks and databases to remove repetitive manual work.",
    tech: ["n8n", "Node.js", "Webhooks", "REST APIs"],
    github: SOCIALS.github,
    demo: "#",
    details: "#",
    category: "Automation",
  },
  {
    icon: FileSearch,
    title: "Document Q&A with RAG",
    description:
      "Chat over private documents with retrieval-augmented generation and grounded, cited answers.",
    tech: ["FastAPI", "ChromaDB", "LLMs", "React"],
    github: SOCIALS.github,
    demo: "#",
    details: "#",
    category: "AI/RAG",
  },
  {
    icon: BarChart3,
    title: "Sentiment Analysis Dashboard",
    description:
      "An ML dashboard that classifies and visualizes customer sentiment across large text datasets.",
    tech: ["Python", "Scikit-Learn", "Pandas", "React"],
    github: SOCIALS.github,
    demo: "#",
    details: "#",
    category: "Data Science",
  },
  {
    icon: FileUser,
    title: "AI Resume Screener",
    description:
      "An NLP tool that ranks resumes against job descriptions to speed up candidate shortlisting.",
    tech: ["FastAPI", "NLP", "MongoDB", "TypeScript"],
    github: SOCIALS.github,
    demo: "#",
    details: "#",
    category: "Natural Language Processing",
  },
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

export function Projects() {
  return (
    <section
      id="featured-projects"
      className="relative scroll-mt-16 overflow-hidden py-24 sm:py-32"
    >
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
            Featured Projects
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Projects That Solve Real Problems
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A selection of my best AI, Machine Learning, Automation and Software Engineering
            projects built with modern technologies.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
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
                    <project.icon className="h-14 w-14 text-foreground/80" strokeWidth={1.4} />
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                {(project.category || project.badge) && (
                  <div className="flex items-center justify-between gap-2 mb-2">
                    {project.category && (
                      <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                        {project.category}
                      </span>
                    )}
                    {project.badge && (
                      <span className="inline-flex items-center rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-medium text-brand border border-brand/20">
                        {project.badge}
                      </span>
                    )}
                  </div>
                )}
                <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-border">
                  {project.github ? (
                    <Button asChild size="sm" variant="outline">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github />
                        Code
                      </a>
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" disabled>
                      <Github />
                      Code
                    </Button>
                  )}
                  {project.demo && project.demo !== "#" ? (
                    <Button asChild size="sm" variant="outline">
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        <ExternalLink />
                        Live Demo
                      </a>
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" disabled>
                      <ExternalLink />
                      Live Demo
                    </Button>
                  )}
                  <Button asChild size="sm" variant="ghost" className="ml-auto group/btn">
                    <a href={project.details}>
                      Details
                      <ArrowRight className="transition-transform group-hover/btn:translate-x-1" />
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
            <Link to="/projects">
              View All Projects
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
