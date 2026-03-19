'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/provider/LanguageProvider";
import { ProjectShape, RightArrow } from "../svg";

// images
import fibers_1 from "@/assets/img/department/fibers/fibers_1.jpg";
import fibers_2 from "@/assets/img/department/fibers/fibers_2.jpg";
import yarns_1 from "@/assets/img/department/yarns/yarns_1.jpg";
import yarns_3 from "@/assets/img/department/yarns/yarns_3.jpg"; // yarns_2 was missing in the directory
import fabrics_1 from "@/assets/img/department/fabrics/fabrics_1.jpg";
import fabrics_2 from "@/assets/img/department/fabrics/fabrics_2.jpg";
import nonwoven_1 from "@/assets/img/department/nonwoven/nonwoven_1.jpg";
import nonwoven_2 from "@/assets/img/department/nonwoven/nonwoven_2.jpg";
import sanitary_1 from "@/assets/img/department/sanitary/sanitary_1.jpg";
import sanitary_2 from "@/assets/img/department/sanitary/sanitary_2.jpg";

// portfolio data
const project_data = [
  {
    id: 1,
    img_1: fibers_1,
    img_2: fibers_2,
    title: "Fibers",
    link: "/fibers"
  },
  {
    id: 2,
    img_1: yarns_1,
    img_2: yarns_3,
    title: "Yarns",
    link: "/yarns"
  },
  {
    id: 3,
    img_1: fabrics_1,
    img_2: fabrics_2,
    title: "Fabrics",
    link: "/fabrics"
  },
  {
    id: 4,
    img_1: nonwoven_1,
    img_2: nonwoven_2,
    title: "Nonwoven",
    link: "/nonwoven"
  },
  {
    id: 5,
    img_1: sanitary_1,
    img_2: sanitary_2,
    title: "Sanitary",
    link: "/sanitary"
  },
];

// prop type
type IProps = {
  style_2?: boolean;
};

export default function ProjectFour({ style_2 = false }: IProps) {
  const { t } = useTranslation();

  const getTranslatedTitle = (title: string) => {
    const key = title.toLowerCase();
    if (key === 'fibers') return t('fibers');
    if (key === 'yarns') return t('yarns');
    if (key === 'fabrics') return t('fabrics');
    if (key === 'nonwoven') return t('nonwoven');
    if (key === 'sanitary') return t('sanitary');
    return title;
  };

  return (
    <div className={`tp-project-3-area ${style_2 ? "pt-60 pw-project-style" : "pt-130 black-bg pb-110"}`}>
      <div className="container container-1720">
        {!style_2 && (
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="tp-project-3-title-box p-relative mb-150 text-center">
                <h4 
                  className="tp-section-title-200 tp_reveal_anim"
                  data-duration="1.8"
                  data-delay="0.1"
                >
                  {t('explore_sections')} <span>{t('sections')}</span>
                </h4>
                <div className="tp-project-3-btn-box" style={{ transform: 'translateX(10vw)' }}>
                  <Link
                    className="tp-btn-zikzak p-relative"
                    href="/department"
                  >
                    <span className="zikzak-content">
                      {t('see_all').split(' ')[0]} <br /> {t('see_all').split(' ').slice(1).join(' ')}
                      <RightArrow clr="#19191A" />
                    </span>
                    <ProjectShape />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-xl-12">
            {project_data.map((item, i) => (
              <div key={item.id} className="tp-project-3-wrap pb-40">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-project-3-thumb pro-img-1" style={{ position: 'relative', overflow: 'hidden', borderRadius: '15px' }}>
                      <Image
                        src={item.img_1}
                        alt="port-img"
                        className="w-100"
                        style={{ height: '450px', objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0">
                    <div className="tp-project-3-content text-center pt-80">
                      <span className="tp-project-3-meta">{t('department')} </span>
                      <h4 className="tp-project-3-title-sm">
                        <Link href={item.link}>{getTranslatedTitle(item.title)}</Link>
                      </h4>
                      <Link
                        className="tp-btn-project-sm"
                        href={item.link}
                      >
                        {t('explore')}
                      </Link>
                    </div>
                    <div className="tp-project-3-border color-1 text-center">
                      <span></span>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 order-0 order-lg-0">
                    <div className="tp-project-3-thumb pro-img-2" style={{ position: 'relative', overflow: 'hidden', borderRadius: '15px' }}>
                      <Image
                        src={item.img_2}
                        alt="port-img"
                        className="w-100"
                        style={{ height: '450px', objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
