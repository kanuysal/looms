'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/provider/LanguageProvider";

// images
import s_icon_1 from "@/assets/img/home-08/service/sv-icon-1.png";
import s_icon_2 from "@/assets/img/home-08/service/sv-icon-2.png";
import s_icon_3 from "@/assets/img/home-08/service/sv-icon-3.png";

export default function StudioPanelTwo() {
  const { t } = useTranslation();

  const translated_service_data = [
    {
      id: 1,
      icon: s_icon_1,
      subtitle: t('panel2_sub_1'),
      title: t('panel2_title_1'),
      desc: t('panel2_desc_1'),
    },
    {
      id: 2,
      icon: s_icon_2,
      subtitle: t('panel2_sub_2'),
      title: t('panel2_title_2'),
      desc: t('panel2_desc_2'),
    },
    {
      id: 3,
      icon: s_icon_3,
      subtitle: t('panel2_sub_3'),
      title: t('panel2_title_3'),
      desc: t('panel2_desc_3'),
    },
  ];

  return (
    <div className="panel-2 tp-studio-height">
      <div className="tp-studio-service-area tp-studio-service-ptb tp-studio-height tp-studio-plr fix p-relative black-bg">
        <div className="tp-studio-service-linetext-wrap d-none d-md-block">
          <h4 className="tp-studio-service-linetext" style={{ fontSize: 'clamp(40px, 7vw, 250px)' }}>
            {t('passion_point')}
          </h4>
        </div>
        <div className="container container-1480">
          <div className="row">
            <div className="col-xl-12">
              {translated_service_data.map((item) => (
                <div
                  key={item.id}
                  className={`tp-studio-service-item d-flex space-ml-${item.id} align-items-start`}
                >
                  <span className="tp-studio-border"></span>
                  <div className="tp-studio-service-icon">
                    <span>
                      <Image src={item.icon} alt="icon" />
                    </span>
                  </div>
                  <div className="tp-studio-service-content">
                    <span className="tp-studio-service-subtitle">
                      {item.subtitle}
                    </span>
                    <h4 className="tp-studio-service-title">
                      <Link href="/service-details">{item.title}</Link>
                    </h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
