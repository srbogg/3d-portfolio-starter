"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-lg text-white border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Replace your name or logo here */}
        <Link href="/" className="text-2xl font-bold text-[#04D9FF]">
          YourName.dev
        </Link>

        {/* Update the links below to match your sections */}
        <div className="flex space-x-8 text-gray-300 font-medium">
          <Link href="#hero" className="hover:text-[#04D9FF] transition-all">
            Home
          </Link>
          <Link href="#projects" className="hover:text-[#04D9FF] transition-all">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-[#04D9FF] transition-all">
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;