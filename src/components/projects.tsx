"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "./scrollReveal";

const projects = [
  {
    id: 1,
    title: "EcoTracker",
    description: "Track your carbon footprint and go green!",
    image: "/images/project1.jpg",
    link: "https://yourprojectlink.com",
  },
  {
    id: 2,
    title: "ArtGallery",
    description: "Showcase your art with stunning 3D visuals.",
    image: "/images/project2.jpg",
    link: "https://yourprojectlink.com",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen bg-black text-white px-8 md:px-16 py-24">
      <ScrollReveal>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-[#04D9FF]">Projects</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ScrollReveal key={project.id} delay={0.2 * project.id}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-[#04D9FF]/20 transition-all"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={450}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-block mt-4 text-[#04D9FF] hover:underline"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;