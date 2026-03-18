'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/provider/LanguageProvider";

// images
import shape from '@/assets/img/home-08/hero/shape-1.png';
import port_1 from "@/assets/img/department/categories/fibers/fibers_(5).jpg";
import port_2 from "@/assets/img/department/categories/yarns/yarns_(5).jpg";
import port_3 from "@/assets/img/department/categories/fabrics/fabrics_(5).jpg";
import port_4 from "@/assets/img/department/categories/nonwoven/nonwoven_(5).jpg";
import port_5 from "@/assets/img/department/categories/sanitary/sanitary_(5).jpg";
import port_6 from "@/assets/img/department/main/main_(7).jpg";

export default function StudioPanelThree() {
  const { t } = useTranslation();

  const portfolio_data = [
    {
      id: 1,
      img: port_1,
      title: t('fibers'),
      link: "/fibers"
    },
    {
      id: 2,
      img: port_2,
      title: t('yarns'),
      link: "/yarns"
    },
    {
      id: 3,
      img: port_3,
      title: t('innovative_fabrics'),
      link: "/fabrics"
    },
    {
      id: 4,
      img: port_4,
      title: "SPUNLACE",
      link: "/nonwoven"
    },
    {
      id: 5,
      img: port_5,
      title: t('diapers_sanitary'),
      link: "/sanitary"
    },
    {
      id: 6,
      img: port_6,
      title: t('contact'),
      link: "/contact"
    },
  ];

  return (
    <div className="panel-2 tp-studio-height">
      <div className="tp-studio-portfolio-area d-flex align-items-end tp-studio-height tp-studio-plr p-relative fix pt-100 pb-60">
        <div className="tp-studio-portfolio-shape d-none d-md-block">
          <Image src={shape} alt="shape" style={{height:"auto"}} />
        </div>
        <div className="container container-1630">
          <div className="row align-items-end counter-row">
            <div className="col-xl-3 col-lg-6">
              <div className="tp-studio-portfolio-title-box">
                <h4 className="tp-studio-portfolio-title" style={{ lineHeight: '1.2' }}>
                  {t('unique_creative_studio')}
                </h4>
                <p>
                  {t('predictions_desc')}
                </p>
                <Link
                  className="tp-btn-black-sm"
                  href="/about"
                >
                  {t('view_more')}
                </Link>
              </div>
            </div>
            <div className="col-xl-9 col-lg-12">
              <div className="tp-studio-line-wrap p-relative">
                <div className="tp-studio-portfolio-wrap p-relative tp-marker-tab">
                  {portfolio_data.map((item) => (
                    <div
                      key={item.id}
                      className="tp-studio-portfolio-item p-relative"
                    >
                      <div className="tp-studio-portfolio-inner-title-box">
                        <h4 className="tp-studio-portfolio-inner-title">
                          <Link href={item.link}>{item.title}</Link>
                          <span>{item.id < 10 ? `0${item.id}` : item.id}</span>
                        </h4>
                      </div>
                      <div className="tp-studio-portfolio-img">
                        <Image
                          src={item.img}
                          alt="portfolio-img"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <span id="myline"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
