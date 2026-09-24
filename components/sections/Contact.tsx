import { site, socials } from "@/data/site";
import { Magnetic } from "@/components/motion/Magnetic";
import { Reveal } from "@/components/motion/Reveal";

export function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-line">
      <div className="site-grid">
        <p className="index-mark">
          <span className="text-copper">06</span>
          <span className="mx-3 text-line-strong">/</span>
          Contact
        </p>
        <Reveal className="mt-6">
          <h2 className="display max-w-4xl text-5xl tracking-tight text-paper md:text-7xl">
            If you are hiring for a senior engineer who can own the product end to end - write.
          </h2>
        </Reveal>
        <p className="measure mt-8 text-lg text-paper-dim">
          Recruiters, engineering leaders, founders, and clients. I read every note.
          The fastest path is email.
        </p>

        <Magnetic className="mt-14 inline-block">
          <a
            href={`mailto:${site.email}`}
            className="display block text-4xl text-paper underline decoration-line underline-offset-8 transition-colors hover:text-copper hover:decoration-copper sm:text-6xl md:text-7xl"
          >
            {site.email}
          </a>
        </Magnetic>

        <div className="mt-16 flex flex-wrap gap-x-8 gap-y-4">
          {socials.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="index-mark text-paper-dim transition-colors hover:text-paper"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="index-mark text-copper"
          >
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
}
