import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

export const metadata = { title: "Privacy | Luma Edit", description: "How Luma Edit handles uploaded images and account data." };

export default function PrivacyPage() {
  return <main className="legal-page"><header className="marketing-header"><Link href="/" className="brand"><span className="brand-mark"><Sparkles size={17} /></span><span>Luma <b>Edit</b></span></Link><Link href="/" className="back-link">Back to editor <ArrowRight size={15} /></Link></header><article className="legal-copy"><span className="eyebrow">Privacy</span><h1>Privacy built around the image.</h1><p className="legal-date">Last updated: September 12, 2026</p><h2>What we process</h2><p>We process the image you upload and the edit instruction you provide to create your requested result. We also process account, payment, device, and usage data needed to operate the service, prevent abuse, and provide support.</p><h2>How images are handled</h2><p>Images are sent to our selected image-processing provider only to create the requested edit. We do not use your uploads to train Luma Edit models. Storage retention, deletion, and provider settings must be finalized before production launch and will be stated here before public availability.</p><h2>Payments</h2><p>Payments are handled by Stripe. Luma Edit does not store full payment card details.</p><h2>Your choices</h2><p>You may request access to, correction of, or deletion of personal data where applicable. Contact {site.supportEmail} with your request. This draft must be reviewed by qualified counsel before launch.</p></article></main>;
}
