import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Tipe } from "@/components/Tipe";
import { Fasilitas } from "@/components/Fasilitas";
import { Lokasi } from "@/components/Lokasi";
import { Kontak } from "@/components/Kontak";

const SITE_URL = "https://perumahan-gajahmada-pbm.lovable.app";
const TITLE = "Perumahan Gajah Mada Prabumulih — Rumah Type 36 Mulai 166 Juta";
const DESCRIPTION =
  "Perumahan murah di Prabumulih: Gajah Mada Residence Type 36 di Karang Jaya, Prabumulih Timur. Harga promo mulai Rp 166 Juta, angsuran 1 jutaan/bulan, SHM, dekat pusat kota.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "perumahan prabumulih, rumah dijual prabumulih, perumahan murah prabumulih, rumah type 36 prabumulih, perumahan gajah mada, gajah mada residence, rumah subsidi prabumulih, KPR prabumulih, rumah karang jaya, prabumulih timur",
      },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "ID-SS" },
      { name: "geo.placename", content: "Prabumulih" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "id_ID" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          name: "Gajah Mada Residence Type 36",
          description: DESCRIPTION,
          url: SITE_URL,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Jl. Karang Jaya GMR RT/RW 001/001",
            addressLocality: "Prabumulih Timur",
            addressRegion: "Sumatera Selatan",
            postalCode: "31111",
            addressCountry: "ID",
          },
          offers: {
            "@type": "Offer",
            price: "166000000",
            priceCurrency: "IDR",
            availability: "https://schema.org/InStock",
          },
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
        <Kontak />
      </main>
    </div>
  );
}
