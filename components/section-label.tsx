export function SectionLabel({
  children,
  tone = "dark",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <p
      className={
        tone === "light"
          ? "flex items-center gap-3 text-[10px] uppercase leading-none tracking-[0.24em] text-paper/55"
          : "flex items-center gap-3 text-[10px] uppercase leading-none tracking-[0.24em] text-muted"
      }
    >
      <span
        aria-hidden
        className={`h-px w-7 ${tone === "light" ? "bg-paper/30" : "bg-ink/30"}`}
      />
      <span>{children}</span>
    </p>
  );
}
