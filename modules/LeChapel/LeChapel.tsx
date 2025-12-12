"use client";

import Image from 'next/image';

const BACKGROUND_IMAGES = {
  desktop: 'https://dev-lezoowp.pantheonsite.io/wp-content/uploads/2025/12/lechapel-background-scaled.webp',
  mobile: 'https://dev-lezoowp.pantheonsite.io/wp-content/uploads/2025/12/lechapel-mobile.webp'
};

const TEXTURE_IMAGE = 'https://dev-lezoowp.pantheonsite.io/wp-content/uploads/2025/12/lechapel-texture-scaled.webp';
const NOISE_IMAGE = 'https://dev-lezoowp.pantheonsite.io/wp-content/uploads/2025/12/lechapel-noise.webp';
const HOPPER_IMAGE = 'https://dev-lezoowp.pantheonsite.io/wp-content/uploads/2025/12/Hopper.webp';

const TEXT_CONTENT = {
  floatingText1: 'I know where your heart leads…',
  heading: {
    line1: 'LOVE OR',
    line2: 'FRIENDSHIP',
    line3: 'IN LECHAPEL'
  },
  description: "Whether it's a spark or a soulmate, Mz. Hopper's got you. Love, friendship, or something in between - connection starts in Le Chapel."
} as const;

export const LeChapel = () => {
  const headingStrokeStyle = {
    '--text-stroke-color': 'black',
    '--text-shadow-1-color': '#EEEBE2'
  } as React.CSSProperties;

  return (
    <section className="relative w-full">
      {/* Background Image - Responsive */}
      <picture>
        <source media="(min-width: 768px)" srcSet={BACKGROUND_IMAGES.desktop} />
        <Image
          src={BACKGROUND_IMAGES.mobile}
          alt=""
          width={768}
          height={1024}
          className="w-full h-auto"
          aria-hidden="true"
          priority
        />
      </picture>

      {/* Texture Overlay*/}
      <div className="absolute inset-0 mix-blend-lighten pointer-events-none" aria-hidden="true">
        <Image
          src={TEXTURE_IMAGE}
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 mix-blend-overlay pointer-events-none" aria-hidden="true">
        <Image
          src={NOISE_IMAGE}
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      {/* Bunny Head with Speech Bubble - Desktop Only */}
      <div className="hidden md:block absolute top-[27%] right-0">
        <div className="relative">
          <Image
            src={HOPPER_IMAGE}
            alt="Mz. Hopper character"
            width={250}
            height={250}
            className="w-[180px] lg:w-[250px] h-auto drop-shadow-2xl relative z-0"
          />
          <div className="absolute top-[22px] lg:top-[32px] left-[12px] lg:left-[20px] w-[80px] lg:w-[101px]">
            <p className="font-strawford text-black text-[12px] lg:text-[16px] leading-[110%] font-bold">
              {TEXT_CONTENT.floatingText1}
            </p>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="container absolute top-0 left-0 md:top-[20%] lg:top-[32%] right-[10%] md:right-0 lg:right-[10%] mx-auto flex items-center justify-center md:justify-end w-full h-full md:w-auto md:h-auto">
        {/* Main Content */}
        <div className="relative max-w-[450px] flex flex-col w-full h-full justify-between pt-[118px] pb-[32px] md:block">
          {/* Main Heading */}
          <h2
            className="text-[44px] md:text-[48px] lg:text-[64px] font-casa-grande font-extrabold leading-[0.85] text-african-violet text-stroke text-shadow-1 text-center md:text-left mb-4 md:mb-6"
            style={headingStrokeStyle}
          >
            {TEXT_CONTENT.heading.line1}<br />
            {TEXT_CONTENT.heading.line2}<br />
            <span className="text-alabaster ">{TEXT_CONTENT.heading.line3}</span>
          </h2>

          {/* Description */}
          <p className="text-white text-[16px] md:text-[16px] lg:text-[18px] font-strawford font-bold md:font-medium leading-[140%] text-center md:text-left max-w-[320px] md:max-w-[350px] mx-auto md:mx-0">
            {TEXT_CONTENT.description}
          </p>
        </div>
      </div>
    </section>
  );
};
