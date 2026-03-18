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

  // Mouse
  vec2 d = gl_FragCoord.xy - mouse;
  float m = 1. - tanh(100. / length(d)) * 0.2;
  
  // Distort (subtle wave)
  uv.x += sin(uv.y * 3.) * 0.3;
  uv.y += sin(uv.x * 7.) * 0.4;
  
  // Value field
  float v = (sin(uv.x) + sin(uv.y)) * m;
   
  // Convert to color
  float f = sin(v * 200. + time * 10.);
  f = smoothstep(.0, .2, f);
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
            // Using a standard/web-safe font fallback helps prevent SVG <foreignObject> rendering issues
            // that cause WebGL to capture a blank/black texture on first load.
            vfxInstance.add(textRef.current, { shader, overflow: 100 });
          }
        } catch (err) {
          console.error("VFX init error", err);
        }
      }
    };

    if (textRef.current) {
      observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          // Initialize when element is in or near viewport
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
    <div style={{ backgroundColor: '#000', padding: '120px 0', width: '100%', overflow: 'hidden', position: 'relative' }}>
      <h1 
        ref={textRef} 
        style={{
          fontFamily: `'Cinzel', var(--tp-ff-prisma), 'Arial Black', sans-serif`,
          fontWeight: 700,
          fontSize: '9vw',
          width: '100%',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          lineHeight: '1',
          letterSpacing: '2px',
          color: '#fff',
          margin: 0,
          userSelect: 'none',
          display: 'inline-block'
        }}
      >
        INTERLOOMS
      </h1>
    </div>
  );
}
