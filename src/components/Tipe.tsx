import rumah from "@/assets/rumah-gajahmada.jpg";
import brosur from "@/assets/brosur-2.jpg";
import { Bed, Bath, Maximize, MessageCircle, Check } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const spesifikasi = [
  ["Dinding", "Batu Bata Merah di Plaster"],
  ["Atap", "Genteng Pasir"],
  ["Rangka Atap", "Baja Ringan"],
  ["Listrik PLN", "1300 Watt"],
  ["Lantai", "Keramik 50x50 cm"],
  ["Closet", "Closet Duduk Bertabung"],
  ["Kamar Mandi", "Keramik Toilet 25x40 cm"],
  ["Pintu Toilet", "Kaca Patri"],
  ["Carport", "Cor Beton"],
  ["Kusen Jendela", "Kayu Panel Kelas 2"],
  ["Pintu", "Kayu Panel Kelas 2"],
  ["Plafon", "PVC"],
  ["Cat Interior", "Jotun / Setara"],
  ["Cat Exterior", "Jotun / Setara"],
  ["Saklar & Terminal", "Panasonic Setara"],
  ["Air", "WTP/PAM Mandiri"],
];

const angsuran = [
  { tahun: "5 Tahun", nilai: "Rp 2.991.091" },
  { tahun: "10 Tahun", nilai: "Rp 1.681.138" },
  { tahun: "15 Tahun", nilai: "Rp 1.253.408" },
];

export function Tipe() {
  const pesan =
    "Halo, saya ingin reservasi *Gajah Mada Residence Type 36* (Harga Promo Rp 166 Juta). Mohon info unit yang tersedia.";

  return (
    <section id="tipe" className="py-24 bg-[image:var(--gradient-soft)]">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Tipe Rumah</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Type 36 — Hunian Cerdas untuk Keluarga
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Satu tipe rumah dengan kualitas konstruksi terbaik, desain modern, dan harga
            yang sangat terjangkau.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-10 items-stretch">
          <article className="rounded-3xl bg-card overflow-hidden shadow-[var(--shadow-elegant)]">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={rumah}
                alt="Rumah Type 36 Gajah Mada Residence"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="absolute top-4 left-4 rounded-full bg-background/95 px-3 py-1.5 text-xs font-semibold text-primary">
                Best Seller
              </span>
              <span className="absolute top-4 right-4 rounded-full bg-[image:var(--gradient-primary)] px-3 py-1.5 text-xs font-bold text-primary-foreground">
                HARGA PROMO
              </span>
            </div>
            <div className="p-8">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary-deep">Rp 166</span>
                <span className="text-xl font-semibold text-primary-deep">Juta</span>
              </div>
              <h3 className="mt-2 text-2xl font-bold text-foreground">Type 36</h3>
              <div className="mt-6 grid grid-cols-3 gap-3 text-sm border-y border-border py-4">
                <span className="flex items-center gap-1.5 text-muted-foreground"><Maximize className="h-4 w-4 text-primary" /> 36 m²</span>
                <span className="flex items-center gap-1.5 text-muted-foreground"><Bed className="h-4 w-4 text-primary" /> 2 KT</span>
                <span className="flex items-center gap-1.5 text-muted-foreground"><Bath className="h-4 w-4 text-primary" /> 1 KM</span>
              </div>
              <a
                href={waLink(pesan)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:opacity-90 transition"
              >
                <MessageCircle className="h-4 w-4" /> Reservasi Sekarang via WhatsApp
              </a>
            </div>
          </article>

          <div className="rounded-3xl bg-card p-8 shadow-[var(--shadow-card)]">
            <h3 className="text-xl font-bold text-foreground">Spesifikasi Bangunan</h3>
            <dl className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              {spesifikasi.map(([k, v]) => (
                <div key={k} className="flex items-start gap-2 border-b border-border/60 pb-2">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <dt className="font-semibold text-foreground">{k}</dt>
                    <dd className="text-muted-foreground text-xs">{v}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl bg-[image:var(--gradient-primary)] p-8 text-primary-foreground shadow-[var(--shadow-elegant)]">
            <h3 className="text-2xl font-bold">Simulasi Angsuran Subsidi Umum</h3>
            <p className="mt-2 text-white/85 text-sm">
              Cicilan ringan dengan jangka waktu fleksibel.
            </p>
            <div className="mt-6 space-y-3">
              {angsuran.map((a) => (
                <div key={a.tahun} className="flex items-center justify-between rounded-xl bg-white/15 backdrop-blur px-5 py-4">
                  <span className="font-semibold">{a.tahun}</span>
                  <span className="text-lg font-bold">{a.nilai}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-card)] bg-card">
            <img src={brosur} alt="Brosur Gajah Mada Residence — Denah Type 36 & Persyaratan" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
