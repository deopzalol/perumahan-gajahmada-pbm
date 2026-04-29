import { Phone, Mail, MessageCircle } from "lucide-react";

export function Kontak() {
  return (
    <section id="kontak" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-[image:var(--gradient-primary)] p-10 md:p-16 shadow-[var(--shadow-elegant)]">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[oklch(0.85_0.12_230)]/30 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center text-primary-foreground">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Siap Memiliki Hunian Impian?
              </h2>
              <p className="mt-4 text-white/85 text-lg max-w-md">
                Konsultasi gratis dengan tim marketing kami. Dapatkan promo khusus dan unit terbaik bulan ini.
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <a href="tel:+6281234567890" className="flex items-center gap-3 hover:text-white"><Phone className="h-4 w-4" /> +62 812-3456-7890</a>
                <a href="mailto:info@gajahmada.id" className="flex items-center gap-3 hover:text-white"><Mail className="h-4 w-4" /> info@gajahmada.id</a>
                <a href="#" className="flex items-center gap-3 hover:text-white"><MessageCircle className="h-4 w-4" /> WhatsApp Marketing</a>
              </div>
            </div>
            <form className="rounded-2xl bg-background/95 backdrop-blur p-6 md:p-8 space-y-4 text-foreground" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm font-medium">Nama Lengkap</label>
                <input className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Nama Anda" />
              </div>
              <div>
                <label className="text-sm font-medium">No. WhatsApp</label>
                <input className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="08xx xxxx xxxx" />
              </div>
              <div>
                <label className="text-sm font-medium">Tipe Diminati</label>
                <select className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Tipe Majapahit</option>
                  <option>Tipe Singasari</option>
                  <option>Tipe Nusantara</option>
                </select>
              </div>
              <button className="w-full rounded-lg bg-[image:var(--gradient-primary)] py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:opacity-90 transition">
                Kirim Permintaan Survei
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer className="container mx-auto px-6 mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2026 Perumahan Gajah Mada. Hunian Modern untuk Keluarga Indonesia.</p>
        <p>Dikembangkan oleh PT Gajah Mada Properti</p>
      </footer>
    </section>
  );
}
