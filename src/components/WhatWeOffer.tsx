"use client";

import { useRef } from "react";
import Image from "next/image";

interface Offering {
  title: string;
  description: string;
  image: string;
}

export default function WhatWeOffer() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const offerings: Offering[] = [
    {
      title: "Meet Other Entrepreneurs",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Career Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Student Workshops",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      // Calculate scroll amount based on screen size
      const getScrollAmount = () => {
        const width = window.innerWidth;
        if (width >= 1024) return 690; // 632px card + 58px gap
        if (width >= 768) return 510; // 500px card + 10px gap
        if (width >= 640) return 406; // 400px card + 6px gap
        return window.innerWidth * 0.85 + 16; // 85vw + 4px gap
      };

      const scrollAmount = getScrollAmount();
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
      {/* Main Frame - centered container */}
      <div className="w-full max-w-[1806px] mx-auto">
        {/* Header Section with constrained width */}
        <div className="mb-6">
          <div>
            <h2 className="md:text-3xl text-2xl font-semibold text-gray-900 mb-1.5">
              What We Offer:
            </h2>
            <p className="text-gray-600 md:text-lg font-light max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit
              amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        {/* Cards Container with Arrow Navigation */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto pb-4 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="flex gap-4 sm:gap-6 md:gap-10 lg:gap-[58px] w-max">
              {offerings.map((offering, index) => (
                <div
                  key={index}
                  className="w-[85vw] sm:w-[400px] md:w-[500px] lg:w-[632px] h-[280px] sm:h-[300px] md:h-[330px] lg:h-[355px] rounded-[20px] md:rounded-[24px] bg-white shadow-lg overflow-hidden relative flex-shrink-0"
                >
                  {/* Image with overlay */}
                  <div className="relative w-full h-full">
                    <Image
                      src={offering.image}
                      alt={offering.title}
                      fill
                      sizes="(max-width: 640px) 85vw, (max-width: 768px) 400px, (max-width: 1024px) 500px, 632px"
                      className="object-cover"
                    />
                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Text overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
                      <h3
                        className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-semibold text-white mb-1 sm:mb-2"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {offering.title}
                      </h3>
                      <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Only show on larger screens */}
          <button
            onClick={() => scroll("left")}
            className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 md:p-3 shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Scroll left"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 md:p-3 shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Scroll right"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
