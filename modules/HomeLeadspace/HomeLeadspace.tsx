"use client";

import Image from 'next/image';
import { useState, useEffect, type FormEvent } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { EmailForm } from '@/components/EmailForm/EmailForm';

const BACKGROUND_IMAGES = {
  desktop: 'https://dev-lezoowp.pantheonsite.io/wp-content/uploads/2025/12/hero-desktop-scaled.webp',
  mobile: 'https://dev-lezoowp.pantheonsite.io/wp-content/uploads/2025/12/full-mobile-hero.webp',
  panel: 'https://dev-lezoowp.pantheonsite.io/wp-content/uploads/2025/12/email-banner-desktop.webp'
} as const;

const TEXT_CONTENT = {
  heading: {
    desktop: { prefix: 'A', lines: ['TRIPPY GAME', 'ABOUT YOU'] },
    mobile: { lines: ['A TRIPPY GAME', 'ABOUT YOU'] }
  },
  panel: {
    line1: "You didn't find this by accident.",
    line2: "You're being guided."
  }
} as const;

export const HomeLeadspace = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  // Ensure component only renders after mounting to avoid hydration mismatch
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setHasError(false);

    try {
      console.log('Email submitted:', email);
      console.log('Submission timestamp:', new Date().toISOString());
      console.log('Device type:', isDesktop ? 'Desktop' : 'Mobile');

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting email:', error);
      setHasError(true);
    }
  };

  const textStrokeStyle = {
    '--text-stroke-color': 'black',
    '--text-shadow-2-color': 'black'
  } as React.CSSProperties;

  // Prevent hydration mismatch by not rendering until client-side mount
  if (!hasMounted) {
    return null;
  }

  return (
    <section className="w-full h-[80vh] md:h-screen relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        <picture>
          <source media="(min-width: 768px)" srcSet={BACKGROUND_IMAGES.desktop} />
          <Image
            src={BACKGROUND_IMAGES.mobile}
            alt=""
            fill
            className="object-cover object-[center_50%] md:object-top min-h-screen"
            priority
            aria-hidden="true"
          />
        </picture>
      </div>

      {/* Bottom Purple Gradient Overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[100px] pointer-events-none"
        style={{ background: 'linear-gradient(180deg, #755a9400 0%, #1a1a26 100%)' }}
        aria-hidden="true"
      />

      {/* Main Content Container */}
      <div className="relative h-full flex items-end md:items-center md:justify-end md:w-fit md:ml-auto lg:w-full ">
        {isDesktop ? (
          /* Desktop Layout: Right Side Content */
          <div className="absolute right-[14%] top-[58%] -translate-y-1/2 w-[600px]">
            <h1 className="h1 text-alabaster text-stroke text-shadow-2 mb-6" style={textStrokeStyle}>
              <span className="flex items-start justify-end gap-2">
                <span className="text-[45px] leading-[98%]">{TEXT_CONTENT.heading.desktop.prefix}</span>
                <span className="flex flex-col">
                  {TEXT_CONTENT.heading.desktop.lines.map((line, index) => (
                    <span key={index}>{line}</span>
                  ))}
                </span>
              </span>
            </h1>

            {/* Dark Paper Panel */}
            <div className="relative w-full max-w-[507px] ml-auto left-[30px]">
              <Image
                src={BACKGROUND_IMAGES.panel}
                alt=""
                width={507}
                height={280}
                className="w-full h-auto"
                aria-hidden="true"
              />

              <div className="absolute inset-0 flex flex-col px-12 py-8">
                <p className="text-alabaster text-[20px] lg:text-[24px] font-strawford font-bold leading-[129%] mb-4">
                  {TEXT_CONTENT.panel.line1}<br />
                  {TEXT_CONTENT.panel.line2}
                </p>

                <EmailForm
                  email={email}
                  isSubmitted={isSubmitted}
                  hasError={hasError}
                  onEmailChange={setEmail}
                  onSubmit={handleSubmit}
                />
              </div>
            </div>
          </div>
        ) : (
          /* Mobile Layout: Bottom Centered */
          <div className="flex flex-col items-center justify-end w-full pb-12 px-2.5">
            <h1 className="h1 text-alabaster text-stroke text-shadow-2 text-center mb-4" style={textStrokeStyle}>
              {TEXT_CONTENT.heading.mobile.lines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < TEXT_CONTENT.heading.mobile.lines.length - 1 && <br />}
                </span>
              ))}
            </h1>

            <div className="w-full max-w-[400px]">
              <EmailForm
                email={email}
                isSubmitted={isSubmitted}
                hasError={hasError}
                onEmailChange={setEmail}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
