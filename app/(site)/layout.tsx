import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCallBar } from "@/components/StickyCallBar";

/** Full-chrome layout for the main marketing site (nav + footer + mobile call bar). */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <StickyCallBar />
      <div className="h-14 lg:hidden" aria-hidden />
    </>
  );
}
