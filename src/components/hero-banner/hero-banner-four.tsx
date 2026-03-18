'use client';
import React from "react";
import Link from "next/link";
import { ProjectShape, RightArrow } from "../svg";
import RingSequence from "../elements/RingSequence";
import { useTranslation } from "@/provider/LanguageProvider";
import { useTheme } from "next-themes";

export default function HeroBannerFour() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const bgColor = !mounted ? '#fff' : (theme === 'light' ? '#fff' : '#000');
  const shapeColor = !mounted ? '#000' : (theme === 'light' ? '#000' : '#fff');
  const textColor = !mounted ? '#19191A' : (theme === 'light' ? '#19191A' : '#fff');
  const innerTextColor = !mounted ? '#fff' : (theme === 'light' ? '#fff' : '#19191A');

  return (
    <div className="tp-hero-3-area mt-45 p-relative fix" style={{ 
      minHeight: '850px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: bgColor, 
      transition: 'background-color 0.3s ease' 
    }}>
      {/* Background Graphic Interaction Area - Centered Wrapper */}
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        width: '100%', 
        maxWidth: '850px',
        height: '800px', 
        zIndex: 0, 
        opacity: 0.7 
      }}>
        {/* The Path Animation (RingSequence) */}
        <RingSequence 
          imagePath="/assets/animations/ring/" 
          totalFrames={250} 
          width={800} 
          height={800} 
          autoHeight={true}
        />
      </div>

      {/* The "Say Hello" button - Positioned based on user feedback */}
      <div className="tp-hero-3-btn-box" style={{ 
        position: 'absolute', 
        bottom: '10vh', 
        right: '15vw', 
        zIndex: 10 
      }}>
        <Link className="tp-btn-zikzak p-relative" href="/contact" style={{ 
          width: '180px', 
          height: '180px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span className="zikzak-content" style={{ 
            color: innerTextColor, 
            position: 'relative', 
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            width: '100%',
            height: '100%',
            transform: 'translateX(-5vw)' // Moving the text 5vw to the left inside the button
          }}>
            <span style={{ display: 'block', lineHeight: '1.2' }}>
              {t('say_hello').split(' ')[0]} <br /> {t('say_hello').split(' ').slice(1).join(' ')}
            </span>
            <RightArrow clr={innerTextColor} />
          </span>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) scale(1.1)', width: '100%', height: '100%', zIndex: 1 }}>
            <ProjectShape clr={shapeColor} />
          </div>
        </Link>
      </div>

      <div className="container container-1740 pt-115 pb-90" style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
        <div className="row justify-content-center text-center">
          <div className="col-xl-12">
            <div className="tp-hero-3-content p-relative z-index-1" style={{ pointerEvents: 'auto' }}>
              <span className="tp-hero-subtitle-3 tp_reveal_anim" style={{ 
                color: textColor, 
                opacity: 0.8,
                display: 'block',
                marginBottom: '10px'
              }}>
                {t('hero_subtitle')}
              </span>
              <h4 className="tp-hero-3-title tp_reveal_anim mb-40" style={{ mixBlendMode: 'exclusion' }}>
                {t('hero_title_1')} <br />
                <span>{t('hero_title_2')}</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
