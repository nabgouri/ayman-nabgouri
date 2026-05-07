import React from "react";
import { SideBar } from "./nav/SideBar";
import { Header } from "./nav/Header";
import Hero from "./hero/Hero";
import { About } from "./about/About";
import { StudiedWith } from "./studiedWith/StudiedWith";
import { Projects } from "./projects/Projects";
import { Contact } from "./contact/Contact";

export const HomPage = () => {
  return (
    <div className="md:grid md:grid-cols-[54px_1fr]">
      <SideBar />
      <main id="main">
        <Header />
        <div className="mx-auto max-w-5xl px-5 md:px-8 space-y-32 md:space-y-40 pb-32">
          <Hero />
          <About />
          <StudiedWith />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
};
