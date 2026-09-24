import Link from "next/link";
import { practice } from "@/data/practice";
import { FadeIn, Reveal } from "@/components/motion/Reveal";

export function Practice() {
  return (
    <section className="section-pad border-t border-line">
      <div className="site-grid">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="index-mark">
              <span className="text-copper">05</span>
              <span className="mx-3 text-line-strong">/</span>
              Practice
            </p>
            <Reveal className="mt-5">
              <h2 className="display text-5xl tracking-tight md:text-7xl">
                The work spans
                <br />
                the whole stack.
              </h2>
            </Reveal>
          </div>
          <FadeIn className="md:max-w-sm">
            <p className="text-paper-dim">
              Breadth is not a logo wall. These are the surfaces I actually ship
              on - and how they connect.
            </p>
            <Link href="/automation" className="mt-5 inline-block text-sm text-copper">
              See the automation studio →
            </Link>
          </FadeIn>
        </div>

        <ol className="mt-20 divide-y divide-line border-y border-line">
          {practice.map((area) => (
            <li key={area.id} className="grid gap-6 py-10 md:grid-cols-[6rem_16rem_1fr]">
              <p className="index-mark text-copper">{area.index}</p>
              <h3 className="display text-3xl text-paper">{area.name}</h3>
              <div>
                <p className="max-w-2xl text-paper-dim">{area.statement}</p>
                <p className="mt-4 text-sm tracking-wide text-stone">{area.tools.join("  ·  ")}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
