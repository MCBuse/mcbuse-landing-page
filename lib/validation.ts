import { z } from "zod";

export const merchantPilotSchema = z.object({
  name: z.string().trim().min(1, "Enter your name."),
  businessName: z.string().trim().min(1, "Enter your business name."),
  targetCity: z.enum(["Berlin", "Munich"], "Choose your target city."),
  contactEmail: z.email("Enter a valid email address."),
  contactPhone: z.string().trim().min(1, "Enter a contact phone number."),
  interestedInQrNfc: z.enum(["Yes", "No"], "Let us know if you're interested in QR/NFC."),
  consent: z.literal(true, "Consent to pilot data processing is required to apply."),
});

export const partnerInquirySchema = z.object({
  name: z.string().trim().min(1, "Enter your name."),
  companyName: z.string().trim().min(1, "Enter your company or institution name."),
  role: z.string().trim().min(1, "Enter your corporate role or title."),
  corporateEmail: z.email("Enter a valid corporate email address."),
  partnerType: z.enum(["Bank", "Fintech", "PSP", "Investor"], "Choose a partner type."),
  message: z.string().trim().min(1, "Tell us about your core integration goals."),
  consent: z.literal(true, "Consent to B2B corporate data handling is required to continue."),
});

export const waitlistSchema = z.object({
  name: z.string().trim().min(1, "Enter your name."),
  email: z.email("Enter a valid email address."),
  role: z.enum(
    ["Merchant", "Partner", "Investor", "Developer", "Other"],
    "Choose the option that best describes you."
  ),
  consent: z.literal(true, "Consent to updates & subscription is required to join the waitlist."),
});

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
};

export const initialFormState: FormState = { status: "idle" };
