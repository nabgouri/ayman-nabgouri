import { useEffect, useRef } from "react";
import {
  useAnimation,
  useInView,
  useReducedMotion,
  motion,
} from "framer-motion";

export const Reveal = ({ children, width = "w-fit" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  if (prefersReducedMotion) {
    return <div className={`relative ${width}`}>{children}</div>;
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${width}`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-accent"
      />
    </div>
  );
};

export default Reveal;
