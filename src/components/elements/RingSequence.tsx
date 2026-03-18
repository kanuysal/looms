'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface RingSequenceProps {
  imagePath?: string; // e.g., "/assets/animations/ring/"
  totalFrames?: number; // 251
  width?: number;
  height?: number;
  scrub?: number | boolean;
  autoHeight?: boolean;
}

const RingSequence: React.FC<RingSequenceProps> = ({ 
  imagePath = "/assets/animations/ring/", 
  totalFrames = 250, 
  width = 654, 
  height = 654,
  scrub = 0.5,
  autoHeight = false
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i <= totalFrames; i++) {
        const img = new Image();
        const frameNum = i.toString().padStart(3, '0');
        img.src = `${imagePath}${frameNum}.webp`;
        img.onload = () => {
            loadedCount++;
            if (loadedCount >= totalFrames) {
                setIsLoaded(true);
            }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount >= totalFrames) {
            setIsLoaded(true);
          }
        };
        loadedImages[i] = img;
    }
    setImages(loadedImages);
  }, [imagePath, totalFrames]);

  useEffect(() => {
    if (!isLoaded || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    const render = (index: number) => {
      const img = images[index];
      if (img) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    };

    // Initial render
    render(0);

    const airbnb = { frame: 0 };
    const tl = gsap.to(airbnb, {
      frame: totalFrames,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      onUpdate: () => {
        const frameIndex = Math.floor(airbnb.frame);
        render(frameIndex);
      }
    });

    return () => {
      tl.kill();
    };
  }, [isLoaded, images.length, totalFrames]);

  return (
    <div ref={containerRef} className="ring-sequence-container" style={{ width: '100%', height: autoHeight ? '100%' : 'auto', overflow: 'hidden' }}>
      <div className="canvas-wrapper" style={{ height: autoHeight ? '100%' : '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          style={{ maxWidth: '100%', maxHeight: '100%', height: 'auto', objectFit: 'contain' }}
        />
      </div>
    </div>
  );
};

export default RingSequence;
