import { Shield, Trees, Waves, Dumbbell, School, ShoppingBag } from "lucide-react";

const items = [
  { icon: Shield, title: "Keamanan 24 Jam", desc: "Sistem one-gate dengan CCTV dan patroli rutin." },
  { icon: Trees, title: "Taman & Jogging Track", desc: "Ruang hijau luas untuk aktivitas keluarga." },
  { icon: Waves, title: "Kolam Renang", desc: "Kolam dewasa dan anak dengan fasilitas lengkap." },
  { icon: Dumbbell, title: "Clubhouse & Gym", desc: "Tempat olahraga dan bersantai bersama tetangga." },
  { icon: School, title: "Dekat Sekolah", desc: "Akses mudah ke sekolah favorit dan kampus." },
  { icon: ShoppingBag, title: "Pusat Perbelanjaan", desc: "5 menit ke mall dan pasar modern." },
];

export function Fasilitas() {
  return (
    <section id="fasilitas" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Fasilitas Premium</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Hidup Lengkap dalam Satu Kawasan
          </h2>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-[var(--shadow-card)] transition-all">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)] group-hover:scale-110 transition-transform">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
