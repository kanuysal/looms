'use client';
import React from "react";
import { NextArrowTwo } from "../svg";
import Link from "next/link";
import { useTranslation } from "@/provider/LanguageProvider";

export default function StudioPanelFive() {
  const { t } = useTranslation();

  return (
    <div className="panel-2 tp-studio-height">
      <div className="tp-studio-cta-area pt-100 pb-100 tp-studio-height tp-studio-plr d-flex justify-content-center align-items-center">
        <div className="container container-1330">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-studio-cta-title-box mb-70 text-center">
                <h4 className="tp-studio-cta-title" style={{ lineHeight: '1.2' }}>
                  {t('build_next_big_thing')}
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-studio-cta-btn-box mb-45 d-flex justify-content-center">
                <Link
                  className="tp-btn-black-animated p-relative d-inline-flex align-items-center d-none d-md-flex"
                  href="/contact"
                >
                  <span className="btn-expand"></span>
                  <span className="btn-1">{t('keep_in_touch').split(' ')[0]}</span>
                  <span className="btn-2">{t('keep_in_touch').split(' ')[1] || ''}</span>
                  <span className="btn-3">{t('keep_in_touch').split(' ').slice(2).join(' ')}</span>
                </Link>
                <Link className="tp-btn-black d-md-none" href="/contact">
                  {t('keep_in_touch')}
                </Link>
              </div>
              <div className="tp-studio-cta-subscribe-link text-center">
                <Link href="mailto:info@interlooms.com">
                  {t('subscribe_newsletter')}
                  <span>
                    <NextArrowTwo />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
