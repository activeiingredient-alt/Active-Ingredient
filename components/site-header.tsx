"use client";

import { useEffect, useState } from "react";
import { BookButton } from "@/components/book-button";
import { MandalaMark } from "@/components/ornaments";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn, container } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Announcement bar */}
      <div role="region" aria-label="Announcement" className="bg-espresso text-paper">
        <p className="mx-auto max-w-page px-6 py-[11px] text-center text-[10px] uppercase leading-none tracking-[0.28em] text-paper/80 sm:text-[10.5px]">
          Beyond the Algorithm
        </p>
      </div>

      <header className="sticky top-0 z-50 border-b border-hairline-soft bg-paper/85 backdrop-blur-md supports-[backdrop-filter]:bg-paper/70">
        <div
          className={cn(
            container,
            "flex h-[70px] items-center justify-between gap-6 md:h-[78px]",
          )}
        >
          <a
            href="#top"
            className="group flex items-center gap-[10px] rounded-sm py-1"
            aria-label="Active Ingredient — back to top"
          >
            <MandalaMark className="h-[26px] w-[26px] transition-transform duration-[1200ms] ease-calm group-hover:rotate-45 md:h-[30px] md:w-[30px]" />
            <span className="flex flex-col">
              <span className="text-[15px] font-medium leading-none tracking-[-0.012em] md:text-[16.5px]">
                {SITE.wordmark}
                <sup className="ml-[1px] align-super text-[8px]">®</sup>
              </span>
              <span className="mt-1 text-[9.5px] leading-none tracking-[0.06em] text-muted">
                {SITE.tagline}
              </span>
            </span>
          </a>

          <div className="flex items-center gap-8">
            <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="link-underline py-1 text-[12.5px] tracking-[0.01em] text-ink/80 transition-colors duration-300 hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <BookButton className="hidden sm:inline-flex" />

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full md:hidden"
            >
              <span className="relative block h-[9px] w-[20px]">
                <span
                  className={cn(
                    "absolute left-0 block h-px w-full bg-ink transition-transform duration-300 ease-calm",
                    open ? "top-[4px] rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 block h-px w-full bg-ink transition-transform duration-300 ease-calm",
                    open ? "top-[4px] -rotate-45" : "top-[8px]",
                  )}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          hidden={!open}
          className="border-t border-hairline bg-paper md:hidden"
        >
          <nav aria-label="Mobile" className="px-6 pb-8 pt-4 sm:px-8">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-hairline-soft py-4 font-serif text-[22px] tracking-[-0.01em]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <BookButton
              className="mt-7 w-full justify-center"
              label="Book a meeting"
            />
          </nav>
        </div>
      </header>
    </>
  );
}
