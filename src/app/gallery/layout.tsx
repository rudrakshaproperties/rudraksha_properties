import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Gallery | Rudraksha Properties & Construction",
  description: "Explore our visual narrative of premium real estate properties. Witness breathtaking landscapes, residential plots, and exclusive commercial projects curated by Rudraksha Properties.",
  openGraph: {
    title: "Property Gallery | Rudraksha Properties & Construction",
    description: "Explore our visual narrative of premium real estate properties. Witness breathtaking landscapes, residential plots, and exclusive commercial projects.",
    url: "https://rudrakshaproperties.com/gallery",
    type: "website",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Rudraksha Properties Gallery",
            "description": "A curated collection of real estate destinations, properties, and exclusive construction projects.",
            "url": "https://rudrakshaproperties.com/gallery",
          }),
        }}
      />
      {children}
    </>
  );
}
