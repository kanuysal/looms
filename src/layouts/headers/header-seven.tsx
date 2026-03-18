'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/logo/logo-white-rotate.png";
import logo_2 from "@/assets/img/logo/logo-white.png";
import { MenuTwo, UpArrowTwo } from "@/components/svg";
import MobileOffcanvasTwo from "@/components/offcanvas/mobile-offcanvas-2";
import { useTranslation } from "@/provider/LanguageProvider";
import LanguageSwitcher from "@/components/elements/LanguageSwitcher";

export default function HeaderSeven() {
  const { t } = useTranslation();
  const [openOffCanvas, setOpenOffcanvas] = React.useState(false);
  
  return (
    <>
    <header>
      <div className="tp-header-7-area d-none d-xl-block">
        <div className="tp-header-7-wrap">
          <div className="tp-header-7-logo">
            <Link href="/" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontSize: '18px', fontFamily: 'var(--tp-ff-prisma)', color: '#fff', textTransform: 'uppercase', letterSpacing: '4px' }}>
              INTERLOOMS
            </Link>
          </div>
          <div className="tp-header-7-menubar">
            <button onClick={() => setOpenOffcanvas(true)} className="tp-offcanvas-open-btn">
              <span></span>
              <span></span>
            </button>
            <div className="mt-30" style={{ transform: 'rotate(-90deg)' }}>
               <LanguageSwitcher />
            </div>
          </div>
          <div className="tp-header-7-btn-box">
            <Link className="tp-btn-white-sm" href="/contact">
              {t('lets_talk')}
              <span>
                <MenuTwo/>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="tp-header-7-area tp-header-7-lg-area d-xl-none">
        <div className="tp-header-7-wrap">
          <div className="tp-header-7-logo tp-header-logo">
            <Link href="/" style={{ fontSize: '20px', fontFamily: 'var(--tp-ff-prisma)', color: '#fff', textTransform: 'uppercase', letterSpacing: '2px' }}>
              INTERLOOMS
            </Link>
          </div>
          <div className="tp-header-7-menubar d-flex align-items-center">
            <div className="mr-20">
               <LanguageSwitcher />
            </div>
            <button onClick={() => setOpenOffcanvas(true)} className="tp-offcanvas-open-btn">
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="tp-header-7-btn-box d-none d-md-block">
            <Link className="tp-btn-white-sm" href="/contact">
              {t('lets_talk')}
              <span>
                <UpArrowTwo/>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>

    {/* off canvas */}
    <MobileOffcanvasTwo openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffcanvas} />
      {/* off canvas */}
    </>
  );
}
