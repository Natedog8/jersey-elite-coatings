/**
 * Lightweight Google Maps embed — no API key required (uses the public
 * maps output=embed endpoint). Lazy-loaded so it never hurts LCP/INP.
 * Feeds the local-SEO "map embed" signal and gives visitors orientation.
 */
export function MapEmbed({
  query,
  title,
  className = "",
  height = 320,
}: {
  query: string;
  title: string;
  className?: string;
  height?: number;
}) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=12&output=embed`;
  return (
    <div className={`overflow-hidden rounded-2xl border border-navy-50 shadow-[var(--shadow-soft)] ${className}`}>
      <iframe
        src={src}
        title={title}
        width="100%"
        height={height}
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-label={title}
      />
    </div>
  );
}
