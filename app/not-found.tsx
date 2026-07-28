import Link from "next/link";
import { site } from "@/site.config";
import { Icon } from "@/lib/icons";

export default function NotFound() {
  return (
    <section className="surface-navy grain flex min-h-[70vh] items-center text-white">
      <div className="container-x text-center">
        <span className="text-6xl font-black text-aqua-300">404</span>
        <h1 className="mt-4 text-3xl font-extrabold md:text-4xl">This page got ground away</h1>
        <p className="mx-auto mt-3 max-w-md text-navy-100">
          The page you're looking for isn't here — but the best floors in North Jersey still are.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary">
            <Icon.home className="h-4 w-4" /> Back home
          </Link>
          <a href={`tel:${site.phoneHref}`} className="btn btn-ghost">
            <Icon.phone className="h-4 w-4" /> {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
