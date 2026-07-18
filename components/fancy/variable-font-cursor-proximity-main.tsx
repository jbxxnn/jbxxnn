"use client"

import { useRef } from "react"

import VariableFontCursorProximity from "@/components/fancy/variable-font-cursor-proximity"

export default function Preview() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className="rounded-lg items-center justify-center font-piazzolla p-2 cursor-pointer relative overflow-hidden"
      ref={containerRef}
    >
      <div className="items-center justify-center grid text-justify">
        <VariableFontCursorProximity
          className="text-3xl lg:text-4xl !leading-tight -m-4 p-2 italic"
          fromFontVariationSettings="'wght' 400, 'slnt' 0"
          toFontVariationSettings="'wght' 900, 'slnt' -10"
          falloff="exponential"
          radius={70}
          containerRef={containerRef}
        >
          <>
    He designs and develops <span className="inline-block font-public-sans">thoughtful</span> websites focused on{" "}
    performance, accessibility,
    usability, and long-term maintainability for <span className="not-italic font-public-sans">businesses</span>.
  </>
   </VariableFontCursorProximity>
      </div>
    </div>
  )
}
