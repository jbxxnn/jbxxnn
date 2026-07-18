"use client";

const workItems = [
  {
    name: "UNMS",
    description: "Design & Research Lab",
    role: "Founder",
    years: "2024-",
  },
  {
    name: "Clew",
    description: "Startup • Tools for digital work",
    role: "Co-founder/CEO",
    years: "2019-2022",
  },
  {
    name: "Alcamy",
    description: "Software & community • Tools for learning",
    role: "Co-founder",
    years: "2016-2018",
  },
];

export function WorkSection() {
  return (
    <section className="max-w-2xl w-full">
      <div className="">
        <div className="mb-6 sm:mb-8">
          <h2 className="font-public-sans text-[16px] font-semibold tracking-[-0.04em]">
            Work
          </h2>
        </div>

        <div className="overflow-hidden rounded-[0.75rem]">
          {workItems.map((item, index) => (
            <article
              key={item.name}
              className={[
                "",
                index < workItems.length - 1
                  ? "border-b border-black/30"
                  : "",
              ].join(" ")}
            >
              <div className="grid gap-4 px-5 py-3 sm:grid-cols-[minmax(0,1fr)_auto] bg-container hover:bg-foreground/5 hover:cursor-pointer transition-colors duration-300">
              <div>
                <h3 className="font-public-sans text-[16px] font-semibold leading-none">
                  {item.name}
                </h3>
                <p className="font-public-sans text-[14px]">
                  {item.description}
                </p>
              </div>

              <div className="text-left sm:text-right sm:hidden">
                <p className="font-public-sans text-[12px] uppercase">
                  {item.role}
                </p>
                <p className="font-public-sans text-[12px]">
                  {item.years}
                </p>
              </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
