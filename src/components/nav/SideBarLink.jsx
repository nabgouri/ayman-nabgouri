import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

export const SideBarLink = ({
  setSelected,
  selected,
  children,
  href,
  value,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const isActive = selected === value;

  return (
    <MotionLink
      initial={prefersReducedMotion ? false : { x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
      href={href}
      onClick={() => setSelected(value)}
      aria-current={isActive ? "true" : undefined}
      className={`writing-vertical h-24 shrink-0 flex items-center justify-center border-r-2 text-xs uppercase tracking-[0.18em] w-full transition-colors duration-300 ease-out ${
        isActive
          ? "bg-bg-mid border-accent text-fg"
          : "border-transparent text-fg-dim hover:text-fg hover:bg-bg"
      }`}
    >
      {children}
    </MotionLink>
  );
};
