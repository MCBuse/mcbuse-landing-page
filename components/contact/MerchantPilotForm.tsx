"use client";

import { merchantPilotSchema } from "@/lib/validation";
import { useLocalStorageForm } from "@/lib/useLocalStorageForm";
import { TextField, SelectField, RadioGroup, ConsentCheckbox } from "@/components/contact/fields";
import { Button } from "@/components/ui/Button";

export function MerchantPilotForm() {
  const { formRef, state, errors, pending, handleSubmit } = useLocalStorageForm({
    formName: "merchant-pilot",
    schema: merchantPilotSchema,
    successMessage: "Thanks — your pilot application was received. We'll follow up by email.",
    parseFormData: (formData) => ({
      name: formData.get("name"),
      businessName: formData.get("businessName"),
      targetCity: formData.get("targetCity"),
      contactEmail: formData.get("contactEmail"),
      contactPhone: formData.get("contactPhone"),
      interestedInQrNfc: formData.get("interestedInQrNfc"),
      consent: formData.get("consent") === "on",
    }),
  });

  return (
    <form ref={formRef} onSubmit={handleSubmit} id="merchant-form" className="scroll-mt-24 space-y-4">
      <h3 className="font-display font-semibold text-xl text-ink">Merchant Pilot Application</h3>
      <TextField name="name" label="Name" error={errors.name} />
      <TextField name="businessName" label="Business Name" error={errors.businessName} />
      <SelectField
        name="targetCity"
        label="Target City"
        options={["Berlin", "Munich"]}
        error={errors.targetCity}
      />
      <TextField name="contactEmail" label="Contact Email" type="email" error={errors.contactEmail} />
      <TextField name="contactPhone" label="Contact Phone" type="tel" error={errors.contactPhone} />
      <RadioGroup
        name="interestedInQrNfc"
        label="Interested in QR/NFC?"
        options={["Yes", "No"]}
        error={errors.interestedInQrNfc}
      />
      <ConsentCheckbox name="consent" label="Consent to pilot data processing" error={errors.consent} />

      <Button type="submit" variant="primary" disabled={pending} aria-live="polite">
        {pending ? "Submitting…" : "Submit Pilot Application"}
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
