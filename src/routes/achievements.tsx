import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Search } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ACHIEVEMENTS } from "@/data/certificates";
import { ImageModal } from "@/components/ui/image-modal";

const TITLE = "Achievements — Harsh Gosalia";
const DESC =
  "Awards, hackathon wins and recognition earned by Harsh Gosalia, AI & ML engineer based in Ahmedabad.";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/achievements" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/achievements" }],
  }),
  component: AchievementsPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 16, scale: 0.99, filter: "blur(4px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

interface AchievementData {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: string;
  image: string;
  description: string;
}

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
      animate="show"
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

function AchievementsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Extract unique categories dynamically
  const categories = useMemo(() => {
    const cats = new Set(ACHIEVEMENTS.map((c) => c.category));
    return ["All", ...Array.from(cats)];
  }, []);

  // Filter and search logic
  const filteredAchievements = useMemo(() => {
    return ACHIEVEMENTS.filter((ach) => {
      const matchesCategory =
        selectedCategory === "All" || ach.category === selectedCategory;
      const matchesSearch =
        ach.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ach.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ach.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        {/* Navigation back */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Button asChild size="sm" variant="ghost" className="group">
            <Link to="/" hash="achievements" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to overview
            </Link>
          </Button>
        </motion.div>

        {/* Title / Description */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 font-mono text-xs tracking-widest text-muted-foreground uppercase backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Recognition & Milestones
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Achievements Gallery
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A comprehensive record of my competition awards, hackathon recognition, and engineering milestones. Click on any card to view the verification certificate.
          </p>
        </motion.div>

        {/* Filters and Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-border pb-8"
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-xs font-medium border transition-all cursor-pointer ${
                  selectedCategory === category
                    ? "bg-brand border-brand text-primary-foreground shadow-glow"
                    : "bg-card/40 border-border text-muted-foreground hover:border-muted-foreground/30 hover:bg-card"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full max-w-sm">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search achievements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-border bg-card/40 py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand backdrop-blur transition-all"
            />
          </div>
        </motion.div>

        {/* Achievements Grid */}
        {filteredAchievements.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredAchievements.map((achievement, i) => (
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
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 flex flex-col items-center justify-center text-center"
          >
            <p className="text-lg text-muted-foreground">No achievements found matching your criteria.</p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              variant="outline"
              className="mt-4"
            >
              Reset Filters
            </Button>
          </motion.div>
        )}
      </div>

      {/* Full-Size Image Preview Lightbox */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={filteredAchievements}
        currentIndex={activeIndex}
        onNavigate={(index) => setActiveIndex(index)}
      />
    </div>
  );
}
