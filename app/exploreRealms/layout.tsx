import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Realms | Le Zoo",
  description: "Discover the mystical realms of Le Zoo - from the Bright houses of Infinity and Jewels to the Dark depths of Central Hell. Explore unique worlds, each with its own story and secrets.",
  keywords: [
    "Le Zoo Realms",
    "Gaming Worlds",
    "Virtual Realms",
    "Bright Realms",
    "Dark Realms",
    "Middle Realms",
    "Le Zoo Universe",
    "Gaming Experience",
    "Explore Worlds",
  ],
  openGraph: {
    title: "Explore Realms | Le Zoo",
    description: "Discover the mystical realms of Le Zoo - from Bright to Dark, each world offers unique experiences and adventures.",
    type: "website",
    url: "https://lezoo.com/exploreRealms",
    images: [
      {
        url: "/images/hoods-gallery-bg.webp",
        width: 1200,
        height: 630,
        alt: "Le Zoo Realms Gallery",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://lezoo.com/exploreRealms",
  },
};

export default function ExploreRealmsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
