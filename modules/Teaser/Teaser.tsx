"use client";

import Image from 'next/image';
import { Button } from '@/components/Button/Button';
import Link from 'next/link';

const BACKGROUND_IMAGE = 'https://dev-lezoowp.pantheonsite.io/wp-content/uploads/2025/12/teaser-bg-scaled.webp';
const TORN_HOLE_IMAGE = 'https://dev-lezoowp.pantheonsite.io/wp-content/uploads/2025/12/teaser-hole-with-zoot.webp';
const TOP_STROKE_IMAGE = 'https://dev-lezoowp.pantheonsite.io/wp-content/uploads/2025/12/top-stroke-scaled.webp';
const BOTTOM_STROKE_IMAGE = 'https://dev-lezoowp.pantheonsite.io/wp-content/uploads/2025/12/teaser-bottom-stroke-1-scaled.webp';
const FOOTER_BORDER_IMAGE = 'https://dev-lezoowp.pantheonsite.io/wp-content/uploads/2025/12/teaser-footer-border.webp';
const YOUTUBE_LINK = 'https://www.youtube.com/watch?v=FvKo8AFw4rQ';

const TEXT_CONTENT = {
  topHeading: {
    line1: "IT'S A TRIPPY WORLD",
    line2: "WE ARE LIVING IN.."
  },
  bottomHeading: {
    line1: "THE ONLY WAY",
    line2: "OUT IS WITHIN"
  },
  cta: "WATCH TEASER"
} as const;

export const Teaser = () => {
  const textStrokeStyle = {
    '--text-stroke-color': 'black',
    '--text-shadow-3-color': 'black'
  } as React.CSSProperties;

  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={BACKGROUND_IMAGE}
          alt="Background with clouds in the sky"
          className="w-full h-full object-cover object-top"
          aria-hidden="true"
        />
      </div>

      {/* Top Stroke */}
      <div className="md:hidden absolute -top-[2.3%] z-1">
        <img
          src={TOP_STROKE_IMAGE}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          aria-hidden="true"
        />
      </div>

      {/* Bottom Stroke */}
      <div className="absolute bottom-0 left-0 right-0 z-1">
        <img
          src={BOTTOM_STROKE_IMAGE}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          aria-hidden="true"
        />
      </div>

      {/* Footer Border - Mobile Only */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 z-1">
        <img
          src={FOOTER_BORDER_IMAGE}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          aria-hidden="true"
        />
      </div>

      {/* Content Container */}
      <div className="container relative z-1 flex flex-col items-center justify-center px-5 pt-[100px] pb-[158px] md:pt-[88px] md:pb-[100px] max-w-7xl mx-auto">
        {/* Top Heading */}
        <h4 className="h4 text-alabaster font-strawford text-center mb-8 md:mb-16 drop-shadow-lg pb-12 md:pb-0">
          {TEXT_CONTENT.topHeading.line1}<br />
          {TEXT_CONTENT.topHeading.line2}
        </h4>

        {/* Torn-Paper Hole with 3D World Inside */}
        <div className="relative w-full max-w-[385px]">
          <Image
            src={TORN_HOLE_IMAGE}
            alt="Portal to surreal 3D world"
            width={385}
            height={361}
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="md:-mt-[30px] flex flex-col items-center relative z-1">
          {/* Bottom Heading */}
          <h3
            className="text-[44px] font-normal font-casa-grande leading-[0.85] text-alabaster text-shadow-3 text-center mb-4 tracking-[-0.05em] text-stroke"
            style={{
              ...textStrokeStyle,
              WebkitTextStrokeWidth: '2px'
            }}
          >
            {TEXT_CONTENT.bottomHeading.line1}<br />
            {TEXT_CONTENT.bottomHeading.line2}
          </h3>

          {/* CTA Button */}
          <Link href={YOUTUBE_LINK} target='_blank'>
            <Button
              variant="primary"
              textColor='raisin-black-3'
              buttonText={TEXT_CONTENT.cta}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
