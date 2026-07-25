import { wrap, section, h2Cls, Eyebrow } from "./ui";
import ContactForm from "./ContactForm";
import { CONTACT_DETAILS } from "../lib/constants";

export default function Contact({ details = CONTACT_DETAILS }) {
  return (
    <section id="contact" aria-labelledby="contact-h" className={`${section} border-t border-line`}>
      <div className={`${wrap} grid gap-14 min-[900px]:grid-cols-[5fr_7fr] min-[900px]:gap-20`}>
        <div>
          <Eyebrow alt="04 · Summit — 4,810 m">Contact</Eyebrow>
          <h2 id="contact-h" className={`${h2Cls} mb-3.5 mt-[18px]`}>
            Tell us where you&apos;re headed.
          </h2>
          <p className="mb-[34px] text-moss">
            Write a few lines about the project. We reply within two working days with honest first
            thoughts — even if the answer is that you don&apos;t need us.
          </p>
          {details.map((d, i) => (
            <div
              key={d.label}
              className={`border-t border-line py-[18px] ${
                i === details.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="mb-1 block font-mono text-[0.72rem] uppercase tracking-[0.12em] text-moss">
                {d.label}
              </span>
              {d.href ? (
                <a href={d.href} className="font-medium no-underline hover:text-signal-dark">
                  {d.value}
                </a>
              ) : (
                d.value
              )}
            </div>
          ))}
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
