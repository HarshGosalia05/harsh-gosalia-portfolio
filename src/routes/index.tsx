import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { About } from "@/components/home/about";
import { Projects } from "@/components/home/projects";
import { Experience } from "@/components/home/experience";
import { Certificates } from "@/components/home/certificates";
import { Achievements } from "@/components/home/achievements";
import { Contact } from "@/components/home/contact";

// Inherits title/description/og from __root.tsx. No og:image so hosting
// injects the project's social preview at serve time.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ property: "og:url", content: "/" }],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Experience />
      <Certificates />
      <Achievements />
      <Contact />
    </>
  );
}
