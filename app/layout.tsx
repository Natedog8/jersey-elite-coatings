import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/site.config";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema, websiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Epoxy Flooring North Jersey — Garage, Commercial & Metallic`,
    template: `%s | ${site.name}`,
  },
  description:
    "North Jersey's premier epoxy flooring installers. Garage, commercial, industrial, basement & metallic epoxy floors. Lifetime warranty, free on-site quotes. Call (973) 378-1192.",
  applicationName: site.name,
  keywords: [
    "epoxy flooring north jersey",
    "garage epoxy flooring nj",
    "epoxy floor coating newark",
    "commercial epoxy flooring nj",
    "metallic epoxy floor new jersey",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | North Jersey Epoxy Flooring`,
    description:
      "Premium epoxy floor coatings for garages, businesses & basements across North Jersey. Lifetime warranty. Free quotes.",
    images: [{ url: "/photos/garage-epoxy-floor-hero.webp" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Load the brand font at runtime (no build-time fetch dependency).
            React 19 hoists these into <head>; globals.css falls back to the
            system stack if the webfont is ever unavailable. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body>
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        {children}
      </body>
    </html>
  );
}
