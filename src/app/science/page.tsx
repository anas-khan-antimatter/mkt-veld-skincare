import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FlaskConical, BarChart3, TestTube, BookOpen, Microscope, Shield } from "lucide-react";
import Link from "next/link";

const principles = [
  {
    icon: Microscope,
    title: "1. Molecular Selection",
    desc: "We evaluate every candidate ingredient through a three-gate system: (1) minimum 2 peer-reviewed human trials, (2) publicly available safety data sheet, (3) no known contact allergen or comedogenic rating above 1. Ingredients that pass all three gates enter formulation.",
  },
  {
    icon: TestTube,
    title: "2. Stability & Bioavailability Testing",
    desc: "Each formula undergoes accelerated stability testing (40°C / 75% RH for 12 weeks, plus freeze-thaw cycling) to ensure ingredient integrity. We use encapsulation and chelation technologies — never antioxidants or preservatives at levels that compromise efficacy.",
  },
  {
    icon: BarChart3,
    title: "3. Clinical Validation (n≥30)",
    desc: "Before any product reaches the public, it must pass an independent clinical trial with a minimum of 30 participants (RIPT, TEWL, Sebumetry, cutometry, and photographic imaging). Studies are IRB-approved and results are published in full — including null findings.",
  },
  {
    icon: Shield,
    title: "4. Microbiome Safety Panel",
    desc: "We contract 16S rRNA gene-sequencing analysis of the skin microbiome before and after 4-week use. A product receives Veld clearance only if alpha-diversity (Shannon index) remains within 5% of baseline. We will not launch a product that disrupts commensal flora.",
  },
];

const studies = [
  {
    product: "Clarifying Serum (Niacinamide 5% + Zinc PCA)",
    n: 42,
    duration: "28 days",
    result: "32% reduction in pore visibility (photographic grading), 23% decrease in TEWL, 41% reduction in sebum output (sebumetry). No adverse events. pH 5.5–6.0 maintained.",
    ref: "VELD-CS-2024-01",
  },
  {
    product: "Retinol Night Balm (Retinaldehyde 0.1%)",
    n: 58,
    duration: "12 weeks",
    result: "63% improvement in fine line appearance (VISIA-CR wrinkle analysis). Barrier integrity score +41% vs untreated control. 91% of subjects reported no irritation beyond mild transient stinging in week 1.",
    ref: "VELD-RNB-2024-02",
  },
  {
    product: "Vitamin C Brightening Fluid (L-Ascorbic Acid 15%)",
    n: 45,
    duration: "8 weeks",
    result: "37% increase in skin brightness (reflectance spectrometry). Gold chelation reduced L-ascorbic acid degradation to 8% of aqueous C rate at 24 months. Ferulic acid synergy confirmed via DPPH radical scavenging assay.",
    ref: "VELD-VC-2023-03",
  },
  {
    product: "Barrier Recovery Cream (Ectoin 1.5% + Beta-Glucan 2%)",
    n: 30,
    duration: "14 days",
    result: "44% TEWL reduction in single application on barrier-compromised skin (tape stripping model). Stinging sensation resolved within 90 seconds (subject-reported VAS). 100% pass on repeat-insult patch test.",
    ref: "VELD-BRC-2024-04",
  },
];

export default function SciencePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="px-6 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-6 border-primary/20 text-primary">
            Clinical Research
          </Badge>
          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground lg:text-5xl">
            Evidence, not
            <span className="block text-primary">anecdote.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Every Veld product is backed by independent clinical data, full
            ingredient transparency, and microbiome safety testing. We publish
            everything — so you can decide for yourself.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-muted/30 px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground">
              Our Validation Framework
            </h2>
            <p className="mt-3 text-muted-foreground">
              A four-stage filter that every formula passes through before it can be called Veld.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border/40 bg-card p-7"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Studies Table */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground">
              Published Clinical Data
            </h2>
            <p className="mt-3 text-muted-foreground">
              All studies are independent, IRB-approved, and conducted on
              human subjects. We publish the full methodology and raw data
              upon request.
            </p>
          </div>

          <div className="space-y-6">
            {studies.map((study) => (
              <div
                key={study.ref}
                className="rounded-2xl border border-border/40 bg-card p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="flex items-start gap-3">
                    <FlaskConical className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {study.product}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Study ref: {study.ref} &middot; n={study.n} &middot;
                        Duration: {study.duration}
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="shrink-0">
                    Published {study.duration}
                  </Badge>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {study.result}
                </p>
              </div>
            ))}
          </div>

          <Separator className="my-12" />

          {/* Ingredient disclosure */}
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <BookOpen className="h-8 w-8" />
            </div>
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              Full INCI Disclosure
            </h2>
            <p className="mt-3 mx-auto max-w-xl text-sm text-muted-foreground">
              Every Veld product lists every ingredient with its INCI name and
              exact concentration (where trade-secret safe). We don&apos;t use
              &ldquo;fragrance&rdquo; or &ldquo;parfum&rdquo; — those words never appear on a Veld label.
            </p>
            <Link
              href="/#products"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}