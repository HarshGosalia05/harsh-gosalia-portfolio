import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/page-shell";

const TITLE = "Experience — Harsh Gosalia";
const DESC =
  "Professional experience, internships and industry programs of Harsh Gosalia, AI & ML engineer based in Ahmedabad.";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/experience" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return <PageShell title="Experience" description={DESC} sectionId="experience" />;
}
