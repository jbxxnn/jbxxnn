"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Minimize2, X } from "lucide-react";

type WorkItem = {
  name: string;
  sector: string;
  brief: string;
  expandedTitle: string;
  expandedBody: string;
  client: string;
  focusMarket: string;
  screenshots: string[];
};

const workItems: WorkItem[] = [
  {
    name: "Grassodenrider Architects",
    sector: "Construction",
    brief:
      "On the occasion of their 15th anniversary, Grassodenridder Architects wanted an identity and website that reflected the growth and refinement of the agency. The existing appearance no longer did justice to the quality of their work and did not sufficiently show online what the agency stands for: timeless architecture in which interior, experience and environment form one whole. We developed a minimalist, characterful brand identity and a website that makes that vision felt, with a digital style that breathes peace, precision and craftsmanship.",
    expandedTitle: "A brand that captures the essence",
    expandedBody:
      "The new identity translates the architectural vision of Grassodenridder Architecten into a powerful and timeless brand. With a refined logo, a clear typographic system and a subdued color palette, we created a style that exudes peace, precision and craftsmanship. The subtle line, generous white space and balanced compositions ensure a recognizable visual language that consistently returns in all expressions. This creates a brand that not only reflects the quality of the work, but also makes it palpable in every moment of contact.",
    client: "Grassodenrider Architects",
    focusMarket: "National",
    screenshots: ["Homepage", "Project overview"],
  },
  {
    name: "Hardgraft",
    sector: "Fashion & Lifestyle",
    brief:
      "Hardgraft needed a sharper digital presentation for a premium product line, with an interface that felt as considered as the objects themselves and gave more space to material, detail, and atmosphere.",
    expandedTitle: "A product world with more restraint",
    expandedBody:
      "We approached the experience as an editorial retail system rather than a conventional catalogue. Typography, spacing, and image hierarchy were refined to slow the pace down and let product detail carry more weight. The result is a cleaner digital language that supports the brand's premium positioning while improving clarity across browsing and storytelling.",
    client: "Hardgraft",
    focusMarket: "International",
    screenshots: ["Collection landing", "Product detail"],
  },
  {
    name: "Credifin Netherlands",
    sector: "Finance",
    brief:
      "Credifin wanted a more credible and modern online presence that could explain its services with greater clarity while keeping the tone calm, professional, and accessible.",
    expandedTitle: "Clarity as a trust signal",
    expandedBody:
      "The redesign focused on structure, readability, and reassurance. We simplified the information architecture, tightened the visual system, and introduced a more consistent presentation across key service pages. This made the company easier to understand at a glance and strengthened the sense of reliability expected in a financial context.",
    client: "Credifin Netherlands",
    focusMarket: "National",
    screenshots: ["Service overview", "Content page"],
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
        setIsExpanded(false);
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
              className="mb-[2px] grid w-full gap-4 bg-container px-5 py-3 text-left transition-colors duration-300 hover:cursor-pointer hover:bg-foreground/5"
            >
              <div>
                <h3 className="font-public-sans text-[16px] font-semibold leading-none">
                  {item.name}
                </h3>
                <p className="font-piazzolla text-[14px] italic">
                  Sector • {item.sector}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeItem ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-3 sm:p-6"
          onClick={handleClose}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="work-modal-title"
            className={[
              "flex w-full flex-col overflow-hidden bg-background shadow-2xl transition-all duration-300 ease-out",
              isExpanded
                ? "h-[calc(100dvh-2rem)] max-w-4xl rounded-[1.5rem] sm:h-[calc(100dvh-5rem)]"
                : "h-[520px] max-w-xl rounded-[1.25rem] sm:h-[min(520px,calc(100dvh-5rem))]",
            ].join(" ")}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="border-b border-foreground/10 px-5 py-4 sm:px-6 sm:py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3
                    id="work-modal-title"
                    className="font-public-sans text-2xl font-semibold leading-none sm:text-3xl"
                  >
                    {activeItem.name}
                  </h3>
                  <p className="mt-2 font-piazzolla text-[15px] italic text-foreground/70">
                    Sector • {activeItem.sector}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsExpanded((current) => !current)}
                    className="inline-flex rounded-full border border-foreground/15 p-2 text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
                    aria-label={isExpanded ? "Collapse case study" : "Expand case study"}
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
                  ? "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]"
                  : "",
              ].join(" ")}
            >
              <div>
                <p className="font-public-sans text-[15px] leading-7 text-foreground/85 sm:text-[16px]">
                  {activeItem.brief}
                </p>

                {isExpanded ? (
                  <div className="mt-8">
                    <p className="font-public-sans text-[12px] uppercase tracking-[0.12em] text-foreground/60">
                      Further detail
                    </p>
                    <h4 className="mt-3 font-public-sans text-xl font-semibold leading-tight text-foreground">
                      {activeItem.expandedTitle}
                    </h4>
                    <p className="mt-3 font-public-sans text-[15px] leading-7 text-foreground/85 sm:text-[16px]">
                      {activeItem.expandedBody}
                    </p>
                  </div>
                ) : null}
              </div>

              {isExpanded ? (
                <aside className="border-t border-foreground/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <p className="font-public-sans text-[12px] uppercase tracking-[0.12em] text-foreground/60">
                    Snapshot
                  </p>
                  <dl className="mt-4 space-y-5">
                    <div>
                      <dt className="font-public-sans text-[12px] uppercase tracking-[0.1em] text-foreground/55">
                        Client
                      </dt>
                      <dd className="mt-1 font-public-sans text-[15px] text-foreground/85">
                        {activeItem.client}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-public-sans text-[12px] uppercase tracking-[0.1em] text-foreground/55">
                        Sector
                      </dt>
                      <dd className="mt-1 font-public-sans text-[15px] text-foreground/85">
                        {activeItem.sector}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-public-sans text-[12px] uppercase tracking-[0.1em] text-foreground/55">
                        Focus market
                      </dt>
                      <dd className="mt-1 font-public-sans text-[15px] text-foreground/85">
                        {activeItem.focusMarket}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-8">
                    <p className="font-public-sans text-[12px] uppercase tracking-[0.12em] text-foreground/60">
                      Screenshots
                    </p>
                    <div className="mt-4 space-y-4">
                      {activeItem.screenshots.map((shot) => (
                        <div
                          key={shot}
                          className="overflow-hidden rounded-[1rem] border border-foreground/10 bg-container"
                        >
                          <div className="aspect-[4/3] bg-gradient-to-br from-foreground/5 via-transparent to-foreground/10" />
                          <div className="border-t border-foreground/10 px-4 py-3">
                            <p className="font-public-sans text-[14px] text-foreground/75">
                              {shot}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </aside>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
