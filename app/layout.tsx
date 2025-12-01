import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { casaGrande, strawFord, atomicMarker } from "@/assets/fonts";
import { Header } from "@/components/Header/Header";
import "./globals.css";
import { Footer } from "@/components/Footer/Footer";

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
  title: "Playtest | Lezoo",
  description: "Apply to become a playtester for Le Zoo where you can win rewards, be a part of an exclusive discord channel and impact how Le Zoo gets built!",
  keywords: ["Le Zoo", "Playtest", "Gaming", "Mobile Game", "Beta Testing"],
  authors: [{ name: "Le Zoo Team" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Playtest | Le Zoo",
    description: "Join Le Zoo's playtest program. Win prizes, access exclusive Discord channels, and shape the future of the game!",
    type: "website",
    url: "https://lezoo.com",
    siteName: "Le Zoo",
    images: [
      {
        url: "/images/playtest-leadspace.webp",
        width: 1200,
        height: 630,
        alt: "Le Zoo Playtest Program",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical hero image for better LCP */}
        <link
          rel="preload"
          as="image"
          href="/images/playtest-leadspace.webp"
          type="image/webp"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${casaGrande.variable} ${strawFord.variable} ${atomicMarker.variable} antialiased`}
      >
        <Header />
        <div className="bg-raisin-black-2">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
