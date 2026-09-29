import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "climb",
    name: "CLIMB",
    shortName: "CLIMB",
    index: "01",
    layer: "primary",
    eyebrow: "AI-native investment banking",
    summary:
      "Founder CRM for an AI-native investment bank serving the top 1% of startups - Cap Raise, M&A, embedded corp dev, and IPOs.",
    role: "Senior Full Stack AI Engineer",
    company: "CLIMB",
    year: "2025 - 2026",
    href: "https://app.champintro.com/",
    image: "/work/climb.png",
    imageAlt: "CLIMB AI-native investment banking platform interface",
    gallery: [
      "/work/climb.png",
      "/work/slides/climb-home.png",
      "/work/slides/climb-funds.png",
      "/work/slides/climb-fund.png",
      "/work/slides/climb-pipeline.png",
      "/work/slides/climb-graph.png",
      "/work/slides/climb-network.png",
    ],
    metrics: [
      { value: "Gmail + Outlook", label: "OAuth CRM sync" },
      { value: "LLM", label: "Streaming founder chat" },
      { value: "Vector", label: "Investor discovery" },
    ],
    stack: [
      "Microservices",
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "Redis",
      "AWS",
      "OAuth 2.0",
    ],
    problem:
      "Fundraising work already lives in email and messages. A CRM that asks founders to leave those channels becomes another system to maintain - not a system of record.",
    owned: [
      "Streaming LLM chat",
      "Semantic investor search and ranking",
      "Gmail and Outlook OAuth, token refresh, background sync",
      "iMessage agent infrastructure",
      "PostgreSQL schemas on AWS",
    ],
    challenge:
      "Keep token lifecycle, background synchronization, semantic ranking, and streaming generation coherent inside one founder workflow - without turning the CRM into a second inbox.",
    architecture: {
      nodes: [
        { id: "oauth", label: "OAuth", detail: "Gmail · Outlook · Microsoft identity" },
        { id: "sync", label: "Sync queue", detail: "Redis-backed refresh and ingest" },
        { id: "store", label: "PostgreSQL", detail: "Threads, attachments, founder graph" },
        { id: "search", label: "Semantic search", detail: "Embeddings · ranking · retrieval" },
        { id: "llm", label: "Streaming LLM", detail: "Chat, fundraising assistance" },
        { id: "agent", label: "Agents", detail: "iMessage webhooks and actions" },
      ],
      links: [
        { from: "oauth", to: "sync" },
        { from: "sync", to: "store" },
        { from: "store", to: "search" },
        { from: "search", to: "llm" },
        { from: "llm", to: "agent" },
      ],
    },
    outcome:
      "A production Founder CRM where investor discovery, email context, and AI assistance operate as one system - not a set of disconnected tools.",
    sections: [
      {
        heading: "Context",
        body: "CLIMB is an AI-native investment bank for the top 1% of startups. The product spans capital raise, M&A, embedded corporate development, and IPOs. The Founder CRM is the operational surface those workflows run through.",
      },
      {
        heading: "What I owned",
        body: "I led full-stack development of the Founder CRM: streaming LLM chat, semantic investor discovery, Gmail and Outlook OAuth integrations with token refresh and background synchronization, iMessage agent infrastructure, and the PostgreSQL schemas that hold the founder graph.",
      },
      {
        heading: "Technical decisions",
        body: "OAuth tokens are treated as a lifecycle, not a login event. Sync work is queued so inbox volume cannot block the UI. Investor discovery is embedding-based retrieval plus ranking, not keyword search. Agent actions leave the product through webhooks so iMessage can participate without becoming a special case.",
      },
    ],
  },
  {
    slug: "loubby",
    name: "Loubby AI",
    shortName: "Loubby",
    index: "02",
    layer: "primary",
    eyebrow: "Talent, payroll, and HR",
    summary:
      "AI-powered talent management, hiring, payroll, and remittances for 200,000+ active users and 2,500+ companies across Africa.",
    role: "Senior Full Stack Engineer",
    company: "DivVerse LLC",
    year: "2023 - 2025",
    href: "https://app.loubby.ai/",
    image: "/work/loubby.png",
    imageAlt: "Loubby AI talent and payroll platform",
    gallery: [
      "/work/loubby.png",
      "/work/slides/loubby-live-1.png",
      "/work/slides/loubby-live-2.png",
      "/work/slides/loubby-live-3.png",
      "/work/slides/loubby-live-4.png",
    ],
    metrics: [
      { value: "200K+", label: "Active users" },
      { value: "2,500+", label: "Companies" },
      { value: "~35%", label: "CPU reduction" },
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "React Native",
      "Node.js",
      "Python",
      "Microservices",
      ".NET Core",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS",
    ],
    problem:
      "Hiring, assessment, onboarding, and payroll are usually separate products. For companies operating across Africa, that fragmentation becomes operational cost - and AI bolted on afterward rarely survives production.",
    owned: [
      "AI assessments and candidate matching",
      "Hiring pipelines, onboarding, PIPs and KPIs",
      "Payroll, deductions, taxes, timesheets",
      "LLM-generated job descriptions and scoring",
      "3MTT national AI job marketplace",
      "OAuth 2.0 / JWT and .NET Core microservices",
    ],
    challenge:
      "Ship AI-assisted hiring and evaluation that holds up at hundreds of thousands of users, while payroll and identity remain correct, auditable, and operationally boring.",
    architecture: {
      nodes: [
        { id: "app", label: "Product surfaces", detail: "Web · React Native · dashboards" },
        { id: "auth", label: "Identity", detail: "OAuth 2.0 · JWT" },
        { id: "ai", label: "LLM workflows", detail: "JD generation · scoring · matching" },
        { id: "hr", label: "Talent systems", detail: "Pipelines · assessments · PIPs" },
        { id: "pay", label: "Payroll", detail: "Deductions · taxes · remittances" },
        { id: "infra", label: "Runtime", detail: "Docker · Kubernetes · Redis · AWS" },
      ],
      links: [
        { from: "app", to: "auth" },
        { from: "auth", to: "hr" },
        { from: "hr", to: "ai" },
        { from: "hr", to: "pay" },
        { from: "pay", to: "infra" },
        { from: "ai", to: "infra" },
      ],
    },
    outcome:
      "A production talent and payroll platform used by 200,000+ people and 2,500+ companies, including the 3MTT national marketplace - with measurable frontend performance work (~35% CPU reduction).",
    sections: [
      {
        heading: "Context",
        body: "Loubby is DivVerse’s AI-powered talent, hiring, payroll, and remittances platform. I joined as a senior full-stack engineer and owned work across product surfaces, AI workflows, identity, and the services that keep payroll correct.",
      },
      {
        heading: "What I owned",
        body: "Hiring pipelines, AI assessments, candidate matching, onboarding, PIPs and KPIs, LLM-generated job descriptions and scoring, payroll and timesheets, and the 3MTT national AI job marketplace. Auth is OAuth 2.0 / JWT. Services include .NET Core microservices alongside Node.",
      },
      {
        heading: "Scale",
        body: "The platform serves 200,000+ active users and 2,500+ companies. Performance work on the React surfaces - memoization and render discipline - reduced CPU by around 35%. That is the kind of work that only shows up when the product is already in production.",
      },
    ],
  },
  {
    slug: "gopaddi",
    name: "GoPaddi",
    shortName: "GoPaddi",
    index: "03",
    layer: "primary",
    eyebrow: "Travel and booking",
    summary:
      "Production travel platform covering flights, hotels, restaurants, and experiences - with transactional booking, real-time communication, and LLM-powered search.",
    role: "Full Stack Developer",
    company: "Voyatek Group",
    year: "2023",
    href: "https://www.gopaddi.com/",
    image: "/work/gopaddi.png",
    imageAlt: "GoPaddi travel and booking platform",
    gallery: [
      "/work/slides/gopaddi-live.png",
      "/work/slides/gopaddi-live-2.png",
      "/work/gopaddi.png",
    ],
    metrics: [
      { value: "Flights · Hotels", label: "Booking surfaces" },
      { value: "Realtime", label: "WebSocket comms" },
      { value: "LLM", label: "Search" },
    ],
    stack: [
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "NestJS",
      "GraphQL",
      "REST",
      "PostgreSQL",
      "WebSockets",
    ],
    problem:
      "Travel booking is a coordination problem: inventory, payments, reservations, and people in motion. The system has to stay transactional when the interface feels immediate.",
    owned: [
      "REST and GraphQL APIs for flights, hotels, restaurants, experiences",
      "SQL transactional booking models",
      "WebSocket-driven in-app communication",
      "Real-time audio and video",
      "LLM-powered search",
      "OAuth / JWT across booking flows",
    ],
    challenge:
      "Keep booking, payments, and live communication consistent across web and mobile without letting realtime features weaken transactional guarantees.",
    architecture: {
      nodes: [
        { id: "clients", label: "Clients", detail: "Web · React Native" },
        { id: "api", label: "API layer", detail: "REST · GraphQL · NestJS" },
        { id: "book", label: "Booking", detail: "SQL transactions · payments" },
        { id: "live", label: "Realtime", detail: "WebSockets · A/V" },
        { id: "search", label: "Search", detail: "LLM-assisted retrieval" },
        { id: "auth", label: "Auth", detail: "OAuth · JWT" },
      ],
      links: [
        { from: "clients", to: "auth" },
        { from: "auth", to: "api" },
        { from: "api", to: "book" },
        { from: "api", to: "live" },
        { from: "api", to: "search" },
      ],
    },
    outcome:
      "A production booking system where search, reservation, payment, and in-app communication share one API and identity model - used across GoPaddi and the wider Voyatek travel stack.",
    sections: [
      {
        heading: "Context",
        body: "GoPaddi is Voyatek’s production travel platform. The same engineering period also covered DiscovaTrips, a membership travel product. Both needed APIs that could hold booking state and still feel live.",
      },
      {
        heading: "What I owned",
        body: "I designed and consumed APIs covering flights, hotels, restaurants, and experiences. Booking sits on SQL transactional models. In-app communication and audio/video run over WebSockets. Search is LLM-assisted. Auth is OAuth / JWT.",
      },
      {
        heading: "Why it matters",
        body: "This is the kind of system that fails quietly: a reservation that is not a transaction, a chat that is not tied to a booking, a search that cannot be trusted. The work was to keep those surfaces honest.",
      },
    ],
  },
  {
    slug: "discova",
    name: "DiscovaTrips",
    shortName: "Discova",
    index: "04",
    layer: "secondary",
    eyebrow: "Membership travel",
    summary:
      "Membership travel and activity platform for individuals, families, and corporations - curated experiences, premium memberships, and real-time booking.",
    role: "Full Stack Developer",
    company: "Voyatek Group",
    year: "2023",
    href: "https://www.discovatrips.com/",
    image: "/work/discova.png",
    imageAlt: "DiscovaTrips membership travel platform",
    metrics: [
      { value: "Membership", label: "Travel product" },
      { value: "Realtime", label: "Booking flows" },
    ],
    stack: ["Next.js", "TypeScript", "Zustand", "Framer Motion", "GSAP"],
    problem:
      "A membership travel product has to feel curated without making booking feel ceremonial. The interface is part of the offer.",
    owned: [
      "Membership and activity product surfaces",
      "Real-time booking flows",
      "Stateful UI with Zustand",
      "Motion-led experience work",
    ],
    challenge:
      "Keep a premium, motion-heavy membership experience aligned with the same booking and identity constraints as the rest of the Voyatek stack.",
    architecture: {
      nodes: [
        { id: "ui", label: "Membership UI", detail: "Next.js · Zustand" },
        { id: "book", label: "Booking", detail: "Shared travel APIs" },
        { id: "motion", label: "Motion", detail: "Framer Motion · GSAP" },
      ],
      links: [
        { from: "ui", to: "book" },
        { from: "ui", to: "motion" },
      ],
    },
    outcome:
      "A membership travel surface that uses motion as product language, not decoration - sitting on the same booking backbone as GoPaddi.",
    sections: [
      {
        heading: "Context",
        body: "DiscovaTrips is Voyatek’s membership travel product: curated global experiences for individuals, families, and corporations. I worked the product surfaces and booking flows alongside the GoPaddi API work.",
      },
    ],
  },
  {
    slug: "voyatek",
    name: "Voyatek Group",
    shortName: "Voyatek",
    index: "05",
    layer: "secondary",
    eyebrow: "Enterprise web",
    summary:
      "Marketing site and admin application for Voyatek Group - job listings, applications, publishing, subscribers, and inquiries.",
    role: "Full Stack Developer",
    company: "Voyatek Group",
    year: "2023",
    href: "https://www.voyatekgroup.com/",
    image: "/work/voyatek.png",
    imageAlt: "Voyatek Group website",
    gallery: ["/work/slides/voyatek-live.png", "/work/voyatek.png"],
    metrics: [{ value: "Admin + site", label: "Recruitment and publishing" }],
    stack: ["Next.js", "TypeScript", "Node.js"],
    problem:
      "A company operating multiple travel products still needs a single operational surface for hiring, publishing, and inbound conversations.",
    owned: [
      "Public site",
      "Admin application for jobs, applications, posts, subscribers, and inquiries",
    ],
    challenge:
      "Give operators one place to manage hiring and publishing without building a second product organization around it.",
    architecture: {
      nodes: [
        { id: "site", label: "Public site", detail: "Voyatek Group" },
        { id: "admin", label: "Admin", detail: "Jobs · editorial · inbox" },
      ],
      links: [{ from: "site", to: "admin" }],
    },
    outcome:
      "A complete public site and admin application used to run Voyatek’s hiring, editorial, and inbound operations.",
    sections: [
      {
        heading: "Context",
        body: "Alongside GoPaddi and DiscovaTrips, I built Voyatek Group’s public site and the admin application behind it.",
      },
    ],
  },
  {
    slug: "owambe",
    name: "Owambe",
    shortName: "Owambe",
    index: "06",
    layer: "secondary",
    eyebrow: "Event operations",
    summary:
      "Enterprise resource planning for event organizers - guests, seating, invitations, orders, media, gifts, and a QR guest-scanner PWA.",
    role: "Full Stack Engineer",
    company: "Independent",
    year: "2024",
    href: "https://owambe-dashboard.vercel.app/dashboard",
    image: "/work/owambe.png",
    imageAlt: "Owambe event organizer dashboard",
    metrics: [{ value: "ERP + PWA", label: "Guest operations" }],
    stack: ["Next.js", "TypeScript", "Node.js"],
    problem:
      "Event operations fragment across spreadsheets, invitation tools, and door lists. The day-of failure mode is a guest the system cannot recognize.",
    owned: [
      "Guest management and seating",
      "Invitations, orders, media, wishlists, cash gifts",
      "QR-code guest scanner PWA",
      "Real-time dashboard",
    ],
    challenge:
      "Make the day-of scanner as reliable as the planning tools - a PWA that has to work in a hall, not just in a browser tab.",
    architecture: {
      nodes: [
        { id: "erp", label: "ERP", detail: "Guests · seating · orders" },
        { id: "pwa", label: "Scanner PWA", detail: "QR check-in" },
        { id: "live", label: "Dashboard", detail: "Realtime operations" },
      ],
      links: [
        { from: "erp", to: "pwa" },
        { from: "pwa", to: "live" },
      ],
    },
    outcome:
      "A complete event operations system, including a QR guest-scanner PWA and a live dashboard for the day of the event.",
    sections: [
      {
        heading: "Context",
        body: "Owambe is a full ERP for event organizers. The work covers the planning surface and the operational one: a QR guest scanner that has to work when the event is already underway.",
      },
    ],
  },
  {
    slug: "flex",
    name: "The Flex",
    shortName: "Flex",
    index: "07",
    layer: "secondary",
    eyebrow: "Flexible space",
    summary:
      "Mobile-first discovery for premium short-term rentals, with LLM-powered search for personalised recommendations.",
    role: "Full Stack Engineer",
    company: "Independent",
    year: "2025",
    href: "https://flex-living-frontend-timi.vercel.app/",
    image: "/work/flex.png",
    imageAlt: "The Flex flexible space discovery platform",
    gallery: ["/work/slides/flex-live.png", "/work/flex.png"],
    metrics: [{ value: "LLM search", label: "Personalised discovery" }],
    stack: ["Next.js", "TypeScript", "Node.js"],
    problem:
      "Flexible space inventory is only useful if people can find a place that matches how they actually want to stay - not just a filter state.",
    owned: ["Discovery and filtering", "LLM-powered search and recommendations"],
    challenge:
      "Use language models for recommendation without making search feel opaque or slow on a mobile-first surface.",
    architecture: {
      nodes: [
        { id: "ui", label: "Discovery", detail: "Mobile-first Next.js" },
        { id: "llm", label: "Search", detail: "LLM recommendations" },
      ],
      links: [{ from: "ui", to: "llm" }],
    },
    outcome:
      "A mobile-first discovery product where search can be asked in language, not only in filters.",
    sections: [
      {
        heading: "Context",
        body: "The Flex is a flexible-space discovery product. I built the mobile-first interface and the LLM-powered search that produces personalised recommendations.",
      },
    ],
  },
  {
    slug: "shiftsync",
    name: "ShiftSync",
    shortName: "ShiftSync",
    index: "08",
    layer: "secondary",
    eyebrow: "Team scheduling",
    summary:
      "Team scheduling that keeps shifts, availability, and coverage in sync - with manager planning and automated conflict detection.",
    role: "Full Stack Engineer",
    company: "Independent",
    year: "2025",
    href: "https://shiftsync-frontend-tau.vercel.app/",
    image: "/work/shiftsync.png",
    imageAlt: "ShiftSync team scheduling platform",
    gallery: ["/work/slides/shiftsync-live.png", "/work/shiftsync.png"],
    metrics: [{ value: "Conflicts", label: "Automated detection" }],
    stack: ["Next.js", "TypeScript", "Node.js"],
    problem:
      "Schedules fail at the edges: overlapping shifts, silent gaps, availability that was true yesterday. Managers find out too late.",
    owned: [
      "Shift and availability surfaces",
      "Manager planning tools",
      "Automated conflict detection",
    ],
    challenge:
      "Make coverage visible in real time and make conflicts a system concern, not a spreadsheet surprise.",
    architecture: {
      nodes: [
        { id: "plan", label: "Planning", detail: "Manager tools" },
        { id: "sync", label: "Coverage", detail: "Shifts · availability" },
        { id: "detect", label: "Conflicts", detail: "Automated detection" },
      ],
      links: [
        { from: "plan", to: "sync" },
        { from: "sync", to: "detect" },
      ],
    },
    outcome:
      "A scheduling product where conflict detection is part of the system, not a weekly review.",
    sections: [
      {
        heading: "Context",
        body: "ShiftSync keeps coworker visibility and manager planning on the same schedule graph, with automated conflict detection across coverage.",
      },
    ],
  },
  {
    slug: "harmony",
    name: "Harmony Stores",
    shortName: "Harmony",
    index: "09",
    layer: "secondary",
    eyebrow: "Retail",
    summary:
      "Retail technology platform for Harmony Stores - product discovery, cart, and checkout for computers, phones, and gadgets.",
    role: "Full Stack Engineer",
    company: "Harmony Stores",
    year: "Live",
    href: "https://www.harmonystores.ng/",
    image: "/work/harmony.jpeg",
    imageAlt: "Harmony Stores retail platform",
    metrics: [{ value: "Commerce", label: "Discovery · cart · checkout" }],
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    problem:
      "A retail catalogue only converts if discovery, cart, and checkout stay one path - not three disconnected pages.",
    owned: ["Product discovery", "Cart management", "Checkout"],
    challenge:
      "Keep catalogue, cart, and checkout coherent on a production retail surface.",
    architecture: {
      nodes: [
        { id: "catalog", label: "Catalogue", detail: "Product discovery" },
        { id: "cart", label: "Cart", detail: "Line items and state" },
        { id: "pay", label: "Checkout", detail: "Purchase path" },
      ],
      links: [
        { from: "catalog", to: "cart" },
        { from: "cart", to: "pay" },
      ],
    },
    outcome:
      "A live retail site where discovery, cart, and checkout run as one commerce path.",
    sections: [
      {
        heading: "Context",
        body: "Harmony Stores is a Nigerian retail technology company selling computers, mobile phones, and gadgets. The work is the storefront: discovery, cart, and checkout.",
      },
    ],
  },
  {
    slug: "job-tracker",
    name: "Job Tracker",
    shortName: "Job Tracker",
    index: "10",
    layer: "secondary",
    eyebrow: "Application management",
    summary:
      "Job-search operations: applications, progress, and organisation in one place - MERN stack with a real-time API.",
    role: "Full Stack Engineer",
    company: "Independent",
    year: "Personal",
    href: "https://github.com/TimiOdusanya/Job-Tracking-App",
    image: "/work/job-tracker.png",
    imageAlt: "Job Tracker application management interface",
    metrics: [{ value: "MERN", label: "Applications and progress" }],
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    problem:
      "A job hunt fragments across tabs, emails, and spreadsheets. Progress that is not recorded is progress you cannot manage.",
    owned: [
      "Application tracking and status",
      "Progress across the hunt",
      "Node.js API integration",
    ],
    challenge:
      "Give the hunt one operational surface - applications in, status visible, API as the source of truth.",
    architecture: {
      nodes: [
        { id: "ui", label: "Tracker UI", detail: "Applications · status" },
        { id: "api", label: "Node API", detail: "Realtime integration" },
        { id: "db", label: "MongoDB", detail: "Application records" },
      ],
      links: [
        { from: "ui", to: "api" },
        { from: "api", to: "db" },
      ],
    },
    outcome:
      "A job-application system where progress is tracked in one place instead of across inboxes and sheets.",
    sections: [
      {
        heading: "Context",
        body: "Job Tracker is a MERN application for managing job applications, tracking progress, and staying organised through a hunt. The API is the source of truth.",
      },
    ],
  },
];

export const primaryProjects = projects.filter((project) => project.layer === "primary");
export const secondaryProjects = projects.filter((project) => project.layer === "secondary");

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
