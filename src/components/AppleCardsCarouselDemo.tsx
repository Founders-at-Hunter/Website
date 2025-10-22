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
    const carousel = carouselRef.current?.querySelector('[data-carousel-container]') as HTMLElement;
    if (carousel) {
      const cardWidth = 550 + 16;
      carousel.scrollTo({
        left: index * cardWidth,
        behavior: "smooth"
      });
      setCurrentIndex(index);
    }
  };

  React.useEffect(() => {
    const carousel = carouselRef.current?.querySelector('[data-carousel-container]');
    if (carousel) {
      const handleScroll = () => {
        const cardWidth = 550 + 16;
        const newIndex = Math.round(carousel.scrollLeft / cardWidth);
        setCurrentIndex(Math.min(newIndex, 5));
      };
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      style={{
        left: '0px',
        top: '0px',
        width: '100vw',
        height: '1080px',
        background: 'linear-gradient(to right, rgba(95, 37, 159, 0.75) 0%, rgba(95, 37, 159, 0.75) 100%)'
      }}
    >
      <h2
        className="absolute z-50"
        style={{
          left: '766px',
          top: '373px',
          width: '387px',
          height: '29px',
          fontSize: '24px',
          fontFamily: 'Inter',
          color: '#FFFFFF',
          opacity: 0.6
        }}
      >
        Founders @ Hunter College
      </h2>

      <h1
        className="absolute z-50"
        style={{
          left: '373px',
          top: '402px',
          width: '1174px',
          height: '150px',
          fontSize: '74px',
          fontFamily: 'Inter',
          fontWeight: 900,
          lineHeight: '75px',
          color: '#FFFFFF',
          opacity: 1
        }}
      >
        Sed ut Perspiciatis Unde Omnis Doloremque Laudantium.
      </h1>

      <p
        className="absolute z-50"
        style={{
          left: '680px',
          top: '570px',
          width: '558px',
          height: '48px',
          fontSize: '29px',
          fontFamily: 'Inter',
          color: '#FFFFFF',
          opacity: 1
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit psum dolor sit a.
      </p>

      <div
        ref={carouselRef}
        className="absolute"
        style={{
          left: '0px',
          top: '80px',
          width: '1920px',
          height: '1080px'
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
    src: "https://s29068.pcdn.co/wp-content/uploads/hunter-campus.jpg.optimal.jpg",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://s29068.pcdn.co/wp-content/uploads/68th-street-campus-5-1600x900-1.jpg.optimal.jpg",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://s29068.pcdn.co/wp-content/uploads/students-skybridge-walking.jpg.optimal.jpg",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://s29068.pcdn.co/wp-content/uploads/2022-commencement-cover.jpg.optimal.jpg",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://s29068.pcdn.co/wp-content/uploads/discover-athletics-vb.jpg.optimal.jpg",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://www.huntercollegeathletics.com/images/2016/8/3/FitnessCenter05.jpg",
    content: <DummyContent />,
  },
];
