'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMenus from "./header-menus";
import { Cart } from "@/components/svg";

import MobileOffcanvas from "@/components/offcanvas/mobile-offcanvas";
import useStickyHeader from "@/hooks/use-sticky-header";
import LanguageSwitcher from "@/components/elements/LanguageSwitcher";

import { useTheme } from "next-themes";

export default function HeaderFour() {
  const {isSticky, headerFullWidth, adjustMenuBackground} = useStickyHeader(20);
  const { theme } = useTheme();
  const [openOffCanvas, setOpenOffCanvas] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
    headerFullWidth();
    adjustMenuBackground();

    window.addEventListener('resize', adjustMenuBackground);
    return () => window.removeEventListener('resize', adjustMenuBackground);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logoColor = !mounted ? '#000' : (theme === 'light' ? '#000' : '#fff');
  
  return (
    <>
      <header>
        <div id="header-sticky" className={`tp-header-3-area mt-35 z-index-5 ${isSticky?'header-sticky':''}`}>
          <span className="menu-bg"></span>
          <div className="container container-1740">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                <div className="tp-header-logo tp-header-3-logo">
                  <Link href="/" style={{ 
                    fontSize: '28px', 
                    fontFamily: 'var(--tp-ff-prisma)', 
                    color: logoColor, 
                    textTransform: 'uppercase', 
                    letterSpacing: '2px',
                    transition: 'color 0.3s ease'
                  }}>
                    INTERLOOMS
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-xl-block">
                <div className="tp-header-3-menu-wrap text-center">
                  <div className="tp-header-3-menu-box d-inline-flex align-items-center justify-content-between">
                    <div className="tp-header-3-menu header-main-menu">
                      <nav className="tp-main-menu-content">
                        {/* header menus */}
                        <HeaderMenus />
                        {/* header menus */}
                      </nav>
                    </div>
                    <div className="tp-header-3-lang">
                      <LanguageSwitcher />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                <div className="tp-header-3-right d-flex align-items-center justify-content-end">
                  <div className="tp-header-3-social d-none d-sm-block">
                    <Link href="https://www.linkedin.com/in/interlooms/" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link href="https://agencyds.com" target="_blank">
                      <i className="fa-solid fa-globe"></i>
                    </Link>
                  </div>
                  <button onClick={() => setOpenOffCanvas(true)} className="tp-header-3-bar tp-offcanvas-open-btn d-xl-none">
                    <i className="fa-solid fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* off canvas */}
      <MobileOffcanvas openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
      {/* off canvas */}
    </>
  );
}
