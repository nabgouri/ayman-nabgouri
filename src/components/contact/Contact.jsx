import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import Reveal from "../util/Reveal";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="section-wrapper scroll-mt-24 pt-12 md:pt-16"
    >
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <Reveal width="w-full">
          <h2 className="font-display text-headline tracking-tight">
            Let&apos;s talk
            <span className="text-accent">.</span>
          </h2>
        </Reveal>
        <Reveal width="w-full">
          <p className="text-base md:text-lg text-fg-muted leading-[1.7] max-w-prose mx-auto">
            Hiring for a small team building ambitious product? Working on
            something hard and want a second pair of hands? Drop a line — I
            read every email.
          </p>
        </Reveal>
        <Reveal width="w-full">
          <Link
            href="mailto:nabgouri9@gmail.com"
            aria-label="Email Ayman at nabgouri9@gmail.com"
            className="inline-flex items-center justify-center gap-3 text-lg md:text-2xl text-fg hover:text-accent-muted transition-colors"
          >
            <AiFillMail aria-hidden="true" />
            <span>nabgouri9@gmail.com</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
