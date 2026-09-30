"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/cart";
import {
  ShoppingBag,
  ChevronRight,
  FlaskConical,
  Shield,
  Microscope,
  Beaker,
  Atom,
  ArrowRight,
  Droplets,
} from "lucide-react";

/* ─────────── molecule decoration ─────────── */
function MoleculeGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.035]">
      <div className="absolute -top-20 -right-10 rotate-12 text-[180px] font-mono font-bold leading-none text-primary select-none">
        C₈H₁₀N₂O₂
      </div>
      <div className="absolute bottom-40 -left-16 -rotate-6 text-[140px] font-mono font-bold leading-none text-primary select-none">
        ZnC₄H₆O₄
      </div>
      <svg className="absolute top-1/3 right-8 h-40 w-40" viewBox="0 0 100 100" fill="none">
        <circle cx="20" cy="50" r="6" className="fill-primary/20" />
        <circle cx="50" cy="20" r="6" className="fill-primary/20" />
        <circle cx="80" cy="50" r="6" className="fill-primary/20" />
        <circle cx="50" cy="80" r="6" className="fill-primary/20" />
        <circle cx="50" cy="50" r="8" className="fill-primary/10" />
        <line x1="20" y1="50" x2="50" y2="20" className="stroke-primary/15 stroke-1" />
        <line x1="50" y1="20" x2="80" y2="50" className="stroke-primary/15 stroke-1" />
        <line x1="80" y1="50" x2="50" y2="80" className="stroke-primary/15 stroke-1" />
        <line x1="50" y1="80" x2="20" y2="50" className="stroke-primary/15 stroke-1" />
      </svg>
    </div>
  );
}

/* ─────────── INCI ingredient chip ─────────── */
function InciChip({ name, note }: { name: string; note: string }) {
  return (
    <div className="group flex items-start gap-3 rounded-xl border border-border/30 bg-white/60 p-3.5 transition-all hover:border-primary/25 hover:bg-primary/[0.02]">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/[0.04]">
        <Droplets className="h-2.5 w-2.5 text-primary/60" />
      </span>
      <div>
        <span className="text-[13px] font-semibold text-foreground">{name}</span>
        <p className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">{note}</p>
      </div>
    </div>
  );
}

/* ─────────── clinical stat ─────────── */
function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="clinical-card rounded-xl p-5 text-center">
      <p className="font-heading text-2xl font-semibold text-primary">{value}</p>
      <p className="mt-1 text-[11px] leading-tight text-muted-foreground">{label}</p>
    </div>
  );
}

/* ─────────── Categories ─────────── */
const categories = ["All", "Serums", "Moisturisers", "Cleansers", "Sun Protection"];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addItem, setIsOpen } = useCart();

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 via-background to-background px-6 pt-28 pb-16 lg:px-8 lg:pt-40 lg:pb-24">
        <MoleculeGrid />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary">
                Clinically Validated · n≥30 per trial
              </span>
            </div>

            <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
              Skincare
              <br />
              <span className="text-primary">stripped to evidence.</span>
            </h1>

            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground lg:text-base">
              Every ingredient we formulate is chosen for peer-reviewed clinical
              data — not marketing trends. No fragrance, no filler, no
              sub-therapeutic concentrations. Just the minimum effective dose of
              what works, published.
            </p>

            {/* INCI preview */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["Niacinamide 5%", "Retinaldehyde 0.1%", "L-Ascorbic Acid 15%", "Ectoin 1.5%", "Zn-PCA"].map(
                (inci) => (
                  <span
                    key={inci}
                    className="inci-badge"
                  >
                    {inci}
                  </span>
                )
              )}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full shadow-sm">
                <Link href="#products">
                  Browse Formulations
                  <ShoppingBag className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/science">
                  <Microscope className="mr-2 h-4 w-4" />
                  View Clinical Data
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CLINICAL STATS ═══════════════ */}
      <section className="border-y border-border/20 bg-muted/40 px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <StatCard value="6" label="Formulations in the Veld range" />
            <StatCard value="24+" label="Months shelf-stability at 25°C" />
            <StatCard value="0%" label="Fragrance / essential oils / dyes" />
            <StatCard value="100%" label="INCI disclosure on every product" />
          </div>
        </div>
      </section>

      {/* ═══════════════ PRODUCT GRID ═══════════════ */}
      <section id="products" className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
              The Collection
            </Badge>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
              Formulations with published data.
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Every product links to its clinical trial summary. No influencer
              claims — only peer-reviewed endpoints.
            </p>
          </div>

          {/* Category filter */}
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary/60 text-secondary-foreground hover:bg-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/30 bg-card transition-all hover:border-primary/25 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]"
              >
                {/* Image placeholder — lab-ish visual */}
                <div className="aspect-[4/3] w-full bg-gradient-to-br from-primary/[0.02] via-muted to-muted/60 flex items-center justify-center relative overflow-hidden">
                  <Beaker className="h-12 w-12 text-primary/[0.07] group-hover:scale-110 transition-transform duration-500" />
                  <span className="absolute bottom-3 right-3 text-[10px] font-mono text-primary/20">
                    MW {Math.round(Math.random() * 400 + 100)} g/mol
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-2">
                    <Badge
                      variant="secondary"
                      className="text-[10px] font-medium tracking-wide"
                    >
                      {product.category}
                    </Badge>
                    <span className="text-sm font-semibold text-foreground/80 shrink-0">
                      ${product.price}
                    </span>
                  </div>

                  <h3 className="mt-3 font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {product.tagline}
                  </p>

                  {/* Key ingredient badges */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {product.ingredients.slice(0, 3).map((ing) => {
                      const name = ing.split(" — ")[0];
                      const short = name.length > 22 ? name.slice(0, 20) + "…" : name;
                      return (
                        <span
                          key={name}
                          className="rounded-md border border-border/20 bg-muted/50 px-2 py-0.5 text-[10px] font-mono text-muted-foreground"
                        >
                          {short}
                        </span>
                      );
                    })}
                  </div>

                  <div className="mt-4 flex items-center text-xs text-primary/70 font-medium">
                    <FlaskConical className="mr-1 h-3 w-3" />
                    <span>View formulation data</span>
                    <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ INCI TRANSPARENCY ═══════════════ */}
      <section className="bg-muted/30 border-y border-border/20 px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <div>
              <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
                Full INCI Transparency
              </Badge>
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
                No hidden ingredients.
                <br />
                <span className="text-primary">Every molecule disclosed.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We publish the complete International Nomenclature of Cosmetic
                Ingredients (INCI) list for every formulation — including the
                concentration range and the peer-reviewed evidence for each
                component. No proprietary blends, no &ldquo;parfum&ldquo;
                loopholes, no trade-secret masking.
              </p>

              <div className="mt-8 space-y-3">
                <InciChip
                  name="Niacinamide 5%"
                  note="Vitamin B3 — multi-point clinical evidence for pore refinement and barrier support"
                />
                <InciChip
                  name="Retinaldehyde 0.1%"
                  note="Next-generation retinoid — time-released for minimal irritation, peer-reviewed at n=58"
                />
                <InciChip
                  name="L-Ascorbic Acid 15% (Gold-Chelated)"
                  note="Stabilised vitamin C — 82% less degradation vs aqueous at 24 months"
                />
                <InciChip
                  name="Ectoin 1.5%"
                  note="Extremolyte from halophilic bacteria — 44% TEWL reduction in 90s"
                />
              </div>
            </div>

            {/* Right — molecule visualisation */}
            <div className="relative rounded-2xl border border-border/20 bg-white p-8 shadow-sm">
              <div className="text-center mb-6">
                <span className="font-mono text-xs tracking-wider text-muted-foreground">
                  EXAMPLE INCI DECLARATION
                </span>
              </div>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex gap-1">
                      <span className="molecule-dot-lg" />
                      <span className="molecule-dot-lg" />
                    </div>
                    <span className="molecule-dot" />
                  </div>
                  <div className="flex-1 border-b border-dashed border-border/30 pb-2">
                    <p className="text-sm font-semibold text-foreground">
                      Aqua (Water)
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      Purified, deionised — solvent base
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <span className="molecule-dot-lg" />
                    <span className="molecule-dot" />
                  </div>
                  <div className="flex-1 border-b border-dashed border-border/30 pb-2">
                    <p className="text-sm font-semibold text-foreground">
                      Niacinamide 5%
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      Vitamin B3 — pore refinement, barrier function
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-0.5">
                    <span className="molecule-dot-lg" />
                    <span className="molecule-dot" />
                    <span className="molecule-dot-lg" />
                  </div>
                  <div className="flex-1 border-b border-dashed border-border/30 pb-2">
                    <p className="text-sm font-semibold text-foreground">
                      Zinc PCA
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      Sebum regulation, antimicrobial
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <span className="molecule-dot" />
                    <span className="molecule-dot-lg" />
                    <span className="molecule-dot" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">
                      Ectoin
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      Extremolyte — soothes within 90 seconds
                    </p>
                  </div>
                </div>
              </div>
              <Separator className="my-6" />
              <p className="text-center text-[10px] font-mono text-muted-foreground">
                pH 5.5 ± 0.3 · Non-comedogenic · RIPT-passed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CLINICAL METHODOLOGY ═══════════════ */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
              Our Standards
            </Badge>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
              Every claim is tested.
            </h2>
            <p className="mt-3 text-muted-foreground">
              All Veld formulations undergo third-party clinical testing with
              minimum n=30 participants, repeat-insult patch tests, and
              corneometry for barrier function.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "RIPT Certified",
                desc: "Repeat-Insult Patch Test on 50 subjects. 0% irritation across all Veld formulations.",
              },
              {
                icon: Microscope,
                title: "Clinical Trial (n≥30)",
                desc: "Every product tested on minimum 30 participants with measured endpoints at weeks 2, 4, 8, and 12.",
              },
              {
                icon: Beaker,
                title: "Stability Tested",
                desc: "24-month accelerated stability at 25°C / 60% RH and 40°C / 75% RH. All formulations pass.",
              },
              {
                icon: Atom,
                title: "pH 5.5 ± 0.3",
                desc: "Every product formulated to match the physiological acid mantle. Confirmed by in-process QC.",
              },
              {
                icon: Droplets,
                title: "TEWL Measured",
                desc: "Transepidermal water loss measured via Tewameter® TM Hex at every development milestone.",
              },
              {
                icon: FlaskConical,
                title: "Non-Comedogenic",
                desc: "0% follicular keratosis in 21-day repeat-use assay. Suitable for acne-prone skin.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="clinical-card rounded-xl p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/[0.06] text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ ROUTINE BUILDER CTA ═══════════════ */}
      <section className="bg-muted/30 border-y border-border/20 px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            Personalised Routine
          </Badge>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
            Not sure where to start?
            <br />
            <span className="text-primary">Take the 6-question skin quiz.</span>
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-base text-muted-foreground">
            We&apos;ll score your answers against our routine database and
            recommend a clinically sequenced AM/PM stack matched to your skin
            concerns.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/quiz">
                Start Skin Quiz
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/routine">
                Routine Builder
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════ NEWSLETTER ═══════════════ */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-xl text-center">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            Clinical Updates
          </Badge>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground">
            Stay informed.
          </h2>
          <p className="mt-3 text-muted-foreground">
            New clinical data, formulation releases, and ingredient deep-dives.
            No fluff — we publish our sources.
          </p>
          <form className="mt-8 flex gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 rounded-full border-border/50 bg-white text-sm"
            />
            <Button type="submit" className="rounded-full shrink-0">
              Subscribe
            </Button>
          </form>
          <p className="mt-4 text-xs text-muted-foreground">
            We respect your inbox. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}