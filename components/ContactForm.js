"use client";

import { useState } from "react";

const fieldCls =
  "w-full rounded-md border border-line bg-paper px-3.5 py-[13px] font-body text-base text-spruce transition-colors hover:border-moss focus:border-spruce focus:shadow-[0_0_0_3px_rgba(18,38,31,0.12)] focus:outline-none aria-[invalid=true]:border-signal-dark aria-[invalid=true]:focus:shadow-[0_0_0_3px_rgba(196,50,10,0.14)]";

const labelCls = "mb-2 block text-[0.9375rem] font-medium";

const optCls = "text-[0.85rem] font-normal text-moss";

const errCls =
  "mt-[7px] text-[0.85rem] text-signal-dark transition-opacity duration-150 starting:opacity-0";

function validate(data) {
  const errors = {};
  if (data.name.trim().length < 2) {
    errors.name = "Enter your name so we know who to reply to.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Enter a valid email address, like name@company.com.";
  }
  if (data.message.trim().length < 10) {
    errors.message = "Give us at least a sentence — 10 characters or more.";
  }
  return errors;
}

export default function ContactForm() {
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const next = validate(Object.fromEntries(new FormData(form)));
    setErrors(next);
    const firstBad = Object.keys(next)[0];
    if (firstBad) {
      form.elements[firstBad].focus();
      return;
    }
    setSent(true);
  };

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-md border border-line border-l-[3px] border-l-signal bg-paper px-[30px] py-8 transition-[opacity,transform] duration-200 ease-out starting:opacity-0 starting:translate-y-2 motion-reduce:starting:translate-y-0"
      >
        <h3 className="mb-2 font-display text-[1.3rem] font-semibold tracking-[-0.02em]">
          Message sent.
        </h3>
        <p className="text-moss">
          Thanks — it&apos;s in the queue. We reply within two working days from
          hello@northpeak.digital.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-[22px]">
      <div className="grid gap-[22px] sm:grid-cols-2">
        <div>
          <label htmlFor="fName" className={labelCls}>
            Name
          </label>
          <input
            type="text"
            id="fName"
            name="name"
            autoComplete="name"
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? "errName" : undefined}
            className={fieldCls}
          />
          {errors.name && (
            <p className={errCls} id="errName">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="fEmail" className={labelCls}>
            Email
          </label>
          <input
            type="email"
            id="fEmail"
            name="email"
            autoComplete="email"
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? "errEmail" : undefined}
            className={fieldCls}
          />
          {errors.email && (
            <p className={errCls} id="errEmail">
              {errors.email}
            </p>
          )}
        </div>
      </div>
      <div className="grid gap-[22px] sm:grid-cols-2">
        <div>
          <label htmlFor="fCompany" className={labelCls}>
            Company <span className={optCls}>(optional)</span>
          </label>
          <input
            type="text"
            id="fCompany"
            name="company"
            autoComplete="organization"
            className={fieldCls}
          />
        </div>
        <div>
          <label htmlFor="fBudget" className={labelCls}>
            Budget <span className={optCls}>(optional)</span>
          </label>
          <div className="relative">
            <select id="fBudget" name="budget" defaultValue="" className={`${fieldCls} appearance-none pr-10`}>
              <option value="">Not sure yet</option>
              <option value="lt10">Under $10k</option>
              <option value="10-25">$10k – $25k</option>
              <option value="25-50">$25k – $50k</option>
              <option value="gt50">$50k +</option>
            </select>
            <svg
              aria-hidden="true"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2"
            >
              <path d="M1 1l5 5 5-5" stroke="#5c6e64" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="fMessage" className={labelCls}>
          About the project
        </label>
        <textarea
          id="fMessage"
          name="message"
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "errMessage" : undefined}
          placeholder="What are you building, and what should be true in six months?"
          className={`${fieldCls} min-h-[130px] resize-y`}
        />
        {errors.message && (
          <p className={errCls} id="errMessage">
            {errors.message}
          </p>
        )}
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border border-transparent bg-spruce px-[22px] py-[13px] font-body text-[0.9375rem] font-semibold leading-none text-snow-dark transition-[background-color,transform] duration-150 ease-out hover:bg-signal-dark active:scale-[0.97]"
        >
          Send message
        </button>
      </div>
    </form>
  );
}