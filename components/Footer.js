import { wrap, Wordmark } from "./ui";
import { FOOTER_LINKS, CREDIT } from "../lib/constants";

export default function Footer({ links = FOOTER_LINKS, credit = CREDIT }) {
  return (
    <footer className="border-t border-line py-9">
      <div className={`${wrap} flex flex-col items-start gap-[18px] md:flex-row md:items-center md:justify-between`}>
        <Wordmark small />
        <nav aria-label="Footer" className="flex gap-[22px]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-moss no-underline hover:text-spruce">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-1 font-mono text-[0.72rem] tracking-[0.06em] text-moss md:items-end">
          <p>© 2026 NorthPeak Digital · 69.6° N</p>
          <a
            href={credit.href}
            target="_blank"
            className="underline underline-offset-2 transition-colors hover:text-spruce"
          >
            {credit.label}
          </a>
        </div>
      </div>
    </footer>
  );
}
