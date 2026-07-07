import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/page-shell";

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

function AchievementsPage() {
  return <PageShell title="Achievements" description={DESC} sectionId="achievements" />;
}
