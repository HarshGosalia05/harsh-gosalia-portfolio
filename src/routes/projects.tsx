import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ui/project-card";

const TITLE = "Projects — Harsh Gosalia";
const DESC =
  "A collection of AI, Machine Learning, Computer Vision, Automation and Full Stack projects developed through internships, hackathons and real-world problem solving.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/projects" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

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

function ProjectsPage() {
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

  const stats = ["10+ Projects", "AI / ML", "Automation", "Hackathons", "Internships"];

  return (
    <main className="min-h-screen pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden relative">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-16"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 font-mono text-xs tracking-widest text-muted-foreground uppercase backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Portfolio
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Projects
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {DESC}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {stats.map((stat, i) => (
              <span
                key={stat}
                className="rounded-full border border-border/50 bg-secondary/30 px-3 py-1 text-sm font-medium text-foreground/80 backdrop-blur-sm"
              >
                {stat}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={i % 3} // Stagger by column roughly
              className="h-full"
            >
              <ProjectCard
                project={project}
                index={i}
                isFlipped={expandedCard === project.title}
                onExpand={setExpandedCard}
                onPlayVideo={setActiveVideo}
              />
            </motion.div>
          ))}
        </div>
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
    </main>
  );
}
