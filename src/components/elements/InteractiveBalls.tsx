import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

interface BallInstance {
  mesh: THREE.Mesh;
  targetPos: THREE.Vector3;
  nativePos: THREE.Vector3;
  randomOffset: number;
}

interface InteractiveBallsProps {
  colors?: string[]; // 3 colors for the balls
  texturePath?: string; // Path to balls textures
}

const InteractiveBalls: React.FC<InteractiveBallsProps> = ({ 
  colors = ["#F2A772", "#C0918D", "#DDC3BF"],
  texturePath = "/assets/animations/balls/"
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const ballsRef = useRef<BallInstance[]>([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    // --- Scene Setup ---
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // --- Lights ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.5);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // --- Textures ---
    const textureLoader = new THREE.TextureLoader();
    const diffuseMap = textureLoader.load(`${texturePath}plain-diffuse.webp`);
    const normalMap = textureLoader.load(`${texturePath}plain-normal.webp`);
    const roughnessMap = textureLoader.load(`${texturePath}plain-roughness.webp`);

    diffuseMap.wrapS = diffuseMap.wrapT = THREE.RepeatWrapping;
    normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;
    roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping;

    // --- Balls Creation ---
    const geometry = new THREE.SphereGeometry(1.5, 64, 64);
    const ballPos = [
      new THREE.Vector3(-3, 2, 0),
      new THREE.Vector3(2, -1, 2),
      new THREE.Vector3(0, -3, -2)
    ];

    colors.forEach((color, i) => {
      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(color),
        map: diffuseMap,
        normalMap: normalMap,
        roughnessMap: roughnessMap,
        roughness: 1,
        metalness: 0.1,
      });

      const mesh = new THREE.Mesh(geometry, material);
      const pos = ballPos[i] || new THREE.Vector3(0, 0, 0);
      mesh.position.copy(pos);
      scene.add(mesh);

      ballsRef.current.push({
        mesh,
        nativePos: pos.clone(),
        targetPos: pos.clone(),
        randomOffset: Math.random() * 100
      });
    });

    // --- Mouse Interaction ---
    const onMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', onMouseMove);

    // --- Animation Loop ---
    const tick = (time: number) => {
      const elapsed = time / 1000;

      ballsRef.current.forEach((ball) => {
        // Subtle floating
        ball.mesh.position.y = ball.nativePos.y + Math.sin(elapsed + ball.randomOffset) * 0.2;
        ball.mesh.position.x = ball.nativePos.x + Math.cos(elapsed * 0.8 + ball.randomOffset) * 0.1;

        // Mouse reactivity
        ball.mesh.rotation.y += 0.005;
        ball.mesh.rotation.x = mouse.current.y * 0.2;
        ball.mesh.rotation.z = mouse.current.x * 0.2;

        // Subtle follow
        ball.mesh.position.x += mouse.current.x * 0.5;
        ball.mesh.position.y += mouse.current.y * 0.5;
      });

      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };

    const requestId = requestAnimationFrame(tick);

    // --- Resize handler ---
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(requestId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      ballsRef.current.forEach(b => {
        (b.mesh.material as THREE.Material).dispose();
      });
      renderer.dispose();
    };
  }, [colors, texturePath]);

  return (
    <div 
      ref={mountRef} 
      className="interactive-balls-scene" 
      style={{ width: '100%', height: '100vh', background: 'transparent' }}
    />
  );
};

export default InteractiveBalls;
