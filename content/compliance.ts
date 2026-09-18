/**
 * Single source of truth for every "Safe Line" / boundary statement in the
 * blueprint. Edit here, not in components this is what keeps the
 * MCBuse-vs-licensed-partner accountability boundary consistent site-wide.
 */
export const complianceCopy = {
  "home-hero": "MVP, pilot-preparation stage. Payment and financial services are handled by licensed partners.",
  "system-payment-capture": "Payment execution and settlement remain with licensed partners.",
  "system-business-analytics": "Public dashboard visuals use sample or anonymized data only.",
  "system-credit-readiness": "Readiness indicators only not a regulated credit score.",
  "system-institutional-matching": "Matching means preparation, not a guaranteed connection or financial product.",
  "sandbox-status": "Non-regulated, purely technical simulation.",
  "footer-default": "Merchant-facing software and data layer. Payment execution, settlement, safeguarding, KYC/KYB, AML, lending, and underwriting remain with licensed partners.",
  "footer-merchants": "No loans or final credit decisions only early readiness indicators to help merchants become bank-ready.",
  "footer-partners": "MCBuse doesn't replace regulated financial infrastructure. Financial products, approvals, and underwriting remain with licensed partners.",
  "footer-roadmap": "Reflects current MVP scope and direction. Timelines are indicative and may change.",
  "footer-contact": "The sandbox is for testing and demonstration not a production payment or lending product.",
} as const;

export type ComplianceKey = keyof typeof complianceCopy;

export const responsibilityBoundary = {
  infrastructure: {
    title: "Infrastructure Layer",
    subtitle: "MCBuse Accountabilities",
    items: [
      "Merchant-facing software deployment",
      "Data capture & structure pipelines",
      "Pre-qualified visibility profiles",
    ],
  },
  regulated: {
    title: "Regulated Layer",
    subtitle: "Partner Accountabilities",
    items: [
      "Regulated payment execution & settlement mechanics",
      "Safeguarding, KYC/KYB, and AML compliance ownership",
      "Credit underwriting & final lending distribution decisions",
    ],
  },
  apiFieldsNote:
    "Strict privacy restriction: surfaces Level 1–2 info only per the Global Data Classification Framework; Level 3–5 fields remain internal-only.",
};
