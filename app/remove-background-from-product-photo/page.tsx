import { SeoLanding } from "@/components/SeoLanding";

export const metadata = { title: "Remove Background from Product Photo | Luma Edit", description: "Remove distracting backgrounds from product photos and create clean listing-ready images for your online store.", alternates: { canonical: "/remove-background-from-product-photo" } };

export default function Page() {
  return <SeoLanding eyebrow="Product photo background remover" title="Remove the background from any product photo." description="Turn a phone photo, supplier image, or messy tabletop shot into a clean product image with a polished background and natural edges." bullets={["Keep product shape, label, and colors intact", "Create clean white, neutral, or transparent backgrounds", "Export a ready-to-use image for your store or marketplace"]} related={[{ href: "/create-lifestyle-product-photos", label: "Create lifestyle product photos" }, { href: "/shopify-product-image-generator", label: "Prepare Shopify product images" }]} />;
}
