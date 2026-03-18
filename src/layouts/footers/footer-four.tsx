"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "@/provider/LanguageProvider";

export default function FooterFour() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="tp-footer-3-area dark-bg pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-1">
                <div className="tp-footer-3-widget mb-40">
                  <h4 className="tp-footer-3-title">{t('website_map')}</h4>
                  <div className="tp-footer-3-menu">
                    <ul>
                      <li><Link href="/">{t('home')}</Link></li>
                      <li><Link href="/about">{t('about')}</Link></li>
                      <li><Link href="/department">{t('departments')}</Link></li>
                      <li><Link href="/contact">{t('contact')}</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">{t('follow')}</h4>
                  <div className="tp-footer-3-social">
                    <Link href="https://www.linkedin.com/in/interlooms/" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link href="https://agencyds.com" target="_blank">
                      <i className="fa-solid fa-globe"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget text-md-center footer-col-3-2">
                <div className="tp-footer-3-logo-box">
                  <p className="mb-40">
                    {t('footer_desc')}
                  </p>
                  <Link className="tp-footer-3-logo p-relative" href="/" style={{ fontSize: '40px', fontFamily: 'var(--tp-ff-prisma)', color: '#fff', textTransform: 'uppercase', letterSpacing: '4px' }}>
                    INTERLOOMS
                  </Link>
                  <p className="tp-footer-3-copyright mt-60">
                    {new Date().getFullYear()} Interlooms <br /> © {t('all_rights')}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-3">
                <div className="tp-footer-3-widget mb-30">
                  <h4 className="tp-footer-3-title">{t('contact')}</h4>
                  <div className="tp-footer-2-contact-item mb-20">
                    <span style={{ color: '#fff', fontWeight: 'bold', display: 'block' }}>{t('spain_title')}:</span>
                    <span>
                      <Link href={`https://www.google.com/maps/search/${t('spain_office').replace(/ /g, '+')}`} target="_blank">
                        {t('spain_office')}
                      </Link>
                    </span>
                    <span style={{ display: 'block' }}>P: <Link href={`tel:${t('spain_phone').replace(/\s+/g, '')}`}>{t('spain_phone')}</Link></span>
                    <span style={{ display: 'block' }}>E: <Link href={`mailto:${t('spain_email')}`}>{t('spain_email')}</Link></span>
                  </div>
                  <div className="tp-footer-2-contact-item">
                    <span style={{ color: '#fff', fontWeight: 'bold', display: 'block' }}>{t('usa_title')}:</span>
                    <span>
                      <Link href={`https://www.google.com/maps/search/${t('usa_office').replace(/ /g, '+')}`} target="_blank">
                        {t('usa_office')}
                      </Link>
                    </span>
                    <span style={{ display: 'block' }}>P: <Link href={`tel:${t('usa_phone').replace(/\s+/g, '')}`}>{t('usa_phone')}</Link></span>
                    <span style={{ display: 'block' }}>E: <Link href={`mailto:${t('usa_email')}`}>{t('usa_email')}</Link></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
