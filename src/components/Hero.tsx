import heroImg from "@/assets/hero-rumah-biru.jpg";
import { MapPin, ArrowRight, MessageCircle } from "lucide-react";
import { waLink, defaultReservasiMessage } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section id="beranda" className="relative min-h-[100svh] flex items-center overflow-hidden bg-primary-deep">
      <img
        src={heroImg}
        alt="Perumahan Gajah Mada Residence Prabumulih — rumah type 36 modern"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      <div className="relative container mx-auto px-6 py-24 md:py-32 text-primary-foreground">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <MapPin className="h-3.5 w-3.5" /> Prabumulih Timur, Kota Prabumulih
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Gajah Mada <span className="text-[oklch(0.85_0.12_230)]">Residence</span>
            <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90">
              Perumahan Modern di Prabumulih
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
            Hunian modern, aman & strategis. Harga promo mulai{" "}
            <span className="font-bold text-white">Rp 166 Juta</span> dengan angsuran ringan
            mulai 1 jutaan/bulan.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={waLink(defaultReservasiMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary shadow-[var(--shadow-elegant)] hover:scale-[1.02] transition-transform"
            >
              <MessageCircle className="h-4 w-4" /> Reservasi Rumah via WhatsApp
            </a>
            <a
              href="#tipe"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition"
            >
              Lihat Tipe Rumah <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <dl className="mt-16 grid grid-cols-3 gap-6 max-w-xl">
            {[
              ["166Jt", "Harga Promo"],
              ["Type 36", "Tipe Rumah"],
              ["SHM", "Sertifikat"],
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
