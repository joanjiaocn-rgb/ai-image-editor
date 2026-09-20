export const site = {
  name: "Luma Edit",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://imageeditor.website",
  supportEmail: "support@imageeditor.website",
};

export const plans = [
  {
    name: "Starter",
    price: "$9",
    cadence: "/ month",
    credits: "40 credits",
    detail: "For occasional product and social edits.",
  },
  {
    name: "Creator",
    price: "$19",
    cadence: "/ month",
    credits: "150 credits",
    detail: "For weekly product, campaign, and social work.",
    featured: true,
  },
  {
    name: "Studio",
    price: "$39",
    cadence: "/ month",
    credits: "400 credits",
    detail: "For small teams with a steady publishing pace.",
  },
];
