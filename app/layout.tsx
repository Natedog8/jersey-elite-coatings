import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/site.config";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema, websiteSchema } from "@/lib/seo";

/* Self-hosted variable font — no runtime Google Fonts request (faster LCP)
   and no build-time fetch dependency. */
const jakarta = localFont({
  src: "./fonts/plus-jakarta-sans-latin-var.woff2",
  weight: "200 800",
  display: "swap",
  variable: "--font-jakarta",
});

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
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        {children}
      </body>
    </html>
  );
}
