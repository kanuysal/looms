'use client';

import React, { useEffect, useRef } from 'react';

const shader = `
precision highp float;
uniform vec2 resolution;
uniform vec2 offset;
uniform vec2 mouse;
uniform float time;
uniform sampler2D src;

void main() {
  vec2 uv = (gl_FragCoord.xy - offset) / resolution;
  vec4 color = texture2D(src, uv);

  // Mouse interaction
  vec2 d = gl_FragCoord.xy - mouse;
  float dist = length(d);
  
  // Broad mouse ripple
  float ripple = 1.0 - (0.4 / (1.0 + pow(dist / 100.0, 2.0)));
  
  // Large scale wave distortion
  uv.x += sin(uv.y * 1.5 + time * 1.0) * 0.15;
  uv.y += cos(uv.x * 1.5 + time * 1.0) * 0.15;
  
  // Broad, soft light modulation
  float v = (sin(uv.x * 4.0) + cos(uv.y * 4.0)) * ripple;
   
  // Bold, wide light modulation (Test VFX broad waves)
  float f = sin(v * 40.0 + time * 5.0);
  f = smoothstep(0.0, 0.4, f);
  gl_FragColor = color * f;
}
`;

const VFXHeroSection = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let vfxInstance: any;
    let observer: IntersectionObserver;

    const initVFX = async () => {
      if (typeof window !== 'undefined' && !vfxInstance) {
        try {
          // Import internally to ensure client-side only and fresh instance per mount
          const { VFX } = await import('@vfx-js/core');
          vfxInstance = new VFX();
          
          if (textRef.current) {
            vfxInstance.add(textRef.current, { shader, overflow: 400 });
          }
        } catch (err) {
          console.error("VFX init error", err);
        }
      }
    };

    if (textRef.current) {
      observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (document.fonts) {
            document.fonts.ready.then(() => setTimeout(initVFX, 100));
          } else {
            setTimeout(initVFX, 100);
          }
          observer.disconnect();
        }
      }, { rootMargin: '300px' });
      
      observer.observe(textRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (vfxInstance && textRef.current) {
         try {
           vfxInstance.remove(textRef.current);
         } catch(e) {}
      }
    };
  }, []);

  return (
    <section 
      className="vfx-hero-section" 
      style={{
        position: 'relative',
        width: '100vw',
        height: '60vh', 
        backgroundColor: '#000000',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background Video (Wavy structure) */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          backgroundColor: '#000000',
          opacity: 0.7
        }}
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          crossOrigin="anonymous"
          style={{
            width: '100%',
            height: '110%', // Increased height slightly
            objectFit: 'cover',
            objectPosition: 'center bottom', // Force waves to the top/center
            mixBlendMode: 'screen',
            position: 'absolute',
            bottom: 0
          }}
        >
          <source
            src="https://uploads-ssl.webflow.com/56d8a8f1100bc1bb7928eebd/58458c90a39ccfdb4c175922_HECO_LINE_ANIMATION_v04-transcode.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <h1
        ref={textRef}
        style={{
          fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
          fontWeight: 400,
          fontSize: '11vw',
          width: '100%',
          color: '#ffffff',
          margin: 0,
          padding: 0,
          lineHeight: 1,
          letterSpacing: '0.05em',
          whiteSpace: 'nowrap',
          textAlign: 'center',
          zIndex: 10,
          position: 'relative',
          userSelect: 'none'
        }}
      >
        INTERLOOMS
      </h1>
    </section>
  );
};

export default VFXHeroSection;
