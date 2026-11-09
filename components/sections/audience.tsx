import { MandalaMark } from "@/components/ornaments";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { cn, container } from "@/lib/utils";

const OFFERINGS = [
  "Meditation retreats",
  "Transformational gatherings",
  "Workshops",
  "Reflection periods",
  "Journeys",
];

export function Audience() {
  return (
    <section
      id="about"
      aria-labelledby="audience-heading"
      className="border-t border-hairline bg-paper"
    >
      <div className={cn(container, "py-24 md:py-32 lg:py-36")}>
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <SectionLabel>Who we serve</SectionLabel>
            <Reveal>
              <h2
                id="audience-heading"
                className="display-tight mt-8 max-w-[16ch] text-[clamp(2.1rem,3.9vw,3.4rem)] leading-[1.1] text-ink"
              >
                We serve people who cultivate growth in others
              </h2>
            </Reveal>
            <p className="mt-8 max-w-[32ch] text-[9.5px] uppercase leading-[2.1] tracking-[0.18em] text-muted">
              Retreat hosts · Spiritual coaches
              <br />
              Meditation &amp; mindfulness teachers
              <br />
              Yoga teachers
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <ol className="border-t border-hairline">
              {OFFERINGS.map((item, index) => (
                <li key={item} className="border-b border-hairline">
                  <Reveal delay={index * 60}>
                    <div className="group flex items-baseline justify-between gap-6 py-5 md:py-6">
                      <span className="font-serif text-[1.35rem] leading-none tracking-[-0.01em] text-ink md:text-[1.55rem]">
                        {item}
                      </span>
                      <span className="text-[10px] tracking-[0.18em] text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-hairline pt-12 md:mt-20 md:grid-cols-12">
          <div className="md:col-span-2">
            <MandalaMark className="h-8 w-8 opacity-45" />
          </div>
          <Reveal className="md:col-span-8 md:col-start-4">
            <p className="serif-tagline max-w-[36ch] text-[clamp(1.35rem,2.4vw,2.1rem)] leading-[1.42] text-ink/85">
              The goal isn&rsquo;t simply to reach more people. It&rsquo;s to
              cultivate the right relationships with the people who are already
              drawn to what you do.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
