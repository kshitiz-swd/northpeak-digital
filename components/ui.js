export const wrap = "mx-auto max-w-[1200px] px-5 md:px-10";

const btn =
  "inline-flex items-center justify-center gap-2 rounded-md border text-[0.9375rem] font-semibold leading-none no-underline transition-[background-color,border-color,color,transform] duration-150 ease-out active:scale-[0.97]";

export const btnSolid = `${btn} border-transparent bg-spruce px-[22px] py-[13px] text-snow-dark hover:bg-signal-dark`;

export const btnGhost = `${btn} border-line bg-transparent px-[22px] py-[13px] text-spruce hover:border-spruce`;

export const btnSmall = `${btn} border-transparent bg-spruce px-4 py-2.5 text-sm text-snow-dark hover:bg-signal-dark`;

export const section = "py-[88px] min-[900px]:py-[120px]";

export const h2Cls =
  "font-display text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.02em]";

export function Eyebrow({ alt, children, dark = false }) {
  return (
    <p
      className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] before:h-px before:w-[22px] before:flex-none before:bg-signal before:content-[''] ${
        dark ? "text-moss-dark" : "text-moss"
      }`}
    >
      <span className={dark ? "text-signal-bright" : "text-signal-dark"}>{alt}</span> {children}
    </p>
  );
}

export function Wordmark({ small = false }) {
  return (
    <a
      href="#top"
      aria-label="NorthPeak Digital — back to top"
      className="flex items-center gap-[9px] font-display text-[1.1rem] font-bold tracking-[-0.01em] no-underline"
    >
      <svg
        width={small ? 16 : 18}
        height={small ? 14 : 16}
        viewBox="0 0 18 16"
        fill="none"
        aria-hidden="true"
      >
        <path d="M9 0L18 16H0L9 0Z" fill="#12261f" />
        <path d="M9 0L12.6 6.4L9 8.5L5.4 6.4L9 0Z" fill="#eb5017" />
      </svg>
      NorthPeak Digital
    </a>
  );
}
