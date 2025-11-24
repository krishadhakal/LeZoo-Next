"use client";

import { Button } from '@/components/Button/Button';

export const HowItWorks = () => {
  const steps = [
    {
      badge: "APPLY TO GET INVITED",
      image: "/images/apply-lets.webp",
      label: "STEP 1",
    },
    {
      badge: "BECOME A SUPER ZOOT",
      image: "/images/goat-lets.webp",
      label: "STEP 2",
    },
    {
      badge: "JOIN THE HARD HAT TOUR",
      image: "/images/hard-tour.webp",
      label: "STEP 3",
    },
    {
      badge: "GET REWARDED",
      image: "/images/rewards.webp",
      label: "STEP 4",
    },
  ];

  return (
    <section className="w-full relative py-16 lg:py-24">
      <div className='container-xl max-w-[1440px] mx-auto'>
        {/* Background Image */}
        <div className="absolute top-0 left-0 right-0 hidden lg:block w-full h-full">
          <img
            src="/images/how-graffiti.webp"
            alt="How It Works Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="container-xl mx-auto max-w-[1400px] px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-blueberry h4 font-bold text-stroke mb-4">
            LET'S SEE
          </p>
          <h2 className="text-[45px] text-ivory mb-4 font-atomic">
            HOW IT WORKS
          </h2>
        </div>

        {/* Desktop Layout - Horizontal */}
        <div className="hidden lg:flex items-center justify-center gap-6 max-w-[1400px] mx-auto mb-12">
          {steps.map((step, index) => (
            <>
              <div
                key={index}
                className="flex flex-col items-center"
              >
                {/* Step Label */}
                <p className="text-ivory text-small font-bold mb-4">
                  {step.label}
                </p>

                {/* Circle Container */}
                <div className="relative w-[200px] h-[200px] bg-space-cadet-2 rounded-full flex items-center justify-center mb-6">
                  <img
                    src={step.image}
                    alt={step.badge}
                    className="w-[140px] h-[140px] object-contain"
                  />
                </div>

                {/* Badge */}
                <div
                  className="relative"
                  style={{ transform: 'rotate(-0.4deg)' }}
                >
                  <img
                    src="/svg/bg-1.svg"
                    alt="Badge background"
                    className="w-full max-w-[280px]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-[20px] font-atomic text-center px-4">
                      {step.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Arrow between steps (not after last step) */}
              {index < steps.length - 1 && (
                <div className="flex items-center justify-center mb-16">
                  <img
                    src="/images/lets-see-arrow.webp"
                    alt="Arrow"
                    className="w-[60px] h-auto"
                  />
                </div>
              )}
            </>
          ))}
        </div>

        {/* Mobile Layout - Vertical */}
        <div className="lg:hidden flex flex-col items-center gap-8 mb-12">
          {steps.map((step, index) => (
            <>
              <div
                key={index}
                className="flex flex-col items-center"
              >
                {/* Step Label */}
                <p className="text-ivory text-small font-bold mb-4">
                  {step.label}
                </p>

                {/* Circle Container */}
                <div className="relative w-[180px] h-[180px] bg-space-cadet-2 rounded-full flex items-center justify-center mb-6">
                  <img
                    src={step.image}
                    alt={step.badge}
                    className="w-[120px] h-[120px] object-contain"
                  />
                </div>

                {/* Badge */}
                <div
                  className="relative"
                  style={{ transform: 'rotate(-0.4deg)' }}
                >
                  <img
                    src="/svg/bg-1.svg"
                    alt="Badge background"
                    className="w-full max-w-[320px]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-[22px] font-atomic text-center px-4">
                      {step.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Rotated Arrow between steps (not after last step) */}
              {index < steps.length - 1 && (
                <div className="flex items-center justify-center">
                  <img
                    src="/images/lets-see-arrow-rotate.webp"
                    alt="Arrow"
                    className="w-[40px] h-auto"
                  />
                </div>
              )}
            </>
          ))}
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
    </section>
  );
};
