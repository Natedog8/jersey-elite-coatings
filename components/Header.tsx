"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/site.config";
import { services } from "@/data/services";
import { towns } from "@/data/towns";
import { counties } from "@/data/counties";
import { Icon } from "@/lib/icons";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<"services" | "areas" | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-50 bg-white/85 backdrop-blur-lg">
      {/* top utility bar */}
      <div className="hidden bg-navy-900 text-white md:block">
        <div className="container-x flex h-9 items-center justify-between text-[13px]">
          <span className="flex items-center gap-2 text-navy-100">
            <Icon.shield className="h-3.5 w-3.5 text-aqua-300" />
            Licensed &amp; Insured · Lifetime Warranty · Serving all of North Jersey
          </span>
          <span className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-navy-100">
              <Icon.star className="h-3.5 w-3.5 text-sun-400" /> {site.rating}★ Rated · Since 2010
            </span>
            <a href={`tel:${site.phoneHref}`} className="flex items-center gap-1.5 font-semibold text-aqua-200 hover:text-white">
              <Icon.phone className="h-3.5 w-3.5" /> {site.phoneDisplay}
            </a>
          </span>
        </div>
      </div>

      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setMenu(null)}>
          <NavDrop label="Services" open={menu === "services"} onEnter={() => setMenu("services")}>
            <div className="grid w-[560px] grid-cols-2 gap-1 p-2">
              {services.map((s) => {
                const I = Icon[s.icon as keyof typeof Icon] ?? Icon.spray;
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex items-start gap-3 rounded-xl p-3 transition hover:bg-aqua-50"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-aqua-100 text-aqua-700">
                      <I className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-navy-800">{s.shortName}</span>
                      <span className="block text-xs text-muted">{s.tagline}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </NavDrop>

          <NavDrop label="Service Areas" open={menu === "areas"} onEnter={() => setMenu("areas")}>
            <div className="w-[460px] p-3">
              <span className="px-2 text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
                By county
              </span>
              <div className="mt-1.5 grid grid-cols-2 gap-1">
                {counties.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/areas/${c.slug}`}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold text-navy-800 transition hover:bg-aqua-50 hover:text-aqua-700"
                  >
                    <Icon.pin className="h-4 w-4 shrink-0 text-aqua-600" />
                    {c.name}
                  </Link>
                ))}
              </div>
              <span className="mt-3 block border-t border-navy-50 px-2 pt-3 text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
                By town
              </span>
              <div className="mt-1.5 grid grid-cols-3 gap-1">
                {towns.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/areas/${t.slug}`}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-navy-700 transition hover:bg-aqua-50 hover:text-aqua-700"
                  >
                    {t.name}
                  </Link>
                ))}
              </div>
            </div>
          </NavDrop>

          <TopLink href="/cost">Pricing</TopLink>
          <TopLink href="/finishes">Finishes</TopLink>
          <TopLink href="/reviews">Reviews</TopLink>
          <TopLink href="/about">About</TopLink>
        </nav>

        <div className="flex items-center gap-2">
          <a href={`tel:${site.phoneHref}`} className="btn btn-outline hidden h-10 px-4 text-sm sm:inline-flex">
            <Icon.phone className="h-4 w-4" /> Call
          </a>
          <Link href="/quote" className="btn btn-primary h-10 px-4 text-sm">
            Free Quote
          </Link>
          <button
            className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-navy-100 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="border-t border-navy-50 bg-white lg:hidden">
          <div className="container-x grid gap-1 py-4">
            <MobileGroup title="Services" links={services.map((s) => ({ href: `/services/${s.slug}`, label: s.shortName }))} onNav={() => setOpen(false)} />
            <MobileGroup
              title="Service Areas"
              links={[
                ...counties.map((c) => ({ href: `/areas/${c.slug}`, label: c.name })),
                ...towns.map((t) => ({ href: `/areas/${t.slug}`, label: t.name })),
              ]}
              onNav={() => setOpen(false)}
            />
            {[
              ["/cost", "Pricing"],
              ["/finishes", "Finishes"],
              ["/gallery", "Gallery"],
              ["/why-epoxy-floors-fail", "Why Floors Fail"],
              ["/reviews", "Reviews"],
              ["/about", "About"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 font-semibold text-navy-800 hover:bg-aqua-50">
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function TopLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="rounded-lg px-3.5 py-2 text-sm font-semibold text-navy-700 transition hover:bg-aqua-50 hover:text-aqua-700">
      {children}
    </Link>
  );
}

function NavDrop({
  label,
  open,
  onEnter,
  children,
}: {
  label: string;
  open: boolean;
  onEnter: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="relative" onMouseEnter={onEnter}>
      <button className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-semibold text-navy-700 transition hover:bg-aqua-50 hover:text-aqua-700">
        {label}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
          <div className="overflow-hidden rounded-2xl border border-navy-50 bg-white shadow-[var(--shadow-lift)]">{children}</div>
        </div>
      )}
    </div>
  );
}

function MobileGroup({
  title,
  links,
  onNav,
}: {
  title: string;
  links: { href: string; label: string }[];
  onNav: () => void;
}) {
  const [o, setO] = useState(false);
  return (
    <div>
      <button onClick={() => setO((v) => !v)} className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 font-semibold text-navy-800 hover:bg-aqua-50">
        {title}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={o ? "rotate-180 transition" : "transition"}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {o && (
        <div className="grid grid-cols-2 gap-1 px-2 pb-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={onNav} className="rounded-lg px-3 py-2 text-sm text-navy-600 hover:bg-aqua-50">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
