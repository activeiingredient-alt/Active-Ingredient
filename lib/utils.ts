export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Shared horizontal rhythm for every section. */
export const container =
  "mx-auto w-full max-w-page px-6 sm:px-8 md:px-10 lg:px-14";
