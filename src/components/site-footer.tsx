import Link from "next/link";

import { Separator } from "@/components/ui/separator";

const footerLinks = [
  {
    title: "Company",
    items: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "AI Strategy", href: "#services" },
      { label: "MLOps", href: "#services" },
      { label: "Automation", href: "#services" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Insights", href: "#insights" },
      { label: "Newsletter", href: "#contact" },
      { label: "Privacy", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="#" className="text-lg font-semibold tracking-tight text-foreground">
            Omniverse AI Consulting
          </Link>
          <p className="text-sm text-muted-foreground">
            Enterprise-grade AI consulting for teams shipping trustworthy, measurable
            intelligence.
          </p>
        </div>
        {footerLinks.map((section) => (
          <div key={section.title} className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {section.title}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {section.items.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Separator className="border-t border-border/60" />
      <div className="container flex flex-col gap-4 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Omniverse Labs. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#">LinkedIn</Link>
          <Link href="#">X</Link>
          <Link href="#">YouTube</Link>
        </div>
      </div>
    </footer>
  );
}
