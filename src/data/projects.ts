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
import jobAppTrackerImg from "@/assets/job-application-auto-tracker.png";
import jobAppTrackerVideo from "@/assets/videos/job-application-auto-tracker-demo.mp4";
import jobLeadTrackerImg from "@/assets/job-lead-tracker.png";
import leadIntelligenceImg from "@/assets/lead-intelligence-workflow.png";
import leadIntelligenceVideo from "@/assets/videos/lead-intelligence-demo.mp4";
import glsStudentDashboardImg from "@/assets/gls-student-dashboard.png";
import glsStudentDashboardVideo from "@/assets/videos/gls-student-dashboard-demo.mp4";

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
  containImage?: boolean;
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
    title: "Lead Intelligence Aggregator – Multi-Source Business Scoring",
    description:
      "Designed and developed an end-to-end Lead Intelligence Aggregator using n8n that collects business information from multiple public data sources, cleans and merges duplicate records, calculates opportunity scores based on configurable business rules, stores results in Google Sheets, logs workflow failures, and automatically sends lead summaries and error alerts through Telegram.",
    longOverview: "Built a fully automated n8n workflow that aggregates business information from Google Maps (Apify) and OpenStreetMap, normalizes data into a common structure, removes duplicate businesses, resolves conflicts between sources, computes a dynamic opportunity score based on configurable business rules, logs qualified leads into Google Sheets, records workflow failures into a dedicated Error Sheet, and sends automated Telegram notifications for both workflow errors and Top 5 business opportunities.",
    tech: [
      "n8n",
      "JavaScript",
      "HTTP Request Nodes",
      "Google Sheets API",
      "Telegram Bot API",
      "Apify Google Maps API",
      "OpenStreetMap Nominatim API",
      "Merge Node",
      "Sort Node",
      "Code Nodes"
    ],
    github: "https://github.com/HarshGosalia05/Task03-Lead-Intelligence-Aggregator",
    demo: "",
    demoVideo: leadIntelligenceVideo,
    details: "#",
    category: "Workflow Automation | n8n | Business Lead Intelligence",
    badge: "Workflow Automation",
    coverImage: leadIntelligenceImg,
    containImage: true,
    features: [
      "Multi-source lead aggregation",
      "Google Maps (Apify) integration",
      "OpenStreetMap (Nominatim) integration",
      "Data normalization",
      "Duplicate detection",
      "Conflict resolution",
      "Website status processing",
      "Social presence detection",
      "Confidence level calculation",
      "Dynamic opportunity scoring",
      "Automatic Google Sheets reporting",
      "Error logging system",
      "Telegram workflow alerts",
      "Telegram Top-5 lead notifications",
      "Configurable scoring weights",
      "Modular workflow architecture"
    ],
    detailedSections: [
      {
        title: "Problem Statement",
        items: [
          "Sales and marketing teams often spend significant time manually searching multiple platforms to identify high-quality business leads.",
          "Data from different sources is inconsistent, duplicated, incomplete, and difficult to prioritize.",
          "There is also no centralized automation to monitor workflow failures or instantly notify teams about important opportunities."
        ]
      },
      {
        title: "Solution",
        items: [
          "Built a fully automated n8n workflow that aggregates business information from Google Maps (Apify) and OpenStreetMap.",
          "Normalizes data into a common structure and removes duplicate businesses.",
          "Computes a dynamic opportunity score based on configurable business rules.",
          "Logs qualified leads into Google Sheets and records workflow failures into a dedicated Error Sheet.",
          "Sends automated Telegram notifications for both workflow errors and Top 5 business opportunities."
        ]
      },
      {
        title: "Workflow Architecture",
        items: [
          "Manual Trigger → Configuration Node → Parallel Execution (Google Maps API, OpenStreetMap API, Website & Social Presence Processing) → Normalize Google Maps Data → Normalize OpenStreetMap Data → Merge Multiple Sources → Duplicate Detection & Conflict Resolution → Website & Confidence Processing → Opportunity Score Calculation → Remove Invalid Records → Sort by Opportunity Score → Google Sheets Output → Generate Telegram Summary → Send Top 5 Leads to Telegram",
          "Separate Error Branch: API Failure → Continue On Error → Log Error to Google Sheets → Send Telegram Error Alert"
        ]
      },
      {
        title: "Scoring Logic",
        items: [
          "No Website = +30",
          "Social Presence = +15",
          "High Rating & Reviews = +25",
          "Target Business Category = +15",
          "Multi-source Confirmation = +15"
        ]
      },
      {
        title: "Project Outcome",
        items: [
          "Successfully automated business lead aggregation with dynamic scoring.",
          "Reduced manual effort in lead discovery and improved lead prioritization.",
          "Centralized reporting through Google Sheets.",
          "Enabled real-time Telegram notifications for both workflow monitoring and high-value business opportunities."
        ]
      }
    ]
  },
  {
    icon: BarChart3,
    title: "AI-Powered Job Lead Tracker",
    description:
      "An AI-powered workflow automation system that automatically discovers remote software jobs, filters relevant opportunities, evaluates each role using Groq LLM, ranks jobs based on AI fit scores and stores structured results in Google Sheets.",
    longOverview: "This project was developed during my Automation Internship at Xyzon.\n\nThe objective was to automate the repetitive task of searching remote software jobs every day.\n\nInstead of manually browsing job portals, the workflow automatically fetches remote software jobs from the Remotive API, filters only relevant software roles, evaluates each opportunity using Groq LLM, generates an AI-based fit score, ranks jobs by relevance and stores the final results inside Google Sheets.\n\nThis automation significantly reduces manual effort while helping developers quickly identify the most suitable opportunities.",
    tech: [
      "n8n",
      "JavaScript",
      "Groq LLM",
      "Remotive API",
      "Google Sheets API",
      "REST APIs",
      "HTTP Request",
      "AI Agent",
      "JSON Processing",
      "Workflow Automation"
    ],
    github: "https://github.com/HarshGosalia05/n8n-aAI-Powered-Job-Lead-Tracker",
    demo: "",
    details: "#",
    category: "Workflow Automation",
    badge: "Xyzon Internship Project",
    coverImage: jobLeadTrackerImg,
    containImage: true,
    features: [
      "Automated Job Discovery",
      "Daily Scheduled Execution",
      "Remotive API Integration",
      "AI Job Ranking",
      "Groq LLM Integration",
      "Intelligent Job Filtering",
      "AI Recommendation Summary",
      "Google Sheets Integration",
      "Duplicate Prevention",
      "Match Percentage Calculation",
      "Workflow Automation",
      "Production Ready Architecture"
    ],
    detailedSections: [
      {
        title: "Problem Solved",
        items: [
          "Job seekers spend considerable time manually browsing multiple job portals.",
          "Relevant opportunities are often missed.",
          "Evaluating every job manually is repetitive and inefficient.",
          "Keeping job records updated every day is difficult."
        ]
      },
      {
        title: "Solution",
        items: [
          "The workflow fully automates the entire process.",
          "Fetches latest remote jobs",
          "Filters software-related roles",
          "Sends each job title to Groq LLM",
          "Generates AI fit score",
          "Produces AI recommendation",
          "Ranks opportunities",
          "Removes duplicate entries",
          "Updates Google Sheets automatically"
        ]
      },
      {
        title: "Workflow",
        items: [
          "Schedule Trigger → Remotive API → JavaScript Processing → Keyword Filtering → Groq AI Agent → AI Response Parsing → Google Sheets"
        ]
      },
      {
        title: "Challenges Solved",
        items: [
          "AI JSON parsing",
          "Prompt Engineering",
          "Duplicate record handling",
          "Workflow synchronization",
          "AI retry logic",
          "Keyword optimization"
        ]
      },
      {
        title: "Real World Impact",
        items: [
          "Eliminates repetitive job searching.",
          "Saves daily manual effort.",
          "Automatically ranks jobs using AI.",
          "Maintains a structured job tracker.",
          "Demonstrates practical AI workflow automation."
        ]
      },
      {
        title: "Future Improvements",
        items: [
          "Resume Matching",
          "LinkedIn Integration",
          "Indeed Integration",
          "Telegram Notifications",
          "WhatsApp Alerts",
          "Email Digest",
          "Dashboard Analytics",
          "Multi-platform Job Search"
        ]
      }
    ]
  },
  {
    icon: FileUser,
    title: "AI Job Application Auto Tracker",
    description:
      "An intelligent workflow automation built using n8n that automatically tracks job application emails, stores applicant information in Google Sheets and instantly sends Telegram notifications.",
    longOverview: "AI Job Application Auto Tracker is an automation workflow developed to eliminate manual tracking of job application emails.\n\nWhenever a new application email arrives in Gmail, the workflow automatically extracts important information, checks whether the application already exists, stores new records inside Google Sheets and sends real-time notifications through Telegram.\n\nThe system reduces repetitive work while ensuring every application is recorded accurately.",
    tech: [
      "n8n",
      "Gmail API",
      "Google Sheets API",
      "Telegram Bot API",
      "Webhooks",
      "REST APIs",
      "JavaScript Expressions"
    ],
    github: "https://github.com/HarshGosalia05/job-application-auto-tracker",
    demo: "",
    demoVideo: jobAppTrackerVideo,
    coverImage: jobAppTrackerImg,
    details: "#",
    category: "Workflow Automation • n8n",
    badge: "Automation Project",
    features: [
      "Gmail Trigger",
      "Automatic Email Processing",
      "Data Extraction",
      "Duplicate Detection",
      "Google Sheets Integration",
      "Telegram Notifications",
      "Workflow Automation",
      "Real-time Tracking",
      "Low-Code Development",
      "API Integration"
    ],
    detailedSections: [
      {
        title: "Problem Statement",
        items: [
          "Job seekers receive applications from multiple companies.",
          "Tracking applications manually becomes difficult.",
          "Duplicate records are common.",
          "Important emails may be missed.",
          "Following application progress is time-consuming."
        ]
      },
      {
        title: "Solution",
        items: [
          "The workflow completely automates the process.",
          "Monitors Gmail",
          "Extracts applicant details",
          "Reads existing Google Sheet records",
          "Detects duplicates",
          "Adds only new applications",
          "Sends Telegram notifications"
        ]
      },
      {
        title: "Workflow",
        items: [
          "Gmail Trigger → Extract Email Fields → Read Google Sheet → Duplicate Check → Append New Record → Telegram Notification"
        ]
      },
      {
        title: "Real World Impact",
        items: [
          "Eliminates manual tracking.",
          "Prevents duplicate application entries.",
          "Saves time.",
          "Provides instant notifications.",
          "Maintains centralized application records."
        ]
      },
      {
        title: "Future Improvements",
        items: [
          "Resume Parsing",
          "AI Email Classification",
          "ATS Status Detection",
          "Dashboard Analytics",
          "Weekly Reports",
          "Calendar Integration",
          "Recruiter Follow-up Reminder"
        ]
      }
    ]
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
    title: "GLS Student Dashboard",
    description:
      "A Flutter-based academic management application that helps students organize subjects, access study materials, monitor progress and manage their academic activities through a modern mobile interface.",
    longOverview: "GLS Student Dashboard is a Flutter-based mobile application developed to simplify academic management for university students.\n\nThe application provides a centralized platform where students can organize their subjects, access learning materials, monitor academic progress and quickly navigate between different courses.\n\nInstead of managing notes and course information manually across multiple platforms, students can access everything from a single intuitive mobile application.",
    tech: [
      "Flutter",
      "Dart",
      "Material Design",
      "Android Studio",
      "Firebase Ready"
    ],
    github: "https://github.com/HarshGosalia05/Flutter_Project_sem_6",
    demo: "",
    demoVideo: glsStudentDashboardVideo,
    coverImage: glsStudentDashboardImg,
    containImage: true,
    details: "#",
    category: "Mobile Application • Flutter",
    badge: "Academic Management App",
    features: [
      "Student Dashboard",
      "Pinned Subjects",
      "Course Management",
      "Recently Accessed",
      "Progress Tracking",
      "Academic Navigation",
      "Material Organization",
      "Mobile Friendly Interface",
      "Clean UI",
      "Responsive Design"
    ],
    detailedSections: [
      {
        title: "Problem Statement",
        items: [
          "Students often use multiple applications and websites to manage their studies.",
          "Course materials become scattered.",
          "Tracking progress manually is inconvenient.",
          "Finding frequently used subjects takes time."
        ]
      },
      {
        title: "Solution",
        items: [
          "The application provides a unified academic dashboard.",
          "Pin favorite subjects",
          "Browse all courses",
          "Access recently opened subjects",
          "Track learning progress",
          "Navigate quickly through academic content",
          "Improve daily productivity"
        ]
      },
      {
        title: "Architecture",
        items: [
          "Flutter UI → Business Logic → Data Models → Local Storage → Student Dashboard"
        ]
      },
      {
        title: "Real World Impact",
        items: [
          "Simplifies academic organization.",
          "Reduces time spent searching study materials.",
          "Improves learning productivity.",
          "Provides a modern student experience."
        ]
      },
      {
        title: "Future Enhancements",
        items: [
          "Firebase Authentication",
          "Cloud Sync",
          "Attendance Tracking",
          "Assignment Submission",
          "Timetable",
          "Push Notifications",
          "Faculty Portal",
          "Notes Synchronization",
          "AI Study Assistant"
        ]
      }
    ]
  },
];
