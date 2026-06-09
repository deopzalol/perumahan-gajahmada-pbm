import { useMemo, useState } from "react";
import { Home } from "lucide-react";

import { cn } from "@/lib/utils";
import { SITE_SHORT_NAME } from "@/lib/site";

const LOGO_CANDIDATES = [
  "/logo-gajah-mada.png",
  "/logo-gajah-mada.jpg",
  "/logo-gajah-mada.jpeg",
  "/logo-gajah-mada.webp",
  "/logo-gajah-mada.svg",
];

export function BrandLogo({ className }: { className?: string }) {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const logoSrc = useMemo(() => LOGO_CANDIDATES[candidateIndex], [candidateIndex]);
  const hasLogo = candidateIndex < LOGO_CANDIDATES.length;

  return (
    <span className={cn("flex items-center gap-3", className)}>
      {hasLogo ? (
        <img
          src={logoSrc}
          alt={`${SITE_SHORT_NAME} logo`}
          className="h-12 w-12 rounded-full object-cover shadow-[var(--shadow-card)]"
          loading="eager"
          onError={() => setCandidateIndex((current) => current + 1)}
        />
      ) : (
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
          <Home className="h-5 w-5" />
        </span>
      )}

      <span className="flex flex-col leading-none">
        <span className="text-base font-bold text-primary-deep">Gajah Mada</span>
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/70">
          Residence
        </span>
      </span>
    </span>
  );
}
