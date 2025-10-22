import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import WhatWeOffer from "@/components/WhatWeOffer";
import UpcomingEvents from "@/components/UpcomingEvents";
import JoinKickOff from "@/components/JoinKickOff";
import Footer from "@/components/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Navbar - absolute positioned over carousel */}
      <Navbar />

      {/* Hero Carousel - full viewport height */}
      <HeroCarousel />

      {/* What We Offer Section */}
      <WhatWeOffer />

      {/* Upcoming Events Section */}
      <UpcomingEvents />

      {/* Join Kick Off CTA */}
      <JoinKickOff />

      {/* Footer */}
      <Footer />
    </div>
  );
}

