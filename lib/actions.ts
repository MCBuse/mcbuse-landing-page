"use server";

import {
  merchantPilotSchema,
  partnerInquirySchema,
  waitlistSchema,
  type FormState,
} from "@/lib/validation";
import type { ZodError } from "zod";

function fieldErrorsFrom(error: ZodError): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!errors[key]) errors[key] = issue.message;
  }
  return errors;
}

// Stub submission handlers: validate, log, and return a result. This is the
// single swap-in point for a real backend/CRM once one is chosen.
async function logSubmission(formName: string, payload: unknown) {
  console.log(`[mcbuse:form-submission] ${formName}`, JSON.stringify(payload));
}

export async function submitMerchantPilot(_prev: FormState, formData: FormData): Promise<FormState> {
  const raw = {
    name: formData.get("name"),
    businessName: formData.get("businessName"),
    targetCity: formData.get("targetCity"),
    contactEmail: formData.get("contactEmail"),
    contactPhone: formData.get("contactPhone"),
    interestedInQrNfc: formData.get("interestedInQrNfc"),
    consent: formData.get("consent") === "on",
  };

  const result = merchantPilotSchema.safeParse(raw);
  if (!result.success) {
    return {
      status: "error",
      message: "Please fix the errors below.",
      fieldErrors: fieldErrorsFrom(result.error),
    };
  }

  await logSubmission("merchant-pilot", result.data);
  return {
    status: "success",
    message: "Thanks your pilot application was received. We'll follow up by email.",
  };
}

export async function submitPartnerInquiry(_prev: FormState, formData: FormData): Promise<FormState> {
  const raw = {
    name: formData.get("name"),
    companyName: formData.get("companyName"),
    role: formData.get("role"),
    corporateEmail: formData.get("corporateEmail"),
    partnerType: formData.get("partnerType"),
    message: formData.get("message"),
    consent: formData.get("consent") === "on",
  };

  const result = partnerInquirySchema.safeParse(raw);
  if (!result.success) {
    return {
      status: "error",
      message: "Please fix the errors below.",
      fieldErrors: fieldErrorsFrom(result.error),
    };
  }

  await logSubmission("partner-inquiry", result.data);
  return {
    status: "success",
    message:
      "Thanks your discovery call request was received. Calendly scheduling is coming soon; we'll reach out by email in the meantime.",
  };
}

export async function submitWaitlist(_prev: FormState, formData: FormData): Promise<FormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    role: formData.get("role"),
    consent: formData.get("consent") === "on",
  };

  const result = waitlistSchema.safeParse(raw);
  if (!result.success) {
    return {
      status: "error",
      message: "Please fix the errors below.",
      fieldErrors: fieldErrorsFrom(result.error),
    };
  }

  await logSubmission("waitlist", result.data);
  return {
    status: "success",
    message: "You're on the waitlist we'll be in touch.",
  };
}
