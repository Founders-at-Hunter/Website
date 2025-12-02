"use client";

import React, { useState, useRef } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  const scrollToIndex = (index: number) => {
    const carousel = carouselRef.current?.querySelector(
      "[data-carousel-container]"
    ) as HTMLElement;
    if (carousel) {
      const cardWidth = Math.min(550, window.innerWidth * 0.85) + 16;
      carousel.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  React.useEffect(() => {
    const carousel = carouselRef.current?.querySelector(
      "[data-carousel-container]"
    );
    if (carousel) {
      const handleScroll = () => {
        const cardWidth = Math.min(550, window.innerWidth * 0.85) + 16;
        const newIndex = Math.round(carousel.scrollLeft / cardWidth);
        setCurrentIndex(Math.min(newIndex, 5));
      };
      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div
      className="absolute top-0 left-0 right-0 overflow-hidden w-full min-h-screen"
      style={{
        background:
          "linear-gradient(to right, rgba(95, 37, 159, 0.75) 0%, rgba(95, 37, 159, 0.75) 100%)",
        margin: 0,
        padding: 0,
      }}
    >
      <div className="container mx-auto px-4">
        {/* Small text */}
        <h2
          className="absolute z-50 text-white opacity-60"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            top: "clamp(200px, 35vh, 373px)",
            fontSize: "clamp(16px, 1.25vw, 24px)",
            fontFamily: "Inter",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          Founders @ Hunter College
        </h2>

        {/* Large heading */}
        <h1
          className="absolute z-50 text-white text-center"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            top: "clamp(230px, 38vh, 402px)",
            width: "min(90%, 1174px)",
            fontSize: "clamp(32px, 4vw, 74px)",
            fontFamily: "Inter",
            fontWeight: 900,
            lineHeight: "1.1",
          }}
        >
          Building the Next Generation of Student Entrepreneurs
        </h1>

        {/* Paragraph */}
        <p
          className="absolute z-50 text-white text-center"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            top: "clamp(400px, 55vh, 570px)",
            width: "min(85%, 558px)",
            fontSize: "clamp(18px, 1.5vw, 29px)",
            fontFamily: "Inter",
          }}
        >
          Connect with like-minded founders, learn from industry leaders, and turn your ideas into reality through our workshops, events, and community.
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="absolute w-full"
        style={{
          top: "clamp(50px, 8vh, 80px)",
        }}
      >
        <Carousel items={cards} />
      </div>
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/DSC00774.JPG",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/DSC00879.JPG",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/DSC00881.JPG",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/DSC00870.JPG",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "/DSC00840.JPG",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "/DSC00768.JPG",
    content: <DummyContent />,
  },
];
