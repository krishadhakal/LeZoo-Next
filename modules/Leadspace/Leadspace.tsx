import { Button } from "@/components/Button/Button";
import Image from "next/image";

export default function Leadspace() {
  return (
    <div>
      {/* Hero / Leadspace Section */}
      <section className="relative grid justify-center overflow-hidden max-[991px]:min-h-[80vh] min-h-[800px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/playtest-leadspace.webp"
            alt="Le Zoo Playtest Background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability if needed */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center max-w-2xl">
          {/* Headline */}
          <h1
            className="h1 text-shadow-1 mb-8 text-rose-1 text-md-[68.11px] text-[51px] text-shadow-1 text-stroke"
            style={{"--text-shadow-1-color": "var(--black)"} as React.CSSProperties}
          >
            IT TAKES A VILLAGE TO PLAYTEST
          </h1>

          {/* CTA Button */}
          <Button
            variant="primary"
            buttonText="APPLY NOW"
            textColor="0A0A0A"
            bgColor="rose-1"
            iconColor="0A0A0A"
          />
        </div>

        <div className="w-full h-auto absolute bottom-[-14%]">
          <figure className="w-[80%] h-auto absolute bottom-0">
            <img
              src="/images/leadspace-strokes-2.webp"
              alt="Le Zoo Stroke"
              className="object-cover w-full h-full"
            />
          </figure>

          <figure className="w-[80%] h-auto absolute bottom-0 right-0">
            <img
              src="/images/leadpace-strokes.webp"
              alt="Le Zoo Stroke"
              className="object-cover w-full h-full"
            />
          </figure>
        </div>

      </section>
    </div>
  );
}
