import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Journal | Rudraksha Properties & Construction",
  description: "Discover real estate guides, stories, and exclusive tips for your next property investment. Read the Rudraksha Properties journal.",
  openGraph: {
    title: "Blog & Journal | Rudraksha Properties & Construction",
    description: "Discover real estate guides, stories, and exclusive tips for your next property investment. Read the Rudraksha Properties journal.",
    url: "https://rudrakshaproperties.com/journal",
    type: "website",
  },
};

export default function JournalLayout({
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
            "@type": "Blog",
            "name": "Rudraksha Properties Journal",
            "description": "Real estate guides, stories, and exclusive tips for property investment.",
            "url": "https://rudrakshaproperties.com/journal",
          }),
        }}
      />
      {children}
    </>
  );
}
