import type { Project } from "@/data/types";
import type { StorySlide } from "@/components/experience/home/ProjectStorySlideshow";

export function storySlidesForProject(project: Project): StorySlide[] {
  const images =
    project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

  return images.map((src, index) => {
    const section = project.sections[index];
    return {
      src,
      alt: section ? `${project.name} - ${section.heading}` : project.imageAlt,
      title: section?.heading ?? project.eyebrow,
      body: section?.body ?? project.summary,
    };
  });
}
