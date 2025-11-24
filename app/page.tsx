import { Button } from "@/components/Button/Button";
import { DiscordBlueBg } from "@/components/Icons/Icons";
import { Overlay } from "@/components/Overlay/Overlay";
import { Banner } from "@/modules/Banner/Banner";
import { FiftyFiftySection } from "@/modules/FiftyFiftySection/FiftyFiftySection";
import Leadspace from "@/modules/Leadspace/Leadspace";
import { RewardsCarousel } from "@/modules/RewardsCarousel/RewardsCarousel";
import { ThreeCards } from "@/modules/ThreeCards/ThreeCards";
import Image from "next/image";
import type { CSSProperties } from "react";

export default function Home() {
  return (
    <>
      <Overlay />
      <Leadspace />
      <section className="fixed  top-[110px] md:top-[61px] right-[-10px] z-50 flex flex-col gap-10 justify-center items-center">
        <Button variant="vertical" buttonText={"Playtest"} />
        <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="Instagram">
          <DiscordBlueBg className="w-[45px] h-[45px]" />
        </a>
      </section>
      <Banner/>
      <RewardsCarousel />
      <ThreeCards />
      <FiftyFiftySection />
    </>
  );
}
