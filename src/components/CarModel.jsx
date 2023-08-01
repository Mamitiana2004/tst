import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CarModel = () => {
  const mountRef = useRef(null);
  const animationRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer;

    const init = () => {
      scene = new THREE.Scene();
      sceneRef.current = scene;
      scene.background=new THREE.Color(26,26,26);

      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z =4 ;

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      // Créer une géométrie de cube
      const cubeGeometry = new THREE.BoxGeometry(1, 2, 1);

      // Créer un matériau pour la bordure blanche (wireframe)
      const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });

      // Créer un groupe pour contenir le cube et la bordure
      const cubeGroup = new THREE.Group();

      // Créer une copie du cube en utilisant la même géométrie, mais avec le matériau de bordure
      const cubeBorder = new THREE.Mesh(cubeGeometry, wireframeMaterial);
      cubeGroup.add(cubeBorder);

      // Ajouter le groupe à la scène
      scene.add(cubeBorder);

      const animate = () => {
        animationRef.current = requestAnimationFrame(animate);
        if (sceneRef.current) {
          cubeBorder.rotation.y += 0.1;
          cubeBorder.rotation.x += 0.001;
          renderer.render(sceneRef.current, camera);
        }
      };

      animate();
    };

    init();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      sceneRef.current = null;
      scene = null;
      camera = null;
      renderer = null;
    };
  }, []);

  return <div ref={mountRef}></div>;
};

export default CarModel;
