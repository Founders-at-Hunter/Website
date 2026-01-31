import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Toaster } from "sonner";
import NavMenu from "@/components/ui/NavMenu";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
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
      <body className={ubuntu.className} id="portal-root">
        <RootProvider>
          <NavMenu />
          <main className="mt-[82px] max-w-[1920px] mx-auto">{children}</main>
          <Toaster />
        </RootProvider>
      </body>
    </html>
  );
}
