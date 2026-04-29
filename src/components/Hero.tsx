import heroImg from "@/assets/hero-perumahan.jpg";
import { MapPin, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Perumahan Gajah Mada — hunian modern dengan tema biru"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      <div className="relative container mx-auto px-6 py-32 text-primary-foreground">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <MapPin className="h-3.5 w-3.5" /> Hunian Eksklusif Tahun 2026
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Perumahan <span className="text-[oklch(0.85_0.12_230)]">Gajah Mada</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
            Wujudkan hunian impian keluarga di kawasan strategis dengan desain modern,
            fasilitas premium, dan lingkungan asri yang menenangkan.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#tipe" className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary shadow-[var(--shadow-elegant)] hover:scale-[1.02] transition-transform">
              Lihat Tipe Rumah <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#kontak" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition">
              Hubungi Marketing
            </a>
          </div>
          <dl className="mt-16 grid grid-cols-3 gap-6 max-w-xl">
            {[
              ["120+", "Unit Tersedia"],
              ["5 Ha", "Luas Kawasan"],
              ["24/7", "Keamanan"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="text-3xl md:text-4xl font-bold">{v}</dt>
                <dd className="mt-1 text-sm text-white/75">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
