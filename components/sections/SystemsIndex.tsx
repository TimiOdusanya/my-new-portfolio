import { experience } from "@/data/experience";
import { FadeIn } from "@/components/motion/Reveal";

export function SystemsIndex() {
  return (
    <section aria-label="Companies and products" className="border-y border-line">
      <div className="site-grid py-8">
        <p className="index-mark">In production for</p>
        <FadeIn>
          <p className="display mt-5 flex flex-wrap items-baseline gap-x-6 gap-y-3 text-3xl text-paper md:text-4xl">
            {experience.map((role, index) => (
              <span key={role.id} className="inline-flex items-baseline gap-6">
                <span>{role.product ?? role.company}</span>
                {index < experience.length - 1 ? (
                  <span className="text-copper" aria-hidden="true">
                    ·
                  </span>
                ) : null}
              </span>
            ))}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
