export const Banner = () => {
  return (
    <section className="banner-section relative top-[-100px] lg:top-0">

      {/* Content Container */}
      <div className="container-xl mx-auto px-6 py-6 grid items-center justify-center relative z-1">

        {/* Background Images - Responsive */}
        <div style={{ gridArea: '1 / 1 / 1 / 1' }}>
          <picture>
            <source media="(min-width: 1024px)" srcSet="/images/banner.webp" />
            <source media="(min-width: 768px)" srcSet="/images/banner-tablet.webp" />
            <img
              src="/images/banner-mobile.webp"
              alt="What is Le Zoo Banner"
              className="object-cover mx-auto max-h-[400px] md:max-h-none"
              loading="lazy"
            />
          </picture>
        </div>

        <div style={{ gridArea: '1 / 1 / 1 / 1' }}>
          {/* Headline */}
          <h4 className="text-large text-white text-center mb-12 lg:mb-5">
            What is Le Zoo?
          </h4>

          {/* Features Grid - Mobile: Vertical, Tablet: Wrap (2 up, 1 down), Desktop: Horizontal */}
          <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center lg:items-start justify-center gap-5 lg:gap-16 max-w-[1200px]">
            {/* Feature 1: Multi-player Mobile */}
            <div className="flex items-center text-center md:w-[45%] lg:w-auto max-w-[280px] gap-3">
              {/* Icon - Bunny */}
              <div>
                <img
                  src="/svg/bunny.svg"
                  alt="Multi-player Mobile"
                  className="w-10 h-10"
                />
              </div>
              <p className="text-white text-small font-bold">
                Multi-player Mobile
              </p>
            </div>

            {/* Feature 2: Reveal Your Reality */}
            <div className="flex items-center justify-center text-center max-w-[280px] gap-3">
              {/* Icon - Door */}
              <div>
                <img
                  src="/svg/DOOR.svg"
                  alt="Reveal Your Reality"
                  className="w-10 h-10"
                />
              </div>
              <p className="text-white text-small font-bold">
                Reveal Your Reality
              </p>
            </div>

            {/* Feature 3: Choose Your Path */}
            <div className="flex items-center text-center max-w-[280px] gap-3">
              {/* Icon - Eye */}
              <div>
                <img
                  src="/svg/eye.svg"
                  alt="Choose Your Path"
                  className="w-10 h-10"
                />
              </div>
              <p className="text-white text-small font-bold">
                Choose Your Path
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute min-h-[150%] w-[25%] top-[100px] lg:top-[-8px] left-0">
        <img
          src="/images/playtest-banner-grafiti.webp"
          alt="What is Le Zoo Banner"
          className="object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
};
