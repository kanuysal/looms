'use client';
import React, { CSSProperties } from "react";
import Image from "next/image";
import { useTranslation } from "@/provider/LanguageProvider";

// images
import hero_1 from "@/assets/img/department/main/main_(1).jpg";
import hero_2 from "@/assets/img/department/main/main_(2).jpg";
import shape from "@/assets/img/home-08/hero/shape-1.png";
import hero_thumb_1 from "@/assets/img/department/main/main_(3).jpg";
import hero_thumb_2 from "@/assets/img/department/main/main_(4).jpg";
import hero_thumb_3 from "@/assets/img/department/main/main_(5).jpg";
import hero_thumb_4 from "@/assets/img/department/main/main_(6).jpg";

const imgStyle: CSSProperties = { width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" };

export default function StudioPanelOne() {
  const { t } = useTranslation();

  return (
    <div className="panel-2 tp-studio-height">
      <div className="tp-studio-hero-area tp-studio-hero-space tp-studio-height tp-studio-plr p-relative fix pt-145 pb-145">
        <div className="tp-studio-hero-img-1 d-none d-xl-block">
          <Image src={hero_1} alt="hero-img" style={imgStyle} />
        </div>
        <div className="tp-studio-hero-img-2 d-none d-xl-block">
          <Image src={hero_2} alt="hero-img" style={imgStyle} />
        </div>
        <div className="container container-1480">
          <div className="row align-items-center">
            <div className="col-xl-7">
              <div className="tp-studio-hero-title-box p-relative">
                <h1 className="tp-studio-hero-title" style={{ mixBlendMode: 'exclusion', color: '#fff' }}>
                  {t('video_experience_title')}
                </h1>
                <span className="tp-studio-hero-shape-1 d-none d-md-block" style={{ mixBlendMode: 'exclusion' }}>
                  <Image src={shape} alt="hero-img" style={{...imgStyle, filter: 'invert(1)'}} />
                </span>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="tp-studio-hero-right">
                <div className="row gx-90">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="tp-studio-hero-thumb mb-90 text-end">
                      <Image
                        src={hero_thumb_1}
                        alt="hero-img"
                        style={imgStyle}
                      />
                    </div>
                    <div className="tp-studio-hero-thumb text-end">
                      <Image
                        src={hero_thumb_2}
                        alt="hero-img"
                        style={imgStyle}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="tp-studio-hero-thumb mb-90 text-end">
                      <Image
                        src={hero_thumb_3}
                        alt="hero-img"
                        style={imgStyle}
                      />
                    </div>
                    <div className="tp-studio-hero-thumb text-end">
                      <Image
                        src={hero_thumb_4}
                        alt="hero-img"
                        style={imgStyle}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
