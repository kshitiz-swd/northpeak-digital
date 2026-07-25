import { wrap, btnSolid, btnGhost, Eyebrow } from "./ui";

function Topo() {
  return (
    <div
      aria-hidden="true"
      className="relative motion-safe:animate-rise motion-reduce:animate-fade [animation-delay:0.32s]"
    >
      <svg viewBox="0 0 600 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="block h-auto w-full">
        <g stroke="#c9d4cb" strokeWidth="1.2">
          <path d="M300 60 C395 52 492 108 522 196 C552 284 522 392 436 446 C350 500 218 492 144 428 C70 364 58 252 112 176 C166 100 205 68 300 60 Z" />
          <path d="M302 108 C378 102 452 148 478 218 C504 288 478 372 410 414 C342 456 238 450 180 398 C122 346 112 258 156 198 C200 138 226 114 302 108 Z" />
          <path d="M304 156 C362 152 416 188 436 240 C456 292 436 354 384 386 C332 418 254 414 210 374 C166 334 158 268 192 222 C226 176 246 160 304 156 Z" />
          <path d="M306 204 C346 202 380 226 394 262 C408 298 394 340 358 362 C322 384 270 380 240 352 C210 324 206 280 228 248 C250 216 266 206 306 204 Z" />
          <path d="M308 252 C330 250 348 264 356 284 C364 304 356 328 336 340 C316 352 288 350 272 334 C256 318 254 294 266 276 C278 258 286 253 308 252 Z" />
        </g>
        <path d="M96 468 L188 402 L246 424 L312 296" stroke="#eb5017" strokeWidth="1.6" strokeDasharray="4 6" />
        <circle cx="96" cy="468" r="4" fill="#eb5017" />
        <path d="M304 288 L320 288 M312 280 L312 296" stroke="#eb5017" strokeWidth="1.8" />
        <text x="380" y="180" fontFamily="Spline Sans Mono, monospace" fontSize="11" fill="#5c6e64" letterSpacing="1">
          2400
        </text>
        <text x="410" y="248" fontFamily="Spline Sans Mono, monospace" fontSize="11" fill="#5c6e64" letterSpacing="1">
          2800
        </text>
        <text x="76" y="452" fontFamily="Spline Sans Mono, monospace" fontSize="11" fill="#5c6e64" letterSpacing="1">
          START
        </text>
      </svg>
      <span className="absolute bottom-1.5 right-1 font-mono text-[0.7rem] tracking-[0.1em] text-moss">
        69.6492° N · 18.9553° E
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-h"
      className="overflow-hidden pb-20 pt-[72px] min-[900px]:pb-[120px] min-[900px]:pt-[104px]"
    >
      <div className={`${wrap} grid items-center gap-12 min-[900px]:grid-cols-[7fr_5fr] min-[900px]:gap-16`}>
        <div>
          <div className="motion-safe:animate-rise motion-reduce:animate-fade">
            <Eyebrow alt="Base camp · 320 m">Tromsø, Norway</Eyebrow>
          </div>
          <h1
            id="hero-h"
            className="mb-6 mt-[22px] max-w-[13ch] font-display text-[clamp(2.5rem,7.5vw,4.75rem)] font-bold leading-[1.02] tracking-[-0.02em] motion-safe:animate-rise motion-reduce:animate-fade [animation-delay:0.08s]"
          >
            Digital work that <em className="not-italic text-signal">holds its line.</em>
          </h1>
          <p className="mb-9 max-w-[46ch] text-lg text-moss motion-safe:animate-rise motion-reduce:animate-fade [animation-delay:0.16s]">
            NorthPeak is a five-person studio. We design and build websites, brands, and products
            for companies that value the climb — and we carry every project from first sketch to
            launch ourselves.
          </p>
          <div className="flex flex-wrap gap-3.5 motion-safe:animate-rise motion-reduce:animate-fade [animation-delay:0.24s]">
            <a href="#contact" className={btnSolid}>
              Start a project
            </a>
            <a href="#results" className={btnGhost}>
              See the results
            </a>
          </div>
        </div>
        <Topo />
      </div>
    </section>
  );
}
