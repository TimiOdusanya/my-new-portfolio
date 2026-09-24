export type SocialLink = {
  label: string;
  href: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type ProjectLayer = "primary" | "secondary";

export type CaseStudySection = {
  heading: string;
  body: string;
};

export type ArchitectureNode = {
  id: string;
  label: string;
  detail: string;
};

export type ArchitectureLink = {
  from: string;
  to: string;
};

export type Project = {
  slug: string;
  name: string;
  shortName: string;
  index: string;
  layer: ProjectLayer;
  eyebrow: string;
  summary: string;
  role: string;
  company: string;
  year: string;
  href?: string;
  image: string;
  imageAlt: string;
  gallery?: string[];
  metrics: Metric[];
  stack: string[];
  problem: string;
  owned: string[];
  challenge: string;
  architecture: {
    nodes: ArchitectureNode[];
    links: ArchitectureLink[];
  };
  outcome: string;
  sections: CaseStudySection[];
};

export type Experience = {
  id: string;
  company: string;
  product?: string;
  role: string;
  location: string;
  start: string;
  end: string;
  duration: string;
  summary: string;
  owned: string[];
  stack: string[];
  domains: string[];
  logo?: string;
};

export type WorkflowStep = {
  id: string;
  kind: "trigger" | "ingest" | "process" | "reason" | "decide" | "act" | "store" | "notify";
  label: string;
  detail: string;
};

export type AutomationProject = {
  slug: string;
  name: string;
  index: string;
  system: string;
  summary: string;
  trigger: string;
  outcome: string;
  stack: string[];
  steps: WorkflowStep[];
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  context: string;
};

export type PracticeArea = {
  id: string;
  index: string;
  name: string;
  statement: string;
  tools: string[];
};
