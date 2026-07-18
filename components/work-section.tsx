"use client";

import { useEffect, useState } from "react";

type WorkItem = {
  name: string;
  description: string;
  role: string;
  years: string;
  overview: string;
  highlights: string[];
};

const workItems: WorkItem[] = [
  {
    name: "UNMS",
    description: "Design & Research Lab",
    role: "Founder",
    years: "2024-",
    overview:
      "UNMS is a design and research practice focused on building sharper digital systems, clearer products, and better decision-making tools.",
    highlights: [
      "Established the lab and shaped its positioning, direction, and client work.",
      "Leads design systems, product research, and web experiences across experiments and engagements.",
      "Uses the practice as a base for long-term product exploration and applied design thinking.",
    ],
  },
  {
    name: "Clew",
    description: "Startup • Tools for digital work",
    role: "Co-founder/CEO",
    years: "2019-2022",
    overview:
      "Clew built tools intended to improve digital work by making information easier to organize, retrieve, and act on.",
    highlights: [
      "Co-founded the company and led strategy, product direction, and execution.",
      "Worked across product design, company building, and operational decision-making.",
      "Focused on utility, clarity, and practical workflows for teams doing knowledge work.",
    ],
  },
  {
    name: "Alcamy",
    description: "Software & community • Tools for learning",
    role: "Co-founder",
    years: "2016-2018",
    overview:
      "Alcamy combined software and community to create tools that helped people learn, improve, and share knowledge more effectively.",
    highlights: [
      "Co-founded the platform and helped define its learning-first product direction.",
      "Built early product experiences and supported community growth.",
      "Explored how software can make expertise more accessible and usable.",
    ],
  },
];

export function WorkSection() {
  const [activeItem, setActiveItem] = useState<WorkItem | null>(null);

  useEffect(() => {
    if (!activeItem) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeItem]);

  return (
    <section className="max-w-2xl w-full">
      <div>
        <div className="mb-6 sm:mb-8">
          <h2 className="font-public-sans text-[16px] font-semibold tracking-[-0.04em]">
            Work
          </h2>
        </div>

        <div className="overflow-hidden rounded-[0.75rem]">
          {workItems.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActiveItem(item)}
              className={[
                "grid w-full gap-4 bg-container px-5 py-3 mb-[2px] text-left transition-colors duration-300 hover:cursor-pointer hover:bg-foreground/5 sm:grid-cols-[minmax(0,1fr)_auto]",
                // index < workItems.length - 1 ? "border-b border-black/30" : "",
              ].join(" ")}
            >
              <div>
                <h3 className="font-public-sans text-[16px] font-semibold leading-none">
                  {item.name}
                </h3>
                <p className="font-public-sans text-[14px]">{item.description}</p>
              </div>

              <div className="hidden text-left sm:text-right">
                <p className="font-public-sans text-[12px] uppercase">{item.role}</p>
                <p className="font-public-sans text-[12px]">{item.years}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeItem ? (
        <div
          className="fixed inset-0 z-50 flex items-end bg-black/45 p-3 sm:items-center sm:justify-center sm:p-6"
          onClick={() => setActiveItem(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="work-modal-title"
            className="w-full max-w-xl rounded-[1.25rem] bg-background p-5 shadow-2xl sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-public-sans text-[12px] uppercase tracking-[0.12em] text-foreground/60">
                  {activeItem.role} • {activeItem.years}
                </p>
                <h3
                  id="work-modal-title"
                  className="mt-2 font-public-sans text-2xl font-semibold leading-none"
                >
                  {activeItem.name}
                </h3>
                <p className="mt-2 font-public-sans text-[15px] text-foreground/70">
                  {activeItem.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="rounded-full border border-foreground/15 px-3 py-1 text-[13px] text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
              >
                Close
              </button>
            </div>

            <p className="mt-6 font-public-sans text-[15px] leading-7 text-foreground/85">
              {activeItem.overview}
            </p>

            <div className="mt-6">
              <p className="font-public-sans text-[12px] uppercase tracking-[0.12em] text-foreground/60">
                Notes
              </p>
              <ul className="mt-3 space-y-3 font-public-sans text-[15px] leading-6 text-foreground/85">
                {activeItem.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
