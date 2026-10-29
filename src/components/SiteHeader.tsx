"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scrolling while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid ? "bg-paper/90 text-ink shadow-[0_1px_0_var(--color-line)] backdrop-blur-lg" : "bg-linear-to-b from-ink/80 to-transparent text-paper"
        }`}
      >
        <div className="container-page flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center" aria-label={`${site.name} home`}>
            <Image src="/brand/logo-lockup.png" alt="Gold Acres" width={374} height={167} priority className="h-14 w-auto" />
          </Link>

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                        active ? "" : "opacity-80 hover:opacity-100"
                      }`}
                    >
                      {item.label}
                      {active && <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gold-400" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/contact" className="btn-gold hidden !py-2.5 md:inline-flex">
              Enrol your child
            </Link>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </header>

        {/* Kept outside <header>: its backdrop-filter would otherwise become this panel's containing block. */}
        <div
          id="mobile-menu"
          className={`fixed inset-x-0 top-20 bottom-0 z-40 bg-paper text-ink transition-[opacity,visibility] duration-300 md:hidden ${
            open ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <nav aria-label="Mobile" className="container-page flex h-full flex-col pt-6 pb-10">
            <ul className="divide-y divide-line">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block py-5 font-display text-3xl ${pathname === item.href ? "text-sky-700" : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-dark mt-auto w-full">
              Enrol your child
            </Link>
          </nav>
        </div>
    </>
  );
}
