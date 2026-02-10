import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Toaster } from "sonner";
import NavMenu from "@/components/ui/NavMenu";
import JoinUs from "./_components/JoinUs";
import Footer from "./_components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Founders @ Hunter",
  description: "Entrepreneurship club at Hunter College",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} id="portal-root">
        <RootProvider>
          <NavMenu />
          <main className="mt-[82px] max-w-[1920px] mx-auto">
            {children}
            <JoinUs />
            <Footer />
          </main>
          <Toaster />
        </RootProvider>
      </body>
    </html>
  );
}
