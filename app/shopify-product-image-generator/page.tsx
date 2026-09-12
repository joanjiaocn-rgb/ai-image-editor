import { SeoLanding } from "@/components/SeoLanding";

export const metadata = { title: "Shopify Product Image Generator | Luma Edit", description: "Create consistent Shopify product images from one upload with backgrounds, framing, and storefront-ready variations." };

export default function Page() {
  return <SeoLanding eyebrow="Shopify product image generator" title="Build a consistent Shopify product image set." description="Create a clean hero image, supporting lifestyle variations, and balanced crops from the product photos you already have." bullets={["Create a consistent look across your storefront", "Generate hero, lifestyle, and square social crops", "Download images ready for your product pages and campaigns"]} related={[{ href: "/remove-background-from-product-photo", label: "Remove a product background" }, { href: "/create-lifestyle-product-photos", label: "Create lifestyle product photos" }]} />;
}
