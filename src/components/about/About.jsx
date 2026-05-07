import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper scroll-mt-24">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12 md:gap-16">
        <div className="space-y-5 max-w-prose">
          <Reveal>
            <p className="leading-[1.7] text-fg-muted text-base md:text-lg">
              I build full-stack web products end to end. Primarily React,
              Next.js, and TypeScript on the front; Node.js, Prisma, and
              Postgres on the back. I treat the interface as the product, and
              design choices as engineering choices.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-[1.7] text-fg-muted text-base md:text-lg">
              I&apos;ve shipped a wellness tracker with multi-step flows and
              visual analytics, a courier PWA with WebSocket-driven order
              routing and offline-first delivery, and a handful of smaller
              products along the way.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-[1.7] text-fg-muted text-base md:text-lg">
              Looking for a team where the design bar is high, the problems
              are real, and how something feels is treated as a first-class
              concern.
            </p>
          </Reveal>
          <Reveal>
            <div className="pt-4">
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
