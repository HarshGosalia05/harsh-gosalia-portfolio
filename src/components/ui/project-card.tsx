import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  isFlipped: boolean;
  onExpand: (title: string | null) => void;
  onPlayVideo: (videoUrl: string) => void;
}

export function ProjectCard({
  project,
  index,
  isFlipped,
  onExpand,
  onPlayVideo,
}: ProjectCardProps) {
  return (
    <div className="group relative w-full h-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] will-change-transform rounded-2xl [perspective:1200px] backdrop-blur">
      <div
        className={`relative w-full h-full transition-transform duration-600 ease-out [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
      >
        {/* Front Side */}
        <div
          className={`relative w-full h-full flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/70 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] ${isFlipped ? "pointer-events-none" : ""}`}
        >
          {/* Thumbnail */}
          <div className="relative aspect-[16/10] overflow-hidden border-b border-border shrink-0">
            {project.coverImage && (
              <div className="absolute inset-0 z-10 w-full h-full bg-background overflow-hidden rounded-t-2xl">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-400 ease-out group-hover:scale-[1.04]"
                  onError={(e) => {
                    (e.currentTarget.parentElement as HTMLElement).style.display = 'none';
                  }}
                />
                {/* Premium overlay gradient and soft blue inner glow on hover */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/90 via-background/10 to-transparent transition-shadow duration-400 group-hover:shadow-[inset_0_0_30px_color-mix(in_oklab,var(--brand)_40%,transparent)]" />
              </div>
            )}

            {/* Fallback / Icon Placeholder */}
            <div
              className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-110"
              style={{
                background: `linear-gradient(${135 + index * 30}deg, color-mix(in oklab, var(--brand) 30%, transparent), color-mix(in oklab, var(--brand-cyan) 22%, transparent))`,
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

              {/* Technology tags */}
              <div className="mt-4 flex flex-wrap gap-2">
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
                <Button size="sm" variant="outline" disabled>
                  <Github />
                  Coming Soon
                </Button>
              )}
              {!project.hideDemo &&
                (project.demoVideo ? (
                  <Button
                    onClick={() => onPlayVideo(project.demoVideo!)}
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
                    Coming Soon
                  </Button>
                ))}
              <Button
                onClick={() => onExpand(project.title)}
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
                <Button size="sm" variant="outline" disabled>
                  <Github />
                  Coming Soon
                </Button>
              )}
              {!project.hideDemo &&
                (project.demoVideo ? (
                  <Button
                    onClick={() => onPlayVideo(project.demoVideo!)}
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
                    Coming Soon
                  </Button>
                ))}
              <Button
                onClick={() => onExpand(null)}
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
}
