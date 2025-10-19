"use client";

import React from "react";
import { useGLTF } from "@react-three/drei";

const WizardModel: React.FC = () => {
  // This loads your wizard/hat model from the public/models folder.
  const { scene } = useGLTF("/models/hat-transformed.glb");

  // Adjust scale and position if your model looks too big or too small
  return <primitive object={scene} scale={2.2} position={[0, -1.5, 0]} />;
};

export default WizardModel;
