import type { Metadata } from "next";
import { site } from "@/data/site";

export const defaultTitle = `${site.displayName} | ${site.title}`;

export function createMetadata({
  title,
  description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const resolvedTitle = title ?? defaultTitle;
  const resolvedDescription = description ?? site.description;
  const url = new URL(path, site.url).toString();

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: { canonical: url },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url,
      type: "website",
    },
    twitter: {
      title: resolvedTitle,
      description: resolvedDescription,
    },
  };
}
