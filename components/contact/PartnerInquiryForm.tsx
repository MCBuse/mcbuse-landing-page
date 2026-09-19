"use client";

import { partnerInquirySchema } from "@/lib/validation";
import { useLocalStorageForm } from "@/lib/useLocalStorageForm";
import { TextField, SelectField, TextAreaField, ConsentCheckbox } from "@/components/contact/fields";
import { Button } from "@/components/ui/Button";

export function PartnerInquiryForm() {
  const { formRef, state, errors, pending, handleSubmit } = useLocalStorageForm({
    formName: "partner-inquiry",
    schema: partnerInquirySchema,
    successMessage:
      "Thanks — your discovery call request was received. Calendly scheduling is coming soon; we'll reach out by email in the meantime.",
    parseFormData: (formData) => ({
      name: formData.get("name"),
      companyName: formData.get("companyName"),
      role: formData.get("role"),
      corporateEmail: formData.get("corporateEmail"),
      partnerType: formData.get("partnerType"),
      message: formData.get("message"),
      consent: formData.get("consent") === "on",
    }),
  });

  return (
    <form ref={formRef} onSubmit={handleSubmit} id="partner-form" className="scroll-mt-24 space-y-4">
      <h3 className="font-display font-semibold text-xl text-ink">Partner Inquiry & Discovery</h3>
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
