import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { Poppins, Changa_One } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-poppins",
  style: "normal",
});

const changa = Changa_One({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-changa",
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Rombong Omen",
  description: "Menu online Rombong Omen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${changa.variable} font-sans`}
    >
      <body className="w-full min-h-screen px-16 sm:px-4 md:px-8 bg-pastel">
        {children}
      </body>
    </html>
  );
}
