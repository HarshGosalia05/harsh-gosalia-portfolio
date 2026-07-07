import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/page-shell";

const TITLE = "Projects — Harsh Gosalia";
const DESC =
  "Selected AI, machine learning and automation projects built by Harsh Gosalia, AI & ML engineer based in Ahmedabad.";

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

function ProjectsPage() {
  return <PageShell title="Projects" description={DESC} sectionId="featured-projects" />;
}
