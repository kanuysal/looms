'use client';
import React from "react";
import Image from "next/image";
import { CloseThree, CloseTwo } from "../svg";
import Link from "next/link";
import MobileMenusTwo from "./mobile-menus-2";
import { useTranslation } from "@/provider/LanguageProvider";

// prop type
type IProps = {
  openOffcanvas: boolean;
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileOffcanvasTwo({openOffcanvas,setOpenOffcanvas}:IProps) {
  const { t } = useTranslation();

  return (
    <div className={`tp-offcanvas-2-area p-relative ${openOffcanvas ? "opened" : ""}`}>
      <div className="tp-offcanvas-2-bg is-left left-box"></div>
      <div className="tp-offcanvas-2-bg is-right right-box d-none d-md-block"></div>
      <div className="tp-offcanvas-2-wrapper">
        <div className="tp-offcanvas-2-left left-box">
          <div className="tp-offcanvas-2-left-wrap d-flex justify-content-between align-items-center">
            <div className="tpoffcanvas__logo">
              <Link href="/" style={{ fontSize: '24px', fontFamily: 'var(--tp-ff-prisma)', color: '#000', textTransform: 'uppercase', letterSpacing: '2px' }}>
                INTERLOOMS
              </Link>
            </div>
            <div className="tp-offcanvas-2-close d-md-none text-end">
              <button onClick={() => setOpenOffcanvas(false)} className="tp-offcanvas-2-close-btn tp-offcanvas-2-close-btn">
                <span className="text">
                  <span>{t('close')}</span>
                </span>
                <span className="d-inline-block">
                  <span>
                    <CloseThree />
                  </span>
                </span>
              </button>
            </div>
          </div>
          <div className="tp-main-menu-mobile menu-hover-active counter-row">
            <MobileMenusTwo/>
          </div>
        </div>
        <div className="tp-offcanvas-2-right right-box d-none d-md-block p-relative">
          <div className="tp-offcanvas-2-close text-end">
            <button onClick={() => setOpenOffcanvas(false)} className="tp-offcanvas-2-close-btn">
              <span className="text">
                <span>{t('close')}</span>
              </span>

              <span className="d-inline-block">
                <span>
                  <CloseTwo />
                </span>
              </span>
            </button>
          </div>
          <div className="tp-offcanvas-2-right-inner d-flex flex-column justify-content-between h-100">
            <div className="tpoffcanvas__right-info">
              <div className="tpoffcanvas__tel">
                <Link href="tel:+34633623632">+34 633 623 632 (ES)</Link>
              </div>
              <div className="tpoffcanvas__tel">
                <Link href="tel:+12243434649">+1 (224) 343 46 49 (USA)</Link>
              </div>
              <div className="tpoffcanvas__mail">
                <Link href="mailto:info@interlooms.com">info@interlooms.com</Link>
              </div>
              <div className="tpoffcanvas__text">
                <p>{t('cta_desc')}</p>
              </div>
            </div>
            <div className="tpoffcanvas__social-link">
              <ul>
                <li><Link className="mb-10" href="https://www.linkedin.com/in/interlooms/" target="_blank">Linkedin</Link></li>
                <li><Link className="mb-10" href="https://agencyds.com" target="_blank">Website</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
