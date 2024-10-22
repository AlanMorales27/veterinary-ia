import React, { useEffect } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const FBXModel = () => {
    useEffect(() => {
        // Configuración de la escena, cámara y renderizador
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Cargar el modelo FBX
        const loader = new FBXLoader();
        loader.load('/public/models/model_1.fbx', (object) => {
            scene.add(object);
        });

        // Posicionar la cámara
        camera.position.z = 5;

        // Animación
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        // Limpiar en caso de desmontar el componente
        return () => {
            renderer.dispose();
            document.body.removeChild(renderer.domElement);
        };
    }, []);

    return null; // No renderiza nada en el DOM
};

export default FBXModel;
