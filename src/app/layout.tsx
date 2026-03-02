import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavMenu from "@/components/ui/NavMenu";
import JoinUs from "./_components/JoinUs";
import Footer from "./_components/Footer";

const font = localFont({
  src: "../../public/fonts/GoogleSans-VariableFont_GRAD,opsz,wght.ttf", // Path relative to this file
  display: "swap", // 'swap' ensures fallback text is displayed until the font loads
  variable: "--font", // Optional: for use with CSS variables and Tailwind CSS
});

const siteUrl = "https://hunterfounders.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Founders @ Hunter",
    template: "%s | Founders @ Hunter",
  },
  description:
    "The entrepreneurship club at Hunter College. Connect with like-minded founders, learn from industry leaders, and turn your ideas into reality.",
  keywords: [
    "Hunter College",
    "entrepreneurship",
    "startup",
    "founders",
    "student club",
    "CUNY",
    "tech",
    "innovation",
  ],
  verification: {
    google: "Y0PXTe3oVOvaPexcA2PXF2NqqiuUi4fzFKrY3ePQux4",
  },
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Founders @ Hunter",
    title: "Founders @ Hunter",
    description:
      "The entrepreneurship club at Hunter College. Connect with like-minded founders, learn from industry leaders, and turn your ideas into reality.",
    images: [
      {
        url: "/DSC00870.JPG",
        width: 1629,
        height: 1741,
        alt: "Founders @ Hunter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founders @ Hunter",
    description:
      "The entrepreneurship club at Hunter College. Connect with like-minded founders, learn from industry leaders, and turn your ideas into reality.",
    images: ["/DSC00870.JPG"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className} id="portal-root">
        <RootProvider>
          <NavMenu />
          <main className="mt-[82px] max-w-[1896px] mx-auto">
            {children}
            <JoinUs />
            <Footer />
          </main>
          <Toaster />
          <Analytics />
          <SpeedInsights />
        </RootProvider>
      </body>
    </html>
  );
}
