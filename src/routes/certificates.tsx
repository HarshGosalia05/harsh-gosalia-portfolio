import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Search, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { CERTIFICATES } from "@/data/certificates";
import { ImageModal } from "@/components/ui/image-modal";

const TITLE = "Certificates — Harsh Gosalia";
const DESC =
  "Professional certifications in AI, machine learning and data analytics earned by Harsh Gosalia, AI & ML engineer.";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/certificates" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/certificates" }],
  }),
  component: CertificatesPage,
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

function CertificatesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCertIndex, setActiveCertIndex] = useState(0);

  // Extract unique categories dynamically
  const categories = useMemo(() => {
    const cats = new Set(CERTIFICATES.map((c) => c.category));
    return ["All", ...Array.from(cats)];
  }, []);

  // Filter and search logic
  const filteredCertificates = useMemo(() => {
    return CERTIFICATES.filter((cert) => {
      const matchesCategory =
        selectedCategory === "All" || cert.category === selectedCategory;
      const matchesSearch =
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.category.toLowerCase().includes(searchQuery.toLowerCase());
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
            <Link to="/" hash="certificates" className="inline-flex items-center gap-2">
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
            Verification Gallery
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Certifications Gallery
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Explore my credentials, training programs, and academic courses. Click on any certificate card to view a high-resolution preview inside the lightbox viewer.
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
              placeholder="Search certificates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-border bg-card/40 py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand backdrop-blur transition-all"
            />
          </div>
        </motion.div>

        {/* Certificates Grid */}
        {filteredCertificates.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCertificates.map((cert, i) => (
              <motion.article
                key={cert.title}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                custom={i}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-glow"
              >
                {/* Thumbnail */}
                <div
                  className="relative aspect-[16/10] overflow-hidden border-b border-border bg-neutral-950/20 cursor-pointer flex items-center justify-center p-2"
                  onClick={() => {
                    setActiveCertIndex(i);
                    setIsModalOpen(true);
                  }}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="h-full w-full object-contain rounded-t-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Category badge */}
                  <span className="absolute top-4 left-4 rounded-full border border-brand/30 bg-background/70 px-3 py-1 text-xs font-medium text-brand backdrop-blur">
                    {cert.category}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold leading-tight">{cert.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cert.organization} <span className="text-muted-foreground/30 font-mono mx-1.5">•</span> {cert.year}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">
                    {cert.description}
                  </p>

                  <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border">
                    {cert.verifyUrl ? (
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
                    ) : (
                      <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5 bg-secondary/40 border border-border px-3 py-1.5 rounded-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Certificate Available
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 flex flex-col items-center justify-center text-center"
          >
            <p className="text-lg text-muted-foreground">No certificates found matching your criteria.</p>
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
        images={filteredCertificates}
        currentIndex={activeCertIndex}
        onNavigate={(index) => setActiveCertIndex(index)}
      />
    </div>
  );
}
