import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/page-shell";

const TITLE = "About — Harsh Gosalia";
const DESC =
  "About Harsh Gosalia — Computer Science Engineering (AI & ML) student at GLS University, Ahmedabad, building intelligent AI, ML and automation software.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/about" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return <PageShell title="About" description={DESC} sectionId="about" />;
}
