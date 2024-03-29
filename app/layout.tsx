import type { Metadata } from "next";
import { Inter } from "@next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-kalam",
});

export const metadata: Metadata = {
  title: "Annapurna tiffing",
  description: "Your one stop resturant for all your tiffing needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
