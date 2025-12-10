import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playtest | Lezoo",
  description:
    "Apply to become a playtester for Le Zoo where you can win rewards, be a part of an exclusive discord channel and impact how Le Zoo gets built!",
  keywords: ["Le Zoo", "Playtest", "Gaming", "Mobile Game", "Beta Testing"],
  authors: [{ name: "Le Zoo Team" }],
  openGraph: {
    title: "Playtest | Le Zoo",
    description:
      "Join Le Zoo's playtest program. Win prizes, access exclusive Discord channels, and shape the future of the game!",
    type: "website",
    url: "https://lezoo.com/playtest",
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

export default function PlaytestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-raisin-black-2">
      {children}
    </div>
  );
}
