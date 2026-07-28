"use client";

import { useState } from "react";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-navy-50 overflow-hidden rounded-2xl border border-navy-50 bg-white shadow-[var(--shadow-soft)]">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7"
              aria-expanded={isOpen}
            >
              <span className="text-[15px] font-bold text-navy-800 md:text-base">{it.q}</span>
              <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-aqua-100 text-aqua-700 transition ${isOpen ? "rotate-45" : ""}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[15px] leading-relaxed text-navy-600 md:px-7">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
