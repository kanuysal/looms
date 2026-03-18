'use client';
import React, { useState, useEffect } from 'react';
import RibbonAnimation from '../elements/RibbonAnimation';
import { useTheme } from 'next-themes';

export default function RibbonSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const bgColor = !mounted ? '#000' : (theme === 'light' ? '#fff' : '#000');

  return (
    <div 
      className="tp-ribbon-area pt-120 pb-120 overflow-hidden p-relative"
    >
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-xl-12">
            <div className="tp-ribbon-wrapper p-relative" style={{ minHeight: '400px' }}>
              <RibbonAnimation 
                imagePath="/assets/animations/ribbon/" 
                totalFrames={300} 
                width={1920} 
                height={600} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
