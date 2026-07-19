"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight, Maximize2, Minimize2, X } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";
import { Button } from "./ui/button";

type WorkItem = {
  name: string;
  sector: string;
  brief: string;
  expandedTitle: string;
  expandedBody: string;
  client: string;
  focusMarket: string;
  screenshots: string[];
  image: string;
  website: string;
};

const workItems: WorkItem[] = [
  {
    name: "Grassodenrider Architects",
    sector: "Construction",
    brief:
      "On the occasion of their 15th anniversary, Grassodenridder Architects wanted an identity and website that reflected the growth and refinement of the agency. The existing appearance no longer did justice to the quality of their work and did not sufficiently show online what the agency stands for: timeless architecture in which interior, experience and environment form one whole. I developed a minimalist, characterful brand identity and a website that makes that vision felt, with a digital style that breathes peace, precision and craftsmanship.",
    expandedTitle: "A brand that captures the essence",
    expandedBody:
      "The new identity translates the architectural vision of Grassodenridder Architecten into a powerful and timeless brand. With a refined logo, a clear typographic system and a subdued color palette, I created a style that exudes peace, precision and craftsmanship. The subtle line, generous white space and balanced compositions ensure a recognizable visual language that consistently returns in all expressions. This creates a brand that not only reflects the quality of the work, but also makes it palpable in every moment of contact.",
    client: "Grassodenrider Architects",
    focusMarket: "National",
    screenshots: ["Homepage", "Project overview"],
    image: "/grassodenridder.jpg",
    website: "https://grassodenridder.nl",
  },
  {
    name: "Hardgraft",
    sector: "Fashion & Lifestyle",
    brief:
      "Hardgraft creates timeless bags, footwear and leather accessories for people who value quality, character and thoughtful design. As an independent brand with a worldwide audience, they needed a digital environment that could communicate the craftsmanship behind each product while preserving the quiet, understated personality that defines the brand. I developed a refined e-commerce website that brings product, material and story together, creating an online experience that feels as considered and distinctive as the collection itself.",
    expandedTitle: "A digital experience built around craftsmanship",
    expandedBody:
      "The website combines a restrained visual style with generous imagery and a clear product structure, allowing the materials, textures and details of each piece to take centre stage. Visitors can effortlessly explore bags, footwear and small leather goods while discovering the Italian craftsmanship and carefully selected materials behind the collection. Natural tones, spacious compositions and understated typography reinforce hardgraft's down-to-earth aesthetic. Detailed product presentations and stories about the leather, wool and production process give every item greater depth and make the brand's commitment to quality tangible. The result is a distinctive international webshop that does not compete for attention, but builds desire through simplicity, authenticity and craftsmanship.",
    client: "Hardgraft",
    focusMarket: "International",
    screenshots: ["Collection landing", "Product detail"],
    image: "/hardgraft.jpg",
    website: "https://hardgraft.com",
  },
  {
    name: "Credifin Netherlands",
    sector: "Finance",
    brief:
      "Credifin was looking for an identity and website that better suited the quality they deliver. The old appearance and structure no longer did justice to their story, while the website is an important channel with a lot of traffic and dozens of new accounts daily. As a modern debt collection platform with more than 20,000 customers, they were ready for the next step. I developed a mature brand identity and a lead-generating website that clearly shows what Credifin stands for.",
    expandedTitle: "A brand that exudes trust",
    expandedBody:
      "I developed a brand identity that combines strength and clarity with a human tone. From a sharpened logo and fresh color palette to an accessible tone of voice and illustration style. The new branding shows what Credifin stands for: transparency, decisiveness and an approachable approach that gives confidence. The result is an identity that is distinctive in the market and seamlessly aligns with the digital nature of the platform.",
    client: "Credifin Netherlands",
    focusMarket: "National",
    screenshots: ["Service overview", "Content page"],
    image: "/credifin.jpg",
    website: "https://credifin.com",
  },
  {
    name: "ETQ Amsterdam",
    sector: "Fashion & Lifestyle",
    brief:
      "ETQ Amsterdam creates refined wardrobe essentials for men who value simplicity, quality and longevity. With a growing collection spanning footwear, clothing and accessories, the brand needed an online store that could present its products clearly without losing the clean and mature character at the heart of its identity. I created a minimalist e-commerce experience that combines strong product presentation with intuitive navigation, allowing customers to move effortlessly from inspiration to purchase.",
    expandedTitle: "Less, but better",
    expandedBody:
      "The website translates ETQ’s philosophy into a restrained and confident digital experience. Generous imagery, neutral compositions and bold typography give every product room to stand out, while the structured navigation makes it easy to browse by product type, collection or material. Editorial brand stories are woven throughout the shopping experience, highlighting the design process, premium materials and production in family-owned Portuguese ateliers. Detailed product pages, accessible sizing information and clear delivery and return options support customers throughout their journey. The result is a distinctive international webshop that presents everyday essentials as carefully considered design objects—clean, functional and built to last.",
    client: "ETQ Amsterdam",
    focusMarket: "International",
    screenshots: ["Service overview", "Content page"],
    image: "/ETQ.png",
    website: "https://www.etq-amsterdam.com",
  },
  {
    name: "Zonnelux Window Decoration, Veghel",
    sector: "Lifestyle",
    brief:
      "Zonnelux has been active in window decoration for years. They operate in the higher segment with stylish custom products. Within the industry, more and more stunters are active, which often sell directly via the internet. Zonnelux wants to distinguish itself strongly from this as a premium brand by offering the consumer a personal experience. In this way, the consumer can experience the quality himself by seeing and touching it.",
    expandedTitle: "From inspiration to seduction",
    expandedBody:
      "I developed an inspiring website for Zonnelux that informs, inspires and seduces potential buyers. The spacious site is full of atmospheric images and an extensive inspiration database in which each product is shown in different styles. Thanks to the clear navigation structure, the visitor can effortlessly click from inspiration to the desired product. All product information is clearly presented there, which ensures a seamless and user-friendly experience.",
    client: "Zonnelux",
    focusMarket: "Benelux",
    screenshots: ["Service overview", "Content page"],
    image: "/zonnelux.jpg",
    website: "https://www.zonnelux.com",
  },
  {
    name: "Only / Once",
    sector: "Design & Collectibles",
    brief:
      "Only / Once collects and restores rare design objects with a distinctive history. Since 2013, the brand has curated timeless pieces from the twentieth century, ranging from Braun electronics and audio equipment to lighting, clocks and home accessories shaped by Bauhaus and modernist design. The website needed to function as more than a webshop: it had to communicate the cultural value, craftsmanship and individuality behind every object. I developed an editorial e-commerce experience in which collecting, storytelling and commerce come together naturally.",
    expandedTitle: "Giving design icons a new life",
    expandedBody:
      "The website presents each object as a unique piece of design history rather than simply another product. Large-scale imagery, restrained typography and spacious compositions create a gallery-like environment in which the form, details and patina of every collectible receive full attention. Clear product categories and curated collections make it easy to explore electronics, lighting, audio, clocks and lifestyle objects, while stories about Bauhaus, Braun and influential designers add context and depth. Detailed product pages communicate specifications, condition and shipping information, and sold items remain visible with restock notifications, reinforcing the rarity of the collection. The brand’s restoration process and respect for original functionality are woven throughout the experience, showing how each object is carefully reclaimed before beginning a new chapter in a contemporary interior. The result is a distinctive international platform that feels equal parts design archive, magazine and specialist store.",
    client: "Only / Once",
    focusMarket: "International",
    screenshots: ["Service overview", "Content page"],
    image: "/onlyonce.jpg",
    website: "https://www.onlyonceshop.com",
  },
];

export function WorkSection() {
  const [activeItem, setActiveItem] = useState<WorkItem | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!activeItem) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
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

  useLayoutEffect(() => {
    if (!activeItem || !imageWrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageWrapperRef.current,
        {
          autoAlpha: 0,
          y: isExpanded ? 18 : 28,
          scale: isExpanded ? 1.015 : 1.04,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: isExpanded ? 0.55 : 0.8,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
        }
      );
    }, imageWrapperRef);

    return () => ctx.revert();
  }, [activeItem, isExpanded]);

  useLayoutEffect(() => {
    if (!activeItem || !backdropRef.current || !modalRef.current || isClosing) return;

    const ctx = gsap.context(() => {
      gsap.set(backdropRef.current, { autoAlpha: 0 });
      gsap.set(modalRef.current, { autoAlpha: 0, y: 18, scale: 0.985 });

      const tl = gsap.timeline();
      tl.to(backdropRef.current, {
        autoAlpha: 1,
        duration: 0.28,
        ease: "power2.out",
      }).to(
        modalRef.current,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.42,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
        },
        0.04
      );
    });

    return () => ctx.revert();
  }, [activeItem, isClosing]);

  const handleOpen = (item: WorkItem) => {
    setActiveItem(item);
    setIsExpanded(false);
    setIsClosing(false);
  };

  const handleClose = () => {
    if (!activeItem || isClosing) return;

    setIsClosing(true);

    gsap.timeline({
      onComplete: () => {
        setActiveItem(null);
        setIsExpanded(false);
        setIsClosing(false);
      },
    })
      .to(modalRef.current, {
        autoAlpha: 0,
        y: 16,
        scale: 0.985,
        duration: 0.32,
        ease: "power2.inOut",
      })
      .to(
        backdropRef.current,
        {
          autoAlpha: 0,
          duration: 0.38,
          ease: "power2.out",
        },
        0.06
      );
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
              className="group mb-[2px] grid w-full grid-cols-[minmax(0,1fr)_auto] items-start gap-4 bg-container px-5 py-3 text-left transition-colors duration-300 hover:cursor-pointer hover:bg-foreground/5"
            >
              <div>
                <h3 className="font-public-sans text-[16px] font-semibold leading-none">
                  {item.name}
                </h3>
                <p className="font-piazzolla text-[14px] italic">
                  Sector • {item.sector}
                </p>
              </div>

              <span className="mt-0.5 inline-flex text-foreground/55 transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowUpRight className="size-4" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeItem ? (
        <div
          ref={backdropRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 backdrop-blur-md sm:backdrop-blur-lg p-3 sm:p-6"
          onClick={handleClose}
        >
          <div
            ref={modalRef}
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
                  {/* <p className="mt-2 font-piazzolla text-[15px] italic text-foreground/70">
                    Sector • {activeItem.sector}
                  </p> */}
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
                      <Maximize2 className="size-4" />
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
                  ? "grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.4fr)]"
                  : "",
              ].join(" ")}
            >
              <div>
                <div ref={imageWrapperRef} className="mb-8 overflow-hidden rounded-[0.5rem]">
                  <Image
                    src={activeItem.image}
                    alt={activeItem.name}
                    className="w-full rounded-[0.5rem]"
                    width={600}
                    height={400}
                  />
                </div>
                <p className="font-piazzolla text-[15px] leading-7 text-foreground/85 sm:text-[16px]">
                  {activeItem.brief}
                </p>

                {isExpanded ? (
                  <div className="mt-8">
                    {/* <p className="font-public-sans text-[12px] uppercase tracking-[0.12em] text-foreground/60">
                      Further detail
                    </p> */}
                    <h4 className="mt-3 font-piazzolla italic text-[25px] font-semibold leading-tight text-foreground">
                      {activeItem.expandedTitle}
                    </h4>
                    <p className="mt-3 font-piazzolla text-[15px] leading-7 text-foreground/85 sm:text-[16px]">
                      {activeItem.expandedBody}
                    </p>
                  </div>
                ) : null}
              </div>

              {isExpanded ? (
                <aside className="border-t border-foreground/10 pt-6 lg:sticky lg:top-0 lg:self-start lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <p className="font-public-sans text-[12px] uppercase tracking-[0.12em] text-foreground/60">
                    Snapshot
                  </p>
                  <dl className="mt-4 space-y-5">
                    <div>
                      <dt className="font-public-sans text-[12px] uppercase tracking-[0.1em] text-foreground/55">
                        Client
                      </dt>
                      <dd className="mt-1 font-piazzolla font-medium text-[15px] text-foreground/85">
                        {activeItem.client}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-public-sans text-[12px] uppercase tracking-[0.1em] text-foreground/55">
                        Sector
                      </dt>
                      <dd className="mt-1 font-piazzolla font-medium text-[15px] text-foreground/85">
                        {activeItem.sector}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-public-sans text-[12px] uppercase tracking-[0.1em] text-foreground/55">
                        Focus market
                      </dt>
                      <dd className="mt-1 font-piazzolla font-medium text-[15px] text-foreground/85">
                        {activeItem.focusMarket}
                      </dd>
                    </div>
                    <div>
                      <Link href={activeItem.website} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full mt-4 font-public-sans">View Website</Button>
                      </Link>
                    </div>
                  </dl>

                  <div className="mt-8 hidden">
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
