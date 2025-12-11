import Image from 'next/image';
import { type FormEvent } from 'react';
import { SubmitSuccess, RightArrowDashBlue } from '@/components/Icon/Icon';

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
  placeholder: 'Sign-Up for Early Access',
  successMessage: "You're now part of this journey!",
  errorMessage: 'Oops! Something went wrong while submitting the form.'
} as const;

interface EmailFormProps {
  email: string;
  isSubmitted: boolean;
  hasError: boolean;
  onEmailChange: (value: string) => void;
  onSubmit: (e: FormEvent) => void;
}

export const EmailForm = ({ email, isSubmitted, hasError, onEmailChange, onSubmit }: EmailFormProps) => {
  return (
    <form onSubmit={onSubmit} className="relative group transition-all duration-300">
      <div className="relative">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={isSubmitted ? FORM_BACKGROUNDS.desktop.success : FORM_BACKGROUNDS.desktop.default}
          />
          <Image
            src={isSubmitted ? FORM_BACKGROUNDS.mobile.success : FORM_BACKGROUNDS.mobile.default}
            alt=""
            width={400}
            height={70}
            className="w-full h-auto"
            aria-hidden="true"
          />
        </picture>

        <div className="absolute inset-0 flex items-center justify-between ps-6 lg:ps-8 pe-2.5">
          {isSubmitted ? (
            <span className="flex-1 text-white font-strawford font-medium text-[16px] lg:text-[20px]">
              {TEXT_CONTENT.successMessage}
            </span>
          ) : (
            <input
              type="email"
              name="email"
              id="customerio-email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              placeholder={TEXT_CONTENT.placeholder}
              className="flex-1 bg-transparent font-strawford font-medium outline-none text-raisin-black-3 lg:text-alabaster text-[20px] lg:text-[18px] lg:lg:text-[20px] placeholder:text-raisin-black-3 lg:placeholder:text-white px-3 py-2 lg:px-0 lg:py-0"
              required
              aria-label={TEXT_CONTENT.placeholder}
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
              <SubmitSuccess width={40} height={40} className="w-8 h-8 lg:w-10 lg:h-10" />
            ) : (
              <RightArrowDashBlue width={40} height={40} className="w-8 h-8 lg:w-10 lg:h-10" />
            )}
          </button>
        </div>
      </div>

      {hasError && (
        <p className="text-red-500 text-center mt-2 font-strawford font-medium text-[14px] lg:text-[16px]">
          {TEXT_CONTENT.errorMessage}
        </p>
      )}
    </form>
  );
};
