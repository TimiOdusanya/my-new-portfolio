import type { Metadata } from "next";
import Image from "next/image";
import { education, practice } from "@/data/practice";
import { experience } from "@/data/experience";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";
import { FadeIn } from "@/components/motion/Reveal";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: `About ${site.displayName} - Senior Full Stack Engineer working across product, AI systems, integrations, and automation.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <article className="pt-32">
      <div className="site-grid grid items-end gap-12 pb-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="index-mark">
            <span className="text-copper">About</span>
            <span className="mx-3 text-line-strong">/</span>
            {site.availability}
          </p>
          <h1 className="display mt-6 text-6xl tracking-tight text-ink md:text-8xl">
            An engineer who stays with the system.
          </h1>
          <p className="measure mt-8 text-lg leading-relaxed text-paper-dim">
            I am {site.name} - {site.displayName}. I have spent {site.years} years
            shipping production software across AI, HR, payroll, fintech, CRM,
            payments, travel, and automation. The through-line is ownership:
            data models, APIs, interfaces, integrations, .NET services, and the
            runtime they share.
          </p>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden bg-ink-soft">
          <Image
            src={site.profileImage}
            alt={`${site.displayName} portrait`}
            fill
            sizes="(min-width: 1024px) 420px, 90vw"
            className="object-cover object-[50%_18%]"
            priority
          />
        </div>
      </div>

      <section className="border-t border-line">
        <div className="site-grid grid gap-12 py-20 lg:grid-cols-2">
          <FadeIn>
            <p className="index-mark">How I work</p>
            <p className="mt-6 text-xl leading-relaxed text-paper-dim">
              I do not treat frontend, backend, and AI as separate careers. A
              founder CRM is only useful if OAuth tokens refresh, if search
              ranks, if the model streams, and if the interface does not lie
              about any of it. A payroll platform is only useful if the
              calculation is correct after the dashboard looks finished.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="index-mark">Where that has lived</p>
            <ul className="mt-6 space-y-4">
              {experience.map((role) => (
                <li key={role.id} className="flex justify-between gap-6 border-b border-line pb-4">
                  <span className="text-ink">
                    {role.company}
                    {role.product ? ` · ${role.product}` : ""}
                  </span>
                  <span className="index-mark shrink-0">{role.start} - {role.end}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="site-grid py-20">
          <p className="index-mark">Practice</p>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {practice.map((area) => (
              <div key={area.id} className="border-t border-line pt-6">
                <p className="index-mark text-copper">{area.index}</p>
                <h2 className="display mt-3 text-3xl">{area.name}</h2>
                <p className="mt-3 text-paper-dim">{area.statement}</p>
                <p className="mt-4 text-sm leading-relaxed text-stone">{area.tools.join("  ·  ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="site-grid grid gap-12 py-20 md:grid-cols-2">
          <div>
            <p className="index-mark">Education</p>
            <ul className="mt-8 space-y-8">
              {education.map((item) => (
                <li key={item.school}>
                  <p className="display text-3xl text-ink">{item.school}</p>
                  <p className="mt-2 text-paper-dim">{item.credential}</p>
                  <p className="index-mark mt-2">{item.dates}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="index-mark">Currently</p>
            <p className="mt-8 text-xl leading-relaxed text-paper-dim">
              Open to conversations with companies that need a senior full stack
              engineer - someone who can take a product from architecture to
              production, including the AI and automation layers around it.
            </p>
            <a href={`mailto:${site.email}`} className="mt-8 inline-block text-copper">
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
