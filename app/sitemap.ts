import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/pricing", "/privacy", "/terms", "/remove-background-from-product-photo", "/create-lifestyle-product-photos", "/shopify-product-image-generator"].map((path) => ({ url: `${site.url}${path}`, lastModified: new Date() }));
}
