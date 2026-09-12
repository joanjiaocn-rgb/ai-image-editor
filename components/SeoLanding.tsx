import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";

type SeoLandingProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  related: { href: string; label: string }[];
};

export function SeoLanding({ eyebrow, title, description, bullets, related }: SeoLandingProps) {
  return (
    <main className="marketing-page seo-landing">
      <header className="marketing-header"><Link href="/" className="brand"><span className="brand-mark"><Sparkles size={17} /></span><span>Luma <b>Edit</b></span></Link><Link href="/#workspace" className="back-link">Open editor <ArrowRight size={15} /></Link></header>
      <section className="seo-hero"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p><Link href="/#workspace" className="plan-cta seo-cta">Try it with your product photo <ArrowRight size={16} /></Link></section>
      <section className="seo-benefits"><div><span className="eyebrow">Built for busy sellers</span><h2>Finish the image task, then get back to your store.</h2></div><ul>{bullets.map((bullet) => <li key={bullet}><Check size={16} />{bullet}</li>)}</ul></section>
      <section className="seo-related"><span className="eyebrow">More workflows</span><div>{related.map((item) => <Link key={item.href} href={item.href}>{item.label}<ArrowRight size={15} /></Link>)}</div></section>
    </main>
  );
}
