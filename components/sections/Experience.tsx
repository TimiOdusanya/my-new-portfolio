import { experience } from "@/data/experience";
import { FadeIn, Reveal } from "@/components/motion/Reveal";

export function Experience() {
  return (
    <section id="experience" className="section-pad border-t border-line">
      <div className="site-grid">
        <p className="index-mark">
          <span className="text-copper">03</span>
          <span className="mx-3 text-line-strong">/</span>
          Experience
        </p>
        <Reveal className="mt-5">
          <h2 className="display max-w-4xl text-5xl tracking-tight text-paper md:text-7xl">
            Roles where I owned the system, not a ticket queue.
          </h2>
        </Reveal>

        <ol className="mt-20">
          {experience.map((role, index) => (
            <li key={role.id} className="border-t border-line py-12 last:border-b">
              <FadeIn delay={index * 0.04}>
                <div className="grid gap-8 lg:grid-cols-[10rem_1fr_1.4fr]">
                  <p className="index-mark pt-2">
                    {role.start}
                    <span className="mx-2 text-line-strong">-</span>
                    {role.end}
                  </p>
                  <div>
                    <h3 className="display text-4xl text-paper">{role.company}</h3>
                    {role.product ? <p className="mt-2 text-brass">{role.product}</p> : null}
                    <p className="mt-4 text-sm text-paper-dim">{role.role}</p>
                    <p className="mt-1 index-mark">{role.location}</p>
                  </div>
                  <div>
                    <p className="text-base leading-relaxed text-paper-dim">{role.summary}</p>
                    <ul className="mt-6 space-y-2">
                      {role.owned.slice(0, 4).map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-paper">
                          <span className="mt-2 h-px w-4 shrink-0 bg-copper" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
