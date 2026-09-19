"use client";

import { waitlistSchema } from "@/lib/validation";
import { useLocalStorageForm } from "@/lib/useLocalStorageForm";
import { TextField, SelectField, ConsentCheckbox } from "@/components/contact/fields";
import { Button } from "@/components/ui/Button";

export function WaitlistForm() {
  const { formRef, state, errors, pending, handleSubmit } = useLocalStorageForm({
    formName: "waitlist",
    schema: waitlistSchema,
    successMessage: "You're on the waitlist — we'll be in touch.",
    parseFormData: (formData) => ({
      name: formData.get("name"),
      email: formData.get("email"),
      role: formData.get("role"),
      consent: formData.get("consent") === "on",
    }),
  });

  return (
    <form ref={formRef} onSubmit={handleSubmit} id="waitlist-form" className="scroll-mt-24 space-y-4">
      <h3 className="font-display text-xl text-ink">General Waitlist</h3>
      <TextField name="name" label="Name" error={errors.name} />
      <TextField name="email" label="Email" type="email" error={errors.email} />
      <SelectField
        name="role"
        label="I am a:"
        options={["Merchant", "Partner", "Investor", "Developer", "Other"]}
        error={errors.role}
      />
      <ConsentCheckbox name="consent" label="Consent to updates & updates subscription" error={errors.consent} />

      <Button type="submit" variant="primary" disabled={pending} aria-live="polite">
        {pending ? "Submitting…" : "Join Waitlist"}
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
