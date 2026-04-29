import t1 from "@/assets/rumah-tipe-1.jpg";
import t2 from "@/assets/rumah-tipe-2.jpg";
import t3 from "@/assets/rumah-tipe-3.jpg";
import { Bed, Bath, Maximize, ArrowUpRight } from "lucide-react";

const tipes = [
  { img: t1, name: "Tipe Majapahit", price: "Rp 850 Juta", lt: "90 m²", lb: "60 m²", kt: 2, km: 2, badge: "Best Seller" },
  { img: t2, name: "Tipe Singasari", price: "Rp 1,2 Miliar", lt: "120 m²", lb: "85 m²", kt: 3, km: 2, badge: "Tropis" },
  { img: t3, name: "Tipe Nusantara", price: "Rp 2,4 Miliar", lt: "200 m²", lb: "180 m²", kt: 4, km: 3, badge: "Premium" },
];

export function Tipe() {
  return (
    <section id="tipe" className="py-24 bg-[image:var(--gradient-soft)]">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Pilihan Hunian</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Tipe Rumah untuk Setiap Keluarga
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Tiga pilihan desain dengan kualitas konstruksi terbaik dan ruang yang fungsional.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {tipes.map((t) => (
            <article key={t.name} className="group rounded-3xl bg-card overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-500 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={t.img} alt={t.name} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute top-4 left-4 rounded-full bg-background/95 px-3 py-1 text-xs font-semibold text-primary">{t.badge}</span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{t.name}</h3>
                    <p className="mt-1 text-primary-deep font-bold text-lg">{t.price}</p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="mt-5 flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
                  <span className="flex items-center gap-1.5"><Maximize className="h-4 w-4 text-primary" /> {t.lt}</span>
                  <span className="flex items-center gap-1.5"><Bed className="h-4 w-4 text-primary" /> {t.kt} KT</span>
                  <span className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-primary" /> {t.km} KM</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
