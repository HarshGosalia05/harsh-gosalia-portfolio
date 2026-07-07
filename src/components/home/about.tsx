import { motion } from "motion/react";
import {
  Brain,
  Cpu,
  Layers,
  Workflow,
  Server,
  LayoutTemplate,
  type LucideIcon,
} from "lucide-react";

interface SkillCategory {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

const CATEGORIES: SkillCategory[] = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    skills: ["LLMs", "RAG", "Multi-Agent Systems", "Prompt Engineering", "OpenAI"],
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    skills: ["Python", "Scikit-Learn", "Pandas", "NumPy", "TensorFlow"],
  },
  {
    icon: Layers,
    title: "Deep Learning",
    skills: ["TensorFlow", "Keras", "OpenCV", "Computer Vision", "Neural Networks"],
  },
  {
    icon: Workflow,
    title: "Automation",
    skills: ["n8n", "Workflow Automation", "Python", "Webhooks", "REST APIs"],
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: ["FastAPI", "Node.js", "MongoDB", "MySQL", "Docker", "AWS"],
  },
  {
    icon: LayoutTemplate,
    title: "Frontend Development",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
];

const MARQUEE = [
  "Python",
  "React",
  "FastAPI",
  "TensorFlow",
  "AWS",
  "Docker",
  "MongoDB",
  "Git",
  "OpenCV",
  "TypeScript",
  "Java",
  "n8n",
  "C++",
  "Node.js",
  "MySQL",
  "Scikit-Learn",
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

export function About() {
  return (
    <section id="about" className="relative scroll-mt-16 overflow-hidden py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        {/* Heading */}
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
            About Me
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Building Intelligent AI Solutions for Real-World Problems
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            I am Harsh Gosalia, a Computer Science Engineering (AI &amp; ML) student at GLS
            University. I enjoy transforming complex problems into intelligent, practical software
            solutions. My interests include Artificial Intelligence, Machine Learning, Deep
            Learning, LLMs, Automation, Backend Development and modern Web Technologies. I
            continuously learn, build and participate in hackathons to improve my technical
            expertise.
          </p>
        </motion.div>

        {/* Skill cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={i}
              className="group rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-glow"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/25 bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand/20">
                  <cat.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-sm text-muted-foreground transition-colors duration-300 group-hover:border-brand/20 group-hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Core Technologies marquee */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="mt-16 sm:mt-20"
      >
        <p className="mx-auto mb-6 w-full max-w-[1280px] px-4 font-mono text-xs tracking-widest text-muted-foreground uppercase sm:px-6">
          Core Technologies
        </p>
        <div className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex shrink-0 animate-marquee items-center gap-4 pr-4 group-hover:[animation-play-state:paused]">
            {[...MARQUEE, ...MARQUEE].map((tech, i) => (
              <span key={i} className="flex items-center gap-4">
                <span className="whitespace-nowrap font-display text-xl font-semibold text-muted-foreground transition-colors sm:text-2xl">
                  {tech}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-brand/60" />
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
