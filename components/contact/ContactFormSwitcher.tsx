"use client";

import { useEffect, useState } from "react";
import { MerchantPilotForm } from "@/components/contact/MerchantPilotForm";
import { PartnerInquiryForm } from "@/components/contact/PartnerInquiryForm";
import { WaitlistForm } from "@/components/contact/WaitlistForm";

// Anchor ids match the CTAs used across the site (e.g. "/contact#merchant-form",
// "/contact#partner-form") so existing links keep landing on the right form.
const FORMS = [
  {
    id: "merchant-form",
    label: "I'm a Merchant",
    hint: "Kiosks, cafés, bakeries & food trucks — apply for the pilot.",
    Component: MerchantPilotForm,
  },
  {
    id: "partner-form",
    label: "I'm a Bank / Fintech / Partner",
    hint: "Banks, fintechs, PSPs & investors — request a discovery call.",
    Component: PartnerInquiryForm,
  },
  {
    id: "waitlist-form",
    label: "Just Curious / Other",
    hint: "Not sure yet? Join the general waitlist.",
    Component: WaitlistForm,
  },
] as const;

type FormId = (typeof FORMS)[number]["id"];

const DEFAULT_FORM_ID: FormId = "waitlist-form";

function formIdFromHash(hash: string): FormId | null {
  const id = hash.replace(/^#/, "");
  return FORMS.some((form) => form.id === id) ? (id as FormId) : null;
}

export function ContactFormSwitcher() {
  const [activeId, setActiveId] = useState<FormId>(DEFAULT_FORM_ID);

  // The URL hash is never sent to the server, so the correct form can only
  // be selected once we're on the client — this syncs it on load and if a
  // link to a different #form-id anchor is clicked while already here.
  useEffect(() => {
    const applyHash = () => {
      const match = formIdFromHash(window.location.hash);
      if (match) setActiveId(match);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  function selectForm(id: FormId) {
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
  }

  const active = FORMS.find((form) => form.id === activeId) ?? FORMS[FORMS.length - 1];

  return (
    <div>
      <p className="text-sm text-ink-muted">Choose the option that best describes you to see just that form.</p>

      <div role="tablist" aria-label="Which form would you like to fill out?" className="mt-4 flex flex-wrap gap-2">
        {FORMS.map((form) => {
          const isActive = form.id === activeId;
          return (
            <button
              key={form.id}
              type="button"
              role="tab"
              id={`${form.id}-tab`}
              aria-selected={isActive}
              aria-controls={`${form.id}-panel`}
              onClick={() => selectForm(form.id)}
              className={`inline-flex min-h-11 items-center rounded-xl border px-4 text-sm font-medium transition-colors ${
                isActive
                  ? "border-brand bg-brand/10 text-brand-ink"
                  : "border-hairline bg-surface-2 text-ink-muted hover:border-brand/50 hover:text-ink"
              }`}
            >
              {form.label}
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-sm text-ink-muted">{active.hint}</p>

      <div
        role="tabpanel"
        id={`${active.id}-panel`}
        aria-labelledby={`${active.id}-tab`}
        tabIndex={-1}
        className="mt-6 max-w-xl rounded-xl border border-hairline bg-surface p-6"
      >
        <active.Component />
      </div>
    </div>
  );
}
