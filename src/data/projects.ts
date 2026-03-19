export type Project = {
id: number;
title: string;
description: string;
tags: string[];
link?: string;
 accentColor?: string;
image?: string;
};
import project1 from "../assets/projects/p1.png";
import project2 from "../assets/projects/p2.png";
import project3 from "../assets/projects/p3.png";
import project4 from "../assets/projects/p4.png";
import project5 from "../assets/projects/p5.png";
import project6 from "../assets/projects/p6.png";
import project7 from "../assets/projects/HomelyBox.jpg";
import project8 from "../assets/projects/p8.jpg";
import project10 from "../assets/projects/p9.jpeg";
import project11 from "../assets/projects/p10.jpeg";
import project12 from "../assets/projects/p11.jpeg";
import project13 from "../assets/projects/SehatAI.jpeg";



export const projects: Project[] = [
  {
    id: 1,
    title: "AI Medical Symptom Triage System",
    description:
      "End-to-end Python AI application for medical symptom triage in India. Built with LangChain RAG pipeline, ChromaDB vector database, FastAPI REST backend, and Streamlit frontend. Uses OpenAI GPT-3.5 with safety guardrails, emergency detection, and real-time urgency classification. Architecture follows production Python project structure.",
    tags: [
      "Python",
      "FastAPI",
      "LangChain",
      "OpenAI API",
      "RAG",
      "ChromaDB",
      "HuggingFace",
    ],
    accentColor: "#3b82f6", // green
    link: "https://pixel-neon-pi.vercel.app/",
    image: project13,
  },
  {
    id: 1,
    title: "Pikxl – AI Image Generation Marketplace",
    description:
      "Pikxl is an AI-powered digital marketplace that enables creators to generate, upload, and monetize AI-generated assets such as images, videos, and music. The platform integrates modern AI models with a creator-first marketplace experience, focusing on performance, scalability, and an intuitive workflow for managing and selling digital content.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI API",
      "AI Image Generation",
      "Marketplace",
      "Recharts",
    ],
    accentColor: "#22c55e", // green
    link: "https://pixel-neon-pi.vercel.app/",
    image: project1,
  },
  {
    id: 2,
    title: "JobFlow AI – Job Application Automation",
    description:
      "JobFlow AI is an AI-driven no-code automation system that streamlines the job application process. It parses incoming job emails, extracts structured job data using AI, filters relevant opportunities, sends real-time notifications, and logs approved jobs for follow-ups—significantly reducing manual effort for job seekers.",
    tags: [
      "React",
      "AI Automation",
      "OpenAI",
      "Zapier",
      "No-Code",
      "Gmail API",
      "Google Docs",
      "Workflow Automation",
      "Accessibility",
    ],
    accentColor: "#3b82f6", // blue
    link: "https://job-flow-ai-two.vercel.app",
    image: project12,
  },
  {
    id: 3,
    title: "Pass Club",
    description:
      "Pass Club is an online ticket booking platform that allows users to discover events, view detailed information, and book tickets through a simple and accessible interface. The platform emphasizes usability, reusable UI components, and a smooth booking flow across devices.",
    tags: [
      "React",
      "Storybook",
      "Accessibility",
      "Ticket Booking",
      "UI Components",
    ],
    accentColor: "#a855f7", // purple
    link: "https://passclub.in/",
    image: project4,
  },
  {
    id: 4,
    title: "Profind",
    description:
      "Profind is a modern job discovery platform that aggregates remote, hybrid, and onsite opportunities into a single interface. It features smart filtering, real-time API integration, and efficient state management to help users quickly find relevant roles with a clean and responsive UI.",
    tags: [
      "React",
      "API Integration",
      "Material UI",
      "Zustand",
      "Job Portal",
      "State Management",
      "Accessibility",
    ],
    accentColor: "#06b6d4", // cyan
    link: "https://profindai.vercel.app/",
    image: project11,
  },
  {
    id: 5,
    title: "BharatServices",
    description:
      "BharatServices is a centralized GovTech platform that provides users with secure access to verified government services, official portals, and public updates. The platform focuses on trust, accessibility, and ease of navigation to help users avoid unofficial or misleading sources.",
    tags: [
      "React",
      "API Integration",
      "Material UI",
      "Zustand",
      "GovTech",
      "Accessibility",
    ],
    accentColor: "#10b981", // emerald
    link: "https://bharatservices.vercel.app/",
    image: project10,
  },
  {
    id: 6,
    title: "Konnect",
    description:
      "Konnect is a real-time video calling and online meeting application built using WebRTC. It includes secure authentication, responsive layouts, and a modern user experience designed for low-latency communication in both one-on-one and group meetings.",
    tags: [
      "Next.js",
      "WebRTC",
      "Clerk Auth",
      "Tailwind CSS",
      "Video Calling",
      "Authentication",
    ],
    accentColor: "#f97316", // orange
    link: "https://konnect-snowy.vercel.app/",
    image: project2,
  },
  {
    id: 7,
    title: "MRD Holidays",
    description:
      "MRD Holidays is a travel booking website that helps users explore destinations and book customized travel packages. The platform is designed with accessibility and responsiveness in mind, ensuring a smooth browsing and booking experience across devices.",
    tags: [
      "React",
      "Travel Booking",
      "Storybook",
      "Accessibility",
      "Responsive Design",
    ],
    accentColor: "#38bdf8", // sky
    link: "https://mrdholidays.com/",
    image: project5,
  },
  {
    id: 8,
    title: "Chutii.com",
    description:
      "Chutii.com is a travel assistance platform that brings trip planning, travel queries, and booking services into a single, unified experience. The application focuses on clean UI, intuitive navigation, and accessibility for a frictionless user journey.",
    tags: [
      "React",
      "Travel Platform",
      "Storybook",
      "Accessibility",
      "UI/UX",
    ],
    accentColor: "#ec4899", // pink
    link: "https://www.chutii.com/",
    image: project6,
  },
  {
    id: 9,
    title: "HomelyBox – Food Delivery App",
    description:
      "HomelyBox is a food and tiffin delivery platform focused on providing healthy, home-style meals. The application features smooth state management, animated interactions, and an intuitive ordering flow optimized for frequent daily use.",
    tags: [
      "React",
      "Zustand",
      "Context API",
      "Framer Motion",
      "Food Delivery",
      "Accessibility",
    ],
    accentColor: "#eab308", // yellow
    link: "https://tiffin-397v.vercel.app/",
    image: project7,
  },
  {
    id: 10,
    title: "Inteliq",
    description:
      "Inteliq is an AI-powered chat application inspired by ChatGPT that enables real-time conversational experiences. It integrates AI APIs with a clean, responsive UI while maintaining fast performance, efficient state management, and accessibility best practices.",
    tags: [
      "React",
      "AI Chat",
      "OpenAI",
      "Material UI",
      "Zustand",
      "Accessibility",
    ],
    accentColor: "#6366f1", // indigo
    link: "https://inteliq-taupe.vercel.app/",
    image: project8,
  },
  {
    id: 11,
    title: "Startup Connect",
    description:
      "Startup Connect is a professional networking platform that connects startups with investors, mentors, and co-founders. The platform focuses on structured discovery, clear communication flows, and scalable frontend architecture to support growing startup communities.",
    tags: [
      "React",
      "Startup Platform",
      "Networking",
      "Storybook",
      "Accessibility",
    ],
    accentColor: "#14b8a6", // teal
    link: "https://startupconnect-4gqp.vercel.app/",
    image: project3,
  },
];

