import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Tipe } from "@/components/Tipe";
import { Fasilitas } from "@/components/Fasilitas";
import { FAQ } from "@/components/FAQ";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Lokasi } from "@/components/Lokasi";
import { Kontak } from "@/components/Kontak";
import heroImg from "@/assets/hero-rumah-biru.jpg";
import {
  FAQ_ITEMS,
  PROPERTY_ADDRESS,
  PROPERTY_CITY,
  PROPERTY_COUNTRY,
  PROPERTY_DISTRICT,
  PROPERTY_NAME,
  PROPERTY_POSTAL_CODE,
  PROPERTY_REGION,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      {
        name: "keywords",
        content: SITE_KEYWORDS.join(", "),
      },
      { name: "author", content: SITE_NAME },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "ID-SS" },
      { name: "geo.placename", content: PROPERTY_CITY },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "id_ID" },
      { property: "og:image", content: heroImg },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: heroImg },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          name: PROPERTY_NAME,
          description: SITE_DESCRIPTION,
          address: {
            "@type": "PostalAddress",
            streetAddress: PROPERTY_ADDRESS,
            addressLocality: PROPERTY_DISTRICT,
            addressRegion: PROPERTY_REGION,
            postalCode: PROPERTY_POSTAL_CODE,
            addressCountry: PROPERTY_COUNTRY,
          },
          offers: {
            "@type": "Offer",
            price: "166000000",
            priceCurrency: "IDR",
            availability: "https://schema.org/InStock",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Tipe />
        <Fasilitas />
        <Lokasi />
        <FAQ />
        <Kontak />
      </main>
      <FloatingWhatsApp />
    </div>
  );
}
