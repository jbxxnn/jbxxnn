import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";

export default function Home() {
  return (
    <ViewTransition>
      <main className="flex flex-col min-h-screen selection:bg-black selection:text-white">
        {/* Navigation */}
        <nav className="grid-container section-border sticky top-0 bg-[#fdfdfd]/80 backdrop-blur-md z-50">
          <div className="col-span-6 p-3 py-2 border-r border-black h-full flex items-center">
            <span className="font-bold tracking-tighter text-2xl uppercase">Binda Systems</span>
          </div>
          <div className="col-span-6 p-3 py-2 flex justify-end items-center gap-8">
            <Link href="#work" className="label hover:underline hidden md:block">Case Study</Link>
            <Link href="#contact" className="label px-4 py-2 border border-black hover:bg-black hover:text-white transition-colors">Book a call</Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="grid-container section-border">
          <div className="col-span-12 p-5 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <h1 className="text-huge mb-12 leading-[0.85] tracking-tight">
                I help clinics with multiple locations run smoother by fixing their booking and scheduling systems
              </h1>
              <div className="w-full h-100 border border-black">
                <Image src="/IMG_2467.jpg" alt="hero" width={1000} height={1000} className="object-cover w-full h-full" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
              <div className="md:col-span-8">
                <p className="text-2xl md:text-3xl font-medium max-w-3xl leading-tight opacity-80">
                  I design and refine custom systems based on how your clinic actually operates—so your team spends less time managing bookings and more time serving patients.
                </p>
              </div>
              <div className="md:col-span-4 flex justify-end">
                <Link href="#contact" className="btn text-xl">Book a call</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="grid-container section-border">
          <div className="col-span-4 p-5 md:p-5 border-r border-black flex flex-col justify-between">
            <div>
              <span className="label">The Problem</span>
              <h2 className="text-large mt-6 leading-none">Your booking system is probably slowing you down</h2>
            </div>
            {/* <div className="mt-20 opacity-30 label">Qualification</div> */}
          </div>
          <div className="col-span-8 grid grid-cols-1 md:grid-cols-2">
            <div className="p-5 md:p-5 border-b md:border-r border-black hover:bg-zinc-50 transition-colors">
              <h3 className="text-xl mb-1">Staff Management</h3>
              <p className="opacity-70 text-lg leading-relaxed">Staff are hard to assign across locations</p>
            </div>
            <div className="p-5 md:p-5 border-b border-black hover:bg-zinc-50 transition-colors">
              <h3 className="text-xl mb-1">Shift Creation</h3>
              <p className="opacity-70 text-lg leading-relaxed">Creating shifts is confusing or time-consuming</p>
            </div>
            <div className="p-5 md:p-5 border-b md:border-b-0 md:border-r border-black hover:bg-zinc-50 transition-colors">
              <h3 className="text-xl mb-1">Coordination</h3>
              <p className="opacity-70 text-lg leading-relaxed">Admins spend too much time coordinating availability</p>
            </div>
            <div className="p-5 md:p-5 hover:bg-zinc-50 transition-colors">
              <h3 className="text-xl mb-1">Misalignment</h3>
              <p className="opacity-70 text-lg leading-relaxed">Your system doesn’t reflect how your clinic actually works</p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="grid-container section-border">
          <div className="col-span-12 p-8 md:p-8 bg-black text-white">
            <span className="label text-white opacity-40">Our Solution</span>
            <h2 className="text-large mt-6 mb-16 leading-none">I don’t install generic booking tools. <br /> I build systems around how you operate.</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="group">
                <div className="h-px w-full bg-white/20 mb-8 group-hover:bg-white transition-colors" />
                <h3 className="text-xl mb-2 text-white uppercase font-bold">Understanding</h3>
                <p className="opacity-50 text-lg">Understanding your workflow</p>
              </div>
              <div className="group">
                <div className="h-px w-full bg-white/20 mb-8 group-hover:bg-white transition-colors" />
                <h3 className="text-xl mb-2 text-white uppercase font-bold">Identifying</h3>
                <p className="opacity-50 text-lg">Identifying inefficiencies</p>
              </div>
              <div className="group">
                <div className="h-px w-full bg-white/20 mb-8 group-hover:bg-white transition-colors" />
                <h3 className="text-xl mb-2 text-white uppercase font-bold">Building</h3>
                <p className="opacity-50 text-lg">Building a system tailored to your structure</p>
              </div>
              <div className="group">
                <div className="h-px w-full bg-white/20 mb-8 group-hover:bg-white transition-colors" />
                <h3 className="text-xl mb-2 text-white uppercase font-bold">Improving</h3>
                <p className="opacity-50 text-lg">Continuously improving it based on real usage</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section id="work" className="grid-container section-border">
          <div className="col-span-6 p-8 md:p-24 border-r border-black">
            <span className="label">Case Study</span>
            <h2 className="text-huge mt-8 mb-12 leading-none">Goud <br /> Echo</h2>
            <div className="flex gap-10 mb-12 opacity-60 label">
              <span>Client: Goud Echo</span>
              <span>Engagement: 3+ years</span>
            </div>
            
            <div className="space-y-12">
              <div className="grid grid-cols-1 gap-12">
                <div>
                  <h4 className="font-bold uppercase text-xs tracking-widest mb-4 opacity-40">Problem</h4>
                  <p className="opacity-70 text-xl leading-relaxed">Their booking system couldn’t handle multi-location scheduling. Admins struggled to assign staff properly, and shift creation was complicated.</p>
                </div>
                <div>
                  <h4 className="font-bold uppercase text-xs tracking-widest mb-4 opacity-40">Approach</h4>
                  <p className="opacity-70 text-xl leading-relaxed mb-6">Instead of forcing a fixed solution, I built and refined a custom system over time based on how they operate.</p>
                  <ul className="list-none opacity-70 text-base grid grid-cols-2 gap-4">
                    <li className="flex gap-2"><span>—</span> Multi-location staff assignment</li>
                    <li className="flex gap-2"><span>—</span> Simplified shift creation</li>
                    <li className="flex gap-2"><span>—</span> Clear booking management</li>
                    <li className="flex gap-2"><span>—</span> Automated backend workflows</li>
                    <li className="flex gap-2"><span>—</span> Custom reminders</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold uppercase text-xs tracking-widest mb-4 opacity-40">Outcome</h4>
                  <ul className="list-none opacity-70 text-xl space-y-3 font-medium">
                    <li className="flex gap-2"><span>—</span> Shift creation became simple and intuitive</li>
                    <li className="flex gap-2"><span>—</span> Staff assignment across locations is now clear</li>
                    <li className="flex gap-2"><span>—</span> Booking management is organized and easy to track</li>
                    <li className="flex gap-2"><span>—</span> Daily operations require less coordination</li>
                  </ul>
                </div>
              </div>
              
              <div className="pt-8">
                <div className="p-8 border border-black bg-zinc-50 relative overflow-hidden group">
                  <p className="text-2xl italic relative z-10">The system was shaped over time based on real usage—not assumptions.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6 p-0 relative min-h-[800px] overflow-hidden">
            <Image 
              src="/case-study-goud-echo.png" 
              alt="Goud Echo System Dashboard" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </section>

        {/* How We Work */}
        <section id="process" className="grid-container section-border">
          <div className="col-span-12 p-12 md:p-32">
            <span className="label">Trust</span>
            <h2 className="text-huge mt-8 mb-20 leading-none">How I work</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 border-t border-l border-black">
              {[
                { step: "1", title: "Understand your operations", desc: "We break down how your clinic actually runs." },
                { step: "2", title: "Identify inefficiencies", desc: "Where time is wasted, confusion happens, or mistakes occur." },
                { step: "3", title: "Design your system", desc: "Built specifically for your locations, staff, and workflow." },
                { step: "4", title: "Refine over time", desc: "We improve the system based on real usage—not guesses." }
              ].map((item, i) => (
                <div key={i} className="p-10 border-r border-b border-black hover:bg-black hover:text-white transition-all duration-500 group">
                  <span className="text-5xl font-bold block mb-10 transition-transform group-hover:scale-110 origin-left">{item.step}</span>
                  <h3 className="text-2xl mb-6 uppercase font-bold">{item.title}</h3>
                  <p className="opacity-60 group-hover:opacity-80 text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="grid-container section-border">
          <div className="col-span-12 p-20 md:p-48 text-center bg-black text-white">
            <h2 className="text-huge mb-12 leading-none">If managing bookings across locations is becoming a problem, let’s fix it.</h2>
            <p className="text-2xl opacity-60 mb-16 max-w-4xl mx-auto leading-relaxed">
              Book a call and we’ll look at how your current system is holding you back.
            </p>
            <Link href="mailto:hello@bindasystems.com" className="inline-block px-12 py-6 bg-white text-black text-2xl font-bold uppercase hover:bg-zinc-200 transition-colors">Book a call</Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="grid-container p-16">
          <div className="col-span-12 flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="flex flex-col gap-4">
              <span className="font-bold tracking-tighter text-3xl uppercase">Binda Systems</span>
              <p className="label max-w-xs opacity-40 text-[10px]">Specific. Problem-first. Real Experience. Thinking Partner.</p>
            </div>
            <div className="flex flex-col items-end gap-6">
              <div className="flex gap-10 label text-[10px]">
                <Link href="#" className="hover:text-black">LinkedIn</Link>
                <Link href="#" className="hover:text-black">Twitter</Link>
                <Link href="#" className="hover:text-black">Email</Link>
              </div>
              <span className="opacity-20 text-[10px] uppercase tracking-[0.3em]">&copy; 2026 — ALL RIGHTS RESERVED</span>
            </div>
          </div>
        </footer>
      </main>
    </ViewTransition>
  );
}
