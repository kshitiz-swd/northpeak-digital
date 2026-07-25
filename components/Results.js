import { wrap, section, h2Cls, Eyebrow } from "./ui";
import { STATS, QUOTES } from "../lib/constants";

export default function Results({ stats = STATS, quotes = QUOTES }) {
  return (
    <section id="results" aria-labelledby="results-h" className={`${section} bg-spruce text-snow-dark`}>
      <div className={wrap}>
        <div className="mb-12">
          <Eyebrow alt="02 · 2,850 m" dark>
            Results
          </Eyebrow>
          <h2 id="results-h" className={`${h2Cls} mt-[18px] max-w-[22ch]`}>
            Measured, not claimed.
          </h2>
        </div>
        <div className="grid grid-cols-1 border-t border-line-dark md:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={s.value}
              className={`border-b border-line-dark py-[30px] md:border-b-0 md:border-r md:px-8 md:py-9 ${
                i === 0 ? "md:pl-0" : ""
              } ${i === stats.length - 1 ? "md:border-r-0" : ""}`}
            >
              <div className="font-display text-[clamp(2.2rem,4vw,3rem)] font-bold leading-none tracking-[-0.02em]">
                {s.value}
                <span className="text-signal">{s.unit}</span>
              </div>
              <p className="mt-2.5 max-w-[26ch] text-[0.9375rem] text-moss-dark">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="flex flex-col gap-[22px] rounded-md border border-line-dark px-7 py-[30px]"
            >
              <blockquote className="font-display text-xl font-medium leading-[1.4] tracking-[-0.01em]">
                {q.text}
              </blockquote>
              <figcaption className="font-mono text-[0.78rem] tracking-[0.06em] text-moss-dark">
                <strong className="font-medium text-snow-dark">{q.name}</strong> · {q.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
