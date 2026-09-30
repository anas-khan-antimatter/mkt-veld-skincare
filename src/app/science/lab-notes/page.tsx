import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  Sun,
  Moon,
  ShoppingBag,
  FlaskConical,
  Eye,
  Info,
} from "lucide-react";

const notes: Array<{
  icon: typeof Info;
  title: string;
  category: string;
  content: string[];
  readingTime: string;
}> = [
  {
    icon: Sun,
    title: "Vitamin C in the AM: Why Timing Matters",
    category: "Formulation Science",
    content: [
      "L-ascorbic acid (the only form of vitamin C proven to upregulate collagen synthesis topically) has a half-life of approximately 4 hours in the skin when applied in the morning. Applying it before SPF creates an antioxidant reservoir that quadruples the UV protection of your sunscreen — but only if the formulation is stable enough to survive the first hour on the skin without oxidising.",
      "Veld's gold-chelation technology creates a metastable suspension that releases L-ascorbic acid only upon contact with the acidic pH of the skin's surface. This bypasses the rapid degradation that occurs in aqueous vitamin C serums, where 50% of activity is lost within 20 minutes of application.",
      "The ferulic acid synergy is not a marketing claim — it's a stoichiometric ratio that has been replicated in three independent studies (Lin, JY et al., 2005; Murray, JC et al., 2008; VELD-VC-2023-03). At pH 3.2, ferulic acid donates electrons to the L-ascorbyl radical, regenerating active vitamin C and extending its functional lifespan in the skin by approximately 2.3 hours.",
    ],
    readingTime: "3 min",
  },
  {
    icon: Moon,
    title: "Retinaldehyde vs Retinol: A Molecular Distinction",
    category: "Retinoid Chemistry",
    content: [
      "Retinaldehyde (retinal) is one oxidation step closer to retinoic acid than retinol. This means it converts to the active form in one enzymatic step (retinol dehydrogenase) rather than two (retinol → retinaldehyde via retinol dehydrogenase, then retinaldehyde → retinoic acid via retinaldehyde dehydrogenase). The practical implication: retinaldehyde requires a lower applied concentration to achieve the same receptor binding.",
      "At 0.1% retinaldehyde, Veld's Retinol Night Balm achieves comparable gene expression of CRABP-II (cellular retinoic acid binding protein) to 0.5% retinol — a 5× concentration reduction. This translates to less irritation potential while maintaining clinical efficacy.",
      "The ceramide 1:1:1 ratio (NP:AP:EOP) is not arbitrary. Human stratum corneum contains these three ceramides in approximately equimolar ratios. Most barrier creams add ceramide NP only (the cheapest), which fails to fill all three lamellar lipid channels. The crystal lattice formed by the 1:1:1 ratio has been shown by X-ray diffraction to pack 22% more densely than single-ceramide formulations (VELD-BRC-2024-04).",
    ],
    readingTime: "4 min",
  },
  {
    icon: FlaskConical,
    title: "The Microbiome Safety Protocol",
    category: "Dermatological Testing",
    content: [
      "In 2023, Veld introduced mandatory 16S rRNA gene-sequencing analysis for every finished product. We measure alpha-diversity (Shannon index) and beta-diversity (Bray-Curtis dissimilarity) before and after 4 weeks of twice-daily use on a panel of 20 subjects.",
      "A product receives Veld clearance only if alpha-diversity remains within 5% of baseline and no single bacterial genus shifts by more than 2 log-fold. To date, 3 formulations have failed this test and were reformulated or abandoned.",
      "The commensal skin microbiome — dominated by Cutibacterium, Staphylococcus, and Corynebacterium — plays a critical role in preventing colonisation by pathogens like Staphylococcus aureus. Disrupting this ecosystem with broad-spectrum antimicrobial preservatives or high-concentration alcohols can create openings for infection and sensitisation. Veld uses a postbiotic ferment lysate (Lactobacillus ferment) as an alternative preservation booster, reducing the need for traditional preservatives by 60%.",
    ],
    readingTime: "5 min",
  },
  {
    icon: Eye,
    title: "Non-Nano Zinc Oxide: Particle Size and Safety",
    category: "Photoprotection",
    content: [
      "The distinction between 'nano' and 'non-nano' zinc oxide is not marketing — it's a particle size distribution standard. Under EU and Australian regulations, a sunscreen ingredient is labelled 'nano' if more than 50% of particles by number have a diameter below 100 nm.",
      "Veld's Mineral SPF 50 Powder uses zinc oxide with a mean particle diameter of 180 nm (D50), placing it firmly in the non-nano category. This is important because particles below 100 nm can penetrate the stratum corneum via follicular and intercellular routes, particularly on compromised barriers.",
      "Non-nano zinc oxide is also reef-safe: a 2022 study by the NOAA found that zinc oxide particles >100 nm did not cause bleaching in Symbiodinium (coral symbiont) cultures at concentrations up to 10 mg/L, whereas nano-zinc (<50 nm) caused 40% bleaching at 1 mg/L. Veld's SPF powder is also free of oxybenzone, octinoxate, and octocrylene — all of which are detected in coral tissue at popular reef sites worldwide.",
    ],
    readingTime: "4 min",
  },
];

export default function LabNotesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-6 border-primary/20 text-primary">
            Lab Notes
          </Badge>
          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground lg:text-5xl">
            Behind the
            <span className="block text-primary">formulation.</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Deep dives into the chemistry, biology, and evidence behind every
            Veld product. Written by our formulation team.
          </p>
        </div>
      </section>

      <div className="px-6 py-8 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-4xl space-y-10">
          {notes.map((note) => (
            <article
              key={note.title}
              className="scroll-mt-20 rounded-2xl border border-border/40 bg-card p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <note.icon className="h-5 w-5" />
                </div>
                <div>
                  <Badge variant="secondary" className="text-[10px]">
                    {note.category}
                  </Badge>
                </div>
                <span className="text-xs text-muted-foreground ml-auto">
                  {note.readingTime} read
                </span>
              </div>

              <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground mb-4">
                {note.title}
              </h2>

              <div className="space-y-4">
                {note.content.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="bg-muted/30 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
            Want to dive deeper?
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Browse our full clinical data library or read the science behind
            each product.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href="/science"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Clinical Research
            </Link>
            <Link
              href="/routine"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-8 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Build Your Routine
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}