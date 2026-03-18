'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowBg, FirstBracket, FirstBracketTwo, RightArrowTwo } from "../svg";
import shape from "@/assets/img/home-04/about/about-shape-1.png";
import { useTranslation } from "@/provider/LanguageProvider";
import { useTheme } from "next-themes";

export default function AboutThree() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const title2Color = !mounted ? '#19191A' : (theme === 'light' ? '#19191A' : '#fff');

  return (
    <div className="tp-about-3-area pt-150 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-11">
            <div className="tp-about-3-title-box mb-60" style={{ minHeight: '350px' }}>
              <span className="tp-section-subtitle-2 tp_fade_bottom">
                <span>
                  <FirstBracket />
                </span>
                <span className="tp-subtitle-text tp_text_invert">
                  {t('about_subtitle')}
                </span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span>
              <h4 className="tp-section-title-90 tp_text_invert" style={{ 
                paddingBottom: '80px', 
                lineHeight: '1.3', 
                overflow: 'visible'
              }}>
                {t('about_title_1')} 
                <span style={{ display: 'inline-block', paddingBottom: '10px', color: title2Color }}>
                  {t('about_title_2')}
                </span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-4">
            <div className="tp-about-3-shape text-lg-end">
              <Image src={shape} alt="shape" style={{ height: "auto" }} />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="tp-about-3-content">
              <p className="mb-30 tp_fade_bottom">
                {t('about_desc_1')}
              </p>
              <p className="mb-45 tp_fade_bottom">
                {t('about_desc_2')}
              </p>
              <Link className="tp-btn-black-2 tp_fade_bottom" href="/about-us">
                {t('about_us_btn')}
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
