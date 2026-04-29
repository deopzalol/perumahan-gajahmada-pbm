import { useState } from "react";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { waLink, WA_NUMBER } from "@/lib/whatsapp";

export function Kontak() {
  const [nama, setNama] = useState("");
  const [wa, setWa] = useState("");
  const [catatan, setCatatan] = useState("");

  const buildMessage = () => {
    const baris = [
      "Halo, saya ingin *RESERVASI Rumah Gajah Mada Residence* (Type 36 - Rp 166 Juta).",
      "",
      `Nama: ${nama || "-"}`,
      `No. WA: ${wa || "-"}`,
      `Catatan: ${catatan || "-"}`,
      "",
      "Mohon info unit tersedia & jadwal survei. Terima kasih.",
    ];
    return baris.join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(waLink(buildMessage()), "_blank", "noopener,noreferrer");
  };

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
                  <Phone className="h-4 w-4" /> +62 851-8541-7702
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

              <a
                href={waLink("Halo, saya ingin RESERVASI rumah Gajah Mada Residence Type 36. Mohon info lengkapnya.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-bold text-primary shadow-lg hover:scale-[1.02] transition-transform"
              >
                <MessageCircle className="h-4 w-4" /> Reservasi Cepat via WhatsApp
              </a>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-background/95 backdrop-blur p-6 md:p-8 space-y-4 text-foreground"
            >
              <div>
                <label className="text-sm font-medium">Nama Lengkap</label>
                <input
                  required
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label className="text-sm font-medium">No. WhatsApp</label>
                <input
                  required
                  value={wa}
                  onChange={(e) => setWa(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="08xx xxxx xxxx"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Catatan / Pertanyaan</label>
                <textarea
                  value={catatan}
                  onChange={(e) => setCatatan(e.target.value)}
                  rows={3}
                  className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Contoh: Ingin survei akhir pekan ini"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[image:var(--gradient-primary)] py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:opacity-90 transition"
              >
                <MessageCircle className="h-4 w-4" /> Kirim Reservasi via WhatsApp
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Setelah klik, Anda akan otomatis diarahkan ke chat WhatsApp marketing kami.
              </p>
            </form>
          </div>
        </div>
      </div>
      <footer className="container mx-auto px-6 mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2026 Gajah Mada Residence — Hunian Modern di Prabumulih.</p>
        <p>Kantor Pemasaran: 0811 7875 234</p>
      </footer>
    </section>
  );
}
