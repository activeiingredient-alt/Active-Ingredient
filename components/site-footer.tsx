import { MandalaMark } from "@/components/ornaments";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn, container } from "@/lib/utils";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="on-espresso border-t border-paper/10 bg-espresso-deep text-paper"
    >
      <div className={cn(container, "py-16 md:py-20")}>
        <div className="grid gap-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <a
              href="#top"
              className="inline-flex items-center gap-3 rounded-sm"
              aria-label="Active Ingredient — back to top"
            >
              <MandalaMark
                tone="cream"
                className="h-9 w-9 opacity-90 md:h-10 md:w-10"
              />
              <span className="text-[16px] font-medium leading-none tracking-[-0.012em] md:text-[17px]">
                {SITE.wordmark}
                <sup className="ml-[1px] align-super text-[8px]">®</sup>
              </span>
            </a>

            <p className="serif-tagline mt-9 max-w-[16ch] text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.25] text-paper">
              Let&rsquo;s grow and evolve together.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:col-span-5 md:col-start-8">
            <div>
              <p className="text-[9.5px] uppercase leading-none tracking-[0.24em] text-paper/65">
                Contact
              </p>
              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="link-underline text-[13.5px] text-paper/85 transition-colors duration-300 hover:text-paper"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-[6px] text-[13.5px] text-paper/85 transition-colors duration-300 hover:text-paper"
                  >
                    <span className="link-underline">Instagram</span>
                    <svg
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden
                      focusable="false"
                      className="h-[9px] w-[9px] transition-transform duration-500 ease-calm group-hover:-translate-y-[1px] group-hover:translate-x-[1px]"
                    >
                      <path
                        d="M3.2 10.8 10.6 3.4M4.6 3.4h6v6"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[9.5px] uppercase leading-none tracking-[0.24em] text-paper/65">
                Explore
              </p>
              <ul className="mt-5 space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="link-underline text-[13.5px] text-paper/85 transition-colors duration-300 hover:text-paper"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/10 pt-6 text-[10.5px] leading-relaxed tracking-[0.02em] text-paper/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Active Ingredient. All rights reserved.
          </p>
          <p className="flex items-center gap-3 uppercase tracking-[0.22em]">
            <span aria-hidden className="h-px w-6 bg-paper/20" />
            Beyond the Algorithm
          </p>
        </div>
      </div>
    </footer>
  );
}
