'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RightArrow } from "@/components/svg";
import { useTranslation } from "@/provider/LanguageProvider";

// prop type
type IProps = {
  whiteFooter?: boolean;
  topCls?: string;
};

export default function FooterTwo({ whiteFooter = false,topCls='footer-top' }: IProps) {
  const { t } = useTranslation();

  return (
    <footer className={`${topCls}`}>
      <div
        className={`tp-footer-2-area pt-100 pb-20 ${
          whiteFooter ? "tp-footer-white" : "black-bg"
        }`}
      >
        <div className="container container-1480">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-1">
                <div className="tp-footer-2-widget-logo">
                  <Link href="/" style={{ fontSize: '24px', fontFamily: 'var(--tp-ff-prisma)', color: whiteFooter ? 'inherit' : '#fff', textTransform: 'uppercase', letterSpacing: '2px' }}>
                    INTERLOOMS
                  </Link>
                </div>
                <div className="tp-footer-2-widget-text mt-30">
                  <p>
                    {t('footer_desc')}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-2">
                <div className="tp-footer-2-widget-menu">
                  <h4 className="tp-footer-2-widget-title">{t('website_map')}</h4>
                  <ul>
                    <li><Link href="/">{t('home')}</Link></li>
                    <li><Link href="/about-us">{t('about')}</Link></li>
                    <li><Link href="/department">{t('departments')}</Link></li>
                    <li><Link href="/contact">{t('contact')}</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-3">
                <h4 className="tp-footer-2-widget-title">{t('spain_title')}</h4>
                <div className="tp-footer-2-contact-item">
                  <span>{t('spain_office')}</span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <Link href={`mailto:${t('spain_email')}`}>{t('spain_email')}</Link>
                  </span>
                  <br />
                  <span>{t('spain_phone')}</span>
                </div>
                <div className="mt-30">
                  <h4 className="tp-footer-2-widget-title">{t('usa_title')}</h4>
                  <div className="tp-footer-2-contact-item">
                    <span>{t('usa_office')}</span>
                  </div>
                  <div className="tp-footer-2-contact-item">
                    <span>
                      <Link href={`mailto:${t('usa_email')}`}>{t('usa_email')}</Link>
                    </span>
                    <br />
                    <span>{t('usa_phone')}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-4">
                <div className="tp-footer-2-widget-newslatter">
                  <h4 className="tp-footer-2-widget-title">
                    {t('subscribe_newsletter')}
                  </h4>
                  <form action="#">
                    <div className="tp-footer-2-input p-relative">
                      <input type="text" placeholder={t('placeholder_email')} />
                      <button>
                        <RightArrow clr={whiteFooter?"currentcolor":'#F3F3F4'}/>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`tp-copyright-2-area tp-copyright-2-bdr-top ${
          whiteFooter ? "tp-copyright-white" : "black-bg"
        }`}
      >
        <div className="container container-1480">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5">
              <div className="tp-copyright-2-left text-center text-lg-start">
                <p>
                  {t('all_rights')} — {new Date().getFullYear()} © INTERLOOMS
                </p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="tp-copyright-2-social text-center text-lg-end">
                <Link className="mb-10" href="https://www.linkedin.com/in/interlooms/" target="_blank">Linkedin</Link>
                <Link className="mb-10" href="https://agencyds.com" target="_blank">Website</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
