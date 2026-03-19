'use client';
import React from "react";
import { scroller } from "react-scroll";
import { ScrollDown } from "../svg";
import Link from "next/link";
import RingSequence from "../elements/RingSequence";
import { useTranslation } from "@/provider/LanguageProvider";
import { useTheme } from "next-themes";

export default function AboutUsHero() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  const scrollTo = () => {
    scroller.scrollTo('about-info', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <div
      className="ab-inner-hero-area ab-inner-hero-bg p-relative"
      style={{ background: "transparent" }}
    >
      <div className="breadcurmb-site d-none">
        <h6>{t('about_us_page_title')}</h6>
      </div>
      <div className="ab-inner-hero-scroll smooth">
        <a className="pointer" onClick={scrollTo}>
          <span>
            {t('scroll_explore')}
            <ScrollDown />
          </span>
        </a>
      </div>
      <div className="container container-1480" style={{ position: 'relative', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* Animation as background */}
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          zIndex: 1, 
          width: '100%', 
          maxWidth: '800px',
          opacity: 0.8
        }}>
          <RingSequence 
            imagePath="/assets/animations/ring/" 
            totalFrames={250} 
            width={800} 
            height={800} 
            autoHeight={true}
          />
        </div>

        <div className="row" style={{ position: 'relative', zIndex: 10 }}>
          <div className="col-xl-12 text-center">
            <div
              className="ab-inner-hero-title-box"
              data-lag="0.2"
              data-stagger="0.08"
            >
              <h1 
                className="tp_title_anim mb-0" 
                style={{ 
                  fontSize: 'clamp(30px, 8vw, 90px)',
                  color: mounted && theme === 'dark' ? '#fff' : '#000',
                  lineHeight: '0.9',
                  fontWeight: '900',
                  textTransform: 'uppercase',
                  letterSpacing: '-2px'
                }}
              >
                GLOBAL <br /> TEXTILE <br /> SOLUTIONS
              </h1>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center mt-50" style={{ position: 'relative', zIndex: 10 }}>
          <div className="col-xl-6 text-center">
            <div
              className="ab-inner-hero-content"
              data-lag="0.2"
              data-stagger="0.08"
            >
              <p style={{ fontSize: '20px' }}>
                {t('interlooms_story_desc')}
              </p>
               <Link className="tp-btn-white-sm border-style" href="#">{t('our_story_btn')}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
