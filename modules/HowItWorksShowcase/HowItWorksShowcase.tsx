"use client";

import clsx from "clsx";
import Image from "next/image";

type HowItWorksItem = {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
};

type HowItWorksProps = {
  /**
   * Override the default three cards.
   */
  items?: HowItWorksItem[];
  /**
   * Section heading text.
   */
  heading?: string;
  /**
   * Optional eyebrow/kicker above the heading.
   */
  eyebrow?: string;
  /**
   * Optional wrapper className for layout overrides.
   */
  className?: string;
};

const defaultItems: HowItWorksItem[] = [
  {
    title: "Gather Resources",
    description:
      "Gain and gift karma, discover in-world collectibles, and unlock special roles.",
    imageSrc:
      "https://dev-lezoowp.pantheonsite.io/wp-content/uploads/2025/12/how-to-gather-resources.webp",
    alt: "Collectibles and rewards",
  },
  {
    title: "Learn About Yourself",
    description:
      "Follow your curiosity. Discover hidden truths, face challenges, see where your choices lead you.",
    imageSrc:
      "https://dev-lezoowp.pantheonsite.io/wp-content/uploads/2025/12/how-to-learn-about-yourself.webp",
    alt: "Character looking through cave opening",
  },
  {
    title: "Create Endlessly",
    description:
      "Design, build, and remix your world. There are no limits—just imagination and the tools to bring it to life.",
    imageSrc:
      "https://dev-lezoowp.pantheonsite.io/wp-content/uploads/2025/12/how-to-create-endlessly.webp",
    alt: "Floating platforms and creators",
  },
];

export const HowItWorksShowcase = ({
  items = defaultItems,
  heading = "How It Works",
  eyebrow = "Find out",
  className,
}: HowItWorksProps) => {
  return (
    <section className={clsx("w-full py-16 lg:py-30 relative", className)}>
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none z-2">
        <Image
          src="https://dev-lezoowp.pantheonsite.io/wp-content/uploads/2025/12/habitat-desktop-texture-scaled.webp"
          alt="Noise texture overlay"
          fill
          className="object-cover mix-blend-overlay"
          aria-hidden="true"
        />
      </div>

      {/* How Graffiti Graphic */}
      <div className="absolute inset-0 pointer-events-none z-1">
        <Image
          src="/images/how-graffiti.webp"
          alt="How Graffiti Graphics"
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      {/* How Grunge Brushes Graphic */}
      <div className="absolute inset-0 pointer-events-none z-1">
        <Image
          src="/images/how-grunge-brushes.webp"
          alt="How Grunge Brushes Graphics"
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      {/* How Line Graphics */}
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] w-full h-[50%] pointer-events-none z-1">
        <Image
          src="/images/how-line-graphics.webp"
          alt="How Line Graphics"
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto max-w-[1400px] px-6 lg:px-[105px] relative z-1 overflow-visible">
        <figure className="absolute inset-0 z-1">
          <Image
            src="/images/faded-phrases.webp"
            alt="Faded Phrases"
            fill
            className="w-full h-full object-contain"
          />
        </figure>
        <div className="relative z-1 text-center mb-12 lg:mb-16">
          <h3
            className="h3 text-ivory text-shadow-1 text-stroke uppercase"
            style={{ "--text-shadow-1-color": "black" } as React.CSSProperties}
          >
            {eyebrow}
          </h3>

          <h2 className="h2 text-blue-crayola text-stroke text-shadow-1 mb-8 mx-auto uppercase">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-space-cadet-2 rounded-3xl p-5 flex flex-col items-center drop-shadow-2xl relative z-2"
            >
              <div
                className="relative w-full h-[80px]"
                style={{ transform: "rotate(-0.4deg)" }}
              >
                <Image
                  src="/svg/bg-1.svg"
                  alt="Badge background"
                  fill
                  className=" h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-[29px] xl:text-[33px] font-atomic text-nowrap px-4">
                    {item.title}
                  </span>
                </div>
              </div>

              <div className="mb-8 relative w-[calc(100%+1.25rem)] aspect-10/9">
                <Image
                  src={item.imageSrc}
                  alt={item.alt || "Find Out How It Works"}
                  fill
                  className="w-full h-full object-cover drop-shadow-xl"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <p className="text-ivory text-center font-semibold text-large leading-tight">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksShowcase;
