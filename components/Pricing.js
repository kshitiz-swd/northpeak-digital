import { wrap, section, h2Cls, btnSolid, btnGhost, Eyebrow } from "./ui";
import { TIERS } from "../lib/constants";

export default function Pricing({ tiers = TIERS }) {
  return (
    <section id="pricing" aria-labelledby="pricing-h" className={section}>
      <div className={wrap}>
        <div className="mb-12">
          <Eyebrow alt="03 · 3,700 m">Pricing</Eyebrow>
          <h2 id="pricing-h" className={`${h2Cls} mt-[18px] max-w-[22ch]`}>
            Three ways to work with us.
          </h2>
          <p className="mt-3.5 max-w-[52ch] text-moss">
            Fixed prices, written scope, no surprises on the invoice. Every tier includes a named
            lead you can message directly.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-5 min-[900px]:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.id}
              aria-labelledby={t.id}
              className={`flex flex-col rounded-md border bg-paper px-7 py-8 ${
                t.featured ? "relative border-signal" : "border-line"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-[11px] left-7 rounded-[3px] bg-signal-dark px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-white">
                  Most chosen
                </span>
              )}
              <p id={t.id} className="font-mono text-xs uppercase tracking-[0.12em] text-moss">
                {t.name}
              </p>
              <p className="mb-1 mt-4 font-display text-[2.35rem] font-bold leading-none tracking-[-0.02em]">
                {t.price}{" "}
                {t.per && <small className="font-body text-sm font-normal text-moss">{t.per}</small>}
              </p>
              <p className="mb-[22px] text-[0.9375rem] text-moss">{t.forWho}</p>
              <ul className="mb-7 flex-1 list-none border-t border-line">
                {t.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 border-b border-line py-[11px] text-[0.9375rem] before:font-mono before:text-signal-dark before:content-['+']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={t.featured ? btnSolid : btnGhost}>
                {t.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
