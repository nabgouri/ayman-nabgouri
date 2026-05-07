import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { OutlineButton } from "../buttons/OutlineButton";

export const Header = () => {
  return (
    <header className="h-[72px] px-5 md:px-8 flex items-center justify-between sticky top-0 z-20 bg-bg border-b border-line">
      <MyLinks />
      <OutlineButton onClick={() => window.open("/Ayman_Nabgouri_Resume.pdf")}>
        Resume
      </OutlineButton>
    </header>
  );
};

export const MyLinks = () => (
  <div className="flex items-center text-lg gap-5">
    <Link
      aria-label="LinkedIn profile"
      className="text-fg-muted hover:text-accent-muted transition-colors"
      href="https://www.linkedin.com/in/ayman-nabgouri-a36122229/"
      target="_blank"
      rel="nofollow noreferrer"
    >
      <SiLinkedin />
    </Link>
    <Link
      aria-label="GitHub profile"
      className="text-fg-muted hover:text-accent-muted transition-colors"
      href="https://github.com/nabgouri"
      target="_blank"
      rel="nofollow noreferrer"
    >
      <SiGithub />
    </Link>
  </div>
);
