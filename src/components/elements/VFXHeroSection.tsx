'use client';

import React, { useEffect, useRef } from 'react';

const VFXHeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // We dynamically inject the module script to export VFX globally, avoiding Next.js CORS nuances
    const scriptId = 'vfx-module-loader';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'module';
      // The exact shader and initialization from index.html
      script.innerHTML = `
        import { VFX } from "https://esm.sh/@vfx-js/core@0.6.0";
        
        const shader = \`
          precision highp float;
          uniform vec2 resolution;
          uniform vec2 offset;
          uniform vec2 mouse;
          uniform float time;
          uniform sampler2D src;

          void main() {
            vec2 uv = (gl_FragCoord.xy - offset) / resolution;
            vec4 color = texture2D(src, uv);

            vec2 d = gl_FragCoord.xy - mouse;
            float m = 1. - tanh(100. / length(d)) * 0.2;
            
            uv.x += sin(uv.y * 3.) * 0.3;
            uv.y += sin(uv.x * 7.) * 0.4;
            
            float v = (sin(uv.x) + sin(uv.y)) * m;
             
            float f = sin(v * 200. + time * 10.);
            f = smoothstep(.0, .2, f);
            gl_FragColor = color * f;
          }
        \`;

        document.fonts.ready.then(() => {
          const vfx = new VFX();
          const elements = document.querySelectorAll('.vfx-header');
          elements.forEach(el => {
            vfx.add(el, { shader, overflow: 400 });
          });
        });
      `;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <section 
        className="section-footer vfx-section" 
        ref={containerRef}
        style={{
          position: 'relative',
          width: '100vw',
          height: '50vh', // Takes up half the screen vertically
          backgroundColor: '#000000',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* The Exact Background Video from index.html */}
        <div 
          className="bg-footer"
          style={{
            position: 'absolute',
            bottom: 0, // Align to bottom so we don't scale the waves incorrectly
            left: 0,
            width: '100%',
            height: '100vh', // Keep the video's original scale
            zIndex: 1,
            backgroundColor: '#000000',
          }}
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="bg-video"
            crossOrigin="anonymous"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.6,
              mixBlendMode: 'screen',
            }}
          >
            <source
              src="https://uploads-ssl.webflow.com/56d8a8f1100bc1bb7928eebd/58458c90a39ccfdb4c175922_HECO_LINE_ANIMATION_v04-transcode.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* VFX Footer Wrapper */}
        <div 
          className="footer-vfx-wrapper"
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
            width: '100%',
            zIndex: 9000,
            pointerEvents: 'none',
            display: 'flex',
            justifyContent: 'center',
            mixBlendMode: 'normal',
          }}
        >
          <h1
            className="vfx-header"
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
              display: 'block',
            }}
          >
            INTERLOOMS
          </h1>
        </div>
      </section>
    </>
  );
};

export default VFXHeroSection;

