import {
  MapPin,
  ShieldCheck,
  Maximize,
  Trees,
  Users,
  Wallet,
  Lightbulb,
  DoorOpen,
  Droplets,
  FileCheck,
  Hammer,
  Zap,
} from "lucide-react";
import keunggulan from "@/assets/keunggulan.jpg";

const items = [
  { icon: MapPin, title: "Tempat yang Strategis", desc: "Lokasi mudah diakses dari pusat kota." },
  { icon: ShieldCheck, title: "Bebas Banjir & Sengketa", desc: "Lahan aman, tidak banjir, legalitas jelas." },
  { icon: Maximize, title: "Tanah Rumah yang Besar", desc: "Luas tanah lega untuk taman & ekspansi." },
  { icon: Trees, title: "Aman, Nyaman & Asri", desc: "Lingkungan hijau dan tenang." },
  { icon: Users, title: "Sudah Ramai Penduduk", desc: "Komunitas warga aktif dan ramah." },
  { icon: Wallet, title: "Angsuran Ringan", desc: "Mulai 1 jutaan per bulan." },
  { icon: Lightbulb, title: "Lampu Jalan Setiap Blok", desc: "Penerangan menyeluruh di malam hari." },
  { icon: DoorOpen, title: "One Gate System", desc: "Akses keluar masuk satu pintu, lebih aman." },
  { icon: Droplets, title: "Air Bersih & Jernih", desc: "WTP/PAM mandiri kualitas terjamin." },
  { icon: FileCheck, title: "Sertifikat Hak Milik", desc: "SHM resmi atas nama pembeli." },
  { icon: Hammer, title: "Mutu Bangunan Berkualitas", desc: "Material pilihan & pengerjaan rapi." },
  { icon: Zap, title: "Proses Cepat & Mudah", desc: "Pengajuan KPR dipandu hingga akad." },
];

export function Fasilitas() {
  return (
    <section id="fasilitas" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">12 Keunggulan</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Kenapa Harus Gajah Mada Residence?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hunian terjangkau dengan kualitas, lokasi, dan fasilitas yang membuat Anda tenang.
          </p>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-[var(--shadow-card)] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)] group-hover:scale-110 transition-transform">
                  <it.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-base font-bold text-foreground">{it.title}</h3>
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)]">
          <img src={keunggulan} alt="12 Keunggulan Rumah Gajah Mada Residence" className="w-full" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
