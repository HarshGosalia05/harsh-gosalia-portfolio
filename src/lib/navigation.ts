export interface NavLink {
  label: string;
  to: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "Certificates", to: "/certificates" },
  { label: "Achievements", to: "/achievements" },
  { label: "Contact", to: "/contact" },
];

export interface Section {
  id: string;
  label: string;
  /** DOM element id to scroll to. `null` scrolls to the top (home/hero). */
  domId: string | null;
}

/**
 * Single-page navigation sections. The navbar smooth-scrolls to each
 * section's `domId` when it exists on the home page.
 */
export const SECTIONS: Section[] = [
  { id: "home", label: "Home", domId: null },
  { id: "about", label: "About", domId: "about" },
  { id: "projects", label: "Projects", domId: "featured-projects" },
  { id: "experience", label: "Experience", domId: "experience" },
  { id: "certificates", label: "Certificates", domId: "certificates" },
  { id: "achievements", label: "Achievements", domId: "achievements" },
  { id: "contact", label: "Contact", domId: "contact" },
];

export const SITE = {
  name: "Harsh Gosalia",
  title: "Harsh Gosalia — AI & Machine Learning Engineer",
  description:
    "Portfolio of Harsh Gosalia, a Computer Science Engineering (AI & ML) student at GLS University, Ahmedabad — building intelligent, production-grade AI, ML and automation software.",
  keywords:
    "Harsh Gosalia, AI Engineer, Machine Learning Engineer, Deep Learning, LLMs, RAG, Multi-Agent AI, Automation, n8n, Computer Vision, FastAPI, React, GLS University, Ahmedabad, portfolio",
  university: "GLS University",
  department: "Computer Science Engineering (AI & ML)",
} as const;

export const SOCIALS = {
  github: "https://github.com/HarshGosalia05",
  linkedin: "https://www.linkedin.com/in/harsh-gosalia-950774296",
} as const;

/** Single reusable resume link used everywhere across the site. */
export const RESUME_URL = "/Harsh_Gosalia_Resume.pdf";

export const CONTACT = {
  email: "harshgosalia05@gmail.com",
  phone: "+91 98765 43210",
  location: "Ahmedabad, Gujarat, India",
  resume: RESUME_URL,
} as const;
