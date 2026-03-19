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
  
  // Very smooth mouse ripple
  float ripple = 1.0 - (0.5 / (1.0 + pow(dist / 120.0, 2.0)));
  
  // Extremely gentle, large scale ocean waves
  uv.x += sin(uv.y * 1.2 + time * 0.8) * 0.15;
  uv.y += cos(uv.x * 0.8 + time * 0.6) * 0.15;
  
  // Broad, soft light modulation
  float v = (sin(uv.x * 2.5) + cos(uv.y * 2.5)) * ripple;
  
  // Single, large, bold wave modulation (no flickering lines)
  float f = sin(v * 7.0 + time * 4.0);
  f = smoothstep(-0.2, 0.5, f);
  
  gl_FragColor = color * f;
}
`;

export default function VFXFooter() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let vfxInstance: any;
    let observer: IntersectionObserver;

    const initVFX = async () => {
      if (typeof window !== 'undefined' && !vfxInstance) {
        try {
          const { VFX } = await import('@vfx-js/core');
          vfxInstance = new VFX();
          
          if (textRef.current) {
            vfxInstance.add(textRef.current, { shader, overflow: 300 });
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
      }, { rootMargin: '200px' });
      
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
    <div style={{ 
      backgroundColor: '#000', 
      width: '100%', 
      overflow: 'hidden', 
      position: 'relative',
      height: '60vh', // Increased height to match original feeling
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Background Video (Wavy structure) */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          crossOrigin="anonymous"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            opacity: 0.7,
            transform: 'scale(1.1)' // Small scale push to eliminate any potential edges
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
          fontFamily: `'Cinzel', var(--tp-ff-prisma), 'Arial Black', sans-serif`,
          fontWeight: 700,
          fontSize: '10vw',
          width: '100%',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          lineHeight: '1',
          letterSpacing: '8px',
          color: '#fff',
          margin: 0,
          userSelect: 'none',
          zIndex: 10,
          position: 'relative'
        }}
      >
        INTERLOOMS
      </h1>
    </div>
  );
}
