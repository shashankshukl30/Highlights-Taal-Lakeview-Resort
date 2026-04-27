"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

/**
 * A subtle scroll-reveal wrapper. Each child fades up + scales in from
 * 0.97 with a long, cinematic ease the moment it enters the viewport.
 * Honours prefers-reduced-motion (renders without animation).
 *
 * Stagger children by passing different `delay` values (in seconds).
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
  y = 28,
  once = true,
  ...rest
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "header" | "figure";
  y?: number;
  once?: boolean;
} & Omit<HTMLMotionProps<"div">, "children">) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as typeof motion.div;
  if (reduce) {
    // Skip animation entirely; render at final state.
    return (
      <Comp className={className} {...rest}>
        {children}
      </Comp>
    );
  }
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-12% 0px -8% 0px" }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
