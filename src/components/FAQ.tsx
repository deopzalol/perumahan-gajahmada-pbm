import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const faqItems = [
  {
    value: "faq-1",
    question: "Apakah Perumahan Gajah Mada Residence Prabumulih Bebas Banjir?",
    answer:
      "Ya, lokasi Gajah Mada Residence berada di kawasan dataran tinggi Karang Jaya yang bebas banjir dan memiliki sistem drainase yang baik. Lahan kami juga dijamin aman secara legalitas dan bebas dari sengketa.",
  },
  {
    value: "faq-2",
    question: "Berapa Harga Rumah Type 36 dan Bagaimana Sistem Pembayarannya?",
    answer:
      "Harga promo unit rumah tipe 36 saat ini mulai dari Rp 166 Juta. Kami melayani pembelian secara Cash Keras, Cash Bertahap, maupun pengajuan KPR. Pembelian secara KPR didukung oleh perbankan dengan bunga dan cicilan bersubsidi yang ringan.",
  },
  {
    value: "faq-3",
    question: "Bagaimana Simulasi Angsuran KPR Gajah Mada Residence?",
    answer:
      "Cicilan perumahan kami sangat terjangkau untuk keluarga muda maupun pekerja. Simulasinya adalah: Tenor 5 tahun sekitar Rp 2,99 Juta/bulan, Tenor 10 tahun sekitar Rp 1,68 Juta/bulan, dan Tenor 15 tahun sekitar Rp 1,25 Juta/bulan.",
  },
  {
    value: "faq-4",
    question: "Apa Saja Spesifikasi Bahan Bangunan Unit Type 36?",
    answer:
      "Kami menggunakan material pilihan berkualitas tinggi: Dinding batu bata merah (diplester dan dicat Jotun/setara), rangka atap baja ringan dengan genteng pasir, lantai keramik 50x50 cm, plafon PVC modern, closet duduk bertabung, listrik PLN 1300 Watt, serta air bersih dari WTP/PAM Mandiri.",
  },
  {
    value: "faq-5",
    question: "Apakah Status Legalitas Tanah dan Bangunannya Sudah Sertifikat Hak Milik (SHM)?",
    answer:
      "Ya, status kepemilikan unit properti di Gajah Mada Residence Prabumulih sudah bersertifikat resmi berupa Sertifikat Hak Milik (SHM) yang akan dibaliknamakan langsung ke nama pembeli setelah transaksi selesai.",
  },
  {
    value: "faq-6",
    question: "Bagaimana Cara Menghubungi Marketing dan Melakukan Survei Lokasi?",
    answer:
      "Anda dapat menghubungi marketing resmi kami, Soleha Ulfasari, melalui WhatsApp di nomor 0851 8541 7702. Tim kami siap membantu memberikan simulasi angsuran terperinci, mengecek ketersediaan blok rumah, dan mendampingi Anda langsung untuk survei lokasi perumahan.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              FAQ / Tanya Jawab
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Punya pertanyaan mengenai Gajah Mada Residence Prabumulih? Temukan jawaban untuk
              pertanyaan umum seputar harga, angsuran KPR, legalitas, spesifikasi, dan survei lokasi di sini.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-primary font-semibold text-sm">
              <HelpCircle className="h-5 w-5" /> Hubungi kami jika pertanyaan Anda belum terjawab
            </div>
          </div>

          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="bg-card border border-border rounded-2xl px-6 py-1 shadow-[var(--shadow-card)] hover:border-primary/30 transition-all"
                >
                  <AccordionTrigger className="text-base font-bold text-foreground hover:text-primary hover:no-underline py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm pt-2 pb-5 border-t border-border/40 mt-1">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
