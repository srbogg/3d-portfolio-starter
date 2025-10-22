"use client";

import React from "react";
import { motion } from "framer-motion";
import Scene from "./scene";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-black text-white px-8 md:px-16 overflow-hidden"
    >
      {/* ===================== LEFT SIDE: TEXT ===================== */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 space-y-6 text-center md:text-left"
      >
        {/* Replace your name here */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Hi, I’m <span className="text-[#04D9FF]">Your Name</span>
        </h1>

        {/* Replace your role or title here */}
        <h2 className="text-2xl md:text-3xl text-gray-300">
          A Creative <span className="text-[#04D9FF]">Developer</span>
        </h2>

        {/* Replace this text with your short bio or tagline */}
        <p className="text-gray-400 max-w-lg mx-auto md:mx-0">
          I build visually stunning web experiences using Next.js, TypeScript, and Three.js.
        </p>

        {/* Customize your buttons and links here */}
        <div className="flex justify-center md:justify-start space-x-6 pt-6">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#04D9FF] text-black font-semibold rounded-lg hover:bg-[#00BFFF] transition-all"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#04D9FF] text-[#04D9FF] font-semibold rounded-lg hover:bg-[#04D9FF] hover:text-black transition-all"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* ===================== RIGHT SIDE: 3D MODEL ===================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="flex-1 flex justify-center items-center"
      >
        <Scene />
      </motion.div>
    </section>
  );
};

export default Hero;