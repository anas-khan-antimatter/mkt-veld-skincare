"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/cart";
import { ShoppingBag, ChevronRight, Leaf, FlaskConical, Award, ArrowRight } from "lucide-react";

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
      {/* ───── Hero ───── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/40 to-background px-6 py-24 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <Badge
              variant="outline"
              className="mb-6 border-primary/20 bg-primary/5 text-primary"
            >
              New — Retinol Night Balm
            </Badge>
            <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground lg:text-6xl">
              Skincare stripped to
              <span className="block text-primary">what works.</span>
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
              Every ingredient is chosen for clinical evidence, not aesthetics.
              No filler, no fragrance, no compromise. Just pure, effective
              skincare backed by dermatological science.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="#products">
                  Shop the Collection
                  <ShoppingBag className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/science">
                  See the Science
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/quiz">
                  Take the Skin Quiz
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -right-20 top-20 hidden h-96 w-96 rounded-full bg-primary/5 blur-3xl lg:block" />
        <div className="absolute -bottom-32 right-32 hidden h-64 w-64 rounded-full bg-primary/5 blur-3xl lg:block" />
      </section>

      {/* ───── Trust / Pillars ───── */}
      <section className="border-y border-border/40 bg-background px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Leaf,
                title: "Microbiome-Safe",
                desc: "Formulations tested to maintain commensal skin flora diversity.",
              },
              {
                icon: FlaskConical,
                title: "Clinically Validated",
                desc: "Every product undergoes independent clinical testing (n≥30).",
              },
              {
                icon: Award,
                title: "Transparent Formulas",
                desc: "Full INCI disclosure with rationale for every ingredient.",
              },
            ].map((pillar) => (
              <div key={pillar.title} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Product Grid ───── */}
      <section id="products" className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground">
              The Collection
            </h2>
            <p className="mt-2 text-muted-foreground">
              A complete routines stripped to essentials. Every formulation
              pulls its weight.
            </p>
          </div>

          {/* Category filter */}
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-card transition-all hover:shadow-lg"
              >
                {/* Image placeholder */}
                <div className="aspect-[4/5] w-full bg-gradient-to-b from-muted to-muted/50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="mx-auto mb-3 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <FlaskConical className="h-8 w-8 text-primary/40" />
                    </div>
                    <p className="text-xs font-medium text-muted-foreground">
                      {product.category}
                    </p>
                    <p className="mt-1 text-lg font-heading font-semibold text-foreground/80">
                      {product.name}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge
                        variant="secondary"
                        className="mb-2 text-[10px] font-medium"
                      >
                        {product.category}
                      </Badge>
                      <h3 className="font-heading text-base font-semibold text-foreground">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                    {product.tagline}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-semibold text-foreground">
                      From ${product.price}
                    </span>
                    <span className="text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                      View details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Brand Story Snippet ───── */}
      <section className="bg-muted/30 px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
                Our Philosophy
              </Badge>
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
                Clean science.
                <br />
                Zero fluff.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Veld was born from a simple conviction: skincare should be
                judged by its clinical evidence, not its marketing budget. We
                strip every formula to the minimum effective dose of
                peer-reviewed ingredients. No fragrance. No essential oils. No
                trendy extracts at ineffective concentrations. Just pure
                dermatological science in every drop.
              </p>
              <Button asChild variant="link" className="mt-6 px-0 text-primary">
                <Link href="/story">
                  Read our full story
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-8">
              <div className="flex h-full flex-col items-center justify-center text-center">
                <span className="font-heading text-7xl font-semibold text-primary/20">
                  V
                </span>
                <Separator className="my-4 w-12" />
                <p className="text-sm text-muted-foreground">
                  Evidence-driven skincare
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Newsletter ───── */}
      <section className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground">
            Stay informed.
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Get clinical insights, new product launches, and exclusive
            access — no spam, no fluff.
          </p>
          <form className="mt-8 flex gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 rounded-full border-border/60"
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