import { MapPin, Clock } from "lucide-react";

const access = [
  ["5 menit", "Tol Akses Kota"],
  ["10 menit", "Pusat Perbelanjaan"],
  ["7 menit", "Rumah Sakit"],
  ["8 menit", "Sekolah Internasional"],
  ["15 menit", "Bandara"],
  ["12 menit", "Stasiun Kereta"],
];

export function Lokasi() {
  return (
    <section id="lokasi" className="py-24 bg-[image:var(--gradient-soft)]">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Lokasi Strategis</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Pusat Kota dalam Genggaman
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Berada di jantung kota dengan akses mudah ke berbagai fasilitas penting sehari-hari.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {access.map(([t, p]) => (
              <div key={p} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="font-bold text-foreground">{t}</div>
                  <div className="text-xs text-muted-foreground">{p}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] bg-primary-deep">
          <iframe
            title="Lokasi Perumahan Gajah Mada"
            src="https://www.openstreetmap.org/export/embed.html?bbox=106.8%2C-6.22%2C106.86%2C-6.18&layer=mapnik"
            className="absolute inset-0 h-full w-full"
            loading="lazy"
          />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-background/95 backdrop-blur p-5 shadow-lg">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="font-bold text-foreground">Perumahan Gajah Mada</div>
                <div className="text-xs text-muted-foreground">Jl. Gajah Mada No. 88, Kota Mandiri</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
