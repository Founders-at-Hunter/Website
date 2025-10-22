import Navbar from "@/components/Navbar";
import { Component as HeroSection } from "@/components/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WhatWeOffer from "@/components/WhatWeOffer";
import UpcomingEvents from "@/components/UpcomingEvents";
import JoinKickOff from "@/components/JoinKickOff";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Navbar - absolute positioned over hero */}
      <Navbar />

      {/* Hero Section with Animations */}
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

