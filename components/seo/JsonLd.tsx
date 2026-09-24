import { site, socials } from "@/data/site";

export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    alternateName: [site.displayName, "TimiOdusanya"],
    url: site.url,
    image: `${site.url}${site.profileImage}`,
    jobTitle: site.title,
    description: site.description,
    email: site.email,
    telephone: site.phone,
    sameAs: socials.map((item) => item.href),
    knowsAbout: [
      "Full Stack Engineering",
      "AI Engineering",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "Python",
      "Flask",
      "C#",
      ".NET",
      "ASP.NET Core",
      "Entity Framework",
      "AWS",
      "LLM systems",
      "Semantic Search",
      "Automation",
      "Payroll systems",
      "CRM integrations",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${site.displayName} - ${site.title}`,
    url: site.url,
    description: site.description,
    author: {
      "@type": "Person",
      name: site.name,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}
