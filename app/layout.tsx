import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { casaGrande, strawFord, atomicMarker } from "@/assets/fonts";
import { Header } from "@/components/Header/Header";
import "./globals.css";
import { Footer } from "@/components/Footer/Footer";
import { Button } from "@/components/Button/Button";
import { DiscordBlueBg } from "@/components/Icon/Icon";

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
  title: "Home | Lezoo",
  description:
    "Le Zoo. Le Zoo is a 3D mobile free-to-play social multi-player game, combining hyper-casual mini games, battles, strategy, and turn-based RPG mechanics.",
  keywords: ["Le Zoo", "Home", "Gaming", "Mobile Game", "Beta Testing"],
  authors: [{ name: "Le Zoo Team" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: "Home | Le Zoo",
    description:
      "Le Zoo. Le Zoo is a 3D mobile free-to-play social multi-player game, combining hyper-casual mini games, battles, strategy, and turn-based RPG mechanics.",
    type: "website",
    url: "https://lezoo.mothergames.com",
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
          <section className="fixed  top-[110px] md:top-[61px] right-[-10px] z-50 flex flex-col gap-10 justify-center items-center">
            <Button variant="vertical" buttonText={"Playtest"} />
            <a
              href="#"
              className="text-white hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <DiscordBlueBg className="w-[45px] h-[45px]" />
            </a>
          </section>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
