"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-primary via-primary/90 to-secondary shadow-glow">
            <span className="absolute inset-0 animate-pulse bg-white/15" />
            <span className="relative text-sm font-bold uppercase">OV</span>
          </span>
          <span className="hidden text-base font-semibold sm:inline-flex">
            Omniverse AI Consulting
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" className="hidden md:inline-flex">
            <Link href="#contact">Book discovery</Link>
          </Button>
          <Button asChild className="hidden md:inline-flex">
            <Link href="#">Launch a pilot</Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Toggle navigation"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 pt-2">
                <nav className="flex flex-col gap-2 text-lg font-medium text-foreground">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="rounded-xl px-3 py-2 transition hover:bg-foreground/5"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="flex flex-col gap-3">
                  <SheetClose asChild>
                    <Button variant="outline" className="w-full">
                      Book discovery
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button className="w-full">Launch a pilot</Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
