import Contact from "@/components/pages/Contact/Contact";
import Footer from "@/components/ui/Footer";
import NavMenu from "@/components/ui/NavMenu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Founders @ Hunter",
};

export default function ContactPage() {
  return (
    <div>
      {/* mt-[105px] (NavMenu: 81px) */}
      <NavMenu />
      <main className="max-w-7xl m-auto">
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
