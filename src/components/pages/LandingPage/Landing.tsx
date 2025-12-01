import Navbar from "@/components/Navbar";
import WhatWeOffer from "@/components/WhatWeOffer";
import UpcomingEvents from "@/components/UpcomingEvents";
import JoinKickOff from "@/components/JoinKickOff";
import Footer from "@/components/ui/Footer";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import NavMenu from "@/components/ui/NavMenu";

export default function Landing() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navbar - fixed positioned over hero */}
      {/* <Navbar /> */}
      <NavMenu />

      {/* Hero Section with Animations - Absolute positioned at top */}
      <AppleCardsCarouselDemo />

      {/* What We Offer Section */}
      <WhatWeOffer />

      {/* Upcoming Events Section */}
      <UpcomingEvents />

      {/* Footer */}
      <Footer />
    </div>
  );
}
