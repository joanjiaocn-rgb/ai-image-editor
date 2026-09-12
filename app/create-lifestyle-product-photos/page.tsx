import { SeoLanding } from "@/components/SeoLanding";

export const metadata = { title: "Create Lifestyle Product Photos with AI | Luma Edit", description: "Create believable lifestyle product photos from one source image for Etsy, Shopify, and social commerce." };

export default function Page() {
  return <SeoLanding eyebrow="AI product photography" title="Create lifestyle product photos without a reshoot." description="Place your product in a warm, believable setting while keeping its shape, label, and key details consistent." bullets={["Generate a scene that matches your product and audience", "Keep the original product recognizable and on-brand", "Make multiple listing and social variations from one photo"]} related={[{ href: "/remove-background-from-product-photo", label: "Remove a product background" }, { href: "/shopify-product-image-generator", label: "Prepare Shopify product images" }]} />;
}
