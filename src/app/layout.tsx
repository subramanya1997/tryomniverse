import type { Metadata } from "next";
import localFont from "next/font/local";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

import "./globals.css";

const fontSans = localFont({
  src: [
    {
      path: "../../public/fonts/space-grotesk-400.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/space-grotesk-500.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/space-grotesk-600.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/space-grotesk-700.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont"],
});

export const metadata: Metadata = {
  title: {
    default: "omniverse",
    template: "%s · omniverse",
  },
  description:
    "Modern AI consulting for enterprises building trustworthy, production-ready intelligence.",
  metadataBase: new URL("https://omniverse.ai"),
  openGraph: {
    title: "omniverse",
    description:
      "Modern AI consulting for enterprises building trustworthy, production-ready intelligence.",
    url: "https://omniverse.ai",
    siteName: "omniverse",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "omniverse",
    description:
      "Partner with omniverse to ship measurable AI outcomes, responsibly.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", fontSans.variable)}>
      <body className="font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
