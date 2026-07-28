import type { MetadataRoute } from "next";
import { site } from "@/site.config";
import { serviceSlugs } from "@/data/services";
import { townSlugs, comboServiceSlugs } from "@/data/towns";
import { countySlugs } from "@/data/counties";
import { countyComboServiceSlugs, countyServiceAngle } from "@/data/countyServices";
import { costSlugs } from "@/data/costs";

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (p: string) => `${site.url}${p}`;
  const now = new Date();

  const statics = ["", "/services", "/areas", "/cost", "/reviews", "/about", "/gallery", "/contact", "/quote"];

  const entries: MetadataRoute.Sitemap = [
    ...statics.map((p) => ({ url: u(p || "/"), lastModified: now, changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.8 })),
    ...serviceSlugs.map((s) => ({ url: u(`/services/${s}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...countySlugs.map((c) => ({ url: u(`/areas/${c}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...countySlugs.flatMap((c) =>
      countyComboServiceSlugs
        .filter((s) => Boolean(countyServiceAngle(c, s)))
        .map((s) => ({ url: u(`/areas/${c}/${s}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 }))
    ),
    ...townSlugs.map((t) => ({ url: u(`/areas/${t}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 })),
    ...townSlugs.flatMap((t) =>
      comboServiceSlugs.map((s) => ({ url: u(`/areas/${t}/${s}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 }))
    ),
    ...costSlugs.map((c) => ({ url: u(`/cost/${c}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.75 })),
  ];

  return entries;
}
