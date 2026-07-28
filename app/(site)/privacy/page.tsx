import type { Metadata } from "next";
import { site } from "@/site.config";
import { Section } from "@/components/ui";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}.`,
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Privacy", url: "/privacy" },
        ]}
      />
      <Section>
        <div className="prose mx-auto max-w-2xl space-y-5 text-navy-700">
          <p className="text-muted">Last updated: {new Date().getFullYear()}</p>
          <p>
            {site.legalName} ("we," "us") respects your privacy. This page explains what we
            collect and how we use it.
          </p>
          <h2 className="text-xl font-extrabold text-navy-900">Information we collect</h2>
          <p>
            When you request a quote or contact us, we collect the details you provide — name,
            phone, email, address, and job details — solely to respond to your request and
            provide our services.
          </p>
          <h2 className="text-xl font-extrabold text-navy-900">How we use it</h2>
          <p>
            We use your information to give you a quote, schedule and perform work, and follow up.
            We do not sell your personal information. We may use website analytics and advertising
            tools (e.g., Google) to measure and improve our marketing.
          </p>
          <h2 className="text-xl font-extrabold text-navy-900">Contact</h2>
          <p>
            Questions? Email{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-aqua-700 underline">
              {site.email}
            </a>{" "}
            or call{" "}
            <a href={`tel:${site.phoneHref}`} className="font-semibold text-aqua-700 underline">
              {site.phoneDisplay}
            </a>
            .
          </p>
          <p className="text-sm text-muted">
            This is a starter policy for launch — have it reviewed for your final legal language.
          </p>
        </div>
      </Section>
    </>
  );
}
