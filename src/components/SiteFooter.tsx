import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import SocialLinks from "./SocialIcons";
import { nav, site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-paper/80">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Image src="/brand/logo-on-dark.png" alt={`Gold Acres, established in ${site.founded}`} width={374} height={198} className="h-24 w-auto" />
          <p className="mt-6 max-w-sm leading-relaxed">{site.tagline}</p>
          <SocialLinks className="mt-6 text-paper" />
        </div>

        <div className="md:col-span-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-paper">Explore</h2>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-gold-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-paper">Visit or reach us</h2>
          <ul className="mt-5 space-y-4">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-gold-400" />
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-gold-300">
                {site.address.join(", ")}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-gold-400" />
              <a href={`mailto:${site.email}`} className="break-all transition hover:text-gold-300">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-gold-400" />
              <a href={site.phoneHref} className="transition hover:text-gold-300">
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-display italic text-gold-300">{site.motto.join(" · ")}</p>
        </div>
      </div>
    </footer>
  );
}
