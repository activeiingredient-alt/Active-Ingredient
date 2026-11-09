import { BOOKING_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

type Variant = "dark" | "light" | "outline";

const variants: Record<Variant, string> = {
  dark: "border-espresso bg-espresso text-paper hover:border-[#3b2211] hover:bg-[#3b2211] focus-visible:outline-espresso",
  light:
    "border-paper bg-paper text-espresso hover:border-white hover:bg-white focus-visible:outline-paper",
  outline:
    "border-hairline bg-transparent text-ink hover:border-espresso/40 hover:bg-espresso/[0.035] focus-visible:outline-espresso",
};

export function BookButton({
  variant = "dark",
  className,
  label = "Book a meeting",
}: {
  variant?: Variant;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center gap-[10px] rounded-full border min-h-[44px] px-6 py-[13px]",
        "text-[12.5px] font-medium leading-none tracking-[0.015em]",
        "transition-colors duration-500 ease-calm",
        variants[variant],
        className,
      )}
    >
      <span>{label}</span>
      <svg
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden
        focusable="false"
        className="h-[11px] w-[11px] transition-transform duration-500 ease-calm group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
      >
        <path
          d="M3.2 10.8 10.6 3.4M4.6 3.4h6v6"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
