"use client";

import { useEffect, useRef, useState } from "react";

// Signature connective motif: a continuous vertical flow-line with numbered
// section markers, running down the left margin of the page (xl screens only,
// where there is gutter room). Echoes the linked "OO" of the iCoop logo and
// fits the workflow/ledger nature of the product.
//
// The node + line segment fill green when their section is the active one in
// the viewport (scroll-aware via IntersectionObserver).

export default function SectionSpine({
  index,
  terminal = false,
}: {
  index?: string;
  terminal?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = ref.current?.closest("section");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      // a thin band ~42% down the viewport: the section crossing it is "active"
      { rootMargin: "-42% 0px -56% 0px", threshold: 0 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="hidden xl:block absolute inset-0 pointer-events-none z-0"
    >
      <div className="relative mx-auto h-full max-w-7xl">
        {/* continuous vertical line — fills green for the active section */}
        <div
          className={`absolute -left-8 top-0 bottom-0 w-px transition-colors duration-500 ${
            active ? "bg-primary" : "bg-border"
          }`}
        />

        {/* chain-link node — two interlocked rings echo the logo's "OO" */}
        {index && (
          <div
            className="absolute -left-8 top-32 -translate-x-1/2 -translate-y-1/2"
            aria-label={`Section ${index}`}
          >
            {/* soft active halo */}
            <span
              className={`absolute inset-0 -m-2 rounded-full transition-all duration-500 ${
                active ? "bg-primary/15 scale-100" : "bg-transparent scale-75"
              }`}
            />
            <span
              className={`relative flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 ${
                active
                  ? "border-primary bg-primary text-white shadow-lg shadow-primary/30"
                  : "border-primary/25 bg-background text-primary-deep shadow-[0_2px_8px_rgba(11,31,23,0.06)]"
              }`}
            >
              <svg
                viewBox="0 0 26 15"
                className="w-[1.4rem] h-[0.85rem]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.1}
              >
                <circle cx="9" cy="7.5" r="5.4" />
                <circle cx="17" cy="7.5" r="5.4" />
              </svg>
            </span>
          </div>
        )}

        {/* terminal dot at the very end of the spine */}
        {terminal && (
          <div
            className={`absolute -left-8 bottom-0 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-full transition-colors duration-500 ${
              active ? "bg-primary" : "bg-border"
            }`}
          />
        )}
      </div>
    </div>
  );
}
