import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/page-shell";

const TITLE = "Contact — Harsh Gosalia";
const DESC =
  "Get in touch with Harsh Gosalia, AI & ML engineer based in Ahmedabad, for collaborations, internships and projects.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return <PageShell title="Contact" description={DESC} sectionId="contact" />;
}
