import { Icon } from "@/components/icons";
import { MandalaMark } from "@/components/ornaments";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { cn, container } from "@/lib/utils";

const OFFERINGS = [
  {
    icon: "visibility",
    text: "Building visibility around your retreat and your work",
  },
  {
    icon: "story",
    text: "Creating content and ad creative that tells your story and what makes your retreat different",
  },
  {
    icon: "audience",
    text: "Reaching the people who already know, like, or trust you (warm audiences and retargeting)",
  },
  {
    icon: "campaign",
    text: "Meta ad campaigns that turn interest into deposits and bookings",
  },
  {
    icon: "presence",
    text: "Staying visible without constantly feeling like you have to “sell”",
  },
  {
    icon: "journey",
    text: "Supporting the journey from discovering your work to stepping into the retreat",
  },
] as const;

export function WhatWeDo() {
  return (
    <section
      aria-labelledby="what-we-do-heading"
      className="border-t border-hairline bg-cream"
    >
      <div className={cn(container, "py-24 md:py-32 lg:py-36")}>
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <SectionLabel>What we do</SectionLabel>
          </div>
          <Reveal className="md:col-span-9">
            <h2
              id="what-we-do-heading"
              className="display-tight max-w-[26ch] text-[clamp(1.85rem,3.4vw,3rem)] leading-[1.16] text-ink"
            >
              We help you turn your work into something people can see,
              understand, trust, and ultimately book.
            </h2>
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-x-12 md:mt-16 md:grid-cols-2">
          {OFFERINGS.map((item, index) => (
            <li key={item.text} className="border-t border-hairline">
              <Reveal delay={index * 60}>
                <div className="group flex items-start gap-5 py-7 md:gap-6 md:py-8">
                  <span className="mt-[3px] w-6 shrink-0 text-[10px] leading-none tracking-[0.16em] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon
                    name={item.icon}
                    className="mt-[1px] h-[26px] w-[26px] shrink-0 text-ink/55 transition-colors duration-500 group-hover:text-ink/80"
                  />
                  <p className="max-w-[38ch] text-[14.5px] leading-[1.7] text-ink/85 md:text-[15px]">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-8 border-t border-hairline pt-12 md:mt-20 md:grid-cols-12">
          <div className="md:col-span-3">
            <MandalaMark className="h-7 w-7 opacity-45" />
          </div>
          <Reveal className="md:col-span-8 md:col-start-4">
            <p className="serif-tagline max-w-[38ch] text-[clamp(1.3rem,2.05vw,1.8rem)] leading-[1.45] text-ink/85">
              We don&rsquo;t believe the answer is simply &ldquo;post
              more.&rdquo; It&rsquo;s about creating the right message, putting
              it in front of the right people, and making the next step feel
              clear.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
