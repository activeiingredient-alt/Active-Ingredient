import { BookButton } from "@/components/book-button";
import { Branch, Flock } from "@/components/illustrations";
import { MandalaWatermark, Sun } from "@/components/ornaments";
import { Reveal } from "@/components/reveal";
import { cn, container } from "@/lib/utils";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Warm grey-to-cream field */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#EAE2D6_0%,#F1EADE_30%,#F8F4EC_64%,#FAF7F2_88%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[70%] bg-[radial-gradient(120%_90%_at_50%_-20%,rgba(255,253,249,0.85),rgba(250,247,242,0)_65%)]"
      />

      <div className={container}>
        <div className="pt-9 md:pt-12">
          <p className="max-w-none text-[10.5px] uppercase leading-[1.75] tracking-[0.18em] text-muted sm:text-[11px]">
            Growth partner for retreat hosts,
            <br /> spiritual coaches &amp; teachers
          </p>
        </div>

        {/* Illustration stage */}
        <div
          aria-hidden
          className="relative mt-7 h-[31vh] min-h-[210px] md:mt-10 md:h-[42vh] md:min-h-[300px]"
        >
          <MandalaWatermark className="absolute right-[16%] top-1/2 h-[104%] w-auto -translate-y-1/2 opacity-[0.045]" />
          <Sun className="absolute right-[7%] top-[3%] h-[clamp(96px,26vw,206px)] w-[clamp(96px,26vw,206px)] animate-breathe md:right-[3%] md:h-[clamp(96px,14vw,206px)] md:w-[clamp(96px,14vw,206px)]" />
          <Branch className="absolute -left-5 bottom-0 h-[86%] w-auto text-ink/55 md:bottom-[-6%] md:left-[1.5%] md:h-[104%]" />
          <Flock className="absolute inset-0 h-full w-full text-ink" />
        </div>

        {/* Headline and intro */}
        <div className="grid grid-cols-1 items-end gap-y-10 pb-12 pt-7 md:grid-cols-12 md:gap-x-8 md:pb-24 md:pt-2">
          <Reveal className="md:col-span-8 md:col-start-5 md:row-start-1">
            <h1 className="display text-[clamp(3rem,8.6vw,8.25rem)] text-ink">
              Let&rsquo;s grow
              <span className="mt-[0.02em] block italic tracking-[-0.035em]">
                together.
              </span>
            </h1>
          </Reveal>

          <Reveal
            delay={140}
            className="md:col-span-4 md:col-start-1 md:row-start-1 md:pb-4"
          >
            <p className="max-w-[33ch] text-[15px] leading-[1.85] text-ink/75">
              You announce your retreat. People ask questions and go quiet. We
              build the system that closes that gap.
            </p>
            <BookButton className="mt-8" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
