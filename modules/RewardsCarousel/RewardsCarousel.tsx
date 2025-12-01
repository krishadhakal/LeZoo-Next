"use client";

import dynamic from 'next/dynamic';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Dynamically import Swiper for better code splitting
const DynamicSwiper = dynamic(
  () => import('swiper/react').then((mod) => mod.Swiper),
  {
    ssr: false,
    loading: () => (
      <div className="flex justify-center items-center h-[336px]">
        <div className="animate-pulse bg-space-cadet-2 rounded-2xl w-[215px] h-[336px]" />
      </div>
    ),
  }
);

export const RewardsCarousel = () => {
  const cards = [
    { image: '/images/zooblings.webp', label: 'Zooblings' },
    { image: '/images/skin&material.webp', label: 'Skins & Materials' },
    { image: '/images/looks.webp', label: 'Loot & Parts' },
    { image: '/images/karma-gain.webp', label: 'Karma Gains + Offerings' },
    { image: '/images/discord-playtest.webp', label: 'Official Playtester Role + Channel Access' },
  ];

  return (
    <section className="relative w-full min-h-[800px] lg:min-h-[900px] pt-6 lg:pt-[140px] pb-16">

      <div className='container mx-auto'>
      {/* Background Image */}
      <div className="absolute top-[8%] xl:top-[4%] left-0 right-0 hidden lg:block">
        <img
          src="/images/reward-bg.webp"
          alt="Rewards Background"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Duck Sticker - Top Right */}
      <div className="absolute top-[12px] right-8 lg:right-16 z-20 hidden lg:block">
        <div className="max-w-[337px] grid">
          <div className='col-start-1 col-end-1 row-start-1 row-end-1'>
            <img
              src="/images/duck.webp"
              alt="Get Rewarded Duck"
              className="w-full h-full"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className='col-start-1 col-end-1 row-start-1 row-end-1'>
            <div className="absolute top-[35px] left-[24px] px-4 py-2 text-black text-small font-bold whitespace-nowrap">
              Get rewarded!
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto relative z-10">
        {/* Title Section */}
        <div className="text-center mb-12 lg:mb-16 px-6">
          <h2 className="h1 text-blue-crayola mb-6 text-[60px] lg:text-[82px] font-bold text-shadow-1 text-stroke">
            REWARDS
          </h2>
          <p className="text-white text-large max-w-3xl mx-auto mb-16 leading-relaxed">
            Top playtesters will be receive IRL prizes, awarded with distinct park role memberships, receive in-game valuables and much more!
          </p>

          <div className="mb-4">
            <span className="text-blueberry h4 font-bold text-stroke">01</span>
          </div>
          <h3 className="text-white text-h2 lg:text-h1 font-atomic text-[45px] mb-4">
            IN GAME PRIZES
          </h3>
          <p className="text-white text-medium max-w-2xl mx-auto">
            All playtesters get exclusive access to in-game loot and our discord channels
          </p>
        </div>

        {/* Desktop Cards - Grid */}
        <div className="hidden xl:flex justify-center items-center gap-6 max-w-[1400px] mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-space-cadet-2 rounded-2xl p-6 w-[240px] h-[336px]"
            >
              <img
                src={card.image}
                alt={card.label}
                className="w-full h-full object-contain mb-4"
                loading="lazy"
                decoding="async"
              />
              <p className="text-white text-body-text font-bold text-center">
                {card.label}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet - Swiper */}
        <div className="xl:hidden overflow-hidden flex justify-center">
          <DynamicSwiper
            loop={true}
            centeredSlides={true}
            slidesPerView="auto"
            speed={800}
            grabCursor={true}
            watchSlidesProgress={true}
            className="rewards-swiper !overflow-visible max-w-full"
          >
            {[...cards, ...cards].map((card, index) => (
              <SwiperSlide key={index} className="flex justify-center !w-auto scale-[0.84] !transition-all duration-300 ease-in-out overflow-hidden [&.swiper-slide-active]:scale-100!" style={{ willChange: 'transform' }}>
                <div className="flex flex-col items-center justify-center bg-space-cadet-2 rounded-2xl p-6 w-[215px] h-[336px]">
                  <img
                    src={card.image}
                    alt={card.label}
                    className="w-full h-full object-contain mb-4"
                    loading="lazy"
                    decoding="async"
                  />
                  <p className="text-white text-body-text font-bold text-center">
                    {card.label}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </DynamicSwiper>
        </div>
      </div>
      </div>
    </section>
  );
};
