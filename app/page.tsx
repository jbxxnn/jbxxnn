
// import { ThemeSwitcher } from "@/components/theme-switcher";
import Preview from "@/components/fancy/variable-font-cursor-proximity-main";
import { WorkSection } from "@/components/work-section";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-[4px]">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        {/* <nav className="w-full flex justify-center h-20">
          <div className="w-full max-w-5xl flex flex-col gap-4 justify-center items-center p-5 px-5 text-[17px]">
            <p className="items-center max-w-2xl font-piazzolla font-medium"><span className="font-bold font-public-sans">Jibrin</span> is a web developer and independent builder who creates websites, digital products, and useful tools for businesses. You can connect with him via <span className="font-bold font-public-sans">jibrin@jbxxnn.com.</span></p>
          <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
        </div>
          </nav> */}
          <div className="flex-1 flex flex-col gap-20 max-w-4xl p-5">
            <p className="items-center max-w-3xl font-public-sans font-medium"><span className="font-bold font-public-sans underline">Jibrin</span> is a web developer and independent builder creating websites and digital products. This is where he shares his work, projects, and notes. You can connect with him via <span className="font-bold font-public-sans underline italic">jibrin@jbxxnn.com</span></p>
            <Preview />
            <WorkSection />
        </div>
 {/* <ThemeSwitcher /> */}
        

        {/* <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
          <p>
            Powered by{" "}
            <a
              href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              Supabase
            </a>
          </p>
          <ThemeSwitcher />
        </footer> */}
        <div className="p-5 font-public-sans text-[14px] underline flex gap-2 max-w-4xl w-full">
<p>Work</p> 
<p>Projects</p>
<p>Notes</p>
<p>Upwork</p>
        </div>
        </div>
    </main>
  );
}
