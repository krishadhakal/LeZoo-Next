import { Overlay } from "@/components/Overlay/Overlay";
import { HabitatSection } from "@/modules/HabitatSection/HabitatSection";
import { HomeLeadspace } from "@/modules/HomeLeadspace/HomeLeadspace";
import HowItWorksShowcase from "@/modules/HowItWorksShowcase/HowItWorksShowcase";

export default function Home() {
  return (
    <>
      <Overlay />
      <HomeLeadspace />
      <HabitatSection />
      <HowItWorksShowcase />
    </>
  );
}
