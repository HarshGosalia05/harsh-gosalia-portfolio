import {
  ScanEye,
  Workflow,
  FileSearch,
  BarChart3,
  FileUser,
  Activity,
  Code2,
  Film,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import demoVideo from "@/assets/incident-response-demo.mp4";
import fashionImg from "@/assets/fashion.png";
import fashionVideo from "@/assets/videos/fashion-recommender-demo.mp4";

export interface Project {
  icon: LucideIcon;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  details: string;
  category?: string;
  badge?: string;
  features?: string[];
  demoVideo?: string;
  hideDemo?: boolean;
  coverImage?: string;
}

export const PROJECTS: Project[] = [
  {
    icon: Workflow,
    title: "Incident Response Agent",
    description:
      "An AI-powered Incident Investigation platform developed during HackBaroda 2026. The system uses a multi-agent workflow, Retrieval-Augmented Generation (RAG), historical incident learning, root cause analysis, automated remediation recommendations, analytics dashboard, and investigation history to reduce incident resolution time.",
    tech: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "LangChain",
      "OpenAI",
      "ChromaDB",
      "RAG",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/Nandinivora18/Incident-Response-Agent/",
    demo: "",
    details: "#",
    category: "Featured AI Project",
    badge: "HackBaroda 2026 — Round 2 Finalist",
    demoVideo: demoVideo,
    features: [
      "Multi-Agent Investigation",
      "Root Cause Analysis",
      "Historical Learning",
      "RAG Knowledge Base",
      "Automated Remediation",
      "Analytics Dashboard",
      "Incident Timeline",
      "Runbook Execution",
      "Git Patch Recommendation",
    ],
  },
  {
    icon: Activity,
    title: "MediScan – AI Disease Prediction Platform",
    description:
      "An AI-powered healthcare platform that predicts diseases using machine learning models. Currently supports asthma prediction with an expandable architecture for multiple diseases.",
    tech: [
      "Python",
      "Streamlit",
      "Scikit-learn",
      "Random Forest",
      "MongoDB",
      "Pandas",
      "Matplotlib",
      "XAI",
    ],
    github: "",
    demo: "",
    details: "#",
    category: "Healthcare AI",
    badge: "Machine Learning",
    features: [
      "Disease Prediction",
      "Asthma Risk Assessment",
      "Machine Learning Pipeline",
      "Interactive Dashboard",
      "Data Visualization",
      "MongoDB Integration",
      "Explainable AI (XAI)",
    ],
  },
  {
    icon: FileSearch,
    title: "FileNest – AI File Management System",
    description:
      "An intelligent document and file management platform with AI-assisted organization, search and smart categorization features.",
    tech: ["React", "FastAPI", "Python", "MongoDB", "AI", "REST API"],
    github: "",
    demo: "",
    details: "#",
    category: "Artificial Intelligence",
    badge: "AI Productivity",
    features: [
      "AI Organization",
      "Smart Categorization",
      "Semantic Search",
      "Metadata Tagging",
    ],
  },
  {
    icon: ScanEye,
    title: "Thermal Image Super Resolution",
    description:
      "An AI-powered thermal image enhancement system developed for Smart India Hackathon to improve low-resolution thermal imagery using deep learning techniques.",
    tech: ["Python", "OpenCV", "PyTorch", "Deep Learning", "Computer Vision", "Image Processing"],
    github: "",
    demo: "",
    details: "#",
    category: "Computer Vision",
    badge: "Smart India Hackathon 2025",
    features: [
      "Thermal Image Enhancement",
      "Deep Learning Models",
      "Super Resolution Pipeline",
      "Low-Resolution Upscaling",
    ],
  },
  {
    icon: Code2,
    title: "Syntax Reviser",
    description:
      "An interactive programming syntax learning platform that helps students master coding syntax through real-time practice, quizzes and revision challenges.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "HTML", "CSS"],
    github: "",
    demo: "",
    details: "#",
    category: "EdTech",
    badge: "🏆 First Prize Winner",
    features: [
      "Interactive Practice",
      "Real-Time Quizzes",
      "Revision Challenges",
      "Syntax Validation",
    ],
  },
  {
    icon: Workflow,
    title: "AI Workflow Automation Suite",
    description:
      "A workflow automation platform built with n8n that connects APIs, AI models and webhooks to automate repetitive business processes.",
    tech: ["n8n", "REST APIs", "Webhooks", "LLMs", "JavaScript"],
    github: "",
    demo: "",
    details: "#",
    category: "Workflow Automation",
    badge: "Internship Project",
    features: [
      "n8n Orchestration",
      "API Integration",
      "Webhook Triggers",
      "LLM Agent Workflows",
    ],
  },
  {
    icon: BarChart3,
    title: "Job Lead Intelligence Aggregator",
    description:
      "Aggregates business leads from multiple sources, removes duplicates and generates opportunity scores using custom business logic.",
    tech: ["n8n", "Google Maps", "JavaScript", "APIs", "Google Sheets"],
    github: "",
    demo: "",
    details: "#",
    category: "Automation",
    badge: "Lead Intelligence",
    features: [
      "Lead Aggregation",
      "De-duplication Engine",
      "Opportunity Scoring",
      "Google Sheets Sync",
    ],
  },
  {
    icon: FileUser,
    title: "AI Job Application Tracker",
    description:
      "Tracks job applications automatically using Gmail, Google Sheets, Telegram and workflow automation for centralized monitoring.",
    tech: ["n8n", "Gmail API", "Google Sheets", "Telegram", "JavaScript"],
    github: "",
    demo: "",
    details: "#",
    category: "Career Automation",
    badge: "Automation",
    features: [
      "Gmail Application Detection",
      "Automated Tracking Sheets",
      "Telegram Notifications",
      "Centralized Dashboard",
    ],
  },
  {
    icon: Film,
    title: "AI Fashion Recommendation System",
    coverImage: fashionImg,
    description:
      "A recommendation engine that suggests movies using collaborative filtering and content-based recommendation algorithms.",
    tech: ["Python", "Pandas", "Scikit-learn", "NumPy", "Machine Learning"],
    github: "https://github.com/HarshGosalia05/Fashion-Recommender-system",
    demo: "",
    demoVideo: fashionVideo,
    details: "#",
    category: "Machine Learning",
    badge: "Recommendation Engine",
    features: [
      "Collaborative Filtering",
      "Content-Based Filtering",
      "Hybrid Recommendations",
      "Accuracy Metrics Validation",
    ],
  },
  {
    icon: Smartphone,
    title: "Flutter Learning Management App",
    description:
      "A mobile learning platform inspired by Moodle that provides course management, learning resources and student-friendly navigation.",
    tech: ["Flutter", "Dart", "Firebase", "SQLite"],
    github: "",
    demo: "",
    details: "#",
    category: "Mobile Development",
    badge: "Flutter",
    features: [
      "Course Management",
      "Resource Access",
      "Offline Database (SQLite)",
      "Firebase Sync",
    ],
  },
];
