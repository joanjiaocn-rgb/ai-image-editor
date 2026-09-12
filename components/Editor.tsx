"use client";

import { ChangeEvent, DragEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeftRight, ChevronDown, CloudUpload, Download, Eraser, Expand,
  ImagePlus, Layers3, Lock, MoreHorizontal, Plus, Sparkles,
  WandSparkles, X, Zap
} from "lucide-react";

const demoImage = "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=88";

const presets = [
  { label: "Amazon main image", prompt: "Create a marketplace-ready main image: pure white background, product centered, natural clean edges, no extra props or text." },
  { label: "Etsy lifestyle scene", prompt: "Place this product in a bright, authentic lifestyle setting with a calm warm-neutral palette. Keep the product shape and label unchanged." },
  { label: "Shopify hero image", prompt: "Create a premium storefront product image with soft directional studio light, subtle shadow, and negative space around the product." },
  { label: "Social square", prompt: "Reframe this for a balanced 1:1 social post while keeping the product centered and its label easy to read." },
];

export function Editor() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState(demoImage);
  const [prompt, setPrompt] = useState("Give this product image a clean premium studio background with soft afternoon light.");
  const [isDragging, setIsDragging] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [compare, setCompare] = useState(58);
  const [credits, setCredits] = useState(5);
  const [upgradeOpen, setUpgradeOpen] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(() => setToast(""), 2600);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  function loadFile(file?: File) {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
      setGenerated(false);
      setToast("Image added to your canvas");
    };
    reader.readAsDataURL(file);
  }

  function onDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
    loadFile(event.dataTransfer.files[0]);
  }

  function onUpload(event: ChangeEvent<HTMLInputElement>) {
    loadFile(event.target.files?.[0]);
  }

  function generate() {
    if (credits < 1) {
      setUpgradeOpen(true);
      return;
    }
    setIsGenerating(true);
    window.setTimeout(() => {
      setIsGenerating(false);
      setGenerated(true);
      setCredits((value) => value - 1);
      setToast("Edit ready - 1 credit used");
    }, 1300);
  }

  function download() {
    const link = document.createElement("a");
    link.href = image;
    link.download = "luma-edit.png";
    link.click();
    setToast("Download started");
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Luma Edit home"><span className="brand-mark"><Sparkles size={17} /></span><span>Luma <b>Edit</b></span></a>
        <nav className="topnav" aria-label="Primary"><a href="#workspace">Editor</a><a href="#how-it-works">How it works</a><Link href="/pricing">Pricing</Link></nav>
        <div className="top-actions">
          <button className="credit-pill" onClick={() => setUpgradeOpen(true)} aria-label="View credits"><Zap size={14} fill="currentColor" /> {credits} credits</button>
          <button className="avatar" aria-label="Open account menu">JS</button>
        </div>
      </header>

      <section className="editor-wrap" id="workspace">
        <div className="workspace-head">
          <div><span className="eyebrow">Ecommerce product photo studio</span><h1>Create marketplace-ready product photos in seconds.</h1></div>
          <div className="workspace-meta"><span><Lock size={14} /> Private by default</span><span>JPG, PNG, WEBP</span></div>
        </div>

        <div className="workspace-grid">
          <aside className="toolrail" aria-label="Editing tools">
            <button className="tool active" title="Magic edit"><WandSparkles size={20} /><span>Magic</span></button>
            <button className="tool" title="Remove objects"><Eraser size={20} /><span>Remove</span></button>
            <button className="tool" title="Resize image"><Expand size={20} /><span>Resize</span></button>
            <button className="tool" title="Layers"><Layers3 size={20} /><span>Layers</span></button>
            <button className="tool" title="More editing tools"><MoreHorizontal size={20} /><span>More</span></button>
          </aside>

          <div className="canvas-column">
            <div className={`canvas ${isDragging ? "dragging" : ""}`} onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }} onDragLeave={() => setIsDragging(false)} onDrop={onDrop}>
              <img src={image} alt="Editable cosmetic product" className={`source-image ${generated ? "edited" : ""}`} />
              {generated && <div className="edit-overlay" style={{ clipPath: `inset(0 ${100 - compare}% 0 0)` }}><img src={image} alt="AI-edited preview" /></div>}
              {generated && <input className="comparison-range" type="range" min="0" max="100" value={compare} onChange={(e) => setCompare(Number(e.target.value))} aria-label="Compare original and edited image" />}
              {isDragging && <div className="drop-cover"><CloudUpload size={32} /><b>Drop image to replace</b></div>}
              {!generated && <div className="canvas-label">Original</div>}
              {generated && <div className="compare-labels"><span>Edited</span><span>Original</span></div>}
            </div>
            <div className="canvas-footer"><span>{generated ? "Compare your generated result" : "Your image stays private until you choose to export"}</span><button className="text-button" onClick={() => inputRef.current?.click()}><ImagePlus size={15} /> Replace image</button></div>
          </div>

          <aside className="prompt-panel">
            <div className="panel-title"><div><span className="eyebrow">Create a listing image</span><h2>What do you need to ship?</h2></div><button className="icon-button" onClick={() => setPrompt("")} aria-label="Clear prompt" title="Clear prompt"><X size={17} /></button></div>
            <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Try: an Etsy lifestyle image with morning light..." />
            <div className="prompt-hint"><Sparkles size={14} /> Tell us the platform and what the product must keep.</div>
            <div className="preset-list">{presets.map((preset) => <button key={preset.label} onClick={() => setPrompt(preset.prompt)}>{preset.label}<Plus size={14} /></button>)}</div>
            <button className="generate-button" disabled={isGenerating || !prompt.trim()} onClick={generate}>{isGenerating ? <><span className="spinner" /> Creating your edit...</> : <><WandSparkles size={18} /> Generate edit <span>1 credit</span></>}</button>
            <div className="panel-divider" />
            <div className="export-box"><div><span className="eyebrow">Ready to share</span><strong>Export your image</strong><small>PNG, up to 2048 px</small></div><button className="icon-button export" onClick={download} aria-label="Download image" title="Download image"><Download size={18} /></button></div>
          </aside>
        </div>

        <input ref={inputRef} onChange={onUpload} type="file" accept="image/png,image/jpeg,image/webp" hidden />
      </section>

      <section className="trust-row" id="how-it-works"><div><span>01</span><strong>Upload one product photo</strong><p>Start with a phone photo, supplier image, or an existing listing image.</p></div><div><span>02</span><strong>Pick the job to finish</strong><p>Remove a background, create a lifestyle scene, or prepare a storefront hero image.</p></div><div><span>03</span><strong>Export and publish</strong><p>Get a clean, consistent image for Etsy, Shopify, Amazon, or your social feed.</p></div></section>

      <section className="use-case-section" aria-labelledby="use-case-title"><div><span className="eyebrow">Start with a specific task</span><h2 id="use-case-title">Less editing. More listing-ready images.</h2><p>Choose a workflow built around the image you need to publish today.</p></div><div className="use-case-grid"><Link href="/remove-background-from-product-photo" className="use-case-card"><strong>Remove a product background</strong><span>Clean edges and a studio-ready background in one click →</span></Link><Link href="/create-lifestyle-product-photos" className="use-case-card"><strong>Create lifestyle product photos</strong><span>Place your product in a believable scene without reshooting →</span></Link><Link href="/shopify-product-image-generator" className="use-case-card"><strong>Prepare Shopify product images</strong><span>Build a consistent storefront image set from one source photo →</span></Link></div></section>

      <section className="pricing" id="pricing"><div className="pricing-copy"><span className="eyebrow">Straightforward credits</span><h2>Pay for work, not another unused seat.</h2><p>Each generation uses one credit. Unused credits roll over while your plan is active.</p><Link href="/pricing" className="pricing-link">Compare all plans <ChevronDown size={16} /></Link></div><div className="pricing-card"><div className="price-top"><div><span className="eyebrow">Creator</span><h3>$19 <small>/ month</small></h3></div><span className="best-value">Best value</span></div><ul><li>150 edit credits each month</li><li>High-resolution exports</li><li>Commercial use included</li></ul><button onClick={() => { setCredits(155); setUpgradeOpen(false); setToast("Creator plan activated in demo"); }}>Start Creator plan <ChevronDown size={16} /></button></div></section>

      {toast && <div className="toast" role="status">{toast}</div>}
      {upgradeOpen && <div className="modal-backdrop" role="presentation"><section className="upgrade-modal" role="dialog" aria-modal="true" aria-labelledby="upgrade-title"><button className="modal-close" onClick={() => setUpgradeOpen(false)} aria-label="Close upgrade dialog"><X size={18} /></button><span className="eyebrow">More room to create</span><h2 id="upgrade-title">Keep your edits moving.</h2><p>Get 150 monthly credits, high-resolution exports, and commercial use.</p><div className="modal-price"><strong>$19</strong><span>USD / month</span></div><button className="modal-cta" onClick={() => { setCredits(155); setUpgradeOpen(false); setToast("Creator plan activated in demo"); }}>Upgrade to Creator <ArrowLeftRight size={17} /></button><small>Demo checkout. Connect Stripe Checkout before launch.</small></section></div>}
    </main>
  );
}
