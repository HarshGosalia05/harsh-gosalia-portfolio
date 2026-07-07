import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BrainCircuit, Workflow, Trophy, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

type Status = "Completed" | "Ongoing";

interface ExperienceItem {
  icon: LucideIcon;
  position: string;
  organization: string;
  duration: string;
  status: Status;
  description: string;
  tech: string[];
}

const EXPERIENCE: ExperienceItem[] = [
  {
    icon: BrainCircuit,
    position: "AI & Data Analytics Intern",
    organization: "Industry Internship",
    duration: "2024",
    status: "Completed",
    description:
      "Worked on AI-based analytics, machine learning workflows and data-driven solutions.",
    tech: ["Python", "Machine Learning", "Pandas", "Data Analytics"],
  },
  {
    icon: Workflow,
    position: "Automation Engineering Intern",
    organization: "Industry Internship",
    duration: "2024",
    status: "Completed",
    description:
      "Built workflow automation using APIs, AI models, webhooks and no-code automation platforms.",
    tech: ["n8n", "APIs", "Webhooks", "AI Models"],
  },
  {
    icon: Trophy,
    position: "Hackathon Projects",
    organization: "Multiple Events",
    duration: "2023 — Present",
    status: "Ongoing",
    description: "Developed AI products under strict deadlines while leading technical teams.",
    tech: ["AI", "Team Leadership", "Rapid Prototyping"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26, scale: 0.985, filter: "blur(6px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function StatusBadge({ status }: { status: Status }) {
  const ongoing = status === "Ongoing";
  return (
    <span
      className={
        ongoing
          ? "inline-flex items-center gap-1.5 rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-medium text-brand"
          : "inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground"
      }
    >
      <span
        className={
          ongoing
            ? "h-1.5 w-1.5 rounded-full bg-brand animate-pulse"
            : "h-1.5 w-1.5 rounded-full bg-muted-foreground"
        }
      />
      {status}
    </span>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-16 overflow-hidden py-24 sm:py-32">
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
            Experience
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Professional Experience &amp; Industry Exposure
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Hands-on experience through internships, hackathons, industry programs and real-world AI
            projects.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-14">
          {/* vertical line */}
          <div className="absolute top-2 bottom-2 left-[19px] w-px bg-border sm:left-[23px]" />

          <div className="space-y-6 sm:space-y-8">
            {EXPERIENCE.map((item, i) => (
              <motion.div
                key={item.position}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i}
                className="relative pl-14 sm:pl-20"
              >
                {/* timeline dot */}
                <span className="absolute top-6 left-2 flex h-5 w-5 items-center justify-center sm:left-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/40" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-brand ring-4 ring-background" />
                </span>

                {/* card */}
                <div className="group rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-glow">
                  <div className="flex flex-wrap items-start gap-4">
                    {/* logo placeholder */}
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand/25 bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand/20">
                      <item.icon className="h-6 w-6" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-display text-lg font-semibold">{item.position}</h3>
                        <StatusBadge status={item.status} />
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.organization} · {item.duration}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View full experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-14 flex justify-center"
        >
          <Button asChild size="lg" className="group">
            <Link to="/experience">
              View Full Experience
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
