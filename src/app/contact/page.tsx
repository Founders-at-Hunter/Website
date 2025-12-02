import ContactForm from "@/components/pages/Contact/ContactForm";
import Footer from "@/components/ui/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Founders @ Hunter",
};

export default function ContactPage() {
  return (
    <>
      <main className="max-w-[1560px] m-auto">
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
