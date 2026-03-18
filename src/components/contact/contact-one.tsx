'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectShape, RightArrow } from "../svg";
import cta from "@/assets/img/home-01/cta/cta-img-1.png";
import { useTranslation } from "@/provider/LanguageProvider";

export default function ContactOne() {
  const { t } = useTranslation();
  return (
    <div className="tp-cta-area black-bg pt-120 pb-120 z-index fix">
      <div className="container">
        <div className="col-xl-12">
          <div className="tp-cta-title-box p-relative text-center">
            <h4 className="tp-cta-title cta-text mb-40">
              {t('lets_build')} <br />
              <span>{t('together')}</span>
            </h4>
            <div className="row justify-content-center">
              <div className="col-xl-7">
                <p className="tp_fade_bottom mb-60">
                  {t('cta_desc')}
                </p>
              </div>
            </div>
            
            <div className="tp-cta-btn-box">
              <Link className="tp-btn-zikzak p-relative mx-auto" href="/contact">
                <span className="zikzak-content">
                  {t('contact').split(' ')[0]} <br /> {t('contact').split(' ').slice(1).join(' ')}
                  <RightArrow clr="#19191A" />
                </span>
                <ProjectShape />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
