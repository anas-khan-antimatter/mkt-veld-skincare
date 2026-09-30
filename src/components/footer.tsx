import Link from "next/link";

const footerLinks = {
  shop: [
    { href: "/", label: "All Products" },
    { href: "/science", label: "Science" },
    { href: "/story", label: "Our Story" },
  ],
  support: [
    { href: "#", label: "Shipping & Returns" },
    { href: "#", label: "FAQ" },
    { href: "#", label: "Contact" },
  ],
  social: [
    { href: "#", label: "Instagram" },
    { href: "#", label: "TikTok" },
    { href: "#", label: "YouTube" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-heading text-xl font-semibold tracking-wide text-foreground"
            >
              Veld
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Evidence-driven skincare, stripped of noise. Clinically
              validated, microbiome-safe, endlessly effective.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Shop
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Support
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Follow Us
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Veld. All rights reserved. For
          demonstration purposes.
        </div>
      </div>
    </footer>
  );
}