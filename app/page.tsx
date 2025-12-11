import { Overlay } from "@/components/Overlay/Overlay";
import { HabitatSection } from "@/modules/HabitatSection/HabitatSection";
import { HomeLeadspace } from "@/modules/HomeLeadspace/HomeLeadspace";
import HowItWorksShowcase from "@/modules/HowItWorksShowcase/HowItWorksShowcase";
import { Teaser } from "@/modules/Teaser/Teaser";

export default function Home() {
  return (
    <>
      <Overlay />
      <HomeLeadspace />
      <HabitatSection />
      <HowItWorksShowcase />
      <Teaser />
    </>
  );
}
