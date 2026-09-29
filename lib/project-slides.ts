import type { Project } from "@/data/types";
import type { StorySlide } from "@/components/experience/home/ProjectStorySlideshow";

export function storySlidesForProject(project: Project): StorySlide[] {
  const images =
    project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];
  const beats =
    project.sections.length > 0
      ? project.sections
      : [{ heading: project.eyebrow, body: project.summary }];

  const count = Math.max(images.length, beats.length);

  return Array.from({ length: count }, (_, index) => {
    const section = beats[index % beats.length];
    const src = images[index % images.length] ?? project.image;
    return {
      src,
      alt: `${project.name} — ${section?.heading ?? project.name}`,
      title: section?.heading ?? project.eyebrow,
      body: section?.body ?? project.summary,
    };
  });
}
