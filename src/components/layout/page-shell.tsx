import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageShellProps {
  title: string;
  description?: string;
  /** In-page section id on the home route this page expands on. */
  sectionId?: string;
}

/**
 * Dedicated route pages. Each mirrors a section of the single-page home and
 * links back to the full experience while the expanded page content is built.
 */
export function PageShell({ title, description, sectionId }: PageShellProps) {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-[1280px] flex-col justify-center px-4 py-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <p className="mb-3 font-mono text-xs tracking-widest text-brand uppercase">{title}</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {title} — Harsh Gosalia
        </h1>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          {description ??
            `Explore the ${title.toLowerCase()} highlights on the main page, with a dedicated in-depth view arriving here soon.`}
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="group">
            <Link to="/" hash={sectionId}>
              <ArrowLeft className="transition-transform group-hover:-translate-x-1" />
              Back to overview
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
