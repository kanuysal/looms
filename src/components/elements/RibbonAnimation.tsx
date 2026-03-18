import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface RibbonAnimationProps {
  imagePath?: string; // e.g., "/assets/animations/ribbon/"
  totalFrames?: number; // 300
  width?: number;
  height?: number;
}

const RibbonAnimation: React.FC<RibbonAnimationProps> = ({ 
  imagePath = "/assets/animations/ribbon/", 
  totalFrames = 300, 
  width = 1920, 
  height = 600
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
          console.error(`Failed to load frame: ${img.src}`);
          loadedCount++; // Count it anyway to avoid getting stuck
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
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      onUpdate: () => render(Math.floor(airbnb.frame))
    });

    return () => {
      tl.kill();
    };
  }, [isLoaded, images.length, totalFrames]);

  return (
    <div ref={containerRef} className="ribbon-animation-container" style={{ width: '100%', overflow: 'hidden', backgroundColor: 'transparent' }}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </div>
  );
};

export default RibbonAnimation;
