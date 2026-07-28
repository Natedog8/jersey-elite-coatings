import { site } from "@/site.config";
import { Icon } from "@/lib/icons";

/** Mobile-only sticky action bar — call + quote always one tap away.
 *  This is where a huge share of home-services conversions happen. */
export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t border-navy-100 bg-navy-100 shadow-[0_-8px_24px_-12px_rgba(7,23,43,0.3)] lg:hidden">
      <a
        href={`tel:${site.phoneHref}`}
        className="flex items-center justify-center gap-2 bg-white py-3.5 font-bold text-navy-800"
      >
        <Icon.phone className="h-5 w-5 text-red-600" /> Call Now
      </a>
      <a
        href="/quote"
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-700 py-3.5 font-bold text-white"
      >
        <Icon.bolt className="h-5 w-5" /> Free Quote
      </a>
    </div>
  );
}
