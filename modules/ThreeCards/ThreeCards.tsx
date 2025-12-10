
"use client";

import Image from "next/image";
import { Button } from '@/components/Button/Button';

export const ThreeCards = () => {
  const prizes = [
    {
      badge: "FOR THE GAMERS",
      image: "/images/irl-wow-box.webp",
      text: "Win an Xbox Series X or Backbone controller",
    },
    {
      badge: "FOR THE TRAVELER",
      image: "/images/irl-nyc.webp",
      text: "Fly to NYC and meet the LeZoo team",
    },
    {
      badge: "FOR THE TREND SETTER",
      image: "/images/irl-trend.webp",
      text: "Snag exclusive LeZoo merch",
    },
  ];

  return (
    <section className="w-full relative py-16 lg:py-24 overflow-hidden">

      <div className='container max-w-[1400px] mx-auto'>
        {/* Background Image */}
        <div className="absolute -top-[6%] left-0 right-0 hidden lg:block w-full h-full">
          <img
            src="/images/irl-background.webp"
            alt="IRL Prizes Background"
            className="w-full h-full"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div className="container mx-auto max-w-[1400px] px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-blueberry h4 font-bold text-stroke mb-4">
            03
          </p>
          <h2 className="text-[45px] text-ivory mb-4 font-atomic">
            IN REAL LIFE PRIZES
          </h2>
          <p className="text-ivory text-medium max-w-3xl mx-auto leading-relaxed">
            Saved for the best of each Hard Hat Tour, the top playtesters will receive our biggest prizes!
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto mb-12">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className="bg-space-cadet-2 rounded-3xl p-5 flex flex-col items-center drop-shadow-2xl justify-between"
            >
              {/* Badge */}
              <div
                className="relative mb-8 w-full h-[100px]"
                style={{ transform: 'rotate(-0.4deg)' }}
              >
                <Image
                  src="/svg/bg-1.svg"
                  alt="Badge background"
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-[29px] xl:text-[33px] font-atomic text-nowrap px-4">
                    {prize.badge}
                  </span>
                </div>
              </div>

              {/* Prize Image */}
              <div className="mb-8 relative w-full h-[200px]">
                <Image
                  src={prize.image}
                  alt={prize.text}
                  fill
                  className="object-contain drop-shadow-xl"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Prize Text */}
              <p className="text-ivory text-center font-semibold text-large leading-tight max-w-[280px]">
                {prize.text}
              </p>
            </div>
          ))}
        </div>

        {/* Primary Button */}
        <div className="flex justify-center">
          <Button
            variant="primary"
            buttonText="INVITE FRIENDS"
            textColor="cloud-brust"
          />
        </div>
      </div>
    </section>
  );
};
