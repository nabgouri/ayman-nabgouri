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
    title: "Exxpress Courier PWA",
    imgSrc: "project-imgs/exxpress-pwa.jpeg",
    videoLink: "https://www.loom.com/share/f25f390580934cfd992ddd170cf1fbe8", // Replace with your actual Loom video URL
    tech: [
      "React JS",
      "react router",
      "Vite",
      "Tailwind CSS",
      "PWA",
      "WebSocket",
      "Service Workers",
      "MapLibre GL",
    ],
    description:
      "A comprehensive Progressive Web App for courier management with real-time order notifications, location tracking, and offline capabilities for seamless delivery operations",
    modalContent: (
      <>
        <p>
          Built a sophisticated courier management Progressive Web App using
          React.js and Vite, featuring real-time order notifications via
          WebSocket connections, enabling couriers to receive instant alerts for
          new delivery assignments and never miss an order opportunity.
        </p>
        <p>
          Implemented a complete order delivery workflow including pickup
          verification with location confirmation, digital signature capture,
          payment processing (cash-on-delivery and prepaid), PIN code
          verification for deliveries, and comprehensive order status tracking.
          The app features intelligent offline support using IndexedDB and
          service workers, allowing couriers to continue working even with poor
          or no internet connectivity.
        </p>
        <p>
          Created advanced features including real-time location tracking with
          WebSocket integration, push notifications that work even when the app
          is closed, heartbeat system for maintaining online status, and
          interactive maps using MapLibre GL for route visualization. The app
          supports multi-language (Arabic, English, French) with i18next,
          includes QR code scanning for package verification, and provides
          comprehensive tour management for batch deliveries. Fully responsive
          design optimized for mobile-first courier operations with modern UI
          components and smooth animations.
        </p>
      </>
    ),
  },
  {
    title: "Coffeeroasters subscription site",
    imgSrc: "project-imgs/Coffeeroasters-subscription-site-image challenge.png",
    code: "https://github.com/nabgouri/coffeeroasters-subscription-site",
    projectLink: "https://coffeeroasters-subscription-site-five.vercel.app/",
    tech: ["Next Js", "React JS", "Tailwind CSS"],
    description:
      "A premium coffee subscription service offering expertly curated artisan coffees delivered directly to your door",
    modalContent: (
      <>
        <p>
          Built a sophisticated coffee subscription platform using React.js and
          Next.js, featuring an intuitive three-step process: pick your coffee,
          choose frequency, and receive premium artisan coffees from the world's
          best roasters.
        </p>
        <p>
          Implemented a clean, modern design with Tailwind CSS focusing on user
          experience and conversion optimization. The site showcases coffee
          collections including Gran Espresso, Planalto, Piccollo, and Danche
          varieties.
        </p>
        <p>
          Created an engaging landing page highlighting key value propositions
          like "Best quality," "Exclusive benefits," and "Free shipping" with a
          streamlined subscription flow. The site is fully responsive and
          optimized for coffee enthusiasts seeking premium, convenient coffee
          delivery services.
        </p>
      </>
    ),
  },
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
    title: "Real-Estate Web App (Missaha)",
    imgSrc: "project-imgs/real-state.png",
    code: "https://github.com/nabgouri/Real-State-website",
    projectLink: "https://real-state-website-eight.vercel.app/",
    tech: ["HTML", "CSS", "JavaScript", "React", "TalwindCSS", "Framer Motion"],
    description: "Missaha: Your Gateway to Real Estate Excellence",
    modalContent: (
      <>
        <p>
          I built this using React.js, implementing React Client side rendering
          to make the page load faster and improve the user experience
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
    title: "Character Counter Web App",
    imgSrc: "project-imgs/character-image.jpg",
    code: "https://github.com/nabgouri/character-counter",
    projectLink: "https://character-counter-pink.vercel.app/",
    tech: ["HTML", "CSS", "Javascript", "React JS", "tailwind CSS"],
    description: "Character Counter Web App: Your Text, Your Count",
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
  // {
  //   title: "Calculator Web App",
  //   imgSrc: "project-imgs/calculatorImage.png",
  //   code: "https://github.com/nabgouri/calculator-app.io",
  //   projectLink: "https://nabgouri.github.io/calculator-app.io/",
  //   tech: ["HTML", "CSS", "Javascript"],
  //   description: "Calculator Web App: Where Logic Meets Design",
  //   modalContent: (
  //     <>
  //       <p>
  //         A calculator web app that you can do mathematical equations with, an
  //         app that helps me develop my logical and functional programming skills
  //         and create beautiful UI for the logic to be UX friendly
  //       </p>
  //     </>
  //   ),
  // },
  // {
  //   title: "Tip Calculator Web App",
  //   imgSrc: "project-imgs/tip-calImage.png",
  //   code: "https://github.com/nabgouri/tip-calculator-app.io",
  //   projectLink: "https://nabgouri.github.io/tip-calculator-app.io/",
  //   tech: ["HTML", "CSS", "Javascript"],
  //   description: "a easy way to calculate your tip",
  //   modalContent: (
  //     <>
  //       <p>
  //         Tip Calculator is a convenient web application designed to assist
  //         users in quickly and accurately calculating tips for various services.
  //         Whether you're at a restaurant, receiving a service, or sharing
  //         expenses with friends, TipEase simplifies the tipping process with its
  //         user-friendly interface and handy features.
  //       </p>
  //       <p>
  //         Whether you're at a restaurant, receiving a service, or sharing
  //         expenses with friends, TipEase simplifies the tipping process with its
  //         user-friendly interface and handy features.
  //       </p>
  //     </>
  //   ),
  // },
];
