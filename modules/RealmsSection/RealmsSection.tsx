"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Button } from "@/components/Button/Button";
import { useRealmsData, RealmCard } from "./hooks/useRealmsData";

export const RealmsSection = () => {
  const [activeFilter, setActiveFilter] = useState<"All" | string>("All");

  const filterType = activeFilter === "All" ? null : activeFilter.toLocaleLowerCase();
  const {
    data: realmsData,
    loading,
    isLoadingMore,
    error,
    hasMore,
    loadMore,
  } = useRealmsData(filterType);

  const filters: Array<"All" | string> = ["All", "Bright", "Middle", "Dark"];

  return (
    <>
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
          {/* Error Message */}
          {error && (
            <div className="mb-6 ms-4 p-4 bg-red-500/20 border border-red-500 rounded text-red-200">
              <p>{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-2 text-sm underline"
              >
                Retry
              </button>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <p className="text-white text-medium">Loading realms...</p>
            </div>
          )}

          {/* Filter Section */}
          {!loading && (
            <>
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
                  <source
                    media="(min-width: 768px)"
                    srcSet="/images/realms-desktop-stroke.webp"
                  />
                  <img
                    src="/images/realms-stroke-mob.webp"
                    alt="Divider"
                    className="w-full h-auto"
                  />
                </picture>
              </div>

              {/* Realm Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 grid-rows-[auto]">
                {realmsData && realmsData.length > 0
                  ? realmsData.map((realm: RealmCard, index: number) => (
                      <div key={realm.id} className="grid grid-rows-subgrid row-[span_4] gap-0">
                        {/* Category Label*/}
                        <div className="flex items-start gap-[15px] mb-6 ms-4">
                          <p className="text-white text-extra-small uppercase tracking-tight font-bold">
                            {realm.realmType?.name || "Unknown"}
                          </p>
                          <span className="text-white text-extra-small">|</span>
                          <p className="text-white text-extra-small uppercase tracking-tight font-bold">
                            {realm.realmHouse}
                          </p>
                        </div>

                        {/* Title Image */}
                        <div className="mb-6 flex items-start justify-between ms-4 me-2 lg:me-0 relative h-[156px]">
                          {realm.realmLogo && (
                            <Image
                              src={realm.realmLogo.imageSrc}
                              alt={realm.realmLogo.imageAlt}
                              width={280}
                              height={174}
                              className="h-[156px] max-w-[254px] object-contain aspect-254/156"
                              priority={index < 3}
                              quality={85}
                              sizes="280px"
                            />
                          )}
                          {realm.isUnderConstruction && (
                            <Image
                              src="/svg/caution.svg"
                              alt="Caution icon"
                              width={20}
                              height={20}
                              className="h-[26px] w-[30px]"
                            />
                          )}
                        </div>

                        {/* Main Realm Image with Tags Overlay */}
                        <div className="relative -mt-[13%] -z-1 aspect-390/510 shrink-0">
                          {realm.featuredImage && (
                            <Image
                              src={realm.featuredImage.imageSrc}
                              alt={realm.featuredImage.imageAlt}
                              fill
                              className="object-cover"
                              priority={index === 0}
                              quality={85}
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          )}

                          {/* Tag Pills - Positioned at bottom of image */}
                          {realm.hoodTagsData &&
                            realm.hoodTagsData.length > 0 && (
                              <div className="absolute bottom-12 left-5 right-4 flex flex-wrap gap-2">
                                {realm.hoodTagsData.map((tag: string) => (
                                  <div
                                    key={tag}
                                    className="w-10 h-10 rounded-full border border-white bg-black/40 backdrop-blur-sm flex items-center justify-center"
                                  >
                                    <span className="text-ivory text-[12px] font-semibold">
                                      {tag}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}
                        </div>

                        {/* Description */}
                        <p className="text-aquamarine text-[26px] max-w-[310px] font-semibold font-strawford leading-relaxed -mt-[5%] ms-5">
                          {realm.title}
                        </p>
                      </div>
                    ))
                  : !loading && (
                      <p className="col-span-full text-center text-white text-medium py-12">
                        No realms found.
                      </p>
                    )}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div className="flex justify-center mt-12">
                  <Button
                    variant="primary"
                    buttonText={isLoadingMore ? "LOADING..." : "LOAD MORE"}
                    textColor="cloud-brust"
                    onClick={loadMore}
                    disabled={isLoadingMore}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
