import { Badge } from "@/components/ui/badge";
import { subscriptionFaqs } from "@/data/subscription";
import { RefreshCw, Shield, Truck } from "lucide-react";

export default function SubscriptionPage() {
  return (
    <div className="flex flex-col">
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Subscription
          </Badge>
          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground lg:text-5xl">
            Flexible skincare, delivered
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-xl mx-auto">
            Veld subscriptions are commitment-free. You&apos;re always in control —
            pause, skip, or cancel in one click. No fees, no contracts, no
            hidden charges.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {subscriptionFaqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-border/40 bg-card p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-foreground">
                  {faq.question}
                  <span className="ml-4 text-primary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-start gap-3 rounded-xl border border-border/40 bg-card p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <RefreshCw className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  Pause or cancel anytime
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  No fees, no penalties, no phone calls. Do it from your
                  account in one click.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border/40 bg-card p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  60-day guarantee
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Not happy? Return anything, even opened, for a full refund.
                  No questions asked.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border/40 bg-card p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  Carbon-neutral delivery
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  We offset the full carbon footprint of every delivery. Free
                  on orders over R500 / £30 / $45.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}