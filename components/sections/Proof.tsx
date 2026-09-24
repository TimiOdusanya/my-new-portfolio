import { testimonials } from "@/data/testimonials";
import { FadeIn, Reveal } from "@/components/motion/Reveal";

export function Proof() {
  const [primary, secondary] = testimonials;

  return (
    <section className="border-t border-line bg-paper text-ink">
      <div className="site-grid section-pad">
        <p className="index-mark" style={{ color: "#8a8276" }}>
          <span className="text-copper">04</span>
          <span className="mx-3">/</span>
          From people who shipped with me
        </p>
        {primary ? (
          <figure className="mt-12">
            <Reveal>
              <blockquote className="display max-w-5xl text-3xl leading-snug tracking-tight text-ink md:text-5xl md:leading-[1.15]">
                “{primary.quote}”
              </blockquote>
            </Reveal>
            <figcaption className="mt-10">
              <p className="text-ink">{primary.name}</p>
              <p className="mt-1 text-sm text-stone">{primary.title}</p>
              <p className="index-mark mt-2">{primary.context}</p>
            </figcaption>
          </figure>
        ) : null}

        {secondary ? (
          <FadeIn className="mt-20 max-w-2xl border-t border-paper-line pt-10">
            <blockquote className="text-lg leading-relaxed text-ink/80">“{secondary.quote}”</blockquote>
            <p className="mt-6 text-ink">{secondary.name}</p>
            <p className="mt-1 text-sm text-stone">{secondary.title}</p>
          </FadeIn>
        ) : null}
      </div>
    </section>
  );
}
