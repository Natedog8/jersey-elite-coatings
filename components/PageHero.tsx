import Link from "next/link";
import { Container } from "./ui";
import { Icon } from "@/lib/icons";

export function Breadcrumbs({ items }: { items: { name: string; url: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-navy-200">
        {items.map((it, i) => (
          <li key={it.url} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-navy-300">/</span>}
            {i === items.length - 1 ? (
              <span className="text-white">{it.name}</span>
            ) : (
              <Link href={it.url} className="hover:text-aqua-200">
                {it.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  sub,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  breadcrumbs?: { name: string; url: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="surface-navy grain text-white">
      <Container className="py-12 md:py-16">
        {breadcrumbs && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-aqua-200">
            <Icon.pin className="h-3.5 w-3.5" /> {eyebrow}
          </span>
        )}
        <h1 className="mt-4 max-w-3xl text-3xl font-black leading-[1.06] tracking-tight md:text-5xl">
          {title}
        </h1>
        {sub && <p className="mt-4 max-w-2xl text-lg text-navy-100">{sub}</p>}
        {children && <div className="mt-7">{children}</div>}
      </Container>
    </section>
  );
}
