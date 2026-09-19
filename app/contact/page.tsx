import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactFormSwitcher } from "@/components/contact/ContactFormSwitcher";
import { SandboxPanel } from "@/components/contact/SandboxPanel";
import { ComplianceFooter } from "@/components/layout/ComplianceFooter";
import { Glow } from "@/components/ui/Glow";

export const metadata: Metadata = {
  title: "Contact & Portal Hub MCBuse",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-hairline">
        <Glow />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <SectionHeading eyebrow="Contact" title="Tell us where you fit" />
          <div className="mt-10">
            <ContactFormSwitcher />
          </div>
        </div>
      </section>

      <section className="border-t border-hairline bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SandboxPanel />
        </div>
      </section>

      <ComplianceFooter boundaryKey="footer-contact" />
    </>
  );
}
