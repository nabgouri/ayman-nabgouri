import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useAnimation, useInView, useReducedMotion } from "framer-motion";
import { AiOutlineExport } from "react-icons/ai";

export const Course = ({ title, creator, courseUrl }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const variants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  const RowTag = courseUrl ? Link : "div";
  const rowProps = courseUrl
    ? { href: courseUrl, target: "_blank", rel: "nofollow noreferrer" }
    : {};

  return (
    <motion.li
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
    >
      <RowTag
        {...rowProps}
        className="group flex items-baseline gap-4 py-5 md:py-6 border-b border-line/60 transition-colors hover:border-line"
      >
        <span
          className="relative inline-flex shrink-0 self-center mr-1"
          aria-hidden="true"
        >
          <span className="block w-2 h-2 rounded-full bg-accent" />
          {!prefersReducedMotion && (
            <span className="absolute inset-0 rounded-full bg-accent animate-pulse-glow" />
          )}
        </span>

        <div className="flex-1 min-w-0">
          <h3 className="font-display text-xl md:text-2xl text-fg group-hover:text-accent-muted transition-colors leading-tight">
            {title}
          </h3>
          <p className="mt-1 text-sm text-accent-muted">by {creator}</p>
        </div>

        <span className="hidden sm:inline-block text-[0.7rem] uppercase tracking-[0.16em] text-fg-dim shrink-0">
          In progress
        </span>

        {courseUrl && (
          <AiOutlineExport
            className="text-fg-dim group-hover:text-fg-muted transition-colors text-lg shrink-0"
            aria-hidden="true"
          />
        )}
      </RowTag>
    </motion.li>
  );
};
