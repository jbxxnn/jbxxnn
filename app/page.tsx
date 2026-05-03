import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";

import goudEchoImage from "@/public/case-study-goud-echo.png";
import studioImage from "@/public/IMG_2467.jpg";

const wallNotes = [
  {
    label: "01 / Audit",
    title: "Map the way work really moves",
    body: "I sit with the messy parts first: teams, locations, bookings, handoffs, reminders, and the moments where staff quietly work around the system.",
  },
  {
    label: "02 / Build",
    title: "Turn operations into a calmer tool",
    body: "The interface, automations, permissions, and backend flows are shaped around the clinic instead of forcing the clinic around a generic platform.",
  },
  {
    label: "03 / Refine",
    title: "Keep improving from live use",
    body: "After launch, the work continues through real feedback, clearer defaults, fewer clicks, and sharper reporting.",
  },
];

const workSignals = [
  "Multi-location staff assignment",
  "Simplified shift creation",
  "Clear booking management",
  "Automated reminders",
  "Backend workflow cleanup",
  "Usage-led product refinement",
];

const deskItems = [
  {
    title: "What I notice",
    body: "Where teams lose time, where patients wait, where admins repeat themselves, and where the system hides important context.",
  },
  {
    title: "What I make",
    body: "Custom booking systems, scheduling flows, operational dashboards, reminder logic, and internal tools that feel obvious to use.",
  },
  {
    title: "What improves",
    body: "Less coordination, clearer staffing, faster booking work, and a system that can keep changing with the clinic.",
  },
];

export default function Home() {
  return (
    <ViewTransition>
      <main className="min-h-screen studio-shell selection:bg-black selection:text-white">
        <nav className="studio-nav" aria-label="Primary navigation">
          <Link href="#studio" className="studio-brand">
            Binda Systems
          </Link>
          <div className="studio-nav__links">
            <Link href="#wall">Studio wall</Link>
            <Link href="#work">Work</Link>
            <Link href="#contact" className="studio-nav__cta">
              Book a call
            </Link>
          </div>
        </nav>

        <section id="studio" className="studio-hero">
          <div className="studio-hero__copy">
            <p className="label">Digital studio / operations systems</p>
            <h1>
              A working studio for clinics that have outgrown generic booking
              tools.
            </h1>
            <p className="studio-lede">
              I design and refine custom systems for multi-location clinics, so
              the way staff schedule, assign, remind, and manage patients feels
              like the way the clinic actually operates.
            </p>
            <div className="studio-actions">
              <Link href="#work" className="btn">
                View the board
              </Link>
              <Link href="#contact" className="text-link">
                Start a conversation
              </Link>
            </div>
          </div>

          <div className="studio-photo" aria-label="A studio wall used as the visual model for this portfolio">
            <Image
              src={studioImage}
              alt="A design studio desk with lamps, monitors, papers, and a wire wall filled with pinned references."
              priority
              placeholder="blur"
              sizes="(max-width: 900px) 100vw, 58vw"
              className="studio-photo__image"
            />
            <div className="studio-photo__caption">
              <span>Reference wall</span>
              <strong>Every project starts as an operational map.</strong>
            </div>
          </div>
        </section>

        <section id="wall" className="studio-wall">
          <div className="section-kicker">
            <p className="label">Pinned thinking</p>
            <h2>The portfolio becomes the wall: visible decisions, constraints, and outcomes.</h2>
          </div>
          <div className="wall-grid">
            {wallNotes.map((note, index) => (
              <article key={note.title} className={`pin-note pin-note--${index + 1}`}>
                <span>{note.label}</span>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="case-board">
          <div className="case-board__image">
            <Image
              src={goudEchoImage}
              alt="A product interface screenshot for the Goud Echo booking and scheduling system."
              placeholder="blur"
              sizes="(max-width: 900px) 100vw, 46vw"
              className="case-board__screen"
            />
          </div>
          <div className="case-board__content">
            <p className="label">Case file / Goud Echo</p>
            <h2>A long-running clinic system shaped through real use.</h2>
            <p>
              Goud Echo needed booking and scheduling software that could handle
              multiple locations without making staff assignment, shift creation,
              and daily coordination harder than the work itself.
            </p>
            <div className="signal-board" aria-label="Project capabilities">
              {workSignals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </div>
            <div className="case-outcome">
              <strong>Outcome</strong>
              <p>
                Shift creation became clearer, staff assignment across locations
                became easier to track, and daily booking work required less
                manual coordination.
              </p>
            </div>
          </div>
        </section>

        <section className="studio-desk">
          <div className="section-kicker section-kicker--desk">
            <p className="label">The desk</p>
            <h2>Useful systems come from observing the working surface, not just the brief.</h2>
          </div>
          <div className="desk-grid">
            {deskItems.map((item) => (
              <article key={item.title} className="desk-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-slab">
          <div>
            <p className="label">Open studio</p>
            <h2>If booking across locations is becoming hard to manage, let’s put it on the wall.</h2>
          </div>
          <Link href="mailto:hello@bindasystems.com" className="contact-button">
            Book a call
          </Link>
        </section>

        <footer className="studio-footer">
          <span>Binda Systems</span>
          <div>
            <Link href="mailto:hello@bindasystems.com">Email</Link>
            <Link href="#">LinkedIn</Link>
            <Link href="#">Twitter</Link>
          </div>
        </footer>
      </main>
    </ViewTransition>
  );
}
