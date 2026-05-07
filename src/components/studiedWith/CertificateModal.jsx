import { useEffect, useId, useRef } from "react";
import ReactDOM from "react-dom";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { AiOutlineExport } from "react-icons/ai";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { MdClose } from "react-icons/md";

export const CertificateModal = ({
  setIsOpen,
  isOpen,
  title,
  creator,
  year,
  imgSrc,
  pdfHref,
  verifyUrl,
  summary,
  skills,
}) => {
  const titleId = useId();
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;

    triggerRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflowY;
    document.body.style.overflowY = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKey);

    requestAnimationFrame(() => {
      const focusables = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled])'
      );
      focusables?.[0]?.focus();
    });

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflowY = previousOverflow;
      if (triggerRef.current && typeof triggerRef.current.focus === "function") {
        triggerRef.current.focus();
      }
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  const content = (
    <div
      className="fixed inset-0 z-50 px-4 py-12 bg-bg-deep/70 backdrop-blur-sm overflow-y-auto flex justify-center"
      onClick={() => setIsOpen(false)}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        initial={prefersReducedMotion ? false : { y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl h-fit rounded-lg overflow-hidden bg-bg-mid shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close certificate details"
          className="absolute top-4 right-4 z-10 inline-flex items-center justify-center w-9 h-9 rounded-md text-fg-muted hover:text-fg hover:bg-bg-elevated transition-colors"
        >
          <MdClose className="text-xl" aria-hidden="true" />
        </button>

        <div className="bg-bg-elevated p-4 md:p-6">
          <img
            className="w-full rounded-md shadow-md"
            src={imgSrc}
            alt={`${title} certificate awarded to Ayman Nabgouri`}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="p-6 md:p-8">
          <h2
            id={titleId}
            className="font-display text-2xl md:text-3xl text-fg mb-1"
          >
            {title}
          </h2>
          <p className="text-accent-muted mb-6">by {creator}</p>

          {summary && (
            <p className="leading-relaxed text-sm md:text-base text-fg-muted max-w-prose">
              {summary}
            </p>
          )}

          {skills && skills.length > 0 && (
            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.12em] text-fg-dim mb-3">
                What it covered
              </p>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-xs px-2 py-1 rounded-sm bg-bg-elevated text-fg-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-line">
            <p className="font-display text-base mb-3 text-fg">
              Verify<span className="text-accent">.</span>
            </p>
            <div className="flex flex-wrap items-center gap-5 text-sm">
              {verifyUrl && (
                <Link
                  href={verifyUrl}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="text-fg-muted hover:text-accent-muted transition-colors flex items-center gap-1.5"
                >
                  <AiOutlineExport aria-hidden="true" /> Issuer verification
                </Link>
              )}
              {pdfHref && (
                <Link
                  href={pdfHref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-fg-muted hover:text-accent-muted transition-colors flex items-center gap-1.5"
                >
                  <HiOutlineDocumentArrowDown aria-hidden="true" /> Download PDF
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("root"));
};
