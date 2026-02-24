import { CloudSun, MapPin, PhoneOutgoing, MessageSquareWarning, Bot, BarChart3 } from "lucide-react";

export const APP_VERSION = "2.7.0";
export const APP_CODE = "Tanaw-dev.apk";
export const APP_LINK = `https://github.com/jules-pecaoco/tanaw-v2/releases/download/vdev.17/Tanaw-dev.apk`;
export const GITHUB_LINK = "https://github.com/jules-pecaoco/tanaw";

export const APP_FEATURES = [
  {
    title: "Dynamic Weather Maps",
    desc: "Visualize real-time heat and rain patterns with our interactive weather maps.",
    Icon: CloudSun,
    color: "bg-sky-500",
  },
  {
    title: "Advanced Hazard Mapping",
    desc: "Identify landslide, flood, and storm surge prone areas to stay prepared and safe.",
    Icon: MapPin,
    color: "bg-red-500",
  },
  {
    title: "Emergency Agency Locator",
    desc: "Quickly find, get directions to, and call nearby emergency response agencies.",
    Icon: PhoneOutgoing,
    color: "bg-green-500",
  },
  {
    title: "User-Reported Hazard News",
    desc: "Stay updated with real-time hazard reports submitted by fellow users in your vicinity.",
    Icon: MessageSquareWarning,
    color: "bg-yellow-500",
  },
  {
    title: "AI-Powered Reporting",
    desc: "Submit hazard reports analyzed and categorized by Gemini AI for accuracy and insights.",
    Icon: Bot,
    color: "bg-purple-500",
  },
  {
    title: "Analytics & Forecasts",
    desc: "Access weather forecasts and analytics derived from user-reported hazard data.",
    Icon: BarChart3,
    color: "bg-indigo-500",
  },
];

export const SHOWCASE_HIGHLIGHTS = [
  "Interactive climate and hazard maps at your fingertips.",
  "Instant alerts for weather changes and nearby reported hazards (11km radius).",
  "Seamlessly report incidents, powered by AI analysis and categorization.",
  "Locate and contact emergency services with integrated calling and directions.",
  "Community-driven insights through user reports and comprehensive analytics.",
];

export const ARTICLES = [
  {
    id: 1,
    category: "Press",
    categoryColor: "bg-orange-500",
    title: "UNO-R's 'Tanaw' Wins DOST Visayas Tech Pitching Contest",
    excerpt:
      "The Philippine News Agency reports that Tanaw, created by Mark Angelo Navarro and Jules Alfonz Pecaoco with coach Allijah Mckale Rodis, topped 10 competing teams at the 2025 Handa Pilipinas competition at SMX Bacolod.",
    date: "October 29, 2025",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    author: "Philippine News Agency",
    link: "https://www.pna.gov.ph/index.php/articles/1262124",
    external: true,
  },
  {
    id: 2,
    category: "Press",
    categoryColor: "bg-orange-500",
    title: "Negros Island Students Pitch Techs to Boost Disaster Resilience",
    excerpt:
      "DOST-STII covers the full Handa Pilipinas Visayas leg exposition, where Team Tanaw from UNO-R emerged as champion in the Brains and Breakthroughs Pitching Competition, besting nine other university teams.",
    date: "October 29, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80",
    author: "DOST-STII / Joy M. Lazcano",
    link: "https://www.stii.dost.gov.ph/2176-negros-island-students-pitch-techs-to-boost-disaster-resilience-in-communities",
    external: true,
  },
  {
    id: 3,
    category: "Press",
    categoryColor: "bg-orange-500",
    title: "UNO-R Team Tanaw Hailed as Champion",
    excerpt:
      "UNO-R's official page announces Team Tanaw from the College of Information Technology as champion of the Brains and Breakthroughs Pitching Competition at the 2025 Handa Pilipinas climate and disaster resilience expo.",
    date: "October 2025",
    readTime: "1 min read",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80",
    author: "UNO-R Official",
    link: "https://www.facebook.com/unorofficial/posts/unorwins-i-uno-r-college-of-information-technologys-team-tanaw-was-hailed-as-cha/1279166504235249/",
    external: true,
  },
  {
    id: 4,
    category: "Press",
    categoryColor: "bg-orange-500",
    title: "Tanaw — The Official Research Paper",
    excerpt:
      "The academic paper by Pecaoco, Navarro, and Dr. Elmer Haro (UNO-R) details Tanaw's full methodology, system architecture, feature design, and evaluation results across 47 participants using McCall's Quality Model.",
    date: "2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=600&q=80",
    author: "Pecaoco, Navarro & Haro — UNO-R",
    link: "https://www.academia.edu/145884854/TANAW",
    external: true,
  },
  {
    id: 5,
    category: "Safety Tips",
    categoryColor: "bg-red-500",
    title: "How to Prepare Your Family for Typhoon Season",
    excerpt:
      "Typhoon season in the Philippines runs from June to November. Learn the essential steps every household should take before a storm makes landfall — from emergency kits to evacuation plans.",
    date: "February 18, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1504608524841-42584120d693?w=600&q=80",
    author: "Tanaw Team",
  },
  {
    id: 6,
    category: "Climate Awareness",
    categoryColor: "bg-sky-500",
    title: "Understanding the Urban Heat Island Effect in Philippine Cities",
    excerpt:
      "Metro Manila temperatures have been rising faster than rural areas. Discover how urban development contributes to extreme heat and what Tanaw's heat maps can tell you about your neighborhood.",
    date: "February 10, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",
    author: "Jules Pecaoco",
  },
  {
    id: 7,
    category: "Community",
    categoryColor: "bg-green-500",
    title: "Why Community Hazard Reporting Saves Lives",
    excerpt:
      "Crowdsourced hazard data fills the gaps that government agencies cannot cover in real time. See how Tanaw users have helped neighbors avoid flooded roads and landslide zones.",
    date: "January 28, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    author: "Mark Angelo Navarro",
  },
  {
    id: 8,
    category: "Technology",
    categoryColor: "bg-purple-500",
    title: "How Gemini AI Powers Tanaw's Smart Hazard Reports",
    excerpt:
      "Every report submitted through Tanaw passes through an AI analysis pipeline built on Gemini. Learn how it classifies severity, detects duplicates, and surfaces actionable insights.",
    date: "January 15, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    author: "Jules Pecaoco",
  },
  {
    id: 9,
    category: "Safety Tips",
    categoryColor: "bg-red-500",
    title: "Flood Zones 101: Reading Hazard Maps Like a Pro",
    excerpt:
      "Hazard maps use color-coded risk zones that can be confusing at first glance. This beginner's guide walks you through interpreting flood depth indicators and what each risk level means for your home.",
    date: "January 5, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&q=80",
    author: "Tanaw Team",
  },
  {
    id: 10,
    category: "Climate Awareness",
    categoryColor: "bg-sky-500",
    title: "El Niño, La Niña, and What They Mean for the Philippines",
    excerpt:
      "ENSO cycles dramatically influence rainfall patterns and drought conditions across the archipelago. Here's a plain-language breakdown of these phenomena and how Tanaw tracks their local impact.",
    date: "December 20, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&q=80",
    author: "Mark Angelo Navarro",
  },
];

export const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#showcase", label: "Showcase" },
  { href: "#articles", label: "Articles" },
  { href: "#download", label: "Download" },
];
