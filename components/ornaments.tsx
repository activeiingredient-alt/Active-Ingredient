import { cn } from "@/lib/utils";

/** The brand mark, extracted from the supplied mandala artwork. */
export function MandalaMark({
  tone = "ink",
  className,
}: {
  tone?: "ink" | "cream";
  className?: string;
}) {
  return (
    <img
      src={
        tone === "cream"
          ? "/brand/mandala-cream-160.png"
          : "/brand/mandala-ink-160.png"
      }
      alt=""
      width={160}
      height={160}
      aria-hidden
      className={cn("h-8 w-8 select-none", className)}
      draggable={false}
    />
  );
}

/** Large, faint mandala used as a watermark behind sections. */
export function MandalaWatermark({
  tone = "ink",
  className,
}: {
  tone?: "ink" | "cream";
  className?: string;
}) {
  return (
    <img
      src={
        tone === "cream"
          ? "/brand/mandala-cream-512.png"
          : "/brand/mandala-ink-512.png"
      }
      alt=""
      width={512}
      height={512}
      aria-hidden
      loading="lazy"
      decoding="async"
      className={cn("pointer-events-none select-none", className)}
      draggable={false}
    />
  );
}

/** The single dark sun, with a soft halo and one hairline ring. */
export function Sun({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none", className)}>
      <div className="relative h-full w-full">
        <div className="sun-halo absolute -inset-[45%] rounded-full" />
        <div className="absolute inset-0 rounded-full bg-espresso" />
        <div className="absolute -inset-[10%] rounded-full border border-espresso/20" />
      </div>
    </div>
  );
}
