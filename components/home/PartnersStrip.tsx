import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { partnerLogos } from "@/content/copy/partnersLogos";

export function PartnersStrip() {
  return (
    <section className="border-t border-hairline bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow="Partners & ecosystem" title="Who we're building alongside" />
        <div className="mt-10 flex flex-wrap items-center gap-6">
          {partnerLogos.map((partner) => (
            <div
              key={partner.name}
              className="flex h-24 w-56 items-center justify-center rounded-xl border border-hairline bg-white p-4"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                loading="eager"
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
