import type { AutomationProject } from "./types";

export const automationProjects: AutomationProject[] = [
  {
    slug: "email-crm-sync",
    name: "Founder inbox → CRM",
    index: "01",
    system: "CLIMB",
    summary:
      "Gmail and Outlook become a living CRM. OAuth, token refresh, and background synchronization keep founder threads current without asking anyone to copy email into a database.",
    trigger: "New or updated mail in a connected Gmail or Outlook account",
    outcome: "Threaded founder conversations, attachments, and follow-up state in the CRM",
    stack: ["OAuth 2.0", "Gmail", "Outlook", "Redis", "PostgreSQL", "Webhooks"],
    steps: [
      {
        id: "trigger",
        kind: "trigger",
        label: "Mailbox event",
        detail: "Gmail or Outlook notifies a change in a connected founder inbox.",
      },
      {
        id: "auth",
        kind: "ingest",
        label: "Token lifecycle",
        detail: "OAuth tokens refresh before they expire. Microsoft and Google are treated as identity systems, not login buttons.",
      },
      {
        id: "queue",
        kind: "process",
        label: "Sync queue",
        detail: "Redis-backed jobs ingest threads and attachments without blocking the product UI.",
      },
      {
        id: "normalize",
        kind: "process",
        label: "Normalize",
        detail: "Messages become threads, participants, and attachments the CRM can query.",
      },
      {
        id: "store",
        kind: "store",
        label: "Founder graph",
        detail: "PostgreSQL holds the relationship between founders, investors, and conversations.",
      },
      {
        id: "notify",
        kind: "notify",
        label: "CRM surfaces",
        detail: "The Founder CRM updates. Sequences and follow-ups can run against live mail, not a stale export.",
      },
    ],
  },
  {
    slug: "investor-search",
    name: "Semantic investor discovery",
    index: "02",
    system: "CLIMB",
    summary:
      "Investor search that understands a company, not just a keyword. Embeddings, retrieval, and ranking turn a founder brief into a shortlist.",
    trigger: "A founder brief, thesis, or search query",
    outcome: "A ranked investor set with retrieval context the LLM can use",
    stack: ["Embeddings", "Vector search", "Ranking", "PostgreSQL", "LLM"],
    steps: [
      {
        id: "trigger",
        kind: "trigger",
        label: "Brief",
        detail: "A founder describes the raise, the market, or the kind of investor they need.",
      },
      {
        id: "embed",
        kind: "ingest",
        label: "Embed",
        detail: "The brief and investor records become vectors the system can compare.",
      },
      {
        id: "retrieve",
        kind: "process",
        label: "Retrieve",
        detail: "Semantic search returns candidates that keyword filters would miss.",
      },
      {
        id: "rank",
        kind: "reason",
        label: "Rank",
        detail: "Ranking uses thesis fit and relationship context, not recency alone.",
      },
      {
        id: "assist",
        kind: "decide",
        label: "Assist",
        detail: "Streaming LLM chat can cite the retrieved set while the founder works.",
      },
      {
        id: "store",
        kind: "store",
        label: "Shortlist",
        detail: "Results persist on the founder graph for the rest of the raise.",
      },
    ],
  },
  {
    slug: "imessage-agent",
    name: "iMessage agent infrastructure",
    index: "03",
    system: "CLIMB",
    summary:
      "Fundraising assistance that can leave the product. Webhooks and agents carry actions into iMessage so the CRM is not a dead end.",
    trigger: "An agent decision inside the Founder CRM",
    outcome: "An action delivered through iMessage, with state written back to the system",
    stack: ["LLM agents", "Webhooks", "iMessage", "Redis", "AWS"],
    steps: [
      {
        id: "trigger",
        kind: "trigger",
        label: "Agent decision",
        detail: "The CRM decides a founder or investor needs a message, not another dashboard event.",
      },
      {
        id: "reason",
        kind: "reason",
        label: "Reason",
        detail: "The LLM works with conversation context already synced from mail and the founder graph.",
      },
      {
        id: "decide",
        kind: "decide",
        label: "Decide",
        detail: "The system chooses an action and a channel. iMessage is one path, not a rewrite of the product.",
      },
      {
        id: "act",
        kind: "act",
        label: "Dispatch",
        detail: "Webhooks send the action to agent infrastructure that can reach iMessage.",
      },
      {
        id: "store",
        kind: "store",
        label: "Write-back",
        detail: "Delivery state returns to PostgreSQL so the CRM stays the system of record.",
      },
      {
        id: "notify",
        kind: "notify",
        label: "Thread",
        detail: "The conversation continues where the founder already is.",
      },
    ],
  },
  {
    slug: "talent-pipeline",
    name: "AI talent pipeline",
    index: "04",
    system: "Loubby AI",
    summary:
      "Job descriptions, assessments, and scoring as one workflow. LLMs draft and evaluate; the hiring pipeline stays the source of truth.",
    trigger: "A new role, or a candidate entering a pipeline",
    outcome: "A scored candidate on a hiring pipeline, with a generated JD when the role is new",
    stack: ["LLM APIs", "Node.js", ".NET Core", "PostgreSQL", "OAuth 2.0"],
    steps: [
      {
        id: "trigger",
        kind: "trigger",
        label: "Role or candidate",
        detail: "A company opens a role, or a candidate enters an existing pipeline.",
      },
      {
        id: "jd",
        kind: "reason",
        label: "Generate",
        detail: "LLMs draft job descriptions from the role context instead of a blank form.",
      },
      {
        id: "assess",
        kind: "process",
        label: "Assess",
        detail: "AI assessments and matching run against the role, not a generic résumé parse.",
      },
      {
        id: "score",
        kind: "decide",
        label: "Score",
        detail: "Candidates receive evaluation scores the hiring team can inspect.",
      },
      {
        id: "pipeline",
        kind: "act",
        label: "Advance",
        detail: "The pipeline, onboarding, PIPs, and KPIs stay in product - AI does not replace the process.",
      },
      {
        id: "store",
        kind: "store",
        label: "Record",
        detail: "Results persist for 200,000+ users and 2,500+ companies across the platform.",
      },
    ],
  },
  {
    slug: "payroll-run",
    name: "Payroll and remittances",
    index: "05",
    system: "Loubby AI",
    summary:
      "Timesheets become payroll. Deductions, taxes, and remittances run as a process - not a monthly reconstruction in a spreadsheet.",
    trigger: "A payroll period closing, or approved timesheets",
    outcome: "Calculated payroll with deductions, taxes, and remittance state",
    stack: ["Node.js", ".NET Core", "PostgreSQL", "Redis", "AWS"],
    steps: [
      {
        id: "trigger",
        kind: "trigger",
        label: "Period close",
        detail: "Timesheets and attendance close for a payroll period.",
      },
      {
        id: "ingest",
        kind: "ingest",
        label: "Collect",
        detail: "Hours, roles, and company rules come in as structured inputs.",
      },
      {
        id: "calc",
        kind: "process",
        label: "Calculate",
        detail: "Deductions and taxes are applied as rules, not as a hidden script.",
      },
      {
        id: "decide",
        kind: "decide",
        label: "Review",
        detail: "Operators can inspect a run before money moves.",
      },
      {
        id: "act",
        kind: "act",
        label: "Remit",
        detail: "Payroll and remittances execute against the calculated run.",
      },
      {
        id: "store",
        kind: "store",
        label: "Ledger",
        detail: "The result is stored as operational history, not a downloaded file.",
      },
    ],
  },
];

export function getAutomation(slug: string): AutomationProject | undefined {
  return automationProjects.find((project) => project.slug === slug);
}
