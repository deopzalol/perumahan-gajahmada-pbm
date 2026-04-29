import { MapPin, Phone } from "lucide-react";
import brosur from "@/assets/brosur-1.jpg";

export function Lokasi() {
  const alamat = "Jl. Karang Jaya GMR RT/RW 001/001, Karang Jaya, Prabumulih Timur, Kota Prabumulih";
  const mapsQuery = encodeURIComponent("Karang Jaya Prabumulih Timur Kota Prabumulih");

  return (
    <section id="lokasi" className="py-24 bg-[image:var(--gradient-soft)]">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Lokasi Strategis</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Berada di Jantung Prabumulih Timur
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Akses mudah ke pusat kota, sekolah, pasar, dan fasilitas umum lainnya.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shrink-0">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="font-bold text-foreground">Alamat Lokasi</div>
                <p className="text-sm text-muted-foreground mt-1">{alamat}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shrink-0">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="font-bold text-foreground">Kantor Pemasaran</div>
                <p className="text-sm text-muted-foreground mt-1">0811 7875 234</p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl overflow-hidden shadow-[var(--shadow-card)] border border-border">
            <img src={brosur} alt="Brosur Promo Gajah Mada Residence" className="w-full" loading="lazy" />
          </div>
        </div>

        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] bg-primary-deep">
          <iframe
            title="Lokasi Gajah Mada Residence — Prabumulih"
            src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
            className="absolute inset-0 h-full w-full"
            loading="lazy"
          />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-background/95 backdrop-blur p-5 shadow-lg">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="font-bold text-foreground">Gajah Mada Residence</div>
                <div className="text-xs text-muted-foreground">Karang Jaya, Prabumulih Timur</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
