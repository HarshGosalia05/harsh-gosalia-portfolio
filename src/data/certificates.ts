import certOracleAI from "@/assets/certificates/01-oracle-oci-ai-foundations-associate-2025.jpeg";
import certNptelRecSys from "@/assets/certificates/02-nptel-recommender-systems-iit-kharagpur-2026.jpeg";
import certDeloitteDA from "@/assets/certificates/03-deloitte-data-analytics-job-simulation-2026.jpeg";
import certGreenSkillsAI from "@/assets/certificates/04-green-skills-artificial-intelligence-2026.jpeg";
import certPowerBI from "@/assets/certificates/05-microsoft-power-bi-workshop-2026.jpeg";
import certReactJS from "@/assets/certificates/06-create-dynamic-web-apps-reactjs-2025.jpeg";
import certJava from "@/assets/certificates/07-coursera-java-programming-2025.jpeg";
import certIBMAI from "@/assets/certificates/08-ibm-skillsbuild-artificial-intelligence-2024.jpeg";
import certSimplilearnAI from "@/assets/certificates/09-simplilearn-artificial-intelligence-fundamentals-2026.jpeg";
import certAITools from "@/assets/certificates/10-be10x-ai-tools-workshop-2025.jpeg";
import certAICTEInternship from "@/assets/certificates/11-aicte-edunet-ai-data-analytics-internship-2025.jpeg";
import certCambridge from "@/assets/certificates/12-cambridge-english-qualifications-2025.jpeg";
import certIsroSpace from "@/assets/certificates/14-isro-agnirva-space-internship-2025.jpeg";

import achSIH2025 from "@/assets/achievements/01-smart-india-hackathon-2025-grand-finale.jpeg";
import achTechHack from "@/assets/achievements/02-cyber-shadez-2025-tech-hackathon-first-prize.jpeg";
import achCodeRelay from "@/assets/achievements/03-cyber-shadez-2025-code-relay-second-prize.jpeg";
import achInternalHack from "@/assets/achievements/04-gls-internal-hackathon-2025.jpeg";
import achSquashBug from "@/assets/achievements/05-cyber-shadez-2024-squash-the-bug.jpeg";

export interface Certificate {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: string;
  image: string;
  description: string;
  verifyUrl?: string; // Optional verify link
}

export interface Achievement {
  id: string;
  title: string; // Competition name
  organization: string;
  year: string;
  category: string;
  image: string;
  description: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    id: "oracle-ai",
    title: "Oracle Cloud Infrastructure AI Foundations Associate",
    organization: "Oracle",
    year: "2025",
    category: "Artificial Intelligence",
    image: certOracleAI,
    description: "Demonstrates foundational knowledge of AI and machine learning services on Oracle Cloud Infrastructure, including OCI Vision, Language and Speech.",
    // verifyUrl: "https://your-verification-link.com" // Add link if available
  },
  {
    id: "nptel-recsys",
    title: "NPTEL — Recommender Systems",
    organization: "IIT Kharagpur",
    year: "2026",
    category: "Machine Learning",
    image: certNptelRecSys,
    description: "An in-depth course on recommender system design, collaborative filtering, content-based filtering and matrix factorization techniques.",
  },
  {
    id: "deloitte-da",
    title: "Deloitte Data Analytics Job Simulation",
    organization: "Deloitte",
    year: "2026",
    category: "Data Analytics",
    image: certDeloitteDA,
    description: "Completed a virtual job simulation focused on data analytics, business intelligence, data cleaning, visualization and client storytelling.",
  },
  {
    id: "green-skills-ai",
    title: "Green Skills in Artificial Intelligence",
    organization: "Microsoft · Commonwealth of Learning · AICTE",
    year: "2026",
    category: "Artificial Intelligence",
    image: certGreenSkillsAI,
    description: "Explores the intersections of sustainability and AI, detailing how artificial intelligence can drive green solutions and environmental impact.",
  },
  {
    id: "microsoft-powerbi",
    title: "Microsoft Power BI Workshop",
    organization: "Microsoft",
    year: "2026",
    category: "Data Analytics",
    image: certPowerBI,
    description: "Hands-on workshop covering data modeling, DAX calculations, interactive dashboard design and business intelligence reporting with Power BI.",
  },
  {
    id: "reactjs",
    title: "Create Dynamic Web Apps with ReactJS",
    organization: "Coursera · Board Infinity",
    year: "2025",
    category: "Web Development",
    image: certReactJS,
    description: "Hands-on certification in building dynamic, modular web user interfaces using React.js components, state management, and props.",
  },
  {
    id: "java",
    title: "Java Programming",
    organization: "Coursera",
    year: "2025",
    category: "Software Engineering",
    image: certJava,
    description: "Advanced training in object-oriented programming concepts using Java, covering data structures, algorithm design, and software problem-solving.",
  },
  {
    id: "ibm-ai",
    title: "IBM SkillsBuild — Artificial Intelligence",
    organization: "IBM",
    year: "2024",
    category: "Artificial Intelligence",
    image: certIBMAI,
    description: "IBM-certified training in AI fundamentals, neural networks, deep learning concepts and responsible AI practices through the SkillsBuild platform.",
  },
  {
    id: "simplilearn-ai",
    title: "Artificial Intelligence Fundamentals",
    organization: "Simplilearn",
    year: "2026",
    category: "Artificial Intelligence",
    image: certSimplilearnAI,
    description: "Comprehensive introduction to artificial intelligence concepts, search algorithms, knowledge representation, and basic machine learning workflows.",
  },
  {
    id: "be10x-aitools",
    title: "AI Tools Workshop",
    organization: "be10x",
    year: "2025",
    category: "AI Tools",
    image: certAITools,
    description: "Intensive workshop on utilizing state-of-the-art AI productivity tools, prompt engineering, and workflow automation techniques.",
  },
  {
    id: "aicte-internship",
    title: "AI & Data Analytics Internship",
    organization: "AICTE · Shell · Edunet Foundation",
    year: "2025",
    category: "Internship",
    image: certAICTEInternship,
    description: "A structured industry internship program sponsored by AICTE, Shell and Edunet Foundation, covering real-world AI and data science project experience.",
  },
  {
    id: "cambridge-english",
    title: "Cambridge English Qualifications",
    organization: "Cambridge University Press & Assessment",
    year: "2025",
    category: "Professional Development",
    image: certCambridge,
    description: "Certification demonstrating professional proficiency in English language communication, writing, reading comprehension, and business presentation.",
  },
  {
    id: "isro-internship",
    title: "ISRO Agnirva Space Internship",
    organization: "ISRO · Agnirva",
    year: "2025",
    category: "Internship",
    image: certIsroSpace,
    description: "Space tech research internship covering satellite data analysis, remote sensing fundamentals, and aerospace software tools under ISRO-aligned mentors.",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "sih-2025",
    title: "Smart India Hackathon 2025 Grand Finale",
    organization: "Ministry of Education, Govt of India",
    year: "2025",
    category: "National Hackathon",
    image: achSIH2025,
    description: "Selected as a national finalist for SIH 2025, designing and presenting a Thermal Image Super Resolution AI model to solve real-time surveillance challenges.",
  },
  {
    id: "gls-tech-hackathon",
    title: "Tech Hackathon (Cyber Shadez 2025)",
    organization: "GLS University",
    year: "2025",
    category: "First Prize",
    image: achTechHack,
    description: "Won First Prize for building 'Syntax Reviser', an interactive educational platform making coding syntax accessible and fun for beginners.",
  },
  {
    id: "gls-code-relay",
    title: "Code Relay (Cyber Shadez 2025)",
    organization: "GLS University",
    year: "2025",
    category: "Second Prize",
    image: achCodeRelay,
    description: "Secured Second Prize in a collaborative coding event testing algorithmic thinking, rapid integration, and teamwork under strict time constraints.",
  },
  {
    id: "gls-internal-hack",
    title: "GLS Internal Hackathon 2025",
    organization: "GLS University",
    year: "2025",
    category: "First Prize",
    image: achInternalHack,
    description: "Awarded first place internally for conceptualizing and developing a prototype for AI-driven academic assistant software.",
  },
  {
    id: "gls-squash-bug",
    title: "Squash The Bug (Cyber Shadez 2024)",
    organization: "GLS University",
    year: "2024",
    category: "Winner",
    image: achSquashBug,
    description: "Diagnosed, debugged, and optimized complex broken codebases across multiple languages to win the debugging speed championship.",
  },
];
