"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Lazy-load the wizard model to improve performance
const WizardModel = dynamic(() => import("./wizardModel"), { ssr: false });

const Scene: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="w-full h-[600px] md:h-[700px] flex items-center justify-center"
    >
      <Canvas camera={{ position: [5, 2, 8], fov: 50 }}>
        {/* This light setup makes your 3D model visible and gives it depth */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        {/* Load your 3D model here */}
        <Suspense fallback={null}>
          <WizardModel />
        </Suspense>

        {/* Lets you drag to rotate your model (zoom disabled for cleaner look) */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </motion.div>
  );
};

export default Scene;
