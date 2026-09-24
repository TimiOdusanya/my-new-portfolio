import Link from "next/link";
import { primaryProjects, secondaryProjects } from "@/data/projects";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { FadeIn, Reveal } from "@/components/motion/Reveal";

export function SelectedWork() {
  return (
    <section id="work" className="section-pad">
      <div className="site-grid">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="index-mark">
              <span className="text-copper">02</span>
              <span className="mx-3 text-line-strong">/</span>
              Selected systems
            </p>
            <Reveal className="mt-5">
              <h2 className="display text-5xl tracking-tight text-paper md:text-7xl">
                Work that has to
                <br />
                hold in production.
              </h2>
            </Reveal>
          </div>
          <FadeIn className="measure text-paper-dim md:max-w-sm">
            Not a gallery. These are the systems I have owned - AI products,
            booking infrastructure, payroll, and the integrations underneath.
          </FadeIn>
        </div>
      </div>

      <div className="mt-20 space-y-32 md:mt-28 md:space-y-44">
        {primaryProjects.map((project, index) => (
          <article key={project.slug} className="relative">
            <div className="site-grid">
              <p className="pointer-events-none display absolute -top-16 right-0 text-[28vw] leading-none text-paper/[0.04] md:-top-24 md:text-[12rem]">
                {project.index}
              </p>
              <div className="relative grid items-end gap-0 lg:grid-cols-12">
                <Link
                  href={`/work/${project.slug}`}
                  className="relative block border border-line p-2 lg:col-span-8 lg:col-start-5 md:p-3"
                  aria-label={`View ${project.name} case study`}
                >
                  <ImageReveal
                    src={project.image}
                    alt={project.imageAlt}
                    className="aspect-[16/10] w-full"
                    sizes="(min-width: 1024px) 62vw, 100vw"
                    priority={index === 0}
                  />
                </Link>
                <div className="relative z-10 -mt-8 max-w-xl bg-ink pt-8 pr-6 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:self-end lg:pb-10">
                  <p className="index-mark">
                    {project.eyebrow}
                    <span className="mx-3 text-line-strong">/</span>
                    {project.year}
                  </p>
                  <Reveal className="mt-4">
                    <h3 className="display text-5xl text-paper md:text-7xl">{project.name}</h3>
                  </Reveal>
                  <p className="mt-3 index-mark text-brass">
                    {project.role}
                  </p>
                  <p className="mt-6 text-lg leading-relaxed text-paper-dim">{project.summary}</p>
                  <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <dt className="index-mark">{metric.label}</dt>
                        <dd className="mt-2 text-sm text-paper">{metric.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <Link
                    href={`/work/${project.slug}`}
                    className="mt-8 inline-flex items-center text-sm text-copper transition-colors hover:text-copper-soft"
                  >
                    Open the system
                    <span aria-hidden="true" className="ml-2">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="site-grid mt-32">
        <p className="index-mark">Further systems</p>
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {secondaryProjects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className="group grid gap-3 py-7 md:grid-cols-[4.5rem_minmax(10rem,0.8fr)_1.4fr_auto] md:items-baseline"
              >
                <span className="index-mark text-copper">{project.index}</span>
                <span className="display text-3xl text-paper transition-colors duration-300 group-hover:text-brass">
                  {project.name}
                </span>
                <span className="text-sm leading-relaxed text-stone">{project.summary}</span>
                <span className="index-mark text-copper opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
