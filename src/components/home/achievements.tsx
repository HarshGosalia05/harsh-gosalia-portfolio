import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ACHIEVEMENTS } from "@/data/certificates";
import { ImageModal } from "@/components/ui/image-modal";

interface AchievementData {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: string;
  image: string;
  description: string;
}

const STATS: { label: string; value: string }[] = [
  { label: "Projects", value: "18+" },
  { label: "Hackathons", value: "3+" },
  { label: "Certificates", value: "20+" },
  { label: "Internships", value: "2+" },
  { label: "Awards", value: "5+" },
  { label: "Workshops", value: "15+" },
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

function TiltCard({
  achievement,
  index,
  onClick,
}: {
  achievement: AchievementData;
  index: number;
  onClick: () => void;
}) {
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--rx", `${(-py * 6).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(px * 6).toFixed(2)}deg`);
  };

  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      custom={index}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform: "perspective(1000px) rotateX(var(--rx,0)) rotateY(var(--ry,0))" }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur transition-[border-color,box-shadow,transform] duration-300 hover:border-brand/50 hover:shadow-glow"
    >
      {/* Animated border glow */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:linear-gradient(120deg,transparent,color-mix(in_oklab,var(--brand)_18%,transparent),transparent)]" />

      {/* Image */}
      <div
        className="relative aspect-[16/10] overflow-hidden border-b border-border bg-neutral-950/20 cursor-pointer flex items-center justify-center p-2"
        onClick={onClick}
      >
        <img
          src={achievement.image}
          alt={achievement.title}
          loading="lazy"
          className="h-full w-full object-contain rounded-t-2xl transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Category badge */}
        <span className="absolute top-4 left-4 rounded-full border border-brand/30 bg-background/70 px-3 py-1 text-xs font-medium text-brand backdrop-blur">
          {achievement.category}
        </span>
      </div>

      {/* Body */}
      <div className="relative flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold leading-tight">{achievement.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {achievement.organization} <span className="text-muted-foreground/30 font-mono mx-1.5">•</span> {achievement.year}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">
          {achievement.description}
        </p>

        <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border">
          <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5 bg-secondary/40 border border-border px-3 py-1.5 rounded-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Certificate Available
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function Achievements() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Show only first 3 featured achievements on the homepage
  const featuredAchievements = ACHIEVEMENTS.slice(0, 3);

  return (
    <section id="achievements" className="relative scroll-mt-16 overflow-hidden py-24 sm:py-32">
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
            Featured Achievements
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Awards, Recognition &amp; Milestones
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Highlights from my engineering journey including national hackathons, university
            competitions, technical leadership, certifications and academic recognition.
          </p>
        </motion.div>

        {/* Animated stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
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
          {featuredAchievements.map((achievement, i) => (
            <TiltCard
              key={achievement.title}
              achievement={achievement}
              index={i}
              onClick={() => {
                setActiveIndex(i);
                setIsModalOpen(true);
              }}
            />
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
            <Link to="/achievements">
              View All Achievements
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Shared Image Modal for Full-Size Preview */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={featuredAchievements}
        currentIndex={activeIndex}
        onNavigate={(index) => setActiveIndex(index)}
      />
    </section>
  );
}
