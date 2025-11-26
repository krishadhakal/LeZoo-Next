"use client";

import { Button } from '@/components/Button/Button';

export const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Apply to a Hard Hat Tour",
      badge: "APPLY TO GET INVITED",
      image: "/images/apply-lets.webp",
    },
    {
      number: 2,
      title: "Create your Zootbook",
      badge: "BECOME A SUPER ZOOT",
      image: "/images/goat-lets.webp",
    },
    {
      number: 3,
      title: "Enter the Park",
      badge: "JOIN THE HARD HAT TOUR",
      image: "/images/hard-tour.webp",
    },
    {
      number: 4,
      title: "Rewards",
      badge: "GET REWARDED",
      image: "/images/rewards.webp",
    },
  ];

  return (
    <section className="w-full relative py-16 lg:py-24">
      <div className='container-xl max-w-[1440px] mx-auto'>
        <div className="px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h3 className="h3 text-ivory text-shadow-1 text-stroke" style={{ '--text-shadow-1-color': 'black' } as React.CSSProperties}>
              LET'S SEE
            </h3>

            {/* Main Headline */}
            <h2 className="h2 text-blue-crayola text-stroke text-shadow-1 mb-8 max-w-[240px] mx-auto">
              HOW IT WORKS
            </h2>
          </div>

          {/* Steps Layout - Mobile */}
          <div className="md:hidden flex flex-col items-center gap-0 mb-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="relative flex items-center justify-center mb-6">
                <div className="absolute top-6 left-0 w-12 h-12 bg-blue-crayola rounded-full flex items-center justify-center z-10 shadow-[inset_0_0_0_4.76px_#1a1a28]">
                  <span className="text-white h4 font-bold text-shadow-1 text-stroke" style={{ '--text-shadow-1-color': 'black' } as React.CSSProperties}>1</span>
                </div>
                <img src="/images/apply-lets.webp" alt="Apply to get invited" className="w-[175px] h-auto object-contain" />
              </div>
              <p className="text-ivory text-small text-center font-bold">Apply to a Hard Hat Tour</p>
            </div>

            {/* Arrow 1 */}
            <div className="my-2 relative -top-[15px] left-[124px]">
              <img src="/images/lets-see-arrow-rotate.webp" alt="Arrow" className="w-auto h-[35px] rotate-90" />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="relative flex items-center justify-center mb-6">
                <div className="absolute top-6 left-0 w-12 h-12 bg-blue-crayola rounded-full flex items-center justify-center z-10 shadow-[inset_0_0_0_4.76px_#1a1a28]">
                  <span className="text-white h4 font-bold text-shadow-1 text-stroke" style={{ '--text-shadow-1-color': 'black' } as React.CSSProperties}>2</span>
                </div>
                <img src="/images/goat-lets.webp" alt="Become a super zoot" className="w-[175px] h-auto object-contain" />
              </div>
              <p className="text-ivory text-small text-center font-bold">Create your Zootbook</p>
            </div>

            {/* Arrow 2 */}
            <div className="my-2 relative -top-[15px] right-[130px]">
              <img src="/images/lets-see-arrow.webp" alt="Arrow" className="w-auto h-[35px] rotate-90" />
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="relative flex items-center justify-center mb-6">
                <div className="absolute top-6 left-0 w-12 h-12 bg-blue-crayola rounded-full flex items-center justify-center z-10 shadow-[inset_0_0_0_4.76px_#1a1a28]">
                  <span className="text-white h4 font-bold text-shadow-1 text-stroke" style={{ '--text-shadow-1-color': 'black' } as React.CSSProperties}>3</span>
                </div>
                <img src="/images/hard-tour.webp" alt="Join the hard hat tour" className="w-[175px] h-auto object-contain" />
              </div>
              <p className="text-ivory text-small text-center font-bold">Enter the Park</p>
            </div>

            {/* Arrow 3 */}
            <div className="my-2 relative -top-[15px] left-[124px]">
              <img src="/images/lets-see-arrow-rotate.webp" alt="Arrow" className="w-auto h-[35px] rotate-90" />
            </div>

            {/* Step 4 - No Arrow */}
            <div className="flex flex-col items-center">
              <div className="relative flex items-center justify-center mb-6">
                <div className="absolute top-6 left-0 w-12 h-12 bg-blue-crayola rounded-full flex items-center justify-center z-10 shadow-[inset_0_0_0_4.76px_#1a1a28]">
                  <span className="text-white h4 font-bold text-shadow-1 text-stroke" style={{ '--text-shadow-1-color': 'black' } as React.CSSProperties}>4</span>
                </div>
                <img src="/images/rewards.webp" alt="Get rewarded" className="w-[175px] h-auto object-contain" />
              </div>
              <p className="text-ivory text-small text-center font-bold">Rewards</p>
            </div>
          </div>

          {/* Steps Layout - Desktop */}
          <div className="hidden md:flex items-center justify-center gap-0 max-w-[1400px] mx-auto mb-12 gap-3">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="relative flex items-center justify-center mb-6">
                <div className="absolute top-6 left-3 w-14 h-14 bg-blue-crayola rounded-full flex items-center justify-center z-10 shadow-[inset_0_0_0_4.76px_#1a1a28]">
                  <span className="text-white h4 font-bold text-shadow-1 text-stroke" style={{ '--text-shadow-1-color': 'black' } as React.CSSProperties}>1</span>
                </div>
                <img src="/images/apply-lets.webp" alt="Apply to get invited" className="w-[188px] h-auto object-contain" />
              </div>
              <p className="text-ivory text-small text-center font-bold">Apply to a Hard Hat Tour</p>
            </div>

            {/* Arrow 1 */}
            <div className="mb-10">
              <img src="/images/lets-see-arrow.webp" alt="Arrow" className="w-[118px] h-auto" />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="relative flex items-center justify-center mb-6">
                <div className="absolute top-3 -left-3 w-14 h-14 bg-blue-crayola rounded-full flex items-center justify-center z-10 shadow-[inset_0_0_0_4.76px_#1a1a28]">
                  <span className="text-white h4 font-bold text-shadow-1 text-stroke" style={{ '--text-shadow-1-color': 'black' } as React.CSSProperties}>2</span>
                </div>
                <img src="/images/goat-lets.webp" alt="Become a super zoot" className="w-[188px] h-auto object-contain" />
              </div>
              <p className="text-ivory text-small text-center font-bold">Create your Zootbook</p>
            </div>

            {/* Arrow 2 */}
            <div className="mb-10">
              <img src="/images/lets-see-arrow-rotate.webp" alt="Arrow" className="w-[118px] h-auto" />
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="relative flex items-center justify-center mb-6">
                <div className="absolute top-6 -left-3 w-14 h-14 bg-blue-crayola rounded-full flex items-center justify-center z-10 shadow-[inset_0_0_0_4.76px_#1a1a28]">
                  <span className="text-white h4 font-bold text-shadow-1 text-stroke" style={{ '--text-shadow-1-color': 'black' } as React.CSSProperties}>3</span>
                </div>
                <img src="/images/hard-tour.webp" alt="Join the hard hat tour" className="w-[188px] h-auto object-contain" />
              </div>
              <p className="text-ivory text-small text-center font-bold">Enter the Park</p>
            </div>

            {/* Arrow 3 */}
            <div className="mb-10">
              <img src="/images/lets-see-arrow.webp" alt="Arrow" className="w-[118px] h-auto" />
            </div>

            {/* Step 4 - No Arrow */}
            <div className="flex flex-col items-center">
              <div className="relative flex items-center justify-center mb-6">
                <div className="absolute top-6 -left-4 w-14 h-14 bg-blue-crayola rounded-full flex items-center justify-center z-10 shadow-[inset_0_0_0_4.76px_#1a1a28]">
                  <span className="text-white h4 font-bold text-shadow-1 text-stroke" style={{ '--text-shadow-1-color': 'black' } as React.CSSProperties}>4</span>
                </div>
                <img src="/images/rewards.webp" alt="Get rewarded" className="w-[188px] h-auto object-contain" />
              </div>
              <p className="text-ivory text-small text-center font-bold">Rewards</p>
            </div>
          </div>

          {/* Primary Button */}
          <div className="flex justify-center">
            <Button
              variant="primary"
              buttonText="APPLY NOW"
              textColor="cloud-brust"
            >
            </Button>
          </div>
        </div>

        <div className='absolute -top-[120px]'>
          {/* Background Image */}
            <picture>
              <source media="(min-width: 992px)" srcSet="/images/how-graffiti.webp" />
              <img
                src="/images/lets-see-mobile.webp"
                alt="How It Works Background"
                className="w-full h-full object-cover"
              />
            </picture>
        </div>
      </div>
    </section>
  );
};
