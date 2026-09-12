import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lumaedit.app";
  return ["", "/pricing", "/privacy", "/terms", "/remove-background-from-product-photo", "/create-lifestyle-product-photos", "/shopify-product-image-generator"].map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));
}
