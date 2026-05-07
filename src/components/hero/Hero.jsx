import Reveal from "../util/Reveal";
import { OutlineButton } from "../buttons/OutlineButton";

const Hero = () => {
  return (
    <section className="pt-20 pb-12 md:pt-32 md:pb-24">
      <div className="space-y-6 md:space-y-8">
        <Reveal>
          <p className="font-sans text-sm tracking-[0.18em] uppercase text-fg-dim">
            Ayman Nabgouri / Full-stack developer
          </p>
        </Reveal>
        <Reveal>
          <h1 className="font-display text-display tracking-tight text-fg">
            Make things that work
            <span className="text-accent">.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className="font-display text-headline text-fg-muted max-w-3xl">
            And then make them feel right.
          </h2>
        </Reveal>
        <Reveal width="w-full">
          <p className="max-w-prose text-base md:text-lg leading-[1.7] text-fg-muted">
            I&apos;m a full-stack developer working in React, Next.js, and
            TypeScript. Currently shipping production apps end to end —
            interface to database. Looking for a small team with hard problems
            and room to make creative calls.
          </p>
        </Reveal>
        <Reveal>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <OutlineButton
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView();
              }}
            >
              Start a conversation
            </OutlineButton>
            <a
              href="#projects"
              className="text-sm text-fg-muted hover:text-accent-muted transition-colors"
            >
              See the work →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
