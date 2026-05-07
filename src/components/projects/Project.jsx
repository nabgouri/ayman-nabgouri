import { useAnimation, useInView, useReducedMotion, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { BsPlayCircle } from "react-icons/bs";
import { ProjectModal } from "./ProjectModal";
import Reveal from "../util/Reveal";

export const Project = ({
  modalContent,
  projectLink,
  videoLink,
  description,
  imgSrc,
  title,
  code,
  tech,
}) => {
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const variants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } };

  return (
    <>
      <motion.article
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
      >
        <button
          type="button"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          aria-label={`Open details for ${title}`}
          className="block w-full aspect-video bg-bg-elevated relative rounded-lg overflow-hidden text-left"
        >
          <img
            src={imgSrc}
            alt={`Screenshot of ${title}`}
            loading="lazy"
            decoding="async"
            style={{
              width: hovered && !prefersReducedMotion ? "90%" : "75%",
              rotate: hovered && !prefersReducedMotion ? "2deg" : "0deg",
            }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-md shadow-2xl"
          />
        </button>
        <div className="mt-6">
          <Reveal width="w-full">
            <div className="flex items-center gap-3 w-full">
              <h3 className="font-display text-lg md:text-xl text-fg shrink-0 max-w-[calc(100%_-_120px)]">
                {title}
              </h3>
              <div className="flex-1 h-px bg-line" aria-hidden="true" />
              {code && (
                <Link
                  href={code}
                  target="_blank"
                  rel="nofollow noreferrer"
                  aria-label={`${title} source code on GitHub`}
                  className="text-fg-muted hover:text-accent-muted transition-colors"
                >
                  <AiFillGithub className="text-xl" />
                </Link>
              )}
              {videoLink ? (
                <Link
                  href={videoLink}
                  target="_blank"
                  rel="nofollow noreferrer"
                  aria-label={`${title} video demo`}
                  className="text-fg-muted hover:text-accent-muted transition-colors"
                >
                  <BsPlayCircle className="text-xl" />
                </Link>
              ) : projectLink ? (
                <Link
                  href={projectLink}
                  target="_blank"
                  rel="nofollow noreferrer"
                  aria-label={`Open ${title} live`}
                  className="text-fg-muted hover:text-accent-muted transition-colors"
                >
                  <AiOutlineExport className="text-xl" />
                </Link>
              ) : null}
            </div>
          </Reveal>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.12em] text-fg-dim my-2">
              {tech.join(" / ")}
            </p>
          </Reveal>
          <Reveal>
            <p className="text-fg-muted leading-relaxed max-w-prose">
              {description}{" "}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="text-sm text-accent-muted hover:text-fg transition-colors"
              >
                Learn more →
              </button>
            </p>
          </Reveal>
        </div>
      </motion.article>
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        videoLink={videoLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};
