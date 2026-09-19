export const homeCopy = {
  hero: {
    headline: "From Low-Ticket Payments to Merchant Financial Visibility",
    subheadline:
      "High-frequency, low-ticket sales stay invisible to the financial system. MCBuse turns that activity into structured data.",
  },
  problem: {
    eyebrow: "The problem",
    headline: "The Low-Ticket Data Gap",
    description: "Low-ticket transactions stay invisible to the formal financial system a gap that hurts merchants and the institutions that might serve them.",
    cards: [
      { title: "Payment Friction", description: "POS systems are too expensive for low-value transactions." },
      { title: "Weak Records", description: "Cash-heavy operations are hard to track over time." },
      { title: "Payout Uncertainty", description: "Merchants can't see expected, delayed, or missing payouts." },
      { title: "Limited Visibility", description: "No simple view of daily totals or sales rhythm." },
      { title: "Low Readiness", description: "Unstructured activity is hard for banks to assess." },
    ],
  },
  solution: {
    eyebrow: "The solution",
    headline: "Payment Data Becomes Merchant Intelligence",
    description: "MCBuse turns QR/NFC payment events into structured records that power analytics, credit-readiness, and future institutional matching.",
    flow: ["Payment", "Analytics", "Credit", "Matching"],
    cta: { label: "Explore the 4 Systems", href: "/product#systems" },
  },
  valueSnapshot: {
    headline: "Built for Micro-Retail Operational Growth",
    items: [
      { label: "Payment Capture", description: "Zero-friction QR/NFC for micro-tickets (EUR 0.10–10.00)." },
      { label: "Business Analytics", description: "Daily sales rhythm & payout clarity." },
      { label: "Credit-Readiness", description: "Early readiness indicators from consistent data." },
      { label: "Institutional Matching", description: "Profiles prepared for partner review." },
    ],
    cta: { label: "See Full Product Breakdown", href: "/product" },
  },
  finalCta: {
    headline: "Help Build Financial Visibility for Micro-Merchants",
    ctas: [
      { label: "Join the Pilot", href: "https://merchant.mcbuse.com", variant: "primary" as const, external: true },
      { label: "Watch Demo", href: "/contact#sandbox", variant: "secondary" as const },
      { label: "Schedule Partner Call", href: "/contact#partner-form", variant: "secondary" as const },
      { label: "Download Pitch Deck", href: "#", variant: "ghost" as const, disabled: true },
    ],
  },
};
