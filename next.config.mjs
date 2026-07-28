/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // ── Legacy static-site URLs → new structure (301s preserve equity) ──
      { source: "/garage-epoxy-flooring-north-jersey", destination: "/services/garage-epoxy-flooring", permanent: true },
      { source: "/commercial-epoxy-flooring-north-jersey", destination: "/services/commercial-epoxy-flooring", permanent: true },
      { source: "/industrial-epoxy-flooring-north-jersey", destination: "/services/industrial-epoxy-flooring", permanent: true },
      { source: "/basement-epoxy-flooring-north-jersey", destination: "/services/basement-epoxy-flooring", permanent: true },
      { source: "/metallic-decorative-epoxy-north-jersey", destination: "/services/metallic-epoxy-flooring", permanent: true },
      { source: "/restaurant-kitchen-epoxy-flooring", destination: "/services/restaurant-kitchen-epoxy-flooring", permanent: true },
      { source: "/metallic-epoxy-flooring", destination: "/services/metallic-epoxy-flooring", permanent: true },
      { source: "/flake-epoxy-systems", destination: "/services/flake-epoxy-flooring", permanent: true },
      // Old dead links that were in the footer/nav for a year — catch anything indexed
      { source: "/newark-epoxy-flooring", destination: "/areas/newark", permanent: true },
      { source: "/jersey-city-epoxy-flooring", destination: "/areas/jersey-city", permanent: true },
      { source: "/hoboken-epoxy-flooring", destination: "/areas/hoboken", permanent: true },
      { source: "/clifton-epoxy-flooring", destination: "/areas/clifton", permanent: true },
      { source: "/paterson-epoxy-flooring", destination: "/areas/paterson", permanent: true },
      { source: "/newark", destination: "/areas/newark", permanent: true },
      { source: "/jersey-city", destination: "/areas/jersey-city", permanent: true },
      { source: "/hoboken", destination: "/areas/hoboken", permanent: true },
      { source: "/bergen-county", destination: "/areas/bergen-county", permanent: true },
      { source: "/essex-county", destination: "/areas/essex-county", permanent: true },
      { source: "/bergen-county-epoxy", destination: "/areas/bergen-county", permanent: true },
      { source: "/essex-county-epoxy", destination: "/areas/essex-county", permanent: true },
      { source: "/passaic-county-epoxy", destination: "/areas/passaic-county", permanent: true },
      { source: "/hudson-county-epoxy", destination: "/areas/hudson-county", permanent: true },
      { source: "/morris-county-epoxy", destination: "/areas/morris-county", permanent: true },
      { source: "/union-county-epoxy", destination: "/areas/union-county", permanent: true },
      { source: "/union-county", destination: "/areas/union-county", permanent: true },
      { source: "/elizabeth-epoxy-flooring", destination: "/areas/elizabeth", permanent: true },
      { source: "/westfield-epoxy-flooring", destination: "/areas/westfield", permanent: true },
      { source: "/summit-epoxy-flooring", destination: "/areas/summit", permanent: true },
      // Polyaspartic / 1-day terms — high-volume searches the old site never had a page for
      { source: "/polyaspartic-flooring", destination: "/services/polyaspartic-floor-coating", permanent: true },
      { source: "/polyaspartic-coating", destination: "/services/polyaspartic-floor-coating", permanent: true },
      { source: "/one-day-garage-floor", destination: "/services/polyaspartic-floor-coating", permanent: true },
      { source: "/1-day-garage-floor", destination: "/services/polyaspartic-floor-coating", permanent: true },
      { source: "/epoxy-floor-repair", destination: "/services/garage-epoxy-flooring", permanent: true },
      { source: "/garage-floor-repair", destination: "/services/garage-epoxy-flooring", permanent: true },
      { source: "/epoxy-maintenance", destination: "/cost/how-long-does-epoxy-flooring-last", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/terms-of-service", destination: "/privacy", permanent: true },
      { source: "/terms", destination: "/privacy", permanent: true },
    ];
  },
};

export default nextConfig;
