import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView, useReducedMotion } from "framer-motion";
import { CertificateModal } from "./CertificateModal";

export const Certificate = ({
  title,
  creator,
  year,
  imgSrc,
  pdfHref,
  verifyUrl,
  summary,
  skills,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const variants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

  return (
    <>
      <motion.li
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        className="grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 md:gap-10 items-center"
      >
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          aria-label={`Open certificate details for ${title}`}
          className="group relative block w-full overflow-hidden rounded-lg bg-bg-elevated p-3 md:p-4 transition-transform duration-500 ease-out-quart focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          style={{
            transform: hovered && !prefersReducedMotion ? "translateY(-4px)" : "translateY(0)",
          }}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-md shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
            <img
              src={imgSrc}
              alt={`${title} certificate`}
              loading="lazy"
              decoding="async"
              style={{
                filter: hovered && !prefersReducedMotion ? "brightness(1)" : "brightness(0.92)",
                transform: hovered && !prefersReducedMotion ? "scale(1.03)" : "scale(1)",
              }}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out-quart"
            />
          </div>
        </button>

        <div className="md:pr-2">
          <h3 className="font-display text-2xl md:text-3xl text-fg leading-tight tracking-tight">
            {title}
          </h3>
          <p className="mt-2 text-accent-muted">by {creator}</p>
          {summary && (
            <p className="mt-4 text-sm md:text-base text-fg-muted leading-relaxed max-w-prose">
              {summary}
            </p>
          )}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="mt-5 inline-flex items-center gap-1.5 text-sm text-accent-muted hover:text-fg transition-colors"
          >
            View certificate <span aria-hidden="true">→</span>
          </button>
        </div>
      </motion.li>

      <CertificateModal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        title={title}
        creator={creator}
        year={year}
        imgSrc={imgSrc}
        pdfHref={pdfHref}
        verifyUrl={verifyUrl}
        summary={summary}
        skills={skills}
      />
    </>
  );
};
