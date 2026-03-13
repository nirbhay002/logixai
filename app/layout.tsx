import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LogixAI | Find Your X Factor",
  description:
    "LogixAI is an edtech platform founded by IITians that helps students discover their X Factor, find the logic behind every 'why', and build deep analytical thinking.",
  keywords: ["edtech", "IITians", "mentorship", "logical thinking", "AI learning", "LogixAI"],
  openGraph: {
    title: "LogixAI | Find Your X Factor",
    description: "Learn with IITians. Find the logic behind every why.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#09090B]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}