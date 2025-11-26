"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../Button/Button";
import { DownArrow, HamburgerIcon, CloseIcon, Instagram, Tiktok, Discord, Twitter } from "@/components/Icon/Icon";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className="fixed lg:absolute top-0 left-0 right-0 z-50 bg-transparent">
        <nav className="container-xl mx-auto ps-6 pe-6 lg:pe-[97px] py-4 md:py-6">
          <div className="flex items-center justify-between lg:justify-start relative">
            {/* Hamburger Menu - Hidden on desktop, left on tablet, right on mobile */}
            <button
              className="lg:hidden md:order-1 md:left-0 order-3 cursor-pointer"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <HamburgerIcon className="w-[45px] h-[45px]" />
            </button>

            {/* Logo - Left on desktop, center on tablet, left on mobile */}
            <div className="lg:order-0 md:order-2 md:absolute md:left-1/2 md:-translate-x-1/2 lg:static lg:translate-x-0 order-1">
              <Image
                src="/images/lezoo-logo.webp"
                alt="Le Zoo Logo"
                width={120}
                height={60}
                className="h-auto w-[90px] md:w-[80px]"
              />
            </div>

            {/* Desktop Menu - Only visible on desktop */}
            <div className="hidden lg:flex items-center gap-8 mx-auto">
              {/* About Le Zoo Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-2 text-small text-white hover:opacity-80 transition-opacity cursor-pointer"
                  onClick={toggleDropdown}
                >
                  About Le Zoo
                  <DownArrow className="w-3 h-3" />
                  <span className="absolute left-0 -bottom-1 w-full h-[3px] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Image src="/images/hover.webp" alt="" fill />
                  </span>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-auto bg-gunmetal-2/50 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 backdrop-blur-sm">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-small text-white hover:text-green-apple transition-colors text-nowrap">
                      The 5 Houses
                    </a>
                    <a href="#" className="block px-4 py-2 text-small text-white hover:text-green-apple transition-colors text-nowrap">
                      The 5 Guides
                    </a>
                    <a href="#" className="block px-4 py-2 text-small text-white hover:text-green-apple transition-colors text-nowrap">
                      Explore Realms
                    </a>
                    <a href="#" className="block px-4 py-2 text-small text-white hover:text-green-apple transition-colors text-nowrap">
                      What&apos;s Karma?
                    </a>
                    <a href="#" className="block px-4 py-2 text-small text-white hover:text-green-apple transition-colors text-nowrap">
                      FAQ
                    </a>
                    <a href="#" className="block px-4 py-2 text-small text-white hover:text-green-apple transition-colors text-nowrap">
                      About
                    </a>
                  </div>
                </div>
              </div>

              <a href="#" className="relative group text-small text-white transition-all">
                House Quiz
                <span className="absolute left-0 -bottom-1 w-full h-[3px] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Image src="/images/hover.webp" alt="" fill />
                </span>
              </a>
              <a href="#" className="relative group text-small text-white transition-all">
                Playtest
                <span className="absolute left-0 -bottom-1 w-full h-[3px] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Image src="/images/hover.webp" alt="" fill />
                </span>
              </a>
              <a href="#" className="relative group text-small text-white transition-all">
                Super Zoot
                <span className="absolute left-0 -bottom-1 w-full h-[3px] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Image src="/images/hover.webp" alt="" fill />
                </span>
              </a>
            </div>

            {/* Auth Buttons - Only visible on desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="tertiary" buttonText="SIGN UP" />
              <Button variant="tertiary" buttonText="LOG IN" />
            </div>
          </div>
        </nav>

        {/* Mobile/Tablet Full Screen Menu */}
        <div
          className={`fixed inset-0 bg-gunmetal-2 lg:hidden transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="container-xl mx-auto px-6 py-4">
            {/* Menu Header with Logo and Close Button */}
            <div className="flex items-center justify-between mb-8 relative">
              {/* Close Button - Right on mobile, left on tablet */}
              <button
                className="rounded-full flex items-center justify-center md:order-1 order-3 cursor-pointer"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <CloseIcon className="w-[45px] h-[45px]" />
              </button>

              {/* Logo - Left on mobile, center on tablet */}
              <div className="md:order-2 md:absolute md:left-1/2 md:-translate-x-1/2 order-1">
                <Image
                  src="/images/lezoo-logo.webp"
                  alt="Le Zoo Logo"
                  width={120}
                  height={60}
                  className="h-auto w-[90px] md:w-[80px]"
                />
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col gap-6 mt-12">
              <a href="#" className="text-small text-green-apple hover:opacity-80 transition-opacity">
                Playtest
              </a>
              <a href="#" className="text-small text-white hover:opacity-80 transition-opacity">
                House Quiz
              </a>
              <a href="#" className="text-small text-white hover:opacity-80 transition-opacity">
                Super Zoot
              </a>

              {/* About Le Zoo Dropdown */}
              <div>
                <button
                  className="flex items-center gap-2 text-small text-white hover:opacity-80 transition-opacity cursor-pointer"
                  onClick={toggleDropdown}
                >
                  About Le Zoo
                  <DownArrow className="w-3 h-3" />
                </button>

                {/* Submenu */}
                {isDropdownOpen && (
                  <div className="ml-4 mt-4 flex flex-col gap-4">
                    <a href="#" className="text-small text-white hover:opacity-80 transition-opacity">
                      &gt; The 5 Houses
                    </a>
                    <a href="#" className="text-small text-white hover:opacity-80 transition-opacity">
                      &gt; The 5 Guides
                    </a>
                    <a href="#" className="text-small text-white hover:opacity-80 transition-opacity">
                      &gt; Explore Realms
                    </a>
                    <a href="#" className="text-small text-white hover:opacity-80 transition-opacity">
                      &gt; FAQ
                    </a>
                    <a href="#" className="text-small text-white hover:opacity-80 transition-opacity">
                      &gt; What&apos;s Karma?
                    </a>
                  </div>
                )}
              </div>

              {/* Auth Buttons */}
              <div className="space-y-4">
                <a href="#" className="block text-small text-white hover:opacity-80 mb-[24px] transition-opacity">
                  Log In
                </a>
                <a href="#" className="block text-small text-white hover:opacity-80 transition-opacity">
                  Sign Up
                </a>
              </div>

              {/* Social Media Icons - Below Sign Up on tablet/desktop, at bottom on mobile */}
              <div className="md:mt-8 hidden md:block">
                <div className="flex items-center gap-10">
                  <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="Instagram">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="TikTok">
                    <Tiktok className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="Discord">
                    <Discord className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="Twitter">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Icons - Mobile only (fixed at bottom) */}
            <div className="absolute bottom-8 left-6 right-6 md:hidden">
              <div className="flex items-center gap-10">
                <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="Instagram">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="TikTok">
                  <Tiktok className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="Discord">
                  <Discord className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="Twitter">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
