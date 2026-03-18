'use client';
import React from "react";
import Image from "next/image";
import { useTranslation } from "@/provider/LanguageProvider";

// award images
import a_1 from "@/assets/img/main/main_9.jpg";
import a_2 from "@/assets/img/main/main_10.jpg";
import a_3 from "@/assets/img/main/main_11.jpg";
import a_4 from "@/assets/img/main/main_12.jpg";
import a_5 from "@/assets/img/main/main_13.jpg";
import a_6 from "@/assets/img/main/main_8.jpg";
import { Leaf } from "../svg";

// prop type
type IProps = {
  cls?: string;
  abStyle?: boolean;
};
const AwardOne = ({cls="pt-125 pb-125",abStyle=false}: IProps) => {
  const { t } = useTranslation();
  const [activeThumb, setActiveThumb] = React.useState(1);

  const award_data = [
    {
      id: 1,
      img: a_1,
      subtitle: "2014",
      title: t('award_1'),
      date: "Jun 2014",
    },
    {
      id: 2,
      img: a_2,
      subtitle: "2016",
      title: t('award_2'),
      date: "Nov 2016",
    },
    {
      id: 3,
      img: a_3,
      subtitle: "2018",
      title: t('award_3'),
      date: "May 2018",
    },
    {
      id: 4,
      img: a_4,
      subtitle: "2020",
      title: t('award_4'),
      date: "Sep 2020",
    },
    {
      id: 5,
      img: a_5,
      subtitle: "2022",
      title: t('award_5'),
      date: "Jun 2022",
    },
    {
      id: 6,
      img: a_6,
      subtitle: "2024",
      title: t('award_6'),
      date: "Aug 2024",
    },
  ];

  return (
    <div className={`tp-award-area ${cls}`}>
      <div className="container container-1630">
        <div className="row">
          <div className="col-xxl-6 col-xl-7">
            {!abStyle && (
              <div className="tp-award-title-box">
                <h4 className="tp-section-title tp-char-animation">
                  {t('awards_title')} <br /> <span>{t('recognitions')}</span>
                </h4>
              </div>
            )}
            {abStyle && (
              <div className="ab-award-title-sm">
                <span>
                  <Leaf />
                  {t('our_awards')}
                </span>
                <p className="mt-20">{t('awards_subtitle')}</p>
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12">
            <div className="tp-award-list-thumb-wrap p-relative">
              <div
                id="tp-award-thumb"
                className={`tp-award-list-thumb-${activeThumb}`}
              >
                {award_data.map((item) => (
                  <Image
                    key={item.id}
                    className={`tp-award-list-thumb-${item.id}`}
                    src={item.img}
                    alt="list-thumb"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12">
            <div className="tp-award-list-wrap">
              {award_data.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveThumb(item.id)}
                  className="tp-award-list-item d-flex align-items-center justify-content-between tp_fade_bottom"
                  rel={`tp-award-list-thumb-${item.id}`}
                >
                  <div className="tp-award-list-content-left d-flex align-items-center">
                    <span>{item.subtitle}</span>
                    <p>{item.title}</p>
                  </div>
                  <div className="tp-award-list-content-right">
                    <span>{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardOne;
