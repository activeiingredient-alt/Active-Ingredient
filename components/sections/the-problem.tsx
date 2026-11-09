import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { cn, container } from "@/lib/utils";

export function TheProblem() {
  return (
    <section
      aria-labelledby="problem-heading"
      className="border-t border-hairline bg-paper"
    >
      <div className={cn(container, "py-24 md:py-32 lg:py-40")}>
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 md:sticky md:top-28">
              <Icon name="problem" className="h-[18px] w-[18px] text-ink/60" />
              <span className="text-[10px] uppercase leading-none tracking-[0.24em] text-muted">
                The problem
              </span>
            </div>
          </div>

          <Reveal className="md:col-span-9">
            <h2 id="problem-heading" className="sr-only">
              The problem
            </h2>
            <p className="display-tight max-w-[54rem] text-[clamp(1.55rem,3vw,2.6rem)] leading-[1.34] text-ink">
              There is a particular kind of loneliness in launching a retreat.
              You have done the harder work already, with years of practice, a
              room that knows how to hold silence, a message that means
              something. And still, three weeks before the date, the seats are
              half full and the only plan left is to post again and hope. Most
              retreat hosts are not short on wisdom. They are short on{" "}
              <span className="italic">
                warmth, the slow, patient kind that turns a stranger into
                someone who says yes.
              </span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
