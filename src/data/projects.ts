export type Project = {
id: number;
title: string;
description: string;
tags: string[];
link?: string;
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
import project9 from "../assets/projects/image.png";
import project10 from "../assets/projects/p9.jpeg";
import project11 from "../assets/projects/p10.jpeg";




export const projects: Project[] = [
  {
    id: 1,
    title: "Pikxl- Ai image Generation ",
    description: "A clean and modern marketplace where creators transform imagination into income. Upload, sell, and grow your AI-powered art, music, videos, and more.",
    tags: ["React", "TypeScript", "Tailwind", "Recharts", "OpenAi Api"],
    link: "https://pixel-neon-pi.vercel.app/",
    image: project1,
  },
  {
    id: 2,
    title: "Konnect",
    description: "A Video call app for meeting and call",
    tags: ["Next.js", "Clerk", "Tailwind", "Auth"],
    link: "https://konnect-snowy.vercel.app/",
    image: project2,
  },
  {
    id: 3,
    title: "Pass Club",
    description: "Ticket Booking website",
    tags: ["Storybook", "React", "Accessibility"],
    link: "https://passclub.in/",
    image: project4,
  },
  {
    id: 3,
    title: "Profind",
    description: "Job portal where you can find all the Remote hybrid onsite job",
    tags: ["Api", "React", "Accessibility", "Material UI", "Zustand"],
    link: "https://profindai.vercel.app/",
    image: project11,
  },
   {
    id: 3,
    title: "BharatServices",
    description: "Trusted Government Services & Updates- Secure access to official government services, verified links, and timely public information — all in one place",
    tags: ["Api", "React", "Accessibility", "Material UI", "Zustand"],
    link: "https://bharatservices.vercel.app/",
    image: project10,
  },
 
  
  {
    id: 3,
    title: "MRD Holidays",
    description: "Travel Booking Website",
    tags: ["Storybook", "React", "Accessibility"],
    link: "https://mrdholidays.com/",
    image: project5,
  },
  {
    id: 3,
    title: "Chutii.com",
    description: "One place for travell related query and booking",
    tags: ["Storybook", "React", "Accessibility"],
    link: "https://www.chutii.com/",
    image: project6,
  },
   {
    id: 3,
    title: "HomelyBox- Food Application",
    description: "Meal & Healthy Diet Food website where you can order food",
    tags: ["Storybook", "React", "Accessibility", "Farmer Motion","Zustand", "ContextAPI"],
    link: "https://tiffin-397v.vercel.app/",
    image: project7,
  },
   {
    id: 3,
    title: "Inteliq",
    description: "ChatGPT type Ai Chat App",
    tags: ["Storybook", "React", "Accessibility", "Material UI", "Zustand"],
    link: "https://inteliq-taupe.vercel.app/",
    image: project8,
  },
   {
    id: 3,
    title: "StartUp connect",
    description: "Your one-stop platform to connect with investors, mentors, and co-founders to turn your startup vision into reality.",
    tags: ["Storybook", "React", "Accessibility"],
    link: "https://startupconnect-4gqp.vercel.app/",
    image: project3,
  },
   
];
