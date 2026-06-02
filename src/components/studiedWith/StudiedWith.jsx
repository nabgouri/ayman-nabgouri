import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Certificate } from "./Certificate";
import { Course } from "./Course";

export const StudiedWith = () => {
  return (
    <section id="studied-with" className="section-wrapper scroll-mt-24">
      <SectionHeader title="Studied with" dir="l" />

      <div className="mb-10 md:mb-12">
        <p className="text-xs uppercase tracking-[0.16em] text-fg-dim">
          Completed
        </p>
      </div>

      <ul className="space-y-16 md:space-y-24">
        {certificates.map((cert) => (
          <Certificate key={cert.title} {...cert} />
        ))}
      </ul>

      <div className="mt-20 md:mt-28">
        <p className="text-xs uppercase tracking-[0.16em] text-fg-dim mb-4">
          Currently learning
        </p>
        <ul className="border-t border-line/60">
          {courses.map((course) => (
            <Course key={course.title} {...course} />
          ))}
        </ul>
      </div>
    </section>
  );
};

const certificates = [
  {
    title: "Just JavaScript",
    creator: "Dan Abramov",
    year: "2026",
    imgSrc: "/certificates/just-javascript-1.png",
    pdfHref:
      "/certificates/Ayman%20Nabgouri-JustJavaScript.com-certificate%20(2).pdf",
    verifyUrl: "https://justjavascript.com/",
    summary:
      "Ten episodes rebuilding a precise mental model of how JavaScript actually works — values vs. variables, equality, properties, mutation, prototypes — taught by the co-author of React.",
    skills: [
      "Mental models",
      "Reference vs. value",
      "Equality",
      "Mutation",
      "Prototypes",
    ],
  },
  {
    title: "The Joy of React",
    creator: "Josh W. Comeau",
    year: "2025",
    imgSrc: "/certificates/joy-of-react-1.png",
    pdfHref:
      "/certificates/Certificate%20of%20Completion%20%E2%80%A2%20Josh%20W%20Comeau's%20Course%20Platform.pdf",
    verifyUrl:
      "https://courses.joshwcomeau.com/certificate/684ed7ad904e7e3e81e78d67",
    summary:
      "A deep, hands-on rebuild of React from first principles — hooks, component design, performance, accessibility, and production patterns — by the author of the CSS for JS Developers course.",
    skills: [
      "React internals",
      "Hooks",
      "Component design",
      "Performance",
      "Accessibility",
    ],
  },
  // {
  //   title: "Certified Junior React Developer",
  //   creator: "certificates.dev",
  //   year: "2026",
  //   imgSrc: "/certificates/certified-react-dev-1.png",
  //   pdfHref: "/certificates/react-certifacte-dev.pdf",
  //   verifyUrl:
  //     "https://certificates.dev/c/a1436df4-5e1d-4613-ac0b-5774cca73419",
  //   summary:
  //     "A proctored React exam covering components, state, effects, context, performance, and accessibility — issued by the React community's certificates.dev (CJRD-008407).",
  //   skills: ["React", "Hooks", "Context", "Performance", "Accessibility"],
  // },
];

const courses = [
  {
    title: "Animations on the Web",
    creator: "Emil Kowalski",
    courseUrl: "https://animations.dev/",
  },
  {
    title: "Claude Code for Real Engineers",
    creator: "Matt Pocock",
    courseUrl: "https://www.aihero.dev/",
  },
];
