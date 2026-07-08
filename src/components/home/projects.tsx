import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  Activity,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SOCIALS } from "@/lib/navigation";
import demoVideo from "@/assets/incident-response-demo.mp4";

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
  features?: string[];
  demoVideo?: string;
  hideDemo?: boolean;
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
    github: "https://github.com/Nandinivora18/Incident-Response-Agent/",
    demo: "",
    details: "#",
    category: "Featured AI Project",
    badge: "HackBaroda 2026 — Round 2 Finalist",
    demoVideo: demoVideo,
    features: [
      "Multi-Agent Investigation",
      "Root Cause Analysis",
      "Historical Learning",
      "RAG Knowledge Base",
      "Automated Remediation",
      "Analytics Dashboard",
      "Incident Timeline",
      "Runbook Execution",
      "Git Patch Recommendation",
    ],
  },
  {
    icon: Activity,
    title: "MediScan – AI Disease Prediction Platform",
    description:
      "An AI-powered healthcare platform that predicts diseases using Machine Learning. The system currently supports asthma prediction using clinical and lifestyle parameters, provides prediction confidence, and is designed to expand for multiple diseases including pneumonia and dengue.",
    tech: ["Python", "Streamlit", "Scikit-learn", "Random Forest", "MongoDB", "Pandas"],
    github: "",
    demo: "",
    details: "#",
    category: "Healthcare AI",
    badge: "Machine Learning Project",
    hideDemo: true,
    features: [
      "Disease Prediction",
      "Asthma Risk Assessment",
      "Machine Learning Pipeline",
      "Interactive Dashboard",
      "Data Visualization",
      "MongoDB Integration",
      "Explainable AI Ready (XAI)",
      "Responsive Interface",
    ],
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
    features: [
      "Visual Drag-&-Drop Builder",
      "Webhook & API Triggers",
      "Execution History & Logs",
      "Dynamic Data Mapping",
    ],
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
    features: [
      "Semantic Chunking",
      "Hybrid Retrieval Search",
      "Metadata Filtering",
      "Source Citation Tracking",
    ],
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
    features: [
      "Real-Time Stream Processing",
      "Aspect-Based Analysis",
      "Interactive SVG Charts",
      "Report Exporting",
    ],
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
    features: [
      "NLP Skill Extraction",
      "JD Semantic Matching",
      "Batch PDF Parsing",
      "Scoring Customisation",
    ],
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
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Close on ESC for video modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveVideo(null);
      }
    };
    if (activeVideo) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

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
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {PROJECTS.map((project, i) => {
            const isFlipped = expandedCard === project.title;

            return (
              <div
                key={project.title}
                className="group relative w-full h-[500px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] will-change-transform rounded-2xl [perspective:1200px] backdrop-blur"
              >
                <div
                  className={`relative w-full h-full transition-transform duration-600 ease-out [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
                >
                  {/* Front Side */}
                  <div
                    className={`absolute inset-0 w-full h-full flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/70 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] ${isFlipped ? "pointer-events-none" : ""}`}
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-border shrink-0">
                      <div
                        className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-110"
                        style={{
                          background: `linear-gradient(${135 + i * 30}deg, color-mix(in oklab, var(--brand) 30%, transparent), color-mix(in oklab, var(--brand-cyan) 22%, transparent))`,
                        }}
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,color-mix(in_oklab,var(--background)_70%,transparent))]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <project.icon
                            className="h-14 w-14 text-foreground/80"
                            strokeWidth={1.4}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="flex flex-1 flex-col p-6 min-h-0">
                      <div className="flex-1 flex flex-col justify-start min-h-0">
                        {(project.category || project.badge) && (
                          <div className="flex items-center justify-between gap-2 mb-2 shrink-0">
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
                        <h3 className="font-display text-lg font-semibold shrink-0">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2 shrink-0">
                          {project.description}
                        </p>

                        {/* Technology tags: display:flex; flex-wrap:wrap; gap:8px; max-height:72px; overflow:hidden; */}
                        <div className="mt-4 flex flex-wrap gap-2 max-h-[72px] overflow-hidden">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground shrink-0"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action buttons staying pinned to the bottom */}
                      <div className="mt-auto pt-4 border-t border-border shrink-0 flex flex-wrap items-center gap-2">
                        {project.github ? (
                          <Button asChild size="sm" variant="outline">
                            <a href={project.github} target="_blank" rel="noreferrer">
                              <Github />
                              Code
                            </a>
                          </Button>
                        ) : (
                          <div className="relative group/tooltip">
                            <Button size="sm" variant="outline" disabled>
                              <Github />
                              Code
                            </Button>
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 scale-0 transition-all rounded bg-popover border border-border px-2.5 py-1.5 text-xs text-popover-foreground group-hover/tooltip:scale-100 pointer-events-none whitespace-nowrap z-50 shadow-lg">
                              Source Code Coming Soon
                            </span>
                          </div>
                        )}
                        {!project.hideDemo &&
                          (project.demoVideo ? (
                            <Button
                              onClick={() => setActiveVideo(project.demoVideo)}
                              size="sm"
                              variant="outline"
                            >
                              <ExternalLink />
                              Live Demo
                            </Button>
                          ) : project.demo && project.demo !== "#" ? (
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
                          ))}
                        <Button
                          onClick={() => setExpandedCard(project.title)}
                          size="sm"
                          variant="ghost"
                          className="ml-auto group/btn"
                        >
                          Details
                          <ArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div
                    className={`absolute inset-0 w-full h-full flex flex-col justify-between p-6 overflow-hidden rounded-2xl border border-border bg-card/80 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)] ${!isFlipped ? "pointer-events-none" : ""}`}
                  >
                    <div className="flex-1 flex flex-col justify-start">
                      {(project.category || project.badge) && (
                        <div className="flex items-center justify-between gap-2 mb-3">
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
                      <h3 className="font-display text-lg font-semibold mb-3">{project.title}</h3>

                      {/* Short Project Overview */}
                      <div className="mb-4">
                        <h4 className="text-[10px] font-semibold text-brand uppercase tracking-wider mb-1">
                          Overview
                        </h4>
                        <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Key Features */}
                      {project.features && project.features.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-[10px] font-semibold text-brand uppercase tracking-wider mb-1.5">
                            Key Features
                          </h4>
                          <ul className="space-y-1.5 text-xs text-muted-foreground">
                            {project.features.slice(0, 4).map((feature) => (
                              <li key={feature} className="flex items-start gap-1.5">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                                <span className="line-clamp-1">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Bottom section (Tech Stack & Buttons) */}
                    <div className="mt-auto">
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.slice(0, 5).map((t) => (
                          <span
                            key={t}
                            className="rounded bg-secondary/50 px-2 py-0.5 text-[10px] text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 5 && (
                          <span className="rounded bg-secondary/30 px-2 py-0.5 text-[10px] text-muted-foreground">
                            +{project.tech.length - 5} more
                          </span>
                        )}
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border">
                        {project.github ? (
                          <Button asChild size="sm" variant="outline">
                            <a href={project.github} target="_blank" rel="noreferrer">
                              <Github />
                              Code
                            </a>
                          </Button>
                        ) : (
                          <div className="relative group/tooltip">
                            <Button size="sm" variant="outline" disabled>
                              <Github />
                              Code
                            </Button>
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 scale-0 transition-all rounded bg-popover border border-border px-2.5 py-1.5 text-xs text-popover-foreground group-hover/tooltip:scale-100 pointer-events-none whitespace-nowrap z-50 shadow-lg">
                              Source Code Coming Soon
                            </span>
                          </div>
                        )}
                        {!project.hideDemo &&
                          (project.demoVideo ? (
                            <Button
                              onClick={() => setActiveVideo(project.demoVideo)}
                              size="sm"
                              variant="outline"
                            >
                              <ExternalLink />
                              Live Demo
                            </Button>
                          ) : project.demo && project.demo !== "#" ? (
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
                          ))}
                        <Button
                          onClick={() => setExpandedCard(null)}
                          size="sm"
                          variant="ghost"
                          className="ml-auto group/btn"
                        >
                          Show Less
                          <ArrowRight className="transition-transform rotate-90 group-hover/btn:-translate-y-0.5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="relative w-full max-w-4xl px-4 md:px-0"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-4 md:right-0 text-muted-foreground hover:text-foreground text-sm font-mono flex items-center gap-1.5 focus:outline-none bg-background/40 backdrop-blur px-3 py-1 rounded-full border border-border"
              >
                Close (ESC)
              </button>
              <div className="overflow-hidden rounded-2xl border border-border bg-black shadow-2xl aspect-video flex items-center justify-center">
                <video
                  src={activeVideo}
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
