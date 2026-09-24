import { HomeExperience } from "@/components/experience/home/HomeExperience";
import { JsonLd } from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <HomeExperience />
    </>
  );
}
