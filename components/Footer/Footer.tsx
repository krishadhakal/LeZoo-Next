"use client";

import React from 'react';
import Link from 'next/link';
import { Instagram, Tiktok, Discord, Twitter, SmsIcon } from "@/components/Icon/Icon";

export const Footer = () => {
  return (
    <footer className="w-full bg-rich-black-5 px-6 py-12 lg:px-16 lg:py-20 relative z-1">
      <div className="max-w-[1440px] mx-auto">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Social Icons - Top */}
          <div className="flex items-center gap-6 mb-12">
            <a href="https://www.instagram.com/le.zoo.game/#" className="text-white hover:opacity-80 transition-opacity" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.tiktok.com/@le.zoo.game" className="text-white hover:opacity-80 transition-opacity" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
              <Tiktok className="w-6 h-6" />
            </a>
            <a href="https://discord.com/invite/gXkydNGgW8" className="text-white hover:opacity-80 transition-opacity" aria-label="Discord" target="_blank" rel="noopener noreferrer">
              <Discord className="w-6 h-6" />
            </a>
            <a href="https://x.com/LeZoogame" className="text-white hover:opacity-80 transition-opacity" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="Chat">
              <SmsIcon className="w-6 h-6" />
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-8 mb-16">
            <Link href="#" className="text-white text-small hover:opacity-80 transition-opacity">
              Playtest Signup
            </Link>
            <Link href="#" className="text-white text-small hover:opacity-80 transition-opacity">
              The 5 Houses
            </Link>
            <Link href="#" className="text-white text-small hover:opacity-80 transition-opacity">
              House Quiz
            </Link>
            <Link href="/exploreRealms" className="text-white text-small hover:opacity-80 transition-opacity">
              Realms
            </Link>
            <Link href="#" className="text-white text-small hover:opacity-80 transition-opacity">
              About
            </Link>
          </nav>

          {/* Logo */}
          <div className="mb-8">
            <img
              src="/svg/mother-logo.svg"
              alt="MOTHER Logo"
              className="w-[220px] h-auto"
            />
          </div>

          {/* Description */}
          <p className="text-white text-body-text mb-6 leading-relaxed">
            Mother is a game studio based in Brooklyn, NY. Our mission is to craft transformative experiences through game play. We are focused on opening up the boundaries of life.
          </p>

          {/* Website */}
          <p className="text-white font-bold text-body-text mb-8">
            mothergames.com
          </p>

          {/* Address */}
          <div className="text-white text-body-text mb-12">
            <p className="font-bold mb-2">Mail Box Address:</p>
            <p>223 Bedford Ave</p>
            <p>#200, Brooklyn,</p>
            <p>NY, 11211,</p>
            <p>USA</p>
          </div>

          {/* Legal Links */}
          <div className="text-white text-extra-small">
            <a href="#" className="hover:opacity-80 transition-opacity">Terms & Conditions</a>
            <span className="mx-3">|</span>
            <a href="#" className="hover:opacity-80 transition-opacity">Privacy Policy</a>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:justify-between lg:items-start">
          {/* Left Side */}
          <div className="max-w-[450px]">
            {/* Logo */}
            <div className="mb-8">
              <img
                src="/svg/mother-logo.svg"
                alt="MOTHER Logo"
                className="w-[260px] h-auto"
              />
            </div>

            {/* Description */}
            <p className="text-white text-body-text mb-6 leading-relaxed">
              Mother is a game studio based in Brooklyn, NY. Our mission is to craft transformative experiences through game play. We are focused on opening up the boundaries of life.
            </p>

            {/* Website */}
            <p className="text-white font-bold text-body-text mb-8">
              mothergames.com
            </p>

            {/* Address */}
            <div className="text-white text-body-text mb-12">
              <p className="font-bold mb-1">Mail Box Address:</p>
              <p>223 Bedford Ave</p>
              <p>#200, Brooklyn,</p>
              <p>NY, 11211,</p>
              <p>USA</p>
            </div>

            {/* Legal Links */}
            <div className="text-white text-extra-small">
              <a href="#" className="hover:opacity-80 transition-opacity">Terms & Conditions</a>
              <span className="mx-3">|</span>
              <a href="#" className="hover:opacity-80 transition-opacity">Privacy Policy</a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-start">
            {/* Social Icons */}
            <div className="flex items-center gap-6 mb-12">
              <a href="https://www.instagram.com/le.zoo.game/#" className="text-white hover:opacity-80 transition-opacity" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.tiktok.com/@le.zoo.game" className="text-white hover:opacity-80 transition-opacity" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                <Tiktok className="w-6 h-6" />
              </a>
              <a href="https://discord.com/invite/gXkydNGgW8" className="text-white hover:opacity-80 transition-opacity" aria-label="Discord" target="_blank" rel="noopener noreferrer">
                <Discord className="w-6 h-6" />
              </a>
              <a href="https://x.com/LeZoogame" className="text-white hover:opacity-80 transition-opacity" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="Chat">
                <SmsIcon className="w-6 h-6" />
              </a>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col items-start gap-6">
              <Link href="#" className="text-white text-small hover:opacity-80 transition-opacity">
                Playtest Signup
              </Link>
              <Link href="#" className="text-white text-small hover:opacity-80 transition-opacity">
                The 5 Houses
              </Link>
              <Link href="#" className="text-white text-small hover:opacity-80 transition-opacity">
                House Quiz
              </Link>
              <Link href="/exploreRealms" className="text-white text-small hover:opacity-80 transition-opacity">
                Realms
              </Link>
              <Link href="#" className="text-white text-small hover:opacity-80 transition-opacity">
                About
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
