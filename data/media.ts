/**
 * Project media — Jersey Elite Coatings.
 *
 * All photos live in /public/photos as optimized WebP with keyword-rich
 * filenames (local SEO playbook: media named for target terms).
 *
 * ⚠️ AUDITED 2026-07-28 — every file in this library was opened and compared
 * against its caption. Eight were removed:
 *   • six were byte-for-byte duplicates of another file under a second name,
 *     so the gallery was showing the same photograph twice with two different
 *     captions (verified by md5: 26 files → 20 unique images)
 *   • flake-epoxy-floor-speckled.webp was a granite/stone texture, not an
 *     epoxy floor at all — and it was the hero of the Flake Epoxy service page
 *   • epoxy-floor-detail-view.webp was a second crop of the same garage as
 *     garage-epoxy-floor-hero.webp
 *
 * Captions below now describe what is actually visible in each frame. Keep it
 * that way: if you add a photo, look at it before you caption it, and never
 * caption a finished floor as a process shot.
 */

export type Tile = { src: string; caption: string; service?: string };

/** The full project gallery — also drives the /gallery page. */
export const galleryPhotos: Tile[] = [
  { src: "/photos/garage-floor-coating-nj.webp", caption: "Gray full-flake floor in a two-car residential garage", service: "Garage Epoxy" },
  { src: "/photos/blue-metallic-epoxy-floor.webp", caption: "Blue, black & white full-broadcast flake with a coved flake base", service: "Flake Epoxy" },
  { src: "/photos/red-flake-garage-epoxy-newark-nj.webp", caption: "Red base with black & white flake, single-bay shop garage", service: "Garage Epoxy" },
  { src: "/photos/garage-epoxy-floor-hero.webp", caption: "Blue-gray marbled finish, two-car garage with the door open", service: "Metallic Epoxy" },
  { src: "/photos/gold-metallic-epoxy-install.webp", caption: "Copper metallic pour being worked in an interior room", service: "Metallic Epoxy" },
  { src: "/photos/showroom-gold-flake-epoxy.webp", caption: "Two-tone showroom floor — black with gold fleck against white", service: "Commercial Epoxy" },
  { src: "/photos/commercial-white-epoxy-floor.webp", caption: "High-gloss white floor across an open commercial space", service: "Commercial Epoxy" },
  { src: "/photos/warehouse-epoxy-high-gloss.webp", caption: "Light gray high-gloss floor in a steel-frame warehouse", service: "Industrial Epoxy" },
  { src: "/photos/green-epoxy-warehouse-floor.webp", caption: "Green traffic aisle coated into the floor, gray to the sides", service: "Industrial Epoxy" },
  { src: "/photos/garage-epoxy-flake-floor.webp", caption: "Solid light-gray garage floor finished wall to wall", service: "Garage Epoxy" },
  { src: "/photos/red-epoxy-sunroom-floor.webp", caption: "Solid red high-gloss floor in a sun-filled interior room", service: "Metallic Epoxy" },
  { src: "/photos/auto-shop-epoxy-floor-polish.webp", caption: "Burnishing a finished gray floor in a service bay", service: "Commercial Epoxy" },
  { src: "/photos/black-metallic-epoxy-pour.webp", caption: "Black metallic being worked over a primed basement slab", service: "Basement Epoxy" },
  { src: "/photos/epoxy-floor-coating-nj.webp", caption: "Rolling a blue-gray coat across an open floor", service: "Commercial Epoxy" },
];

/** On-the-job process shots — what the work actually looks like.
 *  NOTE: there is no diamond-grinding photo in this library. The file that
 *  claimed to be one showed a finished floor. Do not re-add that claim until
 *  there is a real grinding photo to back it. */
export const actionPhotos: Tile[] = [
  { src: "/photos/epoxy-installation-in-progress.webp", caption: "Pouring mixed epoxy onto a prepared slab" },
  { src: "/photos/black-metallic-epoxy-pour.webp", caption: "Hand-working a black metallic pour" },
  { src: "/photos/gold-metallic-epoxy-install.webp", caption: "Two-man metallic install — the resin is worked while it moves" },
  { src: "/photos/commercial-epoxy-crew-install.webp", caption: "Crew coating a large commercial floor" },
  { src: "/photos/epoxy-topcoat-detail-install.webp", caption: "Cutting in the topcoat at the edge" },
  { src: "/photos/epoxy-floor-coating-nj.webp", caption: "Rolling out a coat across open floor" },
  { src: "/photos/basement-epoxy-floor-coating.webp", caption: "Troweling a pigmented resin coat" },
  { src: "/photos/auto-shop-epoxy-floor-polish.webp", caption: "Burnishing the finished surface" },
];

/** Feature shots used across section imagery. */
export const featured = {
  hero: { src: "/photos/garage-epoxy-floor-hero.webp", caption: "Blue-gray marbled garage floor — North Jersey" },
  process: { src: "/photos/epoxy-installation-in-progress.webp", caption: "Pouring mixed epoxy onto a prepared slab" },
  team: { src: "/photos/commercial-epoxy-crew-install.webp", caption: "Jersey Elite Coatings crew coating a commercial floor" },
  metallic: { src: "/photos/black-metallic-epoxy-pour.webp", caption: "Metallic epoxy pour" },
};
