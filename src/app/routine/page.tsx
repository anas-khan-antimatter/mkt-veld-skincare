"use client";

import { useState, useMemo } from "react";
import { products } from "@/data/products";
import {
  routineStacks,
  skinConcerns,
  type RoutineStack,
  type RoutineStep,
} from "@/data/routine";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/cart";
import Link from "next/link";
import {
  Sun,
  Moon,
  SunMoon,
  Check,
  ShoppingBag,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function RoutinePage() {
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [activeStack, setActiveStack] = useState<RoutineStack | null>(null);
  const { addItem, setIsOpen } = useCart();

  const toggleConcern = (id: string) => {
    setSelectedConcerns((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
    setActiveStack(null);
  };

  const matchedStacks = useMemo(() => {
    if (selectedConcerns.length === 0) return [];
    return routineStacks
      .map((stack) => ({
        stack,
        matchCount: stack.concerns.filter((c) => selectedConcerns.includes(c))
          .length,
      }))
      .filter((m) => m.matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount);
  }, [selectedConcerns]);

  const handleSelectStack = (stack: RoutineStack) => {
    setActiveStack(stack);
  };

  const handleAddAllToCart = (steps: RoutineStep[]) => {
    const added = new Set<string>();
    for (const step of steps) {
      const product = products.find((p) => p.id === step.productId);
      if (product && !added.has(product.id)) {
        added.add(product.id);
        addItem({
          id: product.id,
          name: product.name,
          size: product.sizes[0].label,
          price: product.sizes[0].price,
          image: product.image,
        });
      }
    }
    setIsOpen(true);
  };

  const getProduct = (id: string) => products.find((p) => p.id === id);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="outline"
            className="mb-6 border-primary/20 text-primary"
          >
            Routine Builder
          </Badge>
          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground lg:text-5xl">
            Build your
            <span className="block text-primary">evidence-based routine.</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Select your skin concerns and we&apos;ll recommend a clinically
            sequenced AM/PM stack using only products with published data for
            those indications.
          </p>
        </div>
      </section>

      {/* Concern Selector */}
      <section className="bg-muted/30 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground text-center mb-3">
            What are your skin concerns?
          </h2>
          <p className="text-center text-sm text-muted-foreground mb-8">
            Select all that apply. We&apos;ll find the best product stack.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {skinConcerns.map((concern) => (
              <button
                key={concern.id}
                onClick={() => toggleConcern(concern.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all ${
                  selectedConcerns.includes(concern.id)
                    ? "border-primary bg-primary text-primary-foreground shadow-sm"
                    : "border-border bg-background text-foreground hover:border-primary/40"
                }`}
              >
                <span>{concern.icon}</span>
                <span>{concern.label}</span>
                {selectedConcerns.includes(concern.id) && (
                  <Check className="h-3.5 w-3.5" />
                )}
              </button>
            ))}
          </div>

          {matchedStacks.length > 0 && !activeStack && (
            <div className="mt-12">
              <Separator className="mb-8" />
              <h3 className="font-heading text-xl font-semibold text-foreground text-center mb-6">
                Recommended Routines
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {matchedStacks.map(({ stack, matchCount }) => (
                  <button
                    key={stack.id}
                    onClick={() => handleSelectStack(stack)}
                    className="text-left rounded-2xl border border-border/40 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-heading text-base font-semibold text-foreground">
                          {stack.name}
                        </h4>
                        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                          {stack.description}
                        </p>
                      </div>
                      <Badge variant="secondary" className="shrink-0 ml-3">
                        {stack.steps.length} steps
                      </Badge>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {stack.steps.slice(0, 4).map((step) => (
                        <span
                          key={step.productId + step.step}
                          className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground"
                        >
                          {step.step}
                        </span>
                      ))}
                      {stack.steps.length > 4 && (
                        <span className="text-xs text-muted-foreground">
                          +{stack.steps.length - 4} more
                        </span>
                      )}
                    </div>
                    <div className="mt-3 flex items-center gap-1 text-xs text-primary font-medium">
                      <span>View full routine</span>
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedConcerns.length > 0 && matchedStacks.length === 0 && (
            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                No routine matches your exact selection. Try adding or removing
                concerns, or browse our{" "}
                <Link href="/#products" className="text-primary underline">
                  full collection
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Active Stack Detail */}
      {activeStack && (
        <section className="px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
                Your Routine
              </Badge>
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground">
                {activeStack.name}
              </h2>
              <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
                {activeStack.description}
              </p>
            </div>

            {/* AM Steps */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <Sun className="h-4 w-4" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  AM Routine
                </h3>
              </div>
              <div className="space-y-3">
                {activeStack.steps
                  .filter((s) => s.time === "AM" || s.time === "AM+PM")
                  .sort((a, b) => a.order - b.order)
                  .map((step, i) => {
                    const product = getProduct(step.productId);
                    return (
                      <div
                        key={step.productId + step.step}
                        className="flex items-start gap-4 rounded-xl border border-border/40 bg-card p-4"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                          {i + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="text-sm font-semibold text-foreground">
                                {step.step}
                              </p>
                              {product && (
                                <Link
                                  href={`/products/${product.id}`}
                                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                                >
                                  {product.name} — ${product.sizes[0].price}
                                </Link>
                              )}
                            </div>
                          </div>
                          {step.note && (
                            <p className="mt-1 text-xs text-muted-foreground italic">
                              {step.note}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* PM Steps */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                  <Moon className="h-4 w-4" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  PM Routine
                </h3>
              </div>
              <div className="space-y-3">
                {activeStack.steps
                  .filter((s) => s.time === "PM" || s.time === "AM+PM")
                  .sort((a, b) => a.order - b.order)
                  .map((step, i) => {
                    const product = getProduct(step.productId);
                    return (
                      <div
                        key={step.productId + step.step}
                        className="flex items-start gap-4 rounded-xl border border-border/40 bg-card p-4"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                          {i + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="text-sm font-semibold text-foreground">
                                {step.step}
                              </p>
                              {product && (
                                <Link
                                  href={`/products/${product.id}`}
                                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                                >
                                  {product.name} — ${product.sizes[0].price}
                                </Link>
                              )}
                            </div>
                          </div>
                          {step.note && (
                            <p className="mt-1 text-xs text-muted-foreground italic">
                              {step.note}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Add all to cart */}
            <div className="text-center">
              <Button
                size="lg"
                className="rounded-full"
                onClick={() => handleAddAllToCart(activeStack.steps)}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Add All to Bag
              </Button>
              <p className="mt-3 text-xs text-muted-foreground">
                Adds one of each unique product in this routine.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary/5 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Sparkles className="mx-auto h-8 w-8 text-primary mb-4" />
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
            Not sure where to start?
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Take our 60-second skin quiz for a personalised routine
            recommendation.
          </p>
          <Button asChild size="lg" className="rounded-full mt-6">
            <Link href="/quiz">
              Take the Skin Quiz
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}