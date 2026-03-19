import React from "react";
import Image from "next/image";
import { Behance, CloseTwo, Dribble, InstagramTwo, Youtube } from "../svg";

// images
// images
import logo from "@/assets/img/logo/logo.png";
import gallery_1 from "@/assets/img/main/main_1.jpg";
import gallery_2 from "@/assets/img/main/main_2.jpg";
import gallery_3 from "@/assets/img/main/main_3.jpg";
import gallery_4 from "@/assets/img/main/main_11.jpg";
import MobileMenus from "./mobile-menus";
import Link from "next/link";
import { useTranslation } from "@/provider/LanguageProvider";
import { useTheme } from "next-themes";

const gallery_images = [gallery_1, gallery_2, gallery_3, gallery_4];

// prop type
type IProps = {
  openOffcanvas: boolean;
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileOffcanvas({ openOffcanvas, setOpenOffcanvas }: IProps) {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <>
      <div className={`tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`}>
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo">
              <Link href="/" style={{ 
                fontSize: '24px', 
                fontFamily: 'var(--tp-ff-prisma)', 
                color: theme === 'light' ? '#000' : '#fff', 
                textTransform: 'uppercase', 
                letterSpacing: '2px',
                transition: 'color 0.3s ease'
              }}>
                INTERLOOMS
              </Link>
            </div>
            <div className="tp-offcanvas-close">
              <button
                className="tp-offcanvas-close-btn"
                onClick={() => setOpenOffcanvas(false)}
              >
                <CloseTwo />
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main">
            <div className="tp-offcanvas-content">
              <h3 className="tp-offcanvas-title">{t('hero_subtitle')}</h3>
              <p>{t('footer_desc')}</p>
            </div>
            <div className="tp-main-menu-mobile d-xl-none">
              <MobileMenus />
            </div>
            <div className="tp-offcanvas-gallery">
              <div className="row gx-2">
                {gallery_images.map((item, i) => (
                  <div className="col-md-3 col-3" key={i}>
                    <div className="tp-offcanvas-gallery-img fix">
                      <Link href="#">
                        <Image style={{ width: "100%", height: "auto" }} src={item} alt="gallery-img" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">{t('contact')}</h3>

              <ul>
                <li>
                  <Link href="mailto:info@interlooms.com">info@interlooms.com</Link>
                </li>
                <li>
                  <Link href="mailto:serkan@interlooms.com">serkan@interlooms.com (ES)</Link>
                </li>
                <li>
                  <Link href="tel:+34633623632">+34 633 623 632</Link>
                </li>
                <li>
                  <Link href="mailto:order@interlooms.com">order@interlooms.com (USA)</Link>
                </li>
                <li>
                  <Link href="tel:+12243434649">+1 (224) 343 46 49</Link>
                </li>
              </ul>
            </div>
            <div className="tp-offcanvas-social">
              <h3 className="tp-offcanvas-title sm">{t('follow')}</h3>
              <ul>
                <li>
                  <Link href="https://www.linkedin.com/in/interlooms/" target="_blank">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://agencyds.com" target="_blank">
                    <i className="fa-solid fa-globe"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenOffcanvas(false)}
        className={`body-overlay ${openOffcanvas ? "opened" : ""}`}
      ></div>
    </>
  );
}
