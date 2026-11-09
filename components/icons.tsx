import type { SVGProps } from "react";

type IconName =
  | "problem"
  | "visibility"
  | "story"
  | "audience"
  | "campaign"
  | "presence"
  | "journey";

const paths: Record<IconName, React.ReactNode> = {
  problem: (
    <>
      <path d="M5 11.5h22M5 16h22M5 20.5h14" />
    </>
  ),
  visibility: (
    <>
      <circle cx="16" cy="16" r="1.5" fill="currentColor" stroke="none" />
      <path d="M11.2 10.8a7.4 7.4 0 0 0 0 10.4M20.8 10.8a7.4 7.4 0 0 1 0 10.4" />
      <path
        d="M7.2 6.8a12.6 12.6 0 0 0 0 18.4M24.8 6.8a12.6 12.6 0 0 1 0 18.4"
        opacity="0.42"
      />
    </>
  ),
  story: (
    <>
      <path d="M16 4.5v23" />
      <path d="M16 15.5c-5.2 0-8.4-3.6-8.4-8.4 5.2 0 8.4 3.6 8.4 8.4Z" />
      <path d="M16 21.5c5.2 0 8.4-3.6 8.4-8.4-5.2 0-8.4 3.6-8.4 8.4Z" />
    </>
  ),
  audience: (
    <>
      <circle cx="16" cy="11.2" r="5.1" />
      <circle cx="11.6" cy="19.4" r="5.1" opacity="0.6" />
      <circle cx="20.4" cy="19.4" r="5.1" opacity="0.6" />
    </>
  ),
  campaign: (
    <>
      <circle cx="16" cy="16" r="11.4" opacity="0.4" />
      <circle cx="16" cy="16" r="6.9" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" stroke="none" />
    </>
  ),
  presence: (
    <>
      <path d="M4.6 20.4a11.4 11.4 0 0 1 22.8 0" />
      <path d="M1.8 20.4h28.4" opacity="0.7" />
      <path d="M16 4.2v2.6M6.1 9.2l1.8 1.8M25.9 9.2l-1.8 1.8" opacity="0.8" />
    </>
  ),
  journey: (
    <>
      <path d="M6.6 25.4 16 16l9.4-9.4" strokeDasharray="0.1 4.6" />
      <path d="M22.2 6.6H29v6.8" />
      <circle cx="6.6" cy="25.4" r="1.6" />
    </>
  ),
};

export function Icon({
  name,
  className,
  ...rest
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.05"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
      className={className}
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}

/** Small marks used at the top of the service cards. */
export function MarkPetal({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      focusable="false"
      className={className}
    >
      <path
        d="M16 3.5c4.6 5.2 6.9 9.3 6.9 12.5 0 3.9-3.1 6.6-6.9 6.6s-6.9-2.7-6.9-6.6c0-3.2 2.3-7.3 6.9-12.5Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path d="M16 23v5.5" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path
        d="M12 26.4c1.4-1.4 2.8-1.9 4-1.4 1.2-.5 2.6 0 4 1.4"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
    </svg>
  );
}
