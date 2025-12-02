import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Toaster } from "sonner";
import NavMenu from "@/components/ui/NavMenu";

const inter = Inter({ subsets: ["latin"] });

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
          {children}
          <Toaster />
        </RootProvider>
      </body>
    </html>
  );
}
