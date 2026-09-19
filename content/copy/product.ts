export const productCopy = {
  hero: {
    headline: "The MCBuse Data Architecture",
    subheadline: "Four core modules that turn high-frequency micro-transactions into structured data.",
    cta: { label: "Request Sandbox Access", href: "https://merchant.mcbuse.com" },
  },
  systems: [
    {
      id: "system-payment-capture",
      name: "Payment Capture",
      bullet: "QR/NFC capture for tickets between EUR 0.10–10.",
      safeLineKey: "system-payment-capture" as const,
    },
    {
      id: "system-business-analytics",
      name: "Business Analytics",
      bullet: "Dashboards tracking daily sales rhythm.",
      safeLineKey: "system-business-analytics" as const,
    },
    {
      id: "system-credit-readiness",
      name: "Credit-Readiness",
      bullet: "Early risk indicators from consistent data.",
      warning: "Not a loan or credit score.",
      safeLineKey: "system-credit-readiness" as const,
    },
    {
      id: "system-institutional-matching",
      name: "Institutional Matching",
      bullet: "Merchant profiles prepared for bank, fintech, and PSP review.",
      safeLineKey: "system-institutional-matching" as const,
    },
  ],
  flowSteps: [
    { title: "Onboarding", description: "Profile + data consent." },
    { title: "Event Capture", description: "QR/NFC payment event captured." },
    { title: "Structuring", description: "Event becomes a transaction record." },
    { title: "Analytics", description: "Records become business insights." },
    { title: "Payout Visibility", description: "Payouts tracked where available." },
    { title: "Credit Readiness", description: "Early readiness indicators generated." },
    { title: "Matching Prep", description: "Profile readied for institution review." },
  ],
  flowCta: { label: "View Dashboard Spec", href: "/contact#sandbox" },
};
