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
import thermalImg from "@/assets/thermal-sr.png";
import thermalReport from "@/assets/documents/thermal-sr-report.pdf";
import fileNestImg from "@/assets/filenest.png";
import incidentResponseImg from "@/assets/incident-response-agent.jpeg";

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
  demoLabel?: string;
  longOverview?: string;
  detailedSections?: { title: string; items: string[] }[];
}

export const PROJECTS: Project[] = [
  {
    icon: Workflow,
    title: "Incident Response Agent",
    description:
      "An AI-powered Incident Response platform developed during HackBaroda 2026 that automates incident investigation using Multi-Agent AI, Retrieval-Augmented Generation (RAG), historical knowledge retrieval, root cause analysis and intelligent remediation planning.",
    longOverview: "Incident Response Agent is an enterprise AI platform developed to help DevOps and Site Reliability Engineering (SRE) teams investigate production incidents significantly faster.\n\nThe platform combines multiple AI agents with Retrieval-Augmented Generation (RAG) to understand incident descriptions, retrieve historical cases, identify probable root causes and generate intelligent remediation plans.\n\nInstead of manually searching documentation, dashboards and previous tickets, engineers receive structured AI-assisted investigations within seconds.",
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
      "Docker"
    ],
    github: "https://github.com/Nandinivora18/Incident-Response-Agent/",
    demo: "",
    details: "#",
    category: "Artificial Intelligence • Multi-Agent Systems",
    badge: "HackBaroda 2026 Round 2 Finalist",
    demoVideo: demoVideo,
    coverImage: incidentResponseImg,
    features: [
      "Multi-Agent AI Workflow",
      "Retrieval-Augmented Generation (RAG)",
      "Root Cause Analysis",
      "Historical Incident Learning",
      "Automated Remediation",
      "Intelligent Knowledge Base",
      "Incident Timeline",
      "Analytics Dashboard",
      "Similar Incident Search",
      "Investigation Reports",
      "AI Recommendations",
      "Git Patch Suggestions",
      "DevOps Workflow Automation",
      "Interactive Dashboard"
    ],
    detailedSections: [
      {
        title: "Problem Statement",
        items: [
          "Modern production environments generate thousands of alerts every day.",
          "Engineers spend valuable time searching logs, documentation and previous incidents to identify root causes.",
          "Knowledge remains scattered across multiple systems, making incident investigation slow, repetitive and inefficient."
        ]
      },
      {
        title: "Solution",
        items: [
          "The platform automates the complete incident investigation workflow.",
          "Understands incoming incidents",
          "Searches historical incidents using RAG",
          "Retrieves similar previous cases",
          "Identifies probable root causes",
          "Generates remediation recommendations",
          "Builds structured investigation reports",
          "Maintains organizational learning for future incidents"
        ]
      },
      {
        title: "Architecture",
        items: [
          "User → React Dashboard → FastAPI Backend → AI Agents → LangChain → OpenAI → Vector Database (ChromaDB) → Knowledge Base → Incident Report"
        ]
      },
      {
        title: "Impact",
        items: [
          "Reduces Mean Time To Resolution (MTTR)",
          "Improves DevOps productivity",
          "Reuses historical organizational knowledge",
          "Standardizes incident investigation",
          "Reduces repetitive troubleshooting",
          "Supports continuous operational learning"
        ]
      },
      {
        title: "Future Enhancements",
        items: [
          "Kubernetes Integration",
          "Grafana Integration",
          "Prometheus Alerts",
          "Jira Integration",
          "Slack Notifications",
          "GitHub Actions Integration",
          "AI Incident Prediction",
          "Multi-Cloud Support"
        ]
      }
    ]
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
      "A cloud-based file management platform developed to solve a real problem faced by students in college computer laboratories by providing secure cloud storage, cross-device access, and centralized class resources.",
    longOverview: "FileNest is a cloud-based file management platform developed after identifying a real problem faced by students in our college.\n\nStudents frequently use different laboratory computers for assignments, projects and practical work. Their files remain stored on public systems, creating privacy concerns while also making it difficult to access files from another computer or mobile device.\n\nTo solve this problem, FileNest provides a secure cloud workspace where users can upload, organize and access their files from anywhere. The platform also includes a Class Resources section where faculty can upload common study material that becomes instantly available to all students.\n\nThe project was demonstrated in class as a practical solution for improving student productivity, accessibility and digital privacy.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Supabase Storage", "PostgreSQL", "Vercel"],
    github: "https://github.com/HarshGosalia05/FileNest",
    demo: "https://file-nest-hg.vercel.app/",
    details: "#",
    category: "Cloud Storage • Productivity",
    badge: "Real-World Problem Solver",
    coverImage: fileNestImg,
    features: [
      "Secure Cloud Storage",
      "Personal Workspace",
      "Class Resources",
      "Authentication",
      "Upload Files",
      "Drag & Drop Upload",
      "PDF Preview",
      "Image Preview",
      "File Download",
      "Delete Files",
      "Search Files",
      "Storage Usage Dashboard",
      "Upload Progress",
      "Recent Files",
      "File Categories",
      "Responsive Dashboard",
      "Cross Device Access",
      "Cloud Synchronization",
      "Mobile Friendly UI",
      "Modern Dashboard"
    ],
    detailedSections: [
      {
        title: "Problem Solved",
        items: [
          "Files stored on public laboratory computers",
          "Privacy issues",
          "Difficult access across different systems",
          "No centralized file management",
          "Class resources scattered across multiple platforms",
          "Difficult project organization"
        ]
      },
      {
        title: "Implemented Features",
        items: [
          "React Frontend",
          "Supabase Backend",
          "Cloud Storage",
          "Authentication",
          "Database Integration",
          "Real-time Storage Usage",
          "File Metadata",
          "Responsive Design",
          "Protected User Workspace"
        ]
      },
      {
        title: "Architecture",
        items: [
          "User → React + TypeScript → Supabase Authentication → Supabase Database → Supabase Storage → Cloud File Access"
        ]
      },
      {
        title: "Future Features",
        items: [
          "AI File Categorization",
          "AI Smart Search",
          "OCR Document Scanner",
          "Duplicate Detection",
          "Version History",
          "Folder Support",
          "Shareable Links",
          "AI Document Summary",
          "Automatic Backup",
          "End-to-End Encryption",
          "File Version Control",
          "File Compression",
          "Storage Analytics"
        ]
      },
      {
        title: "Impact",
        items: [
          "Solved a real college problem.",
          "Improved student privacy.",
          "Eliminated dependency on laboratory computers.",
          "Enabled secure cloud-based access from anywhere.",
          "Simplified sharing of classroom resources.",
          "Demonstrated as a real-world productivity solution."
        ]
      }
    ]
  },
  {
    icon: ScanEye,
    title: "RGB-Guided Thermal Image Super-Resolution",
    description:
      "A deep learning-based computer vision project that enhances low-resolution thermal satellite images using high-resolution RGB guidance. The model reconstructs detailed thermal imagery while preserving thermal consistency through a physics-aware learning approach.",
    tech: ["Python", "PyTorch", "Rasterio", "NumPy", "Scikit-image", "FastAPI", "React", "Docker"],
    github: "",
    demo: thermalReport,
    demoLabel: "📄 Project Report",
    details: "#",
    category: "Computer Vision • Smart India Hackathon 2025 Finalist",
    badge: "SIH 2025 Grand Finale",
    coverImage: thermalImg,
    features: [
      "RGB Guided Thermal Super Resolution",
      "DualEDSRPlus Deep Learning Model",
      "Physics-aware Loss Function",
      "Satellite GeoTIFF Processing",
      "Patch-based Training Pipeline",
      "PSNR / SSIM Evaluation",
      "FastAPI Deployment Ready",
      "React Integration Ready",
    ],
    detailedSections: [
      {
        title: "Problem Statement",
        items: [
          "Low-resolution thermal imagery",
          "Loss of structural details",
          "Poor visualization"
        ]
      },
      {
        title: "Dataset",
        items: [
          "SSL4EO Satellite Dataset",
          "Bands: B2, B3, B4, B10, B11"
        ]
      },
      {
        title: "Model",
        items: ["DualEDSRPlus"]
      },
      {
        title: "Pipeline",
        items: [
          "GeoTIFF Reading",
          "RGB Extraction",
          "Thermal Extraction",
          "Normalization",
          "Patch Generation",
          "Training",
          "Inference"
        ]
      },
      {
        title: "Evaluation Metrics",
        items: ["PSNR", "SSIM", "RMSE"]
      },
      {
        title: "Future Improvements",
        items: [
          "SwinIR backbone",
          "ONNX optimization",
          "TensorRT",
          "Kubernetes Deployment"
        ]
      }
    ]
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
