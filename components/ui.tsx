import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/lib/icons";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`container-x ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`section ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow">
      <span className="h-1.5 w-1.5 rounded-full bg-aqua-400" />
      {children}
    </span>
  );
}

export function StarRow({ value = 5, className = "" }: { value?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 text-sun-500 ${className}`} aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon.star key={i} className="h-4 w-4" />
      ))}
    </span>
  );
}

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "aqua" | "ghost" | "outline";
  className?: string;
  icon?: keyof typeof Icon;
};

export function Button({ href, children, variant = "primary", className = "", icon }: BtnProps) {
  const I = icon ? Icon[icon] : null;
  const cls = `btn btn-${variant} ${className}`;
  const inner = (
    <>
      {I && <I className="h-[1.1em] w-[1.1em]" />}
      {children}
    </>
  );
  if (href.startsWith("tel:") || href.startsWith("http")) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function CheckList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`grid gap-3 ${className}`}>
      {items.map((it) => (
        <li key={it} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-aqua-100 text-aqua-700">
            <Icon.check className="h-3.5 w-3.5" />
          </span>
          <span className="text-[15px] leading-relaxed text-navy-700">{it}</span>
        </li>
      ))}
    </ul>
  );
}
