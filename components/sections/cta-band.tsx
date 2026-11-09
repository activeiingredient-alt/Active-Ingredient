import { BookButton } from "@/components/book-button";
import { GullsWater } from "@/components/illustrations";
import { MandalaWatermark } from "@/components/ornaments";
import { Reveal } from "@/components/reveal";
import { cn, container } from "@/lib/utils";

const LINES = [
  "You already have the retreat.",
  "You have the experience.",
  "You have the knowledge.",
  "You have the space.",
  "You have people who believe in what you do.",
];

export function CtaBand() {
  return (
    <section
      aria-labelledby="closing-heading"
      className="on-espresso relative isolate overflow-hidden bg-espresso text-paper"
    >
      <MandalaWatermark
        tone="cream"
        className="absolute -right-[14%] -top-[22%] h-[86%] w-auto opacity-[0.045]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(90%_70%_at_18%_0%,rgba(250,247,242,0.07),rgba(43,23,9,0)_60%)]"
      />

      <div className={cn(container, "relative py-24 md:py-32 lg:py-36")}>
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <Reveal>
              <p
                aria-hidden
                className="font-serif text-[clamp(2.4rem,4.4vw,3.6rem)] italic leading-none text-paper/55"
              >
                So&hellip;
              </p>
              <h2
                id="closing-heading"
                className="display-tight mt-8 max-w-[18ch] text-[clamp(1.7rem,3.1vw,2.75rem)] leading-[1.28] text-paper"
              >
                {LINES.map((line, index) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </Reveal>
          </div>

          <Reveal
            delay={140}
            className="flex flex-col justify-end md:col-span-4 md:col-start-9"
          >
            <p className="max-w-[34ch] text-[14.5px] leading-[1.85] text-paper/70">
              But sometimes, the hard part is getting the right people to see
              it, and giving them a clear reason to say yes.
            </p>
            <p className="serif-tagline mt-5 text-[1.45rem] leading-[1.35] text-paper">
              That&rsquo;s where we come in.
            </p>
            <BookButton variant="light" className="mt-9 self-start" />
          </Reveal>
        </div>

        <GullsWater className="mx-auto mt-16 w-full max-w-[560px] text-paper/75 md:mt-20" />
      </div>
    </section>
  );
}
