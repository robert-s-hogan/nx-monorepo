import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

import EarthMap from './textures/swapi_earth.jpg';
import BumpMap from './textures/swapi_earth_bump.jpg';

const PUBLIC_URL = 'localhost:4200';

const Planet = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      currentRef.clientWidth / currentRef.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
    currentRef.appendChild(renderer.domElement);

    // Create a sphere to represent the planet
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load(
        `${PUBLIC_URL}/components/Planets/textures/swapi_earth.jpg`
      ),
      bumpMap: new THREE.TextureLoader().load(BumpMap),
      specularMap: new THREE.TextureLoader().load('./textures/earthspec1k.jpg'), // Specular highlights
    });
    console.log(`publicURL: ${process.env.PUBLIC_URL}`);
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Camera position
    camera.position.z = 15;

    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      currentRef.removeChild(renderer.domElement);
      scene.remove(earth);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100vw', height: '50vh' }} />;
};

export default Planet;
