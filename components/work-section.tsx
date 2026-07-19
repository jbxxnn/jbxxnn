"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Minimize2, X } from "lucide-react";

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
    name: "Grassodenrider Architects",
    description: "Sector • Construction",
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
    name: "Hardgraft",
    description: "Sector • Fashion & Lifestyle",
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
    name: "Credifin Netherlands",
    description: "Sector • Finance",
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
  const [isExpanded, setIsExpanded] = useState(false);

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

  const handleOpen = (item: WorkItem) => {
    setActiveItem(item);
    setIsExpanded(false);
  };

  const handleClose = () => {
    setActiveItem(null);
    setIsExpanded(false);
  };

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
              onClick={() => handleOpen(item)}
              className={[
                "grid w-full gap-4 bg-container px-5 py-3 mb-[2px] text-left transition-colors duration-300 hover:cursor-pointer hover:bg-foreground/5 sm:grid-cols-[minmax(0,1fr)_auto]",
                // index < workItems.length - 1 ? "border-b border-black/30" : "",
              ].join(" ")}
            >
              <div>
                <h3 className="font-public-sans text-[16px] font-semibold leading-none">
                  {item.name}
                </h3>
                <p className="font-piazzolla italic text-[14px]">{item.description}</p>
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
          onClick={() => {
            if (!isExpanded) {
              handleClose();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="work-modal-title"
            className={[
              "flex w-full flex-col overflow-hidden bg-background shadow-2xl transition-all duration-300 ease-out",
              "h-[100dvh] rounded-none sm:h-auto",
              isExpanded
                ? "sm:h-[92vh] sm:max-w-[1100px] sm:rounded-[1.5rem]"
                : "sm:max-h-[80vh] sm:max-w-2xl sm:rounded-[1.25rem]",
            ].join(" ")}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="border-b border-foreground/10 px-5 py-4 sm:px-6 sm:py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-public-sans text-[12px] uppercase tracking-[0.12em] text-foreground/60">
                    {activeItem.role} • {activeItem.years}
                  </p>
                  <h3
                    id="work-modal-title"
                    className="mt-2 font-public-sans text-2xl font-semibold leading-none sm:text-3xl"
                  >
                    {activeItem.name}
                  </h3>
                  <p className="mt-2 font-public-sans text-[15px] text-foreground/70">
                    {activeItem.description}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsExpanded((current) => !current)}
                    className="inline-flex rounded-full border border-foreground/15 p-2 text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
                    aria-label={isExpanded ? "Collapse work details" : "Expand work details"}
                    title={isExpanded ? "Collapse" : "Expand"}
                  >
                    {isExpanded ? (
                      <Minimize2 className="size-4" />
                    ) : (
                      <ArrowUpRight className="size-4" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleClose}
                    className="inline-flex rounded-full border border-foreground/15 p-2 text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
                    aria-label="Close work details"
                  >
                    <X className="size-4" />
                  </button>
                </div>
              </div>
            </div>

            <div
              className={[
                "min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6 sm:py-6",
                isExpanded
                  ? "sm:grid sm:grid-cols-[minmax(0,1.25fr)_minmax(240px,0.75fr)] sm:gap-10"
                  : "",
              ].join(" ")}
            >
              <div>
                <div>
                  <p className="font-public-sans text-[12px] uppercase tracking-[0.12em] text-foreground/60">
                    Overview
                  </p>
                  <p className="mt-3 font-public-sans text-[15px] leading-7 text-foreground/85 sm:text-[16px]">
                    {activeItem.overview}
                  </p>
                </div>

                <div className="mt-8">
                  <p className="font-public-sans text-[12px] uppercase tracking-[0.12em] text-foreground/60">
                    Notes
                  </p>
                  <ul className="mt-3 space-y-3 font-public-sans text-[15px] leading-7 text-foreground/85">
                    {activeItem.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <aside className="mt-8 border-t border-foreground/10 pt-6 sm:mt-0 sm:border-t-0 sm:border-l sm:pl-8 sm:pt-0">
                <p className="font-public-sans text-[12px] uppercase tracking-[0.12em] text-foreground/60">
                  Snapshot
                </p>
                <dl className="mt-4 space-y-5">
                  <div>
                    <dt className="font-public-sans text-[12px] uppercase tracking-[0.1em] text-foreground/55">
                      Company
                    </dt>
                    <dd className="mt-1 font-public-sans text-[15px] text-foreground/85">
                      {activeItem.name}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-public-sans text-[12px] uppercase tracking-[0.1em] text-foreground/55">
                      Focus
                    </dt>
                    <dd className="mt-1 font-public-sans text-[15px] text-foreground/85">
                      {activeItem.description}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-public-sans text-[12px] uppercase tracking-[0.1em] text-foreground/55">
                      Role
                    </dt>
                    <dd className="mt-1 font-public-sans text-[15px] text-foreground/85">
                      {activeItem.role}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-public-sans text-[12px] uppercase tracking-[0.1em] text-foreground/55">
                      Timeline
                    </dt>
                    <dd className="mt-1 font-public-sans text-[15px] text-foreground/85">
                      {activeItem.years}
                    </dd>
                  </div>
                </dl>
              </aside>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
