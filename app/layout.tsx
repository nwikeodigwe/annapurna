import type { Metadata } from "next";
import { Short_Stack as Sans } from "next/font/google";

import "./globals.css";
import "./style.css";

const sans = Sans({
  subsets: ["latin"],
  variable: "--font-nuecha",
  weight: ["400"],
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
    <html lang="en" className={`${sans.className} bg-brand-50 text-brand-800`}>
      <body>{children}</body>
    </html>
  );
}
