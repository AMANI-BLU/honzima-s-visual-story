"use client";

import * as React from "react";
import { motion, useInView, Variants } from "framer-motion";

interface BlurTextProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  animateOnce?: boolean;
  blurAmount?: string;
}

const BlurText = ({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  as: Component = "span",
  animateOnce = true,
  blurAmount = "10px",
}: BlurTextProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: animateOnce, margin: "-50px" });

  const words = children.split(" ");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: `blur(${blurAmount})`,
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mr-[0.25em] last:mr-0"
          style={{ willChange: "filter, opacity, transform" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

interface BlurTextBlockProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animateOnce?: boolean;
  blurAmount?: string;
}

const BlurTextBlock = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  animateOnce = true,
  blurAmount = "12px",
}: BlurTextBlockProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: animateOnce, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        filter: `blur(${blurAmount})`,
        y: 30,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }
          : {
              opacity: 0,
              filter: `blur(${blurAmount})`,
              y: 30,
            }
      }
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{ willChange: "filter, opacity, transform" }}
    >
      {children}
    </motion.div>
  );
};

export { BlurText, BlurTextBlock };
