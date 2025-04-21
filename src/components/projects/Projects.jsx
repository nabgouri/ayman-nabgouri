import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Arch Studio Web App",
    imgSrc: "project-imgs/Arch-Studio-Img.png",
    code: "https://github.com/nabgouri/Arch-Studio-website",
    projectLink: "https://arch-studio-website-ten.vercel.app/",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "React Router",
      "TalwindCSS",
      "Framer Motion",
      "SupaBase",
    ],
    description:
      "Arch Studio: Architectural Elegance Reimagined Digital Portfolio",
    modalContent: (
      <>
        <p>
          I built this using React.js, implementing React Router for navigation
          and Supabase as my database
        </p>
        <p>
          Tailwind CSS was my go-to for styling, which allowed me to work on my
          layout skills with Flexbox and Grid
        </p>
        <p>
          {" "}
          I also added some smooth animations using Framer Motion to bring the
          site to life. The site is fully responsive, ensuring a seamless
          experience across all devices
        </p>
      </>
    ),
  },
  {
    title: 'Real-Estate Web App (Missaha)',
     imgSrc: "project-imgs/real-state.png",
    code: "https://github.com/nabgouri/Real-State-website",
    projectLink: "https://real-state-website-eight.vercel.app/",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TalwindCSS",
      "Framer Motion",
    ],
    description:
      "Missaha: Your Gateway to Real Estate Excellence",
    modalContent: (
      <>
        <p>
          I built this using React.js, implementing React Client side rendering to make the page load
          faster and improve the user experience
        </p>
        <p>
          Tailwind CSS was my go-to for styling, which allowed me to work on my
          layout skills with Flexbox and Grid
        </p>
        <p>
          {" "}
          I also added some smooth animations using Framer Motion to bring the
          site to life. The site is fully responsive, ensuring a seamless
          experience across all devices
        </p>
      </>
    ),
  },
  {
    title : 'Character Counter Web App',
    imgSrc: "project-imgs/character-image.jpg",
    code: 'https://github.com/nabgouri/character-counter',
    projectLink: 'https://character-counter-pink.vercel.app/',
    tech: ['HTML', 'CSS', 'Javascript', 'React JS', 'tailwind CSS'],
    description: 'Character Counter Web App: Your Text, Your Count',
    modalContent: (
      <>
        <p>
          A Character Counter Web App that allows users to input text and
          instantly see the character count. Built with React.js and Tailwind
          CSS, this project helped me enhance my state management skills and
          create a responsive design.
        </p>
        <p>
          The app provides a clean, intuitive interface for tracking character
          usage in real-time.
        </p>
      </>
    ),
  },
  {
    title: "Dictionary Web App",
    imgSrc: "project-imgs/dictionaryImage.png",
    code: "https://github.com/nabgouri/dictionary-web-app",
    projectLink: "https://dictionary-web-app-gamma-two.vercel.app/",
    tech: ["HTML", "CSS", "Javascript", "React JS"],
    description:
      "A Dictionary Web App : Word Wiz: Linguistic Discovery at Your Fingertips",
    modalContent: (
      <>
        <p>
          A React.js powered application that enables users to search and
          discover word definitions.
        </p>
        <p>
          Built with Tailwind CSS for sleek, responsive styling, this project
          helped me enhance my data fetching skills by implementing efficient
          API integration and state management techniques.
        </p>
        <p>
          The app provides a clean, intuitive interface for exploring linguistic
          meanings.
        </p>
      </>
    ),
  },
  {
    title: "Calculator Web App",
    imgSrc: "project-imgs/calculatorImage.png",
    code: "https://github.com/nabgouri/calculator-app.io",
    projectLink: "https://nabgouri.github.io/calculator-app.io/",
    tech: ["HTML", "CSS", "Javascript"],
    description: "Calculator Web App: Where Logic Meets Design",
    modalContent: (
      <>
        <p>
          A calculator web app that you can do mathematical equations with, an
          app that helps me develop my logical and functional programming skills
          and create beautiful UI for the logic to be UX friendly
        </p>
      </>
    ),
  },
  {
    title: "Tip Calculator Web App",
    imgSrc: "project-imgs/tip-calImage.png",
    code: "https://github.com/nabgouri/tip-calculator-app.io",
    projectLink: "https://nabgouri.github.io/tip-calculator-app.io/",
    tech: ["HTML", "CSS", "Javascript"],
    description: "a easy way to calculate your tip",
    modalContent: (
      <>
        <p>
          Tip Calculator is a convenient web application designed to assist
          users in quickly and accurately calculating tips for various services.
          Whether you're at a restaurant, receiving a service, or sharing
          expenses with friends, TipEase simplifies the tipping process with its
          user-friendly interface and handy features.
        </p>
        <p>
          Whether you're at a restaurant, receiving a service, or sharing
          expenses with friends, TipEase simplifies the tipping process with its
          user-friendly interface and handy features.
        </p>
      </>
    ),
  },
];
