"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Button } from "@/components/Button/Button";
import { DiscordBlueBg } from "@/components/Icon/Icon";

type RealmTag = "Bright" | "Middle" | "Dark";

type RealmCard = {
  id: string;
  tag: RealmTag;
  category: string;
  titleImage: string;
  mainImage: string;
  tags: string[];
  description: string;
};

const realms: RealmCard[] = [
  {
    id: "culture-vulture",
    tag: "Middle",
    category: "Human Form",
    titleImage: "/images/culture-vulture.webp",
    mainImage: "/images/Culture_vulture_bg.webp",
    tags: ["M63", "M64", "M77", "M78"],
    description: "Yo bro love your work let's build!",
  },
  {
    id: "heat",
    tag: "Dark",
    category: "Central Hot Hell",
    titleImage: "/images/heat-title.webp",
    mainImage: "/images/Heat.webp",
    tags: ["D44", "D54", "D55", "D56", "D57", "D64", "D65", "D66", "D67"],
    description: "Are you sweating your life's choices yet?",
  },
  {
    id: "screaming",
    tag: "Dark",
    category: "Central Hot Hell",
    titleImage: "/images/screaming-title.webp",
    mainImage: "/images/screaming.webp",
    tags: ["D34", "D35", "D45", "D46", "D47"],
    description: "This isn't hell, it's where hell sends you when you've complained too much.",
  },
  {
    id: "thousand-percent",
    tag: "Bright",
    category: "Powers",
    titleImage: "/images/1000percent.webp",
    mainImage: "/images/1000percent-img.webp",
    tags: ["D34", "D35", "D45", "D46", "D47"],
    description: "I carried my own ashes to the mountains; I invented a brighter flame for myself. - Friedrich Nietzche",
  },
  {
    id: "beauty-queen",
    tag: "Middle",
    category: "Human Form",
    titleImage: "/images/beauty-queen-title.webp",
    mainImage: "/images/beauty-queen.webp",
    tags: ["M63", "M64", "M77", "M78"],
    description: "So, I've been sleeping with snail slime on my face every night.",
  },
  {
    id: "corpse-rot",
    tag: "Dark",
    category: "Surrounding Hot Hell",
    titleImage: "/images/corpse-title.webp",
    mainImage: "/images/corpse-rot.webp",
    tags: ["D44", "D54", "D55", "D56", "D57"],
    description: "Is that your sense of purpose rotting over there?",
  },
  {
    id: "infinity",
    tag: "Bright",
    category: "Infinity",
    titleImage: "/images/infinity.webp",
    mainImage: "/images/house-of-infinity.webp",
    tags: ["B96"],
    description: "Enlightenment is intimacy with all things. - Dogen Zenji",
  },
  {
    id: "gather-smash",
    tag: "Dark",
    category: "Central Hell",
    titleImage: "/images/gather-smash-title.webp",
    mainImage: "/images/gather-smash.webp",
    tags: ["D34", "D35", "D45", "D46", "D47"],
    description: "This is not a play party.",
  },
  {
    id: "jewels",
    tag: "Bright",
    category: "Jewels",
    titleImage: "/images/jewels-title.webp",
    mainImage: "/images/house-of-jewels.webp",
    tags: ["B49"],
    description: "Spend time every single day treating yourself and others as though your good potential was already fulfilled - Letter from an Angel",
  },
];

export default function ExploreRealms() {
  const [activeFilter, setActiveFilter] = useState<"All" | RealmTag>("All");
  const [visibleCount, setVisibleCount] = useState(6); // Show 2 rows (6 items) initially

  const filteredRealms = activeFilter === "All"
    ? realms
    : realms.filter(realm => realm.tag === activeFilter);

  const displayedRealms = filteredRealms.slice(0, visibleCount);
  const hasMore = visibleCount < filteredRealms.length;

  const loadMore = () => {
    setVisibleCount(prev => prev + 6); // Load 2 more rows (6 items)
  };

  // Reset pagination when filter changes
  useEffect(() => {
    setVisibleCount(6);
  }, [activeFilter]);

  const filters: Array<"All" | RealmTag> = ["All", "Bright", "Middle", "Dark"];

  return (
    <main className="relative min-h-screen bg-gunmetal overflow-hidden">
      <section className="fixed  top-[110px] md:top-[61px] right-[-10px] z-50 flex flex-col gap-10 justify-center items-center">
        <Button variant="vertical" buttonText={"Playtest"} />
        <a
          href="#"
          className="text-white hover:opacity-80 transition-opacity"
          aria-label="Instagram"
        >
          <DiscordBlueBg className="w-[45px] h-[45px]" />
        </a>
      </section>
      <div className="container mx-auto px-0 md:px-10">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/hoods-gallery-bg.webp"
            alt=""
            fill
            className="object-cover"
            quality={60}
            priority={false}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 pt-[250px] pb-12 lg:pt-[332px]">

          {/* Filter Section */}
          <div className="mb-12 lg:mb-16 ms-4 md-0">
            {/* Label */}
            <p className="text-white text-small uppercase tracking-wide mb-3">
              REALMS
            </p>

            {/* Filter Tabs */}
            <div className="flex gap-8 lg:gap-12 mb-8">
              {filters.map((filter) => {
                const isActive = filter === activeFilter;
                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={clsx(
                      "text-medium font-semibold transition-colors cursor-pointer",
                      isActive ? "text-aquamarine" : "text-white"
                    )}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>

            {/* Divider Line */}
            <picture>
              <source media="(min-width: 768px)" srcSet="/images/realms-desktop-stroke.webp" />
              <img
                src="/images/realms-stroke-mob.webp"
                alt="Divider"
                className="w-full h-auto"
              />
            </picture>
          </div>

          {/* Realm Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {displayedRealms.map((realm, index) => (
              <div key={realm.id} className="flex flex-col">

                {/* Category Label */}
                <div className="flex items-center gap-[15px] mb-6 ms-4">
                  <p className="text-white text-extra-small uppercase tracking-tight font-bold">
                    {realm.tag}
                  </p>
                  <span className="text-white text-extra-small">|</span>
                  <p className="text-white text-extra-small uppercase tracking-tight font-bold">
                    {realm.category}
                  </p>
                </div>

                {/* Title Image */}
                <div className="mb-6 flex justify-start ms-4 relative">
                  <Image
                    src={realm.titleImage}
                    alt={`${realm.id} title`}
                    width={280}
                    height={174}
                    className="h-auto max-w-[254px] object-contain aspect-[254/156]"
                    priority={index < 3}
                    quality={85}
                    sizes="280px"
                  />
                </div>

                {/* Main Realm Image with Tags Overlay */}
                <div className="relative -mt-[13%] -z-1 aspect-[390/510]">
                  <Image
                    src={realm.mainImage}
                    alt={`${realm.id} realm image`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Tag Pills - Positioned at bottom of image */}
                  <div className="absolute bottom-12 left-5 right-4 flex flex-wrap gap-2">
                    {realm.tags.map((tag) => (
                      <div
                        key={tag}
                        className="w-10 h-10 rounded-full border-1 border-white bg-black/40 backdrop-blur-sm flex items-center justify-center"
                      >
                        <span className="text-ivory text-[12px] font-semibold">
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-aquamarine text-[26px] max-w-[310px] font-semibold font-strawford leading-relaxed -mt-[5%] ms-5">
                  {realm.description}
                </p>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="flex justify-center mt-12">
              <Button
                variant="primary"
                buttonText="LOAD MORE"
                textColor="cloud-brust"
                onClick={loadMore}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
