import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Tipe } from "@/components/Tipe";
import { Fasilitas } from "@/components/Fasilitas";
import { Lokasi } from "@/components/Lokasi";
import { Kontak } from "@/components/Kontak";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Perumahan Gajah Mada — Hunian Modern Eksklusif" },
      { name: "description", content: "Perumahan Gajah Mada menawarkan hunian modern dengan desain elegan, fasilitas premium, dan lokasi strategis untuk keluarga Indonesia." },
      { property: "og:title", content: "Perumahan Gajah Mada — Hunian Modern Eksklusif" },
      { property: "og:description", content: "Wujudkan rumah impian di kawasan strategis dengan fasilitas lengkap dan lingkungan asri." },
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
