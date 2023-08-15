import * as THREE from 'three';
import { useEffect, useRef } from 'react';

const Avatar3D = ({ avatarAttributes }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const width = container.clientWidth; // Get container width
    const height = container.clientHeight; // Get container height

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height); // Use container width and height
    container.appendChild(renderer.domElement);

    const { body_shape, clothing, avatar_attributes } = avatarAttributes;
    const { species_traits, eye_color, skin_color } = avatar_attributes; // Destructuring the nested species_traits

    const getSizeMultipliers = (body_shape) => {
      switch (body_shape) {
        case 'tiny':
          return { head: 0.6, body: 0.4, arms: 0.3, legs: 0.3 };
        case 'small':
          return { head: 0.8, body: 0.6, arms: 0.4, legs: 0.4 };
        case 'medium':
          return { head: 1, body: 0.8, arms: 0.6, legs: 0.6 };
        case 'large':
          return { head: 1.2, body: 1, arms: 0.8, legs: 0.8 };
        case 'extra_large':
          return { head: 1.4, body: 1.2, arms: 1, legs: 1 };
        default:
          return { head: 1, body: 0.8, arms: 0.6, legs: 0.6 };
      }
    };

    const { head, body, arms, legs } = getSizeMultipliers(body_shape);

    // Material based on clothing
    const material =
      clothing === 'Jedi robes'
        ? new THREE.MeshStandardMaterial({ color: skin_color }) // Use the skin color from avatarAttributes
        : new THREE.MeshStandardMaterial({ color: 'green' });

    const avatarGroup = new THREE.Group();

    // Head
    const headGeometry = new THREE.SphereGeometry(0.5 * head, 32, 32);
    headGeometry.scale(1, 1.2, 1);
    const avatarHead = new THREE.Mesh(headGeometry, material);
    avatarHead.position.y = 1.25 * body; // Adjusted y position
    avatarGroup.add(avatarHead);

    // Create eyes
    const eyeGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const eyeMaterial = new THREE.MeshStandardMaterial({ color: eye_color });

    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.2, 0.2, 0.4); // Adjusted position
    leftEye.scale.set(1, 1.5, 1);
    avatarHead.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.2, 0.2, 0.4); // Adjusted position
    rightEye.scale.set(1, 1.5, 1);
    avatarHead.add(rightEye);

    // Nose
    const noseGeometry = new THREE.CylinderGeometry(
      0.05 * head,
      0.05 * head,
      0.2 * head,
      32
    );
    const nose = new THREE.Mesh(noseGeometry, material);
    nose.rotation.z = Math.PI / 2; // Rotate the nose to correct orientation
    nose.position.set(0, 0.15, 0.45); // Position on the face
    avatarHead.add(nose);

    // Mouth
    const mouthGeometry = new THREE.TorusGeometry(
      0.1 * head,
      0.02 * head,
      16,
      100,
      Math.PI
    );
    const mouth = new THREE.Mesh(mouthGeometry, material);
    mouth.rotation.x = Math.PI / 2; // Rotate the mouth to correct orientation
    mouth.position.set(0, -0.15, 0.4); // Position on the face
    avatarHead.add(mouth);

    // Body
    const bodyGeometry = new THREE.CylinderGeometry(
      0.4 * body,
      0.5 * body,
      1 * body,
      32
    );
    const avatarBody = new THREE.Mesh(bodyGeometry, material);
    avatarGroup.add(avatarBody);

    // Shoulders (connect arms)
    const shoulderGeometry = new THREE.SphereGeometry(0.15 * arms, 32, 32);
    const leftShoulder = new THREE.Mesh(shoulderGeometry, material);
    leftShoulder.position.set(-0.6 * arms, 0.3 * body, 0);
    avatarGroup.add(leftShoulder);

    const rightShoulder = new THREE.Mesh(shoulderGeometry, material);
    rightShoulder.position.set(0.6 * arms, 0.3 * body, 0);
    avatarGroup.add(rightShoulder);

    // Arms (rotate to look more natural)
    const armGeometry = new THREE.CylinderGeometry(
      0.1 * arms,
      0.1 * arms,
      0.6 * arms,
      32
    );
    const leftArm = new THREE.Mesh(armGeometry, material);
    leftArm.position.set(-0.8 * arms, 0, 0);
    leftArm.rotation.z = -Math.PI / 8; // Rotate slightly
    avatarGroup.add(leftArm);

    const rightArm = new THREE.Mesh(armGeometry, material);
    rightArm.position.set(0.8 * arms, 0, 0);
    rightArm.rotation.z = Math.PI / 8; // Rotate slightly
    avatarGroup.add(rightArm);

    // Thighs (connect legs)
    const thighGeometry = new THREE.SphereGeometry(0.2 * legs, 32, 32);
    const leftThigh = new THREE.Mesh(thighGeometry, material);
    leftThigh.position.set(-0.3 * legs, -0.5 * body, 0);
    avatarGroup.add(leftThigh);

    const rightThigh = new THREE.Mesh(thighGeometry, material);
    rightThigh.position.set(0.3 * legs, -0.5 * body, 0);
    avatarGroup.add(rightThigh);

    // Legs
    const legGeometry = new THREE.CylinderGeometry(
      0.2 * legs,
      0.2 * legs,
      1 * legs,
      32
    );
    const leftLeg = new THREE.Mesh(legGeometry, material);
    leftLeg.position.set(-0.3 * legs, -0.75 * body, 0);
    avatarGroup.add(leftLeg); // Add to avatar group

    const rightLeg = new THREE.Mesh(legGeometry, material);
    rightLeg.position.set(0.3 * legs, -0.75 * body, 0);
    avatarGroup.add(rightLeg); // Add to avatar group

    scene.add(avatarGroup); // Add the group to the scene

    // Apply species traits, e.g., ears
    if (species_traits.includes('yodas_species')) {
      const earGeometry = new THREE.ConeGeometry(0.25, 0.75, 64); // Adjusted size for the ears
      const leftEar = new THREE.Mesh(earGeometry, material);
      leftEar.position.set(-0.8, 1.15, -0.4); // Adjusted position
      leftEar.rotation.z = Math.PI / 2;

      const rightEar = new THREE.Mesh(earGeometry, material);
      rightEar.position.set(0.8, 1.15, -0.4); // Adjusted position
      rightEar.rotation.z = -Math.PI / 2;

      avatarGroup.add(leftEar);
      avatarGroup.add(rightEar);
    }

    camera.position.z = 5;

    // Light
    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(0, 1, 5);
    scene.add(light);

    const animate = () => {
      const time = Date.now() * 0.0005; // Create a time value for smooth oscillation

      // Rotate the head right and left on the y-axis
      avatarHead.rotation.y = Math.sin(time) * 0.1;

      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      renderer.dispose();
      scene.dispose();
      material.dispose();
    };
  }, [avatarAttributes]);

  return <div ref={containerRef} style={{ width: '100%', height: '300px' }} />;
};

export default Avatar3D;
