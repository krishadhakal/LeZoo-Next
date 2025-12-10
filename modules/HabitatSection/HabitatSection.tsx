import Image from 'next/image';

export const HabitatSection = () => {
  return (
    <section className="w-full relative">
      {/* Background Spray Texture */}
      <div className="absolute top-[25%] pointer-events-none hidden md:block">
        <img
          src="https://dev-lezoowp.pantheonsite.io/wp-content/uploads/2025/12/habitat-text-bg-scaled.webp"
          alt="Habitat Stroke Background"
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none z-1">
        <Image
          src="https://dev-lezoowp.pantheonsite.io/wp-content/uploads/2025/12/habitat-desktop-texture-scaled.webp"
          alt=""
          fill
          className="object-cover mix-blend-overlay"
          aria-hidden="true"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto max-w-[1400px] px-0 md:px-6 pt-20 lg:pt-[138px] pb-0 lg:pb-20 lg:px-[105px] relative">
        <div className="flex flex-col xl:w-[92.941%] lg:flex-row lg:items-start lg:justify-between">
          {/* Mobile Layout: Text First */}
          <div className="w-[96%] md:w-full ps-8 lg:ps-0 lg:w-[31.62%] lg:min-w-[345px] mb-12 lg:mb-0 lg:order-2 lg:pt-[60px] xl:pt-[130px]">
            <div className="relative z-2">
              {/* Background Stroke Image */}
              <div className="absolute left-[30%] md:left-[20%] lg:left-[37%] w-[110%] md:w-[70%] lg:w-[125%] h-auto -top-[5%] lg:top-[12%] -translate-y-1/2 -translate-x-1/2 pointer-events-none -z-1">
                <Image
                  src="https://dev-lezoowp.pantheonsite.io/wp-content/uploads/2025/12/habitat-stroke.webp"
                  alt=""
                  width={500}
                  height={500}
                  className="w-auto h-auto absolute left-0 top-0 rotate-175 lg:rotate-365"
                  aria-hidden="true"
                />
              </div>

              {/* Heading */}
              <div className="relative z-1 max-w-[450px]">
                {/* Line 1: BUILD YOUR */}
                <div className="text-alabaster">
                  <span
                    className="block text-2xl md:text-[32px] font-casa-grande font-extrabold uppercase leading-[0.85] tracking-tight text-shadow-4"
                    style={{ '--text-shadow-4-color': 'black' } as React.CSSProperties}
                  >
                    BUILD YOUR
                  </span>
                </div>

                {/* Line 2 & 3: HABITAT WORLD */}
                <h2 className="h2 text-blue-crayola text-stroke text-shadow-2 uppercase mb-4">
                  HABITAT<br />WORLD
                </h2>

                {/* Body Copy */}
                <p className="text-white text-[18px] font-bold font-strawford max-w-[500px] leading-[140%]">
                  This isn't just a place to live — think of it as your own corner of the universe, waiting for you to customize every square inch.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Layout: Large Image on Left, Mobile: Image Below Text */}
          <div className="w-full lg:w-[58.81%] lg:max-w-[650.48px] lg:order-1">
            <div className="relative lg:aspect-square lg:h-full">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet="https://dev-lezoowp.pantheonsite.io/wp-content/uploads/2025/12/desktop_habitat.webp"
                />
                <Image
                  src="https://dev-lezoowp.pantheonsite.io/wp-content/uploads/2025/12/mob_habitat.webp"
                  alt="Build Your Habitat World - Customizable living spaces in the universe"
                  width={650}
                  height={650}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
