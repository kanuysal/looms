'use client';
import React from "react";
import Image from "next/image";
import { useTranslation } from "@/provider/LanguageProvider";
import { translations } from "@/data/translations";

// images
import shape_1 from "@/assets/img/home-01/team/team-details-shape-1.png";
import shape_2 from "@/assets/img/home-01/team/team-details-shape-2.png";
import t_details from "@/assets/img/home-01/team/team-details-1.png";
import { IdProps } from "@/types/custom-d-t";
import team_data from "@/data/team-data";
import Link from "next/link";

export default function TeamDetailsArea({ id }: IdProps) {
  const { t } = useTranslation();
  // Find the team that matches the given ID
  const item = team_data.find((team) => team.id == id);

  return (
    <div className="tm-details-wrapper p-relative">
      <div className="tm-details-shape-1">
        <Image src={shape_1} alt="shape" />
      </div>
      <div className="tm-details-shape-2">
        <Image src={shape_2} alt="shape" />
      </div>
      <div className="container">
        <div className="row align-items-center align-items-xxl-end">
          <div className="col-xl-6 col-lg-6 col-md-7">
            <div className="tm-details-content-wrap z-index-5">
              <div className="tm-details-title-box mb-20">
                <span className="tm-hero-subtitle">{item ? t(item.designation as keyof typeof translations.EN) : ''}</span>
                <h4 className="tm-details-title">{item?.name}</h4>
              </div>
              <div className="tm-details-text">
                <p>
                  {t('about_info_desc')}
                </p>
              </div>
              <div className="tm-details-portfolio mb-50">
                <span className="tm-details-social-title">Portfolio:</span>
                <Link href="https://www.linkedin.com/in/interlooms/" target="_blank">Linkedin</Link>
                <Link href="https://agencyds.com" target="_blank">Website</Link>
              </div>
              <div className="tm-details-social">
                <span className="tm-details-social-title">{t('follow')}:</span>
                <Link href="https://www.linkedin.com/in/interlooms/" target="_blank">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link href="https://agencyds.com" target="_blank">
                  <i className="fa-solid fa-globe"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-5">
            <div className="tm-details-thumb">
              <Image src={t_details} alt="team-details-img" style={{height:"auto"}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
