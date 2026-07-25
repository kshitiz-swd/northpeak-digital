import { wrap, btnSmall, Wordmark } from "./ui";
import { NAV_LINKS, HEADER_CTA } from "../lib/constants";

export default function Header({ links = NAV_LINKS, cta = HEADER_CTA }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-snow/80 backdrop-blur-[10px]">
      <div className={`${wrap} flex h-16 items-center justify-between`}>
        <Wordmark />
        <nav aria-label="Primary" className="hidden gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.9375rem] font-medium text-moss no-underline transition-colors hover:text-spruce"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a href={cta.href} className={btnSmall}>
          {cta.label}
        </a>
      </div>
    </header>
  );
}
