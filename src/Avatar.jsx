import { useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const Avatar = () => {
  const gltf = useLoader(GLTFLoader, "/Avatar.gltf");

  useEffect(() => {
    gltf.scene.scale.set(1, 1, 1);
    gltf.scene.position.set(0, 0, 0);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  return <primitive object={gltf.scene} />;
};
