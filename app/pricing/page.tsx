import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { plans } from "@/lib/site";

export const metadata = { title: "Pricing | Luma Edit", description: "Simple monthly product-image credits for Etsy, Shopify, and Amazon sellers." };

export default function PricingPage() {
  return (
    <main className="marketing-page">
      <header className="marketing-header"><Link href="/" className="brand"><span className="brand-mark"><Sparkles size={17} /></span><span>Luma <b>Edit</b></span></Link><Link href="/#workspace" className="back-link">Open editor <ArrowRight size={15} /></Link></header>
      <section className="pricing-hero"><span className="eyebrow">Pricing</span><h1>Credits for product images that ship.</h1><p>Every AI product-image edit costs one credit. Creator plans include commercial use and unused monthly credits roll over while your subscription remains active.</p></section>
      <section className="plan-grid" aria-label="Luma Edit plans">
        {plans.map((plan) => <article className={`plan-card ${plan.featured ? "featured" : ""}`} key={plan.name}>
          {plan.featured && <span className="plan-badge">Most popular</span>}
          <span className="eyebrow">{plan.name}</span><h2>{plan.price}<small>{plan.cadence}</small></h2><p>{plan.detail}</p>
          <strong>{plan.credits}</strong>
          <ul><li><Check size={15} /> Natural-language image edits</li><li><Check size={15} /> PNG and JPG exports</li><li><Check size={15} /> Commercial use</li></ul>
          <Link href="/#pricing" className="plan-cta">Choose {plan.name} <ArrowRight size={16} /></Link>
        </article>)}
      </section>
      <p className="pricing-note">Billed in USD. Taxes may apply based on your billing address. Subscriptions and credits are managed through Stripe Checkout at launch.</p>
    </main>
  );
}
