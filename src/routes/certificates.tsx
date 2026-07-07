import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/page-shell";

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

function CertificatesPage() {
  return <PageShell title="Certificates" description={DESC} sectionId="certificates" />;
}
