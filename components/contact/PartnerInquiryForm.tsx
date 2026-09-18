"use client";

import { useActionState } from "react";
import { submitPartnerInquiry } from "@/lib/actions";
import { initialFormState } from "@/lib/validation";
import { TextField, SelectField, TextAreaField, ConsentCheckbox } from "@/components/contact/fields";
import { Button } from "@/components/ui/Button";

export function PartnerInquiryForm() {
  const [state, action, pending] = useActionState(submitPartnerInquiry, initialFormState);
  const errors = state.fieldErrors ?? {};

  return (
    <form action={action} id="partner-form" className="scroll-mt-24 space-y-4">
      <h3 className="font-display text-xl text-ink">Partner Inquiry & Discovery</h3>
      <TextField name="name" label="Name" error={errors.name} />
      <TextField name="companyName" label="Company / Financial Institution Name" error={errors.companyName} />
      <TextField name="role" label="Corporate Role / Title" error={errors.role} />
      <TextField name="corporateEmail" label="Corporate Email" type="email" error={errors.corporateEmail} />
      <SelectField
        name="partnerType"
        label="Partner Type"
        options={["Bank", "Fintech", "PSP", "Investor"]}
        error={errors.partnerType}
      />
      <TextAreaField name="message" label="Core Integration Goals / Message" error={errors.message} />
      <ConsentCheckbox name="consent" label="Consent to B2B corporate data handling" error={errors.consent} />

      <Button type="submit" variant="primary" disabled={pending} aria-live="polite">
        {pending ? "Submitting…" : "Request Discovery Call"}
      </Button>

      <div role="status" aria-live="polite">
        {state.status === "success" && (
          <p className="border-l-2 border-brand pl-3 text-sm text-ink">{state.message}</p>
        )}
        {state.status === "error" && (
          <p className="border-l-2 border-danger pl-3 text-sm text-ink">{state.message}</p>
        )}
      </div>
    </form>
  );
}
