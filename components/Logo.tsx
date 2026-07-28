import Image from "next/image";
import { site } from "@/site.config";

/**
 * Brand lockup — the circular NJ-state mark from the real logo plus a text
 * wordmark (the full stacked logo is too tall for a header bar).
 * `light` switches the wordmark to white for dark backgrounds.
 */
export function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src={light ? "/logo-mark-light.png" : "/logo-mark.png"}
        alt=""
        width={279}
        height={239}
        className="h-10 w-auto"
      />
      <span className="leading-none">
        <span className={`block text-[17px] font-extrabold tracking-tight ${light ? "text-white" : "text-navy-800"}`}>
          Jersey Elite <span className="text-aqua-500">Coatings</span>
        </span>
        <span className={`mt-1 block text-[10px] font-bold uppercase tracking-[0.22em] ${light ? "text-navy-200" : "text-muted"}`}>
          Epoxy Flooring · NJ
        </span>
      </span>
      <span className="sr-only">{site.name} — epoxy flooring in North Jersey</span>
    </span>
  );
}
