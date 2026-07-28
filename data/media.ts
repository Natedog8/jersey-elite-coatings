/**
 * Project media — Jersey Elite Coatings.
 *
 * All photos live in /public/photos as optimized WebP with keyword-rich
 * filenames (local SEO playbook: media named for target terms).
 */

export type Tile = { src: string; caption: string; service?: string };

/** The full project gallery — also drives the /gallery page. */
export const galleryPhotos: Tile[] = [
  { src: "/photos/red-flake-garage-epoxy-newark-nj.webp", caption: "Red flake garage epoxy — Newark, NJ", service: "Garage Epoxy" },
  { src: "/photos/black-metallic-epoxy-garage.webp", caption: "Black metallic epoxy garage floor", service: "Metallic Epoxy" },
  { src: "/photos/garage-epoxy-floor-hero.webp", caption: "Blue-gray flake epoxy, 2-car garage", service: "Garage Epoxy" },
  { src: "/photos/flake-epoxy-floor-speckled.webp", caption: "Full-broadcast flake system", service: "Flake Epoxy" },
  { src: "/photos/commercial-white-epoxy-floor.webp", caption: "High-gloss white commercial floor", service: "Commercial Epoxy" },
  { src: "/photos/warehouse-epoxy-high-gloss.webp", caption: "Warehouse epoxy, high-gloss gray", service: "Industrial Epoxy" },
  { src: "/photos/basement-epoxy-floor-coating.webp", caption: "Basement epoxy floor coating", service: "Basement Epoxy" },
  { src: "/photos/blue-metallic-epoxy-floor.webp", caption: "Blue flake epoxy floor", service: "Flake Epoxy" },
  { src: "/photos/showroom-gold-flake-epoxy.webp", caption: "Showroom floor with gold flake", service: "Commercial Epoxy" },
  { src: "/photos/green-epoxy-warehouse-floor.webp", caption: "Green industrial epoxy, warehouse", service: "Industrial Epoxy" },
  { src: "/photos/red-epoxy-sunroom-floor.webp", caption: "Red high-gloss interior epoxy", service: "Metallic Epoxy" },
  { src: "/photos/garage-floor-coating-nj.webp", caption: "Garage floor coating — New Jersey", service: "Garage Epoxy" },
  { src: "/photos/garage-epoxy-flake-floor.webp", caption: "Flake epoxy garage floor", service: "Garage Epoxy" },
  { src: "/photos/epoxy-floor-coating-nj.webp", caption: "Epoxy floor coating detail", service: "Garage Epoxy" },
  { src: "/photos/epoxy-floor-detail-view.webp", caption: "Seamless epoxy surface, floor view", service: "Flake Epoxy" },
  { src: "/photos/auto-shop-epoxy-floor-polish.webp", caption: "Auto shop epoxy floor", service: "Commercial Epoxy" },
  { src: "/photos/commercial-gray-epoxy-warehouse.webp", caption: "Gray epoxy warehouse floor", service: "Industrial Epoxy" },
  { src: "/photos/red-flake-garage-epoxy-2.webp", caption: "Red flake system, finished garage", service: "Garage Epoxy" },
];

/** On-the-job process shots — proof of the prep-first method. */
export const actionPhotos: Tile[] = [
  { src: "/photos/diamond-grinding-floor-prep.webp", caption: "Diamond grinding — the prep step that makes coatings last" },
  { src: "/photos/black-metallic-epoxy-pour.webp", caption: "Hand-working a black metallic epoxy pour" },
  { src: "/photos/gold-metallic-epoxy-install.webp", caption: "Metallic epoxy install in progress" },
  { src: "/photos/commercial-epoxy-crew-install.webp", caption: "Crew coating a commercial floor" },
  { src: "/photos/epoxy-topcoat-detail-install.webp", caption: "Detail work on a clear topcoat" },
  { src: "/photos/epoxy-installation-in-progress.webp", caption: "Base coat going down" },
  { src: "/photos/team-installing-epoxy.webp", caption: "The team mid-install" },
  { src: "/photos/epoxy-installer-detail.webp", caption: "Edge and cut-in detail work" },
];

/** Feature shots used across section imagery. */
export const featured = {
  hero: { src: "/photos/garage-epoxy-floor-hero.webp", caption: "Flake epoxy garage floor — North Jersey" },
  process: { src: "/photos/diamond-grinding-floor-prep.webp", caption: "Diamond grinding preparation" },
  team: { src: "/photos/team-installing-epoxy.webp", caption: "Jersey Elite Coatings crew installing epoxy" },
  metallic: { src: "/photos/black-metallic-epoxy-pour.webp", caption: "Metallic epoxy pour" },
};
