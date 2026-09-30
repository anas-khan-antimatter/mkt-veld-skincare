import Link from "next/link";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      <section className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground">
            All Products
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Every formulation is clinically validated, microbiome-safe, and
            transparently disclosed. No filler, no fragrance, no compromise.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group rounded-2xl border border-border/40 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="mb-4 flex h-48 w-full items-center justify-center rounded-xl bg-gradient-to-b from-muted to-muted/50">
                  <div className="text-center p-6">
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <svg className="h-7 w-7 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path d="M12 2C2 17 7 2 8S2 19 20 5 5M9 7v8 2 2 3 4 8 11 11 2 1 5 12 4 2 1S8 1 2 12 4 11 1S2 4 8 3 1 3 1 2 7 4 2 15 1" />
                      </svg>
                    </div>
                    <p className="text-xs text-muted-foreground">{product.category}</p>
                  </div>
                </div>
                <h2 className="font-heading text-base font-semibold text-foreground group-hover:text-primary">
                  {product.name}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {product.tagline}
                </p>
                <p className="mt-3 text-base font-semibold text-foreground">
                  From ${product.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}