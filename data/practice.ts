import type { PracticeArea } from "./types";

export const stackSignals = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  ".NET",
  "Python",
  "AWS",
  "LLMs",
] as const;

const signalToArea: Record<(typeof stackSignals)[number], string> = {
  TypeScript: "languages",
  React: "frontend",
  "Next.js": "frontend",
  "Node.js": "backend",
  ".NET": "backend",
  Python: "languages",
  AWS: "cloud",
  LLMs: "ai",
};

export function areaForSignal(signal: string): string | undefined {
  return signalToArea[signal as (typeof stackSignals)[number]];
}

export const practice: PracticeArea[] = [
  {
    id: "languages",
    index: "01",
    name: "Languages",
    statement:
      "The languages production work actually ships in - typed frontend, services, data, and the .NET layer alongside Node and Python.",
    tools: ["TypeScript", "JavaScript", "Python", "C#", "SQL"],
  },
  {
    id: "frontend",
    index: "02",
    name: "Frontend",
    statement:
      "Production interfaces in React, Next.js, and React Native - state, rendering, and motion treated as systems, not screens.",
    tools: [
      "React",
      "Next.js",
      "Vue.js",
      "React Native",
      "Redux",
      "Zustand",
      "Tailwind CSS",
      "styled-components",
      "GSAP",
      "Motion",
    ],
  },
  {
    id: "backend",
    index: "03",
    name: "Backend",
    statement:
      "APIs and microservices in Node.js, NestJS, Python, and .NET / ASP.NET Core - plus the OAuth, Graph, and webhook contracts they expose.",
    tools: [
      "Microservices",
      "Node.js",
      "NestJS",
      "Express.js",
      "FastAPI",
      "Flask",
      ".NET",
      "ASP.NET Core",
      "GraphQL",
      "WebSockets",
      "OAuth / JWT",
    ],
  },
  {
    id: "data",
    index: "04",
    name: "Data",
    statement:
      "Schemas, queues, and the persistence layer that has to stay correct under load - SQL and NoSQL, with EF Core on the .NET services.",
    tools: ["PostgreSQL", "MongoDB", "Redis", "EF Core"],
  },
  {
    id: "cloud",
    index: "05",
    name: "Cloud / Infra",
    statement:
      "AWS and container runtimes, CI/CD, and the deploy path that keeps AI and payroll systems in production.",
    tools: ["AWS", "Docker", "Kubernetes", "CI/CD", "Render"],
  },
  {
    id: "ai",
    index: "06",
    name: "AI systems",
    statement:
      "LLMs used as production components: streaming interfaces, semantic and vector search, agents, and the retrieval that keeps them honest.",
    tools: [
      "LLMs",
      "AI Agents",
      "Semantic Search",
      "Vector Search",
      "Embeddings",
      "AI Automation",
      "Streaming AI Interfaces",
    ],
  },
  {
    id: "automation",
    index: "07",
    name: "Automation",
    statement:
      "Business processes as systems: triggers, reasoning, actions, and write-back. n8n and Make when the work belongs there; custom orchestration when it does not.",
    tools: ["n8n", "Make", "API orchestration", "Background Sync", "Gmail / Outlook"],
  },
];

export const education = [
  {
    school: "University of Agriculture, Abeokuta",
    credential: "B.Sc. Computer Science",
    dates: "2017 - 2023",
  },
  {
    school: "ALX Holberton School",
    credential: "Diploma, Full Stack Software Engineering",
    dates: "2022 - 2023",
  },
] as const;
