import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/site";

export function FAQ() {
  return (
    <section id="faq" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">FAQ</span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Informasi penting seputar harga, legalitas, lokasi, cicilan, dan cara reservasi rumah di
            Gajah Mada Residence.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index}`}
                className="border-border/70"
              >
                <AccordionTrigger className="py-5 text-base font-semibold text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-muted-foreground md:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
