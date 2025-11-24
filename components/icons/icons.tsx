import Image from "next/image";
import React from "react";

export interface IconProps {
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
}

export const ButtonArrowRight: React.FC<IconProps> = ({
  className,
  width = 9,
  height = 17,
  alt = "Button Arrow Right",
}) => (
  <Image
    src="/svg/button-arrow-right.svg"
    width={width}
    height={height}
    alt={alt}
    className={className}
  />
);

export const LeftArrowCircled: React.FC<IconProps> = ({
  className,
  width = 64,
  height = 64,
  alt = "Left Arrow Circled",
}) => (
  <Image
    src="/svg/left-arrow-circled.svg"
    width={width}
    height={height}
    alt={alt}
    className={className}
  />
);

export const RightArrowCircled: React.FC<IconProps> = ({
  className,
  width = 64,
  height = 64,
  alt = "Right Arrow Circled",
}) => (
  <Image
    src="/svg/right-arrow-circled.svg"
    width={width}
    height={height}
    alt={alt}
    className={className}
  />
);

export const RightArrowWhite: React.FC<IconProps> = ({
  className,
  width = 10,
  height = 17,
  alt = "Right Arrow Dash Black",
}) => (
  <Image
    src="/svg/right-arrow-white.svg"
    width={width}
    height={height}
    alt={alt}
    className={className}
  />
);

export const RightArrowDash: React.FC<IconProps> = ({
  className,
  width = 64,
  height = 64,
  alt = "Right Arrow Dash",
}) => (
  <Image
    src="/svg/right-arrow-dash.svg"
    width={width}
    height={height}
    alt={alt}
    className={className}
  />
);

export const RightArrowDashBlue: React.FC<IconProps> = ({
  className,
  width = 64,
  height = 64,
  alt = "Right Arrow Dash Blue Background",
}) => (
  <Image
    src="/svg/right-arrow-dash-blue.svg"
    width={width}
    height={height}
    alt={alt}
    className={className}
  />
);

export const DownArrow: React.FC<IconProps> = ({
  className,
  width = 64,
  height = 64,
  alt = "Down Arrow",
}) => (
  <Image
    src="/svg/down-arrow.svg"
    width={width}
    height={height}
    alt={alt}
    className={className}
  />
);

export const Discord: React.FC<IconProps> = ({
  className,
  width = 64,
  height = 64,
  alt = "Discord Icon",
}) => (
  <Image
    src="/svg/discord.svg"
    width={width}
    height={height}
    alt={alt}
    className={className}
  />
);

export const Instagram: React.FC<IconProps> = ({
  className,
  width = 64,
  height = 64,
  alt = "Instagram Icon",
}) => (
  <Image
    src="/svg/instagram.svg"
    width={width}
    height={height}
    alt={alt}
    className={className}
  />
);

export const Tiktok: React.FC<IconProps> = ({
  className,
  width = 64,
  height = 64,
  alt = "Tiktok Icon",
}) => (
  <Image
    src="/svg/tiktok.svg"
    width={width}
    height={height}
    alt={alt}
    className={className}
  />
);

export const Twitter: React.FC<IconProps> = ({
  className,
  width = 64,
  height = 64,
  alt = "Twitter Icon",
}) => (
  <Image
    src="/svg/x-twitter.svg"
    width={width}
    height={height}
    alt={alt}
    className={className}
  />
);

export const SmsIcon: React.FC<IconProps> = ({
  className,
  width = 24,
  height = 24,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
      <path
        fill="currentColor"
        d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-7.667L8 21.5c-.824.618-2 .03-2-1V19H5a3 3 0 0 1-3-3V6Zm3-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1.5A1.5 1.5 0 0 1 8 18.5v.5l2.133-1.6a2 2 0 0 1 1.2-.4H19a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5Z"
      />
    </g>
  </svg>
);

export const HamburgerIcon: React.FC<IconProps> = ({
  className,
  width = 64,
  height = 64,
  alt = "Hamburger Icon",
}) => (
  <Image
    src="/svg/hamburger.svg"
    width={width}
    height={height}
    alt={alt}
    className={className}
  />
);

export const CloseIcon: React.FC<IconProps> = ({
  className,
  width = 64,
  height = 64,
  alt = "Close Icon",
}) => (
  <Image
    src="/svg/close.svg"
    width={width}
    height={height}
    alt={alt}
    className={className}
  />
);

export const DiscordBlueBg: React.FC<IconProps> = ({
  className,
  width = 64,
  height = 64,
  alt = "Close Icon",
}) => (
  <Image
    src="/svg/discord-with-blue-bg.svg"
    width={width}
    height={height}
    alt={alt}
    className={className}
  />
);

// Export all icons as a collection
export const Icons = {
  ButtonArrowRight,
  LeftArrowCircled,
  RightArrowCircled,
  RightArrowWhite,
  RightArrowDash,
  RightArrowDashBlue,
  DownArrow,
  Discord,
  Instagram,
  Twitter,
  Tiktok,
  SmsIcon,
  HamburgerIcon,
  CloseIcon,
  DiscordBlueBg,
} as const;

// Type for icon names
export type IconName = keyof typeof Icons;
