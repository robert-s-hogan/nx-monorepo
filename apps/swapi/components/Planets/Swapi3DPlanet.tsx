import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';

interface Swapi3DPlanetProps {
  name: string;
  rotationPeriod: number;
  orbitalPeriod: number;
  diameter: number; // Already scaled appropriately
  climate: string;
  gravity: string;
  terrain: string;
  surfaceWater: number;
  population: number;
}

const Swapi3DPlanet: React.FC<Swapi3DPlanetProps> = ({
  name,
  rotationPeriod,
  orbitalPeriod,
  diameter, // Directly use this diameter for visualization
  climate,
  gravity,
  terrain,
  surfaceWater,
  population,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const renderer = useMemo(() => new THREE.WebGLRenderer(), []);
  const fixedHeight = 600; // Fixed canvas height

  useEffect(() => {
    if (!mountRef.current) return;

    mountRef.current.style.height = `${fixedHeight}px`;

    renderer.setSize(mountRef.current.clientWidth, fixedHeight);
    mountRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / fixedHeight,
      0.1,
      1000
    );

    const visualDiameter = diameter; // Use the diameter directly from props
    console.log(`Creating sphere with diameter: ${visualDiameter}`);

    const minimumCameraPosition = 200; // Example minimum distance
    const cameraPosition = Math.max(visualDiameter * 2, minimumCameraPosition);
    camera.position.z = cameraPosition;

    const fov = 60; // Example: A moderate, constant FOV
    camera.fov = fov;
    camera.updateProjectionMatrix();

    const geometry = new THREE.SphereGeometry(visualDiameter, 32, 32); // Diameter is the first parameter
    const material = new THREE.MeshPhongMaterial({
      color: new THREE.Color(
        climate === 'temperate'
          ? 'green'
          : climate === 'arid'
          ? 'darkorange'
          : 'grey'
      ),
      shininess: 80,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const ambientLight = new THREE.AmbientLight(0x404040);
    const pointLight = new THREE.PointLight(0xffffff, 1, 500);
    pointLight.position.set(100, 100, 200); // Adjust based on typical sphere positions and camera distance
    scene.add(ambientLight);
    scene.add(pointLight);

    camera.position.z = cameraPosition;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += rotationPeriod ? (0.01 / rotationPeriod) * 24 : 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      sphere.geometry.dispose();
      sphere.material.dispose();
      scene.remove(sphere);
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [renderer, diameter, climate, rotationPeriod]);

  return (
    <div ref={mountRef} style={{ width: '100%', height: `${fixedHeight}px` }} />
  );
};

export default Swapi3DPlanet;
