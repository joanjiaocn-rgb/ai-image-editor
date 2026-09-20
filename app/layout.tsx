import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "AI Product Photo Generator for Etsy & Shopify | Luma Edit",
  description: "Create marketplace-ready product photos from one upload. Remove backgrounds, create lifestyle scenes, and resize images for Etsy, Shopify, and online stores.",
  keywords: [
    "AI product photo generator",
    "AI product photography",
    "product photo background remover",
    "Etsy product photo generator",
    "Shopify product image generator",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
