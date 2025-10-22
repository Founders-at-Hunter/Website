import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
