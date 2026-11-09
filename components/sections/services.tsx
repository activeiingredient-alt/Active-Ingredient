import { BookButton } from "@/components/book-button";
import { MarkPetal } from "@/components/icons";
import { MandalaWatermark } from "@/components/ornaments";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { cn, container } from "@/lib/utils";

type Service = {
  title: string;
  descriptor: string;
  body: string;
  includes: string[];
  featured?: boolean;
};

const SERVICES: Service[] = [
  {
    title: "Foundations",
    descriptor:
      "For hosts new to Meta ads, or whose tracking never quite worked.",
    body: "We set up your ad account, tracking, and booking path properly, so everything that follows has something solid to stand on. You leave with a tested first set of ads and a clear picture of who you’re reaching.",
    includes: [
      "Account and tracking setup",
      "Audience foundations",
      "Booking path review",
      "One creative set",
    ],
  },
  {
    title: "The Fill Campaign",
    descriptor:
      "For hosts with a retreat on the calendar and seats still open.",
    body: "A focused campaign built around one retreat. We shape the message, create the ads, reach the people who already know your work, and make the next step feel clear, from first glance to deposit.",
    includes: [
      "Offer and message development",
      "Ad creative",
      "Cold and warm audience campaigns",
      "Retargeting of past guests and engaged followers",
      "Booking and deposit path",
      "Weekly updates and a final report",
    ],
    featured: true,
  },
  {
    title: "Always-On",
    descriptor:
      "For hosts running multiple retreats or offers through the year.",
    body: "Steady, thoughtful visibility between launches and during them. We keep your campaigns, creative, and audiences fresh so you aren’t starting from zero each time you announce.",
    includes: [
      "Ongoing campaign management",
      "Monthly creative refresh",
      "Audience building between retreats",
      "Monthly strategy call",
    ],
  },
];

function CardMark({ featured }: { featured?: boolean }) {
  return (
    <MarkPetal
      className={cn(
        "h-[28px] w-[28px]",
        featured ? "text-paper opacity-75" : "text-ink/60",
      )}
    />
  );
}

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-t border-hairline bg-cream"
    >
      <div className={cn(container, "py-24 md:py-32 lg:py-36")}>
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <SectionLabel>How we work together</SectionLabel>
          </div>
          <Reveal className="md:col-span-9">
            <h2
              id="services-heading"
              className="display-tight max-w-[24ch] text-[clamp(1.85rem,3.4vw,3rem)] leading-[1.16] text-ink"
            >
              Every retreat is different. Here are three ways we can support
              yours.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid items-stretch gap-5 md:mt-16 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 110}
              className="h-full"
            >
              <article
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-[3px] border p-7 md:p-8",
                  service.featured
                    ? "border-espresso bg-espresso text-paper lg:p-9"
                    : "border-hairline bg-paper/55 text-ink",
                )}
              >
                {service.featured && (
                  <MandalaWatermark
                    tone="cream"
                    className="absolute -right-14 -top-14 h-52 w-52 opacity-[0.05]"
                  />
                )}

                <div className="flex items-start justify-between gap-4">
                  <CardMark featured={service.featured} />
                  {service.featured && (
                    <span className="inline-flex shrink-0 items-center rounded-full border border-paper/25 px-3 py-[7px] text-[9.5px] uppercase leading-none tracking-[0.16em] text-paper/85">
                      Most popular starting point
                    </span>
                  )}
                </div>

                <h3 className="mt-9 font-serif text-[1.7rem] leading-none tracking-[-0.015em] md:text-[1.8rem]">
                  {service.title}
                </h3>

                <p
                  className={cn(
                    "mt-3 font-serif text-[13.5px] italic leading-[1.5]",
                    service.featured ? "text-paper/65" : "text-muted",
                  )}
                >
                  {service.descriptor}
                </p>

                <p
                  className={cn(
                    "mt-6 text-[13.5px] leading-[1.75]",
                    service.featured ? "text-paper/75" : "text-ink/75",
                  )}
                >
                  {service.body}
                </p>

                <div
                  className={cn(
                    "mt-auto pt-8",
                    service.featured ? "text-paper/75" : "text-ink/75",
                  )}
                >
                  <div
                    aria-hidden
                    className={cn(
                      "h-px w-full",
                      service.featured ? "bg-paper/15" : "bg-hairline",
                    )}
                  />
                  <p
                    className={cn(
                      "mt-6 text-[9.5px] uppercase tracking-[0.22em]",
                      service.featured ? "text-paper/65" : "text-muted",
                    )}
                  >
                    Includes
                  </p>
                  <ul className="mt-4 space-y-[10px]">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-[10px] text-[13px] leading-[1.55]"
                      >
                        <MarkPetal className="mt-[3px] h-[10px] w-[10px] shrink-0 opacity-50" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-14 max-w-[58ch] text-center md:mt-16">
          <p className="font-serif text-[clamp(1.05rem,1.5vw,1.3rem)] italic leading-[1.6] text-ink/70">
            Ad spend is paid directly to Meta from your own account. Every
            engagement starts with a conversation, because the right fit
            matters more than the right package.
          </p>
          <BookButton className="mt-9" />
        </Reveal>
      </div>
    </section>
  );
}
