"use client";
import React, { useEffect, useRef, useState } from "react";

const IMAGES = [
  "DSC00774.JPG",
  "DSC00800.JPG",
  "DSC00840.JPG",
  "DSC00870.JPG",
  "DSC00768.JPG",
];

export default function HeroImages() {
  const containerSlidesRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<HTMLDivElement[]>([]);
  const [currentSlide, setCurrentSlide] = useState(1);

  const isProgrammaticScroll = useRef(false);

  const scrollSlides = (slideIndex: number) => {
    const container = containerSlidesRef.current;
    const slide = slideRefs.current[slideIndex];
    if (!container || !slide) return;

    isProgrammaticScroll.current = true;

    container.scrollTo({
      left: slide.offsetLeft,
      behavior: "smooth",
    });

    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 400);
  };

  useEffect(() => {
    const container = containerSlidesRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;

      const width = container.clientWidth;
      const index = Math.round(container.scrollLeft / width);
      setCurrentSlide(index + 1);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="flex flex-nowrap overflow-x-auto overflow-y-hidden w-[100dvw] h-[100dvh] no-scrollbar snap-x snap-mandatory"
        ref={containerSlidesRef}
      >
        {IMAGES.map((image, index) => (
          <React.Fragment key={index}>
            <div
              className="w-[100dvw] h-[100dvh] shrink-0 flex items-center justify-center relative snap-start"
              ref={(el) => {
                if (el) {
                  slideRefs.current[index] = el;
                }
              }}
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute w-full h-full bg-main/80 z-1"></div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="absolute bottom-8 left-1/2 w-full -translate-x-1/2 -translate-y-8 flex items-center justify-center gap-4 z-2">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            className={`${
              currentSlide === index + 1 ? "bg-white" : "bg-white/40"
            } size-3 rounded-full cursor-pointer transition-all duration-300`}
            onClick={() => {
              setCurrentSlide(index + 1);
              scrollSlides(index);
            }}
          />
        ))}
      </div>
    </>
  );
}
