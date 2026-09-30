"use client";

import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowLeft,
  Shield,
  Truck,
  CreditCard,
  Check,
} from "lucide-react";

export default function CartPage() {
  const {
    items,
    removeItem,
    updateQuantity,
    totalItems,
    totalPrice,
  } = useCart();

  const [checkoutStep, setCheckoutStep] = useState<
    "cart" | "shipping" | "payment" | "confirmation"
  >("cart");

  const subtotal = totalPrice;
  const shipping = subtotal >= 75 ? 0 : 12.5;
  const tax = Math.round(subtotal * 0.08 * 100) / 100;
  const orderTotal = subtotal + shipping + tax;

  return (
    <div className="flex flex-col min-h-screen">
      <section className="px-6 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/#products"
            className="inline-flex items-center gap-1 mb-6 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to shop
          </Link>

          <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground">
            Checkout
          </h1>
        </div>
      </section>

      {/* Cart review */}
      <section className="px-6 py-8 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-6xl">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <ShoppingBag className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="font-heading text-2xl font-semibold text-foreground">
                Your bag is empty
              </h2>
              <p className="mt-2 text-muted-foreground">
                Browse our collection and add products to your bag.
              </p>
              <Button asChild size="lg" className="mt-8 rounded-full">
                <Link href="/#products">Start Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
              {/* Items */}
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex gap-5 rounded-xl border border-border/40 bg-card p-4"
                  >
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <div className="text-center">
                        <ShoppingBag className="h-6 w-6 text-muted-foreground/50" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-base font-semibold text-foreground">
                            {item.name}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {item.size}
                          </p>
                        </div>
                        <p className="text-sm font-semibold text-foreground">
                          ${item.price * item.quantity}
                        </p>
                      </div>
                      <div className="mt-3 flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.size,
                                item.quantity - 1
                              )
                            }
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:bg-muted"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium text-foreground">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.size,
                                item.quantity + 1
                              )
                            }
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:bg-muted"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.size)}
                          className="text-xs text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          <span className="sr-only">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order summary */}
              <div className="h-fit rounded-2xl border border-border/40 bg-card p-6 lg:sticky lg:top-24">
                <h2 className="font-heading text-lg font-semibold text-foreground mb-4">
                  Order Summary
                </h2>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal ({totalItems} items)</span>
                    <span>${subtotal}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <Badge variant="secondary">FREE</Badge>
                      ) : (
                        `$${shipping}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Tax (8%)</span>
                    <span>${tax}</span>
                  </div>
                  <Separator className="my-3" />
                  <div className="flex justify-between text-base font-semibold text-foreground">
                    <span>Total</span>
                    <span>${orderTotal}</span>
                  </div>
                </div>

                <Separator className="my-5" />

                {/* Show checkout button */}
                <Button size="lg" className="w-full rounded-full">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Checkout — ${orderTotal}
                </Button>

                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Secure demo checkout. No real payment processed.</span>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Truck className="h-4 w-4 text-primary" />
                  <span>
                    {shipping === 0
                      ? "Free shipping on this order"
                      : "Free shipping on orders over $75"}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}