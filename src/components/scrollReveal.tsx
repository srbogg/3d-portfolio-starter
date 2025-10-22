"use client";

import { motion } from "framer-motion";
import React from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;      // How long to wait before animating (in seconds)
  duration?: number;   // How long the animation takes (in seconds)
  yOffset?: number;    // How far from below to start (in pixels)
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,        // Default: no delay
  duration = 0.8,   // Default: 0.8 seconds animation
  yOffset = 40,     // Default: starts 40px below final position
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}  // Starts invisible and below
      whileInView={{ opacity: 1, y: 0 }}    // Fades in and moves up when scrolled into view
      transition={{ delay, duration }}      // Uses delay and duration props
      viewport={{ once: true }}             // Only animates once
      // To animate every time you scroll: change to viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
