"use client";

import { useState } from "react";

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = index === openIndex;

        return (
          <div
            key={item.question}
            className="rounded-2xl bg-white border border-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-shadow"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between px-4 py-4 text-left sm:px-6 sm:py-5"
            >
              <span className="text-sm sm:text-base font-medium text-slate-900">
                {item.question}
              </span>
              <span
                className={`ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-emerald-500 text-xs font-semibold text-emerald-600 transition-transform ${
                  isOpen ? "rotate-90" : ""
                }`}
                aria-hidden="true"
              >
                ▸
              </span>
            </button>

            {isOpen && (
              <div className="px-4 pb-4 pt-0 text-sm text-slate-600 sm:px-6 sm:pb-5">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
