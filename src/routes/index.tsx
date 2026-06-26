import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Tipe } from "@/components/Tipe";
import { Fasilitas } from "@/components/Fasilitas";
import { Lokasi } from "@/components/Lokasi";
import { FAQ } from "@/components/FAQ";
import { Kontak } from "@/components/Kontak";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://perumahan-gajahmada-pbm.lovable.app";
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
          "perumahan prabumulih, rumah dijual prabumulih, perumahan murah prabumulih, rumah type 36 prabumulih, perumahan gajah mada, gajah mada residence, rumah subsidi prabumulih, KPR prabumulih, rumah karang jaya, prabumulih timur, perumahan bebas banjir prabumulih, KPR bersubsidi prabumulih, soleha ulfasari marketing",
      },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "ID-SS" },
      { name: "geo.placename", content: "Prabumulih" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "id_ID" },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
      {
        name: "google-site-verification",
        content: "YOUR_GOOGLE_VERIFICATION_CODE_HERE", // Slot for user verification code
      },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "RealEstateListing",
              "@id": `${SITE_URL}/#listing`,
              "name": "Gajah Mada Residence Type 36",
              "description": DESCRIPTION,
              "url": SITE_URL,
              "image": `${SITE_URL}/og-image.jpg`,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Karang Jaya GMR RT/RW 001/001",
                "addressLocality": "Prabumulih Timur",
                "addressRegion": "Sumatera Selatan",
                "postalCode": "31111",
                "addressCountry": "ID",
              },
              "offers": {
                "@type": "Offer",
                "price": "166000000",
                "priceCurrency": "IDR",
                "priceValidUntil": "2027-12-31",
                "availability": "https://schema.org/InStock",
                "url": SITE_URL,
              },
            },
            {
              "@type": "RealEstateAgent",
              "@id": `${SITE_URL}/#agent`,
              "name": "Soleha Ulfasari — Marketing Resmi Gajah Mada Residence",
              "telephone": "+62-851-8541-7702",
              "image": `${SITE_URL}/og-image.jpg`,
              "url": SITE_URL,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Karang Jaya GMR RT/RW 001/001",
                "addressLocality": "Prabumulih Timur",
                "addressRegion": "Sumatera Selatan",
                "postalCode": "31111",
                "addressCountry": "ID",
              },
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/#faq`,
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Apakah Perumahan Gajah Mada Residence Prabumulih Bebas Banjir?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ya, lokasi Gajah Mada Residence berada di kawasan dataran tinggi Karang Jaya yang bebas banjir dan memiliki sistem drainase yang baik. Lahan kami juga dijamin aman secara legalitas dan bebas dari sengketa.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Berapa Harga Rumah Type 36 dan Bagaimana Sistem Pembayarannya?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Harga promo unit rumah tipe 36 saat ini mulai dari Rp 166 Juta. Kami melayani pembelian secara Cash Keras, Cash Bertahap, maupun pengajuan KPR. Pembelian secara KPR didukung oleh perbankan dengan bunga dan cicilan bersubsidi yang ringan.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Bagaimana Simulasi Angsuran KPR Gajah Mada Residence?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Cicilan perumahan kami sangat terjangkau untuk keluarga muda maupun pekerja. Simulasinya adalah: Tenor 5 tahun sekitar Rp 2,99 Juta/bulan, Tenor 10 tahun sekitar Rp 1,68 Juta/bulan, dan Tenor 15 tahun sekitar Rp 1,25 Juta/bulan.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Apa Saja Spesifikasi Bahan Bangunan Unit Type 36?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kami menggunakan material pilihan berkualitas tinggi: Dinding batu bata merah (diplester dan dicat Jotun/setara), rangka atap baja ringan dengan genteng pasir, lantai keramik 50x50 cm, plafon PVC modern, closet duduk bertabung, listrik PLN 1300 Watt, serta air bersih dari WTP/PAM Mandiri.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Apakah Status Legalitas Tanah dan Bangunannya Sudah Sertifikat Hak Milik (SHM)?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ya, status kepemilikan unit properti di Gajah Mada Residence Prabumulih sudah bersertifikat resmi berupa Sertifikat Hak Milik (SHM) yang akan dibaliknamakan langsung ke nama pembeli setelah transaksi selesai.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Bagaimana Cara Menghubungi Marketing dan Melakukan Survei Lokasi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Anda dapat menghubungi marketing resmi kami, Soleha Ulfasari, melalui WhatsApp di nomor 0851 8541 7702. Tim kami siap membantu memberikan simulasi angsuran terperinci, mengecek ketersediaan blok rumah, dan mendampingi Anda langsung untuk survei lokasi perumahan.",
                  },
                },
              ],
            },
          ],
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
    </div>
  );
}
