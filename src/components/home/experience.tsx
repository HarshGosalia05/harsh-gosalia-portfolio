import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BrainCircuit, Workflow, GraduationCap, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

type Status = "Completed" | "Ongoing" | "Present" | "None";

interface ExperienceItem {
  icon: LucideIcon;
  position: string;
  organization: string;
  duration: string;
  status: Status;
  description: string;
  tech: string[];
  type?: string;
}

const EXPERIENCE: ExperienceItem[] = [
  {
    icon: Workflow,
    position: "Automation Intern",
    organization: "Xyzon Innovations",
    duration: "Jun 2026 – Present",
    status: "Present",
    type: "Virtual Internship",
    description:
      "Currently working on AI-powered workflow automation using n8n, REST APIs and AI services to automate repetitive business operations. Designed and developed production-style automation workflows including AI Job Application Auto Tracker, AI-Powered Job Lead Tracker and Multi-Source Lead Intelligence Aggregator. Integrated Google Sheets, Gmail, Telegram, HTTP APIs, JavaScript transformations and AI-powered decision making to build scalable automation solutions that improve productivity and reduce manual effort.",
    tech: [
      "n8n",
      "Workflow Automation",
      "REST APIs",
      "JavaScript",
      "Google Sheets API",
      "Gmail API",
      "Telegram Bot API",
      "HTTP Requests",
      "JSON",
      "AI Automation",
      "API Integration",
      "Low-Code Automation",
    ],
  },
  {
    icon: BrainCircuit,
    position: "AI & Data Analytics Intern",
    organization: "Edunet Foundation | AICTE | Shell India",
    duration: "Aug 2025 – Sep 2025",
    status: "Completed",
    type: "Virtual Internship",
    description:
      "Completed a four-week industry-oriented virtual internship focused on Python, Machine Learning and Data Analytics. Worked on the complete machine learning workflow including data preprocessing, exploratory data analysis (EDA), feature engineering, classification, regression, model evaluation and prediction using real-world datasets. Developed a Streamlit-based machine learning application and completed an end-to-end Machine Learning project.",
    tech: [
      "Python",
      "Machine Learning",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
      "EDA",
      "Feature Engineering",
      "Classification",
      "Regression",
      "Model Evaluation",
      "Streamlit",
    ],
  },
  {
    icon: GraduationCap,
    position: "Technical Workshops",
    organization: "AWS Academy • Google Developer Groups (GDG) • Edunet Foundation • GLS University",
    duration: "",
    status: "None",
    type: "Industry Workshops",
    description:
      "Actively participated in multiple industry-focused technical workshops, bootcamps and hands-on training programs covering Artificial Intelligence, Machine Learning, Cloud Computing, Python, Data Analytics and Modern Software Development.\n\nGained practical exposure through live coding sessions, real-world demonstrations, project-based learning and guidance from industry professionals.",
    tech: [
      "Python",
      "Artificial Intelligence",
      "Machine Learning",
      "Data Analytics",
      "Cloud Computing",
      "AWS",
      "Google Technologies",
      "Streamlit",
      "Git & GitHub",
      "Modern Software Development",
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
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function StatusBadge({ status }: { status: Status }) {
  if (status === "None") return null;

  const isPresent = status === "Present";
  const ongoing = status === "Ongoing" || isPresent;

  let badgeColor = "border-brand/40 bg-brand/10 text-brand";
  let dotColor = "bg-brand";

  if (isPresent) {
    badgeColor = "border-emerald-500/30 bg-emerald-500/10 text-emerald-500";
    dotColor = "bg-emerald-500";
  } else if (!ongoing) {
    badgeColor = "border-border bg-secondary/60 text-muted-foreground";
    dotColor = "bg-muted-foreground";
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${badgeColor}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${dotColor} ${ongoing ? "animate-pulse" : ""}`}
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
                      {item.type ? (
                        <>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="font-display text-lg font-semibold">{item.position}</h3>
                              <StatusBadge status={item.status} />
                            </div>
                            <p className="text-sm font-medium text-muted-foreground shrink-0">
                              {item.duration}
                            </p>
                          </div>
                          <div className="mt-1 flex flex-col items-start gap-2">
                            <p className="text-sm text-muted-foreground">{item.organization}</p>
                            <span className="inline-flex items-center rounded-md border border-brand/20 bg-brand/5 px-2 py-0.5 text-[11px] font-medium text-brand/80 backdrop-blur-sm">
                              {item.type}
                            </span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3 className="font-display text-lg font-semibold">{item.position}</h3>
                            <StatusBadge status={item.status} />
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {item.organization} · {item.duration}
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
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
