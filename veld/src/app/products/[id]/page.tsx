"use client";

import { notFound, useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/cart";
import { Check, ShoppingBag, FlaskConical, Droplets, Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProductPage() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);
  const { addItem, setIsOpen } = useCart();
  const [selectedSize, setSelectedSize] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    notFound();
  }

  const size = product.sizes[selectedSize];

  const handleAddToBag = () => {
    addItem({
      id: product.id,
      name: product.name,
      size: size.label,
      price: size.price,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addItem({
      id: product.id,
      name: product.name,
      size: size.label,
      price: size.price,
      image: product.image,
    });
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Back link */}
      <div className="mx-auto max-w-7xl px-6 pt-6 lg:px-8">
        <Link
          href="/#products"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to collection
        </Link>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* ───── Product Image ───── */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-b from-muted to-muted/50">
            <div className="flex h-full flex-col items-center justify-center p-12 text-center">
              <div className="mb-6 rounded-full bg-primary/10 p-6">
                <FlaskConical className="h-12 w-12 text-primary/40" />
              </div>
              <Badge variant="secondary" className="mb-3">
                {product.category}
              </Badge>
              <h1 className="font-heading text-2xl font-semibold text-foreground/80">
                {product.name}
              </h1>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                {product.tagline}
              </p>
            </div>
          </div>

          {/* ───── Product Details ───── */}
          <div className="flex flex-col justify-center">
            <Badge variant="outline" className="mb-4 w-fit border-primary/20 text-primary">
              {product.category}
            </Badge>
            <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
              {product.name}
            </h1>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              {product.tagline}
            </p>

            <Separator className="my-6" />

            {/* Description */}
            <p className="text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            <Separator className="my-6" />

            {/* Size selector */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Size
              </p>
              <div className="flex gap-3">
                {product.sizes.map((s, i) => (
                  <button
                    key={s.label}
                    onClick={() => setSelectedSize(i)}
                    className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
                      i === selectedSize
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-foreground hover:border-primary/50"
                    }`}
                  >
                    {s.label} — ${s.price}
                  </button>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="rounded-full min-w-[180px]"
                onClick={handleAddToBag}
              >
                {added ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Added to Bag
                  </>
                ) : (
                  <>
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Add to Bag — ${size.price}
                  </>
                )}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full"
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
            </div>

            {/* Free shipping note */}
            <p className="mt-4 text-xs text-muted-foreground">
              Free shipping on orders over $75. Sample checkout.
            </p>

            <Separator className="my-8" />

            {/* ───── Ingredients ───── */}
            <div>
              <div className="flex items-center gap-2">
                <Droplets className="h-4 w-4 text-primary" />
                <h2 className="font-heading text-lg font-semibold text-foreground">
                  Full Ingredient List
                </h2>
              </div>
              <ul className="mt-4 space-y-3">
                {product.ingredients.map((ingredient) => {
                  const [name, ...rest] = ingredient.split(" — ");
                  return (
                    <li key={name} className="flex items-start gap-3 text-sm">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                      <div>
                        <span className="font-medium text-foreground">
                          {name}
                        </span>
                        {rest.length > 0 && (
                          <>
                            <span className="text-muted-foreground"> — </span>
                            <span className="text-muted-foreground">
                              {rest.join(" — ")}
                            </span>
                          </>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <Separator className="my-8" />

            {/* ───── How to Use ───── */}
            <div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <h2 className="font-heading text-lg font-semibold text-foreground">
                  How to Use
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {product.howToUse}
              </p>
            </div>
          </div>
        </div>

        {/* ───── Clinical Evidence ───── */}
        <div className="mt-16 rounded-2xl border border-border/40 bg-muted/20 p-8 lg:p-12">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Clinical Evidence
            </h2>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {product.clinical.map((claim) => (
              <div
                key={claim}
                className="flex items-start gap-3 rounded-lg bg-background p-4"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">{claim}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}