import Link from "next/link";
import { site } from "@/site.config";
import { services } from "@/data/services";
import { towns } from "@/data/towns";
import { Icon } from "@/lib/icons";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="surface-navy grain mt-2 text-navy-100">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo light className="h-14" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-200">
            North Jersey's premier epoxy flooring &amp; concrete coating specialists.
            Locally owned, licensed &amp; insured, and obsessed with floors since 2010.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a href={`tel:${site.phoneHref}`} className="flex items-center gap-2 font-semibold text-white">
              <Icon.phone className="h-4 w-4 text-aqua-300" /> {site.phoneDisplay}
            </a>
          </div>
          <div className="mt-1 flex items-center gap-2 text-sm text-navy-200">
            <Icon.pin className="h-4 w-4 text-aqua-400" /> {site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-navy-200">
            <Icon.shield className="h-4 w-4 text-aqua-400" /> {site.licenseLine}
          </div>
          <div className="mt-4 flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-sm w-fit">
            <Icon.star className="h-4 w-4 text-sun-400" />
            <span className="font-bold text-white">{site.rating}★</span>
            <span className="text-navy-200">· tons of floors since 2010</span>
          </div>
        </div>

        <FooterCol title="Services">
          {services.map((s) => (
            <FooterLink key={s.slug} href={`/services/${s.slug}`}>
              {s.shortName}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Service Areas">
          {towns.map((t) => (
            <FooterLink key={t.slug} href={`/areas/${t.slug}`}>
              {t.name}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Company">
          <FooterLink href="/about">About Us</FooterLink>
          <FooterLink href="/gallery">Project Gallery</FooterLink>
          <FooterLink href="/reviews">Reviews</FooterLink>
          <FooterLink href="/cost">Pricing &amp; Cost Guides</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
          <FooterLink href="/quote">Get a Free Quote</FooterLink>
        </FooterCol>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-sm text-navy-300 md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="flex items-center gap-1.5">
              <Icon.shield className="h-4 w-4 text-aqua-400" /> {site.licenseLine}
            </span>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-aqua-300">{title}</h4>
      <ul className="mt-4 grid gap-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-navy-200 transition hover:text-white">
        {children}
      </Link>
    </li>
  );
}
