import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchitectureMap } from "@/components/work/ArchitectureMap";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { getProject, projects } from "@/data/projects";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return createMetadata({
    title: project.name,
    description: project.summary,
    path: `/work/${project.slug}`,
  });
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = projects.find((item) => item.index > project.index) ?? projects[0];

  return (
    <article className="pt-32">
      <header className="site-grid">
        <p className="index-mark">
          <span className="text-copper">{project.index}</span>
          <span className="mx-3 text-line-strong">/</span>
          {project.eyebrow}
        </p>
        <h1 className="display mt-6 text-6xl tracking-tight text-ink md:text-8xl">{project.name}</h1>
        <div className="mt-8 grid gap-8 border-t border-line py-8 md:grid-cols-4">
          <p>
            <span className="index-mark block">Role</span>
            <span className="mt-2 block text-paper-dim">{project.role}</span>
          </p>
          <p>
            <span className="index-mark block">Company</span>
            <span className="mt-2 block text-paper-dim">{project.company}</span>
          </p>
          <p>
            <span className="index-mark block">Years</span>
            <span className="mt-2 block text-paper-dim">{project.year}</span>
          </p>
          <p>
            <span className="index-mark block">Live</span>
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-copper"
              >
                Open product
              </a>
            ) : (
              <span className="mt-2 block text-paper-dim">Private</span>
            )}
          </p>
        </div>
      </header>

      <div className="site-grid">
        <div className="border border-line p-2 md:p-3">
          <ImageReveal
            src={project.image}
            alt={project.imageAlt}
            className="aspect-[16/9] w-full"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      <section className="site-grid grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="index-mark">Problem</p>
          <p className="mt-5 text-2xl leading-snug text-ink md:text-3xl">{project.problem}</p>
        </div>
        <div>
          <p className="index-mark">What I owned</p>
          <ul className="mt-5 space-y-3">
            {project.owned.map((item) => (
              <li key={item} className="flex gap-3 text-paper-dim">
                <span className="mt-2 h-px w-5 shrink-0 bg-copper" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-line">
        <div className="site-grid py-20">
          <p className="index-mark">Engineering challenge</p>
          <p className="measure-wide mt-6 text-xl leading-relaxed text-paper-dim">{project.challenge}</p>
        </div>
      </section>

      <section className="site-grid py-20">
        <p className="index-mark">Architecture</p>
        <h2 className="display mt-4 text-4xl text-ink md:text-5xl">How the system connects.</h2>
        <div className="mt-12">
          <ArchitectureMap nodes={project.architecture.nodes} links={project.architecture.links} />
        </div>
      </section>

      <section className="border-t border-line">
        <div className="site-grid grid gap-12 py-20 lg:grid-cols-2">
          {project.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="display text-3xl text-ink">{section.heading}</h2>
              <p className="mt-4 leading-relaxed text-paper-dim">{section.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-ink text-bone">
        <div className="site-grid grid gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="index-mark">Outcome</p>
            <p className="display mt-6 text-3xl leading-snug md:text-4xl">{project.outcome}</p>
          </div>
          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="border-t border-paper-line pt-4">
                <dt className="index-mark">{metric.label}</dt>
                <dd className="display mt-2 text-3xl">{metric.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="site-grid py-16">
        <p className="index-mark">Technology</p>
        <p className="mt-6 max-w-3xl text-lg text-paper-dim">{project.stack.join("  ·  ")}</p>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
          <Link href="/#scale" className="index-mark text-stone hover:text-ink">
            All systems
          </Link>
          {next ? (
            <Link href={`/work/${next.slug}`} className="text-copper">
              Next · {next.name} →
            </Link>
          ) : null}
          <a href={`mailto:${site.email}`} className="index-mark">
            Contact
          </a>
        </div>
      </section>
    </article>
  );
}
