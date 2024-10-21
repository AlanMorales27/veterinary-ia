// src/ThreeScene.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Crea la escena
    const scene = new THREE.Scene();

    // Crea una cámara
    const camera = new THREE.PerspectiveCamera(
      75, // Campo de visión
      window.innerWidth / window.innerHeight, // Aspect ratio
      0.1, // Plano cercano
      1000 // Plano lejano
    );
    camera.position.z = 5;

    // Crea un renderizador
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Crea un cubo
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Función de animación
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotación del cubo
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Limpieza al desmontar el componente
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeScene;
