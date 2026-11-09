import { BirdMark } from "@/components/illustrations";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { cn, container } from "@/lib/utils";

const STEPS = [
  {
    title: "Listen",
    body: "Understand your work and who it’s for.",
  },
  {
    title: "Shape the message",
    body: "Story, offer, creative.",
  },
  {
    title: "Put it in front of the right people",
    body: "Meta campaigns.",
  },
  {
    title: "Make the next step clear",
    body: "Booking path, follow-up, refine.",
  },
] as const;

export function Process() {
  return (
    <section
      aria-labelledby="process-heading"
      className="border-t border-hairline bg-paper"
    >
      <div className={cn(container, "py-24 md:py-32")}>
        <div className="flex flex-wrap items-baseline justify-between gap-6">
          <SectionLabel>How it works</SectionLabel>
          <p className="max-w-[30ch] font-serif text-[15px] italic leading-[1.6] text-muted">
            Exact scope is discussed on a call.
          </p>
        </div>
        <h2 id="process-heading" className="sr-only">
          How it works
        </h2>

        <div className="relative mt-14 md:mt-20">
          {/* Connecting line: horizontal on desktop, vertical on mobile */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[6px] hidden h-px bg-hairline md:block"
          />
          <div
            aria-hidden
            className="absolute bottom-2 left-[6px] top-0 w-px bg-hairline md:hidden"
          />

          <ol className="grid gap-y-11 md:grid-cols-4 md:gap-x-10">
            {STEPS.map((step, index) => (
              <li key={step.title} className="relative pl-9 md:pl-0 md:pt-11">
                <span
                  aria-hidden
                  className="absolute left-0 top-[1px] flex h-3 w-3 items-center justify-center bg-paper md:-top-[14px]"
                >
                  <BirdMark className="h-[10px] w-[20px] text-ink/60" />
                </span>
                <Reveal delay={index * 90}>
                  <p className="text-[10px] tracking-[0.18em] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 max-w-[14ch] font-serif text-[1.45rem] leading-[1.2] tracking-[-0.01em] text-ink md:text-[1.6rem]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 max-w-[24ch] text-[14px] leading-[1.65] text-muted">
                    {step.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
