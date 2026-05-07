import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SideBarLink } from "./SideBarLink";

export const SideBar = () => {
  const [selected, setSelected] = useState("");
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelected(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      aria-label="Section navigation"
      initial={prefersReducedMotion ? false : { x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className="no-scrollbar bg-bg-deep h-screen sticky top-0 left-0 z-20 hidden md:flex flex-col items-center overflow-y-auto border-r border-line"
    >
      <span
        className="font-display shrink-0 text-xl font-semibold leading-none size-10 flex items-center justify-center my-4"
        aria-hidden="true"
      >
        A<span className="text-accent">.</span>
      </span>
      <SideBarLink
        selected={selected}
        setSelected={setSelected}
        value="about"
        href="#about"
      >
        About
      </SideBarLink>
      <SideBarLink
        selected={selected}
        setSelected={setSelected}
        value="studied-with"
        href="#studied-with"
      >
        Studied
      </SideBarLink>
      <SideBarLink
        selected={selected}
        setSelected={setSelected}
        value="projects"
        href="#projects"
      >
        Projects
      </SideBarLink>
      <SideBarLink
        selected={selected}
        setSelected={setSelected}
        value="contact"
        href="#contact"
      >
        Contact
      </SideBarLink>
    </motion.nav>
  );
};
