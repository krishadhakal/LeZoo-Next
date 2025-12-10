"use client";

import Image from 'next/image';
import { useState, type FormEvent } from 'react';
import { SubmitSuccess, RightArrowDashBlue } from '@/components/Icon/Icon';

const BACKGROUND_IMAGES = {
  desktop: 'https://dev-lezoowp.pantheonsite.io/wp-content/uploads/2025/12/hero-desktop-scaled.webp',
  mobile: 'https://dev-lezoowp.pantheonsite.io/wp-content/uploads/2025/12/full-mobile-hero.webp',
  panel: 'https://dev-lezoowp.pantheonsite.io/wp-content/uploads/2025/12/email-banner-desktop.webp'
} as const;

const FORM_BACKGROUNDS = {
  desktop: {
    default: '/svg/email-outline-bg.svg',
    success: '/svg/submit-border.svg'
  },
  mobile: {
    default: '/svg/email-btn-mobile.svg',
    success: '/svg/submit-success-mobile.svg'
  }
} as const;

const TEXT_CONTENT = {
  heading: {
    desktop: { prefix: 'A', lines: ['TRIPPY GAME', 'ABOUT YOU'] },
    mobile: { lines: ['A TRIPPY GAME', 'ABOUT YOU'] }
  },
  panel: {
    line1: "You didn't find this by accident.",
    line2: "You're being guided."
  },
  form: {
    placeholder: 'Sign-Up for Early Access',
    successMessage: "You're now part of this journey!",
    errorMessage: 'Oops! Something went wrong while submitting the form.'
  }
} as const;

interface EmailFormProps {
  email: string;
  isSubmitted: boolean;
  hasError: boolean;
  onEmailChange: (value: string) => void;
  onSubmit: (e: FormEvent) => void;
  variant: 'desktop' | 'mobile';
}

const EmailForm = ({ email, isSubmitted, hasError, onEmailChange, onSubmit, variant }: EmailFormProps) => {
  const isDesktop = variant === 'desktop';
  const iconSize = isDesktop ? 40 : 32;
  const backgroundSrc = isSubmitted
    ? FORM_BACKGROUNDS[variant].success
    : FORM_BACKGROUNDS[variant].default;

  return (
    <form onSubmit={onSubmit} className="relative group transition-all duration-300">
      <div className="relative">
        <Image
          src={backgroundSrc}
          alt=""
          width={400}
          height={isDesktop ? 70 : 64}
          className="w-full h-auto"
          aria-hidden="true"
        />

        <div className={`absolute inset-0 flex items-center justify-between ${isDesktop ? 'ps-8' : 'ps-6'} pe-2.5`}>
          {isSubmitted ? (
            <span className={`flex-1 text-white font-strawford font-medium ${isDesktop ? 'text-[18px] lg:text-[20px]' : 'text-[16px]'}`}>
              {TEXT_CONTENT.form.successMessage}
            </span>
          ) : (
            <input
              type="email"
              name="email"
              id={`email-${variant}`}
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              placeholder={TEXT_CONTENT.form.placeholder}
              className={`flex-1 bg-transparent font-strawford font-medium outline-none ${
                isDesktop
                  ? 'text-alabaster text-[18px] lg:text-[20px] placeholder:text-white'
                  : 'text-raisin-black-3 text-[20px] placeholder:text-raisin-black-3 px-3 py-2'
              }`}
              required
              aria-label={TEXT_CONTENT.form.placeholder}
              autoComplete="email"
            />
          )}

          <button
            type="submit"
            className="shrink-0 cursor-pointer"
            aria-label="Submit email"
            disabled={isSubmitted}
          >
            {isSubmitted ? (
              <SubmitSuccess width={iconSize} height={iconSize} className={`w-${iconSize / 4} h-${iconSize / 4}`} />
            ) : (
              <RightArrowDashBlue width={iconSize} height={iconSize} className={`w-${iconSize / 4} h-${iconSize / 4}`} />
            )}
          </button>
        </div>
      </div>

      {hasError && (
        <p className={`text-red-500 text-center mt-2 font-strawford font-medium ${isDesktop ? 'text-[16px]' : 'text-[14px]'}`}>
          {TEXT_CONTENT.form.errorMessage}
        </p>
      )}
    </form>
  );
};

export const HomeLeadspace = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setHasError(false);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Subscription failed');
      }

      console.log('Email submitted successfully:', email);
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
      <div className="relative h-full flex items-end lg:items-center">
        {/* Desktop Layout: Right Side Content */}
        <div className="hidden lg:block absolute right-[14%] top-[58%] -translate-y-1/2 w-[600px]">
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
          <div className="relative w-full max-w-[507px] h-[227px] ml-auto left-[30px]">
            <Image
              src={BACKGROUND_IMAGES.panel}
              alt=""
              width={507}
              height={225}
              className="w-full h-full object-cover"
              aria-hidden="true"
            />

            <div className="absolute inset-0 flex flex-col px-12 py-8">
              <p className="text-alabaster text-[20px] lg:text-[24px] font-strawford mb-4 font-bold leading-[129%]">
                {TEXT_CONTENT.panel.line1}<br />
                {TEXT_CONTENT.panel.line2}
              </p>

              <EmailForm
                email={email}
                isSubmitted={isSubmitted}
                hasError={hasError}
                onEmailChange={setEmail}
                onSubmit={handleSubmit}
                variant="desktop"
              />
            </div>
          </div>
        </div>

        {/* Mobile Layout: Bottom Centered */}
        <div className="flex lg:hidden flex-col items-center justify-end md:items-end md:justify-center w-full pb-12 px-2.5 h-[80vh]">
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
              variant="mobile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
