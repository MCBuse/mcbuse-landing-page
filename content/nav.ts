export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Product & Systems", href: "/product" },
  { label: "For Merchants", href: "/merchants" },
  { label: "For Partners", href: "/partners" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const headerCtas = {
  joinPilot: { label: "Join the Pilot", href: "/contact#merchant-form" },
  watchDemo: { label: "Watch Demo", href: "/contact#sandbox" },
};

export const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "Team", href: "/team" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Product & Systems", href: "/product" },
      { label: "Sandbox Demo", href: "/contact#sandbox" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "Twitter", href: "#" },
    ],
  },
];
