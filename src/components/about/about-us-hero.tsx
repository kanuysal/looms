'use client';
import React from "react";
import { scroller } from "react-scroll";
import { ScrollDown } from "../svg";
import Link from "next/link";
import RingSequence from "../elements/RingSequence";
import { useTranslation } from "@/provider/LanguageProvider";

export default function AboutUsHero() {
  const { t } = useTranslation();
  
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
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-8">
            <div
              className="ab-inner-hero-title-box"
              data-lag="0.2"
              data-stagger="0.08"
            >
              <span className="ab-inner-hero-subtitle">
                {t('digital_creative_agency').split(' ')[0]} <br /> {t('digital_creative_agency').split(' ').slice(1).join(' ')}
              </span>

              <h4 className="tp_title_anim mt-30 mb-0" style={{ position: 'relative', zIndex: 10, maxWidth: '800px' }}>
                {t('impact_desc')}
              </h4>

              <div style={{ padding: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', maxWidth: '600px', marginTop: '-40px' }}>
                <RingSequence 
                  imagePath="/assets/animations/ring/" 
                  totalFrames={250} 
                  width={600} 
                  height={600} 
                  autoHeight={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-xl-5 col-lg-8">
            <div
              className="ab-inner-hero-content"
              data-lag="0.2"
              data-stagger="0.08"
            >
              <p>
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
