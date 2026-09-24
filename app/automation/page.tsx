import type { Metadata } from "next";
import { Laboratory } from "@/components/automation/Laboratory";
import { SignalThread } from "@/components/experience/chrome/SignalThread";
import { automationProjects } from "@/data/automation";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Automation",
  description:
    "Automation laboratory - Gmail and Outlook CRM sync, semantic investor search, AI agents, talent pipelines, and payroll systems built by Timi Odusanya.",
  path: "/automation",
});

export default function AutomationPage() {
  return (
    <div className="relative">
      <SignalThread />
      <Laboratory projects={automationProjects} />
      <section className="surface-moss px-[5vw] py-24 md:px-[8vw]">
        <p className="index-mark">The grammar</p>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <div>
            <p className="display text-5xl text-signal">01</p>
            <h2 className="display mt-4 text-3xl">Trigger</h2>
            <p className="mt-3 text-bone/70">
              Mail events, period close, a founder brief, a candidate entering a pipeline.
            </p>
          </div>
          <div>
            <p className="display text-5xl text-signal">02</p>
            <h2 className="display mt-4 text-3xl">Reason</h2>
            <p className="mt-3 text-bone/70">
              Embeddings, ranking, LLM scoring, token lifecycle. Intelligence is a step.
            </p>
          </div>
          <div>
            <p className="display text-5xl text-signal">03</p>
            <h2 className="display mt-4 text-3xl">Write-back</h2>
            <p className="mt-3 text-bone/70">
              CRM, ledger, shortlist, pipeline. If it does not persist, it is a demo.
            </p>
          </div>
        </div>
        <a href={`mailto:${site.email}`} className="mt-16 inline-block text-signal">
          {site.email}
        </a>
      </section>
    </div>
  );
}
