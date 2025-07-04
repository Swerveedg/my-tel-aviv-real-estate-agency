import type { Metadata } from "next";
import { Inter, Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tel Aviv Estates - Premium Real Estate",
  description: "Exclusive residences overlooking the Mediterranean, designed for those who live without compromise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} ${manrope.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
} 