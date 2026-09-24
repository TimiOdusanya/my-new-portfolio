import Link from "next/link";

export default function NotFound() {
  return (
    <section className="site-grid flex min-h-[80svh] flex-col justify-center pt-28">
      <p className="index-mark text-copper">404</p>
      <h1 className="display mt-6 text-6xl text-ink md:text-8xl">This page is not in the system.</h1>
      <p className="measure mt-6 text-paper-dim">
        The route does not exist. The work, the experience, and the automation studio are still here.
      </p>
      <Link href="/" className="mt-10 text-copper">
        Return home →
      </Link>
    </section>
  );
}
