import { Phone, MessageCircle, MapPin } from "lucide-react";
import { waLink, WA_NUMBER } from "@/lib/whatsapp";

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
                Reservasi Rumah Anda Sekarang
              </h2>
              <p className="mt-4 text-white/85 text-lg max-w-md">
                Klik tombol di bawah dan langsung terhubung dengan marketing kami via WhatsApp.
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <a href={`tel:+${WA_NUMBER}`} className="flex items-center gap-3 hover:text-white">
                  <Phone className="h-4 w-4" /> +62 851-8541-7702 (Soleha Ulfasari)
                </a>
                <a
                  href={waLink("Halo, saya ingin tanya tentang Gajah Mada Residence.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" /> Chat WhatsApp Marketing
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>Jl. Karang Jaya GMR RT/RW 001/001, Prabumulih Timur</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-background/95 backdrop-blur p-8 md:p-10 text-foreground text-center shadow-lg">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
                <MessageCircle className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-2xl font-bold">Reservasi Cepat via WhatsApp</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Klik tombol di bawah, Anda akan langsung diarahkan ke chat WhatsApp
                marketing kami untuk informasi unit dan jadwal survei.
              </p>
              <a
                href={waLink("Halo, saya ingin RESERVASI rumah Gajah Mada Residence Type 36 (Rp 166 Juta). Mohon info unit tersedia dan jadwal survei. Terima kasih.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-elegant)] hover:opacity-90 transition"
              >
                <MessageCircle className="h-4 w-4" /> Reservasi Cepat via WhatsApp
              </a>
              <p className="mt-3 text-xs text-muted-foreground">
                Marketing: <span className="font-semibold text-foreground">Soleha Ulfasari</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="container mx-auto px-6 mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2026 Gajah Mada Residence — Hunian Modern di Prabumulih.</p>
        <p>Kantor Pemasaran: Soleha Ulfasari — 0851 8541 7702</p>
      </footer>
    </section>
  );
}
