import { MessageCircle } from "lucide-react";

import { defaultReservasiMessage, waLink } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink(defaultReservasiMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp Gajah Mada Residence"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-20px_rgba(37,211,102,0.85)] transition-transform duration-300 hover:scale-[1.03] hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
        <MessageCircle className="h-5 w-5" />
      </span>
      <span className="hidden sm:inline">Chat WhatsApp</span>
    </a>
  );
}
