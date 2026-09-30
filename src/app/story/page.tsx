import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Leaf, Shield, Award, Users } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Leaf,
    title: "Microbiome-First Formulation",
    desc: "We test every finished product against a 16S-rRNA-sequenced skin microbiome model to ensure commensal diversity is maintained. If a formula disrupts the biome, it goes back to the lab.",
  },
  {
    icon: Shield,
    title: "Minimum Effective Dose",
    desc: "Every ingredient in a Veld formula earns its place by peer-reviewed evidence at its clinically proven concentration. No 'proprietary blend' opacity — we disclose exact percentages.",
  },
  {
    icon: Award,
    title: "Full Clinical Disclosure",
    desc: "All clinical data — positive or negative — is published on our site. We don't cherry-pick results. If a study doesn't meet our own significance threshold (p<0.05, n≥30), we don't make the claim.",
  },
  {
    icon: Users,
    title: "Dermatologist-Led",
    desc: "Our formulation board includes board-certified dermatologists, PhD chemists, and a microbiologist. No influencers. No celebrity 'creative direction.' Just science.",
  },
];

export default function StoryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="px-6 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-6 border-primary/20 text-primary">
            Our Story
          </Badge>
          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground lg:text-5xl">
            Clean science.
            <br />
            <span className="text-primary">Zero compromise.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Veld was founded in 2021 by two dermatology researchers who grew
            tired of seeing clinically effective ingredients diluted into
            irrelevance by luxury marketing budgets. We believe skincare should
            be judged by what it does, not how it smells or who sells it.
          </p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-muted/30 px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground">
            The problem with skincare
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Walk into any pharmacy or scroll any feed and you&apos;ll be sold the
              same story: a proprietary blend of exotic botanicals at
              undisclosed concentrations, wrapped in a frosted glass bottle and
              a 3× markup. The active ingredient — if there is one — is buried
              at the bottom of the INCI list, present at a concentration too
              low to do anything.
            </p>
            <p>
              This isn&apos;t medicine. It&apos;s luxury-goods marketing dressed up as
              self-care. And it works — until you look at the data.
            </p>
            <p>
              We asked ourselves a different question: what if we formulated
              skincare the way a pharmacist formulates a topical? What if every
              ingredient had to show its clinical ID card before it could get
              into the bottle? What if we stopped using fragrance — the single
              most common contact allergen in cosmetics — entirely?
            </p>
          </div>

          <Separator className="my-10" />

          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground">
            What Veld means
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            &ldquo;Veld&rdquo; is an Afrikaans word for open grassland — a landscape
            stripped to its essentials, where what grows does so because it
            belongs there. That&apos;s our philosophy: no exotic extracts shipped
            from halfway around the world for a label claim. Just clean,
            evidence-backed ingredients that earn their place in the formula.
          </p>
        </div>
      </section>

      {/* Values grid */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground">
              What we stand for
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border/40 bg-card p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground">
            Ready to see the difference?
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Browse our full collection or read the clinical data behind every
            formula.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/#products"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Shop the Collection
            </Link>
            <Link
              href="/science"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-8 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              See Clinical Data
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}