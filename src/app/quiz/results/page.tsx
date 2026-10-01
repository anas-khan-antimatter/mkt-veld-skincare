"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";
import { products } from "@/data/products";
import { routineStacks, type RoutineStep } from "@/data/routine";
import { getRoutineIdFromAnswers } from "@/data/quiz";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/cart";
import Link from "next/link";
import { Sun, Moon, ShoppingBag, Check, ArrowRight, RefreshCw } from "lucide-react";

function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { addItem, setIsOpen } = useCart();

  const result = useMemo(() => {
    const answers: Record<string, string> = {};
    for (const [key, value] of searchParams.entries()) {
      answers[key] = value;
    }

    const routineId = getRoutineIdFromAnswers(answers);
    const stack = routineStacks.find((s) => s.id === routineId) || routineStacks[0];
    return { answers, stack };
  }, [searchParams]);

  const { stack } = result;

  const getProduct = (id: string) => products.find((p) => p.id === id);

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

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Your Personalised Routine
          </Badge>
          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground lg:text-5xl">
            {stack.name}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-xl mx-auto">
            {stack.description}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              className="rounded-full"
              onClick={() => handleAddAllToCart(stack.steps)}
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Add All to Bag
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full"
              onClick={() => router.push("/quiz")}
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Retake Quiz
            </Button>
          </div>
        </div>
      </section>

      {/* AM Routine */}
      <section className="bg-muted/30 px-6 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <Sun className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                AM Routine
              </h2>
              <p className="text-xs text-muted-foreground">
                Morning — apply in this order
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {stack.steps
              .filter((s) => s.time === "AM" || s.time === "AM+PM")
              .sort((a, b) => a.order - b.order)
              .map((step, i) => {
                const product = getProduct(step.productId);
                return (
                  <div
                    key={step.productId + step.step}
                    className="flex items-start gap-4 rounded-xl border border-border/40 bg-card p-5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-base font-semibold text-foreground">
                            {step.step}
                          </p>
                          {product && (
                            <Link
                              href={`/products/${product.id}`}
                              className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {product.name} — ${product.sizes[0].price}
                            </Link>
                          )}
                        </div>
                      </div>
                      {step.note && (
                        <p className="mt-1.5 text-xs text-muted-foreground italic leading-relaxed">
                          {step.note}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* PM Routine */}
      <section className="px-6 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
              <Moon className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                PM Routine
              </h2>
              <p className="text-xs text-muted-foreground">
                Evening — apply in this order
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {stack.steps
              .filter((s) => s.time === "PM" || s.time === "AM+PM")
              .sort((a, b) => a.order - b.order)
              .map((step, i) => {
                const product = getProduct(step.productId);
                return (
                  <div
                    key={step.productId + step.step}
                    className="flex items-start gap-4 rounded-xl border border-border/40 bg-card p-5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-base font-semibold text-foreground">
                            {step.step}
                          </p>
                          {product && (
                            <Link
                              href={`/products/${product.id}`}
                              className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {product.name} — ${product.sizes[0].price}
                            </Link>
                          )}
                        </div>
                      </div>
                      {step.note && (
                        <p className="mt-1.5 text-xs text-muted-foreground italic leading-relaxed">
                          {step.note}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* Add all CTA */}
      <section className="bg-primary/5 px-6 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-semibold text-foreground">
            Ready to start your routine?
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              className="rounded-full"
              onClick={() => handleAddAllToCart(stack.steps)}
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Add All Products to Bag
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/routine">
                Customise Routine
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Adds one of each unique product in this routine. Adjust quantities
            in your bag.
          </p>
        </div>
      </section>
    </div>
  );
}