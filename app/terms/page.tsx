import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

export const metadata = { title: "Terms | Luma Edit", description: "Terms for using Luma Edit image editing credits and exports." };

export default function TermsPage() {
  return <main className="legal-page"><header className="marketing-header"><Link href="/" className="brand"><span className="brand-mark"><Sparkles size={17} /></span><span>Luma <b>Edit</b></span></Link><Link href="/" className="back-link">Back to editor <ArrowRight size={15} /></Link></header><article className="legal-copy"><span className="eyebrow">Terms</span><h1>Terms of use.</h1><p className="legal-date">Last updated: September 12, 2026</p><h2>Your content</h2><p>You retain rights in images you upload. You represent that you have the rights, permissions, and lawful basis required to upload and edit them.</p><h2>Acceptable use</h2><p>You may not use Luma Edit to create unlawful, deceptive, exploitative, or rights-infringing content. You may not attempt to disrupt the service or evade credit limits.</p><h2>Credits and subscriptions</h2><p>Credits are consumed when an edit request is submitted to an image-processing provider. Subscription prices, renewal terms, refund eligibility, and credit expiry must be displayed in Stripe Checkout before payment.</p><h2>Service availability</h2><p>AI image output can be imperfect and may not follow every instruction. Review outputs before use. This draft must be reviewed by qualified counsel before launch. Contact {site.supportEmail} for support.</p></article></main>;
}
