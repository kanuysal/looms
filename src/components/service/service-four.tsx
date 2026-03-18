'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FirstBracket, FirstBracketTwo, RightArrow, SvgBg } from "../svg";
import icon from "@/assets/img/home-04/service/sv-icon-1.png";
import { useTranslation } from "@/provider/LanguageProvider";

export default function ServiceFour() {
  const { t } = useTranslation();

  const service_data = [
    {
      id: 1,
      title: t('fibers'),
      desc: t('fibers_desc'),
      category: [t('recycled_sourcing'), t('sustainability'), t('eco_production')],
      link: "/fibers"
    },
    {
      id: 2,
      title: t('yarns'),
      desc: t('yarns_desc'),
      category: [t('grs_certified'), t('recycled_cotton'), t('technical_standards')],
      link: "/yarns"
    },
    {
      id: 3,
      title: t('fabrics'),
      desc: t('fabrics_desc'),
      category: [t('custom_design'), t('prototyping'), t('quality_control')],
      link: "/fabrics"
    },
    {
      id: 4,
      title: t('nonwoven'),
      desc: t('nonwoven_desc'),
      category: [t('spunlace'), t('industrial'), t('hostelry')],
      link: "/nonwoven"
    },
    {
      id: 5,
      title: t('sanitary'),
      desc: t('sanitary_desc'),
      category: [t('hygiene_products'), t('diapers'), t('health_care')],
      link: "/sanitary"
    },
  ];

  return (
    <div className="tp-service-3-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="tp-service-3-title-box mb-60 p-relative">
              <div className="tp-service-3-icon">
                <Image src={icon} alt="icon" />
              </div>
              <span className="tp-section-subtitle-2 tp_fade_bottom">
                <span>
                  <FirstBracket />
                </span>
                <span className="tp-subtitle-text tp_text_invert">
                  {t('our_expertise')}
                </span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span>
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom" style={{ paddingBottom: '20px', lineHeight: '1.2' }}>
                {t('main_departments').split(' ')[0]} <br /> {t('main_departments').split(' ').slice(1).join(' ')}
              </h4>
            </div>
          </div>
        </div>

        {service_data.map((item) => (
          <div key={item.id} className="tp-service-3-wrap tp_fade_bottom">
            <div className="row align-items-start">
              <div className="col-xl-3 col-lg-3">
                <div className="tp-service-3-title-box">
                  <h4 className="tp-service-3-title">
                    <Link href={item.link}>{item.title}</Link>
                  </h4>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="tp-service-3-content">
                  <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                  <div className="tp-service-3-category">
                    {item.category.map((c, i) => (
                      <span key={i}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2">
                <div className="tp-service-3-btn-box text-start text-md-end">
                  <Link
                    className="tp-btn-zikzak-sm p-relative"
                    href={item.link}
                  >
                    <span className="zikzak-content">
                      {t('see_details').split(' ')[0]} <br /> {t('see_details').split(' ').slice(1).join(' ')}
                      <RightArrow clr="currentColor" />
                    </span>
                    <span>
                      <SvgBg />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
