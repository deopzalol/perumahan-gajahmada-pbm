import { useState } from "react";
import { Home, Menu, X, MessageCircle } from "lucide-react";
import { waLink, defaultReservasiMessage } from "@/lib/whatsapp";

const links = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tipe Rumah", href: "#tipe" },
  { label: "Fasilitas", href: "#fasilitas" },
  { label: "Lokasi", href: "#lokasi" },
  { label: "Kontak", href: "#kontak" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/60">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#beranda" className="flex items-center gap-2 font-bold text-lg text-primary-deep">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
            <Home className="h-5 w-5" />
          </span>
          Gajah Mada
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
        <a
          href={waLink(defaultReservasiMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:opacity-90 transition"
        >
          <MessageCircle className="h-4 w-4" /> Reservasi WA
        </a>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="flex flex-col p-6 gap-4 text-sm font-medium">
            {links.map((l) => (
              <li key={l.href}><a href={l.href} onClick={() => setOpen(false)}>{l.label}</a></li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
