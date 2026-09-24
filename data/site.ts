import type { SocialLink } from "./types";

export const site = {
  name: "Timilehin Odusanya",
  displayName: "Timi Odusanya",
  shortName: "Timi",
  title: "Senior Full Stack Engineer",
  supporting: ["AI Engineer", "Product Engineer", "Automation Engineer"],
  location: "Remote · Worldwide",
  availability: "Remote · Worldwide",
  email: "timmycruz36@gmail.com",
  phone: "+2348146414524",
  url: "https://timiodusanya.vercel.app",
  twitter: "@timi_odusanya",
  resume: "/files/Timilehin_Odusanya_Full_Stack_Software_Engineer.pdf",
  profileImage: "/profile.png",
  years: "6",
  industries: [
    "AI",
    "HR",
    "Payroll",
    "Fintech",
    "CRM",
    "Payments",
    "Travel",
    "Automation",
    "SaaS",
    "Workforce Management",
    "Investment Banking",
  ],
  description:
    "Senior Full Stack Engineer and AI Engineer building production applications, AI systems, integrations, and automation - from architecture through deployment. Remote · Worldwide.",
} as const;

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/TimiOdusanya" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/timi-odusanya/" },
  { label: "X", href: "https://twitter.com/timi_odusanya" },
];

export const nav = [
  { label: "Index", href: "/" },
  { label: "Scale", href: "/#scale" },
  { label: "Systems", href: "/#systems" },
  { label: "Automation", href: "/automation" },
  { label: "Path", href: "/#path" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
] as const;

export const chapters = [
  { id: "intro", label: "Intro" },
  { id: "work", label: "Work" },
  { id: "scale", label: "Scale" },
  { id: "systems", label: "Systems" },
  { id: "voyage", label: "Voyage" },
  { id: "path", label: "Path" },
  { id: "contact", label: "Contact" },
] as const;
