import { wrap, section, h2Cls, Eyebrow } from "./ui";
import { SERVICES } from "../lib/constants";

export default function Services({ items = SERVICES }) {
  return (
    <section id="services" aria-labelledby="services-h" className={`${section} border-t border-line`}>
      <div className={wrap}>
        <div className="mb-12">
          <Eyebrow alt="01 · 1,900 m">Services</Eyebrow>
          <h2 id="services-h" className={`${h2Cls} mt-[18px] max-w-[22ch]`}>
            Six things we do well. Nothing we don&apos;t.
          </h2>
          <p className="mt-3.5 max-w-[52ch] text-moss">
            Small scope, deep work. Every engagement is led by the person doing the work — no
            account layers, no hand-offs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 min-[900px]:grid-cols-3 min-[900px]:gap-5">
          {items.map((s) => (
            <article
              key={s.idx}
              className="rounded-md border border-line bg-paper px-6 pb-7 pt-[26px] transition-[border-color,transform] duration-150 ease-out hover:-translate-y-0.5 hover:border-spruce"
            >
              <span className="font-mono text-[0.72rem] tracking-[0.1em] text-signal-dark">
                {s.idx}
              </span>
              <h3 className="mb-2 mt-3 font-display text-[1.2rem] font-semibold tracking-[-0.02em]">
                {s.title}
              </h3>
              <p className="text-[0.9575rem] text-moss">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
