import Hero from "@/components/pages/LandingPage/Hero";
import Footer from "@/components/ui/Footer";
import UpcomingEvents from "@/components/UpcomingEvents";
import WhatWeOffer from "@/components/WhatWeOffer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <div className="max-w-[1560px] m-auto">
          <WhatWeOffer />
          <UpcomingEvents />
          <Footer />
        </div>
      </main>
    </>
  );
}
