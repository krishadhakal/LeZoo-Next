"use client";

import { RightArrowWhite } from "@/components/Icons/Icons";

export const FiftyFiftySection = () => {
  const steps = [
    { number: 1, text: "Create your Zootbook" },
    { number: 2, text: "Become a super zoot and invite your friends to play" },
    { number: 3, text: "Join our discord" },
  ];

  return (
    <section className="w-full">
      <div className="container-xl mx-auto max-w-[1400px] px-6 py-16 lg:py-24 xl:ps-[130px] xl:pe-[120px]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">

          {/* Left Column - Illustration */}
          <div className="max-w-[650px] -ms-[13%] md:ms-0 lg:mb-0 flex justify-center">
            <div className="relative">
              <img
                src="/images/pt-skip-the-line.webp"
                alt="Skip the Line - Zootbook Mobile Screens"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-1/2">
            {/* Small Title */}
            <h3 className="h3 text-ivory text-left">
              SKIP THE LINE
            </h3>

            {/* Main Headline */}
            <h2 className="h2 text-blue-crayola text-stroke text-shadow-1 mb-8 text-left">
              INCREASE YOUR CHANCES
            </h2>

            {/* Numbered List */}
            <div className="space-y-8">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex items-center gap-4 group"
                >
                  {/* Number and Text */}
                  <div className="flex items-center gap-3">
                    <span className="text-ivory text-medium font-bold">
                      {step.number}.
                    </span>
                    <a href="#" className="inline-block">
                      <span className="inline text-ivory text-medium underline decoration-ivory decoration-1 underline-offset-4 me-3">
                        {step.text}
                      </span>
                      {/* Arrow Button */}
                      <div className="shrink-0 w-7 h-7 rounded-full bg-blue-crayola inline-flex justify-center items-center">
                        <RightArrowWhite className="w-3 h-3" />
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
