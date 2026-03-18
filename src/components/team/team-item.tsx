'use client';
import React from "react";
import Image from "next/image";
import { ITeamDT } from "@/types/team-d-t";
import Link from "next/link";
import { useTranslation } from "@/provider/LanguageProvider";
import { translations } from "@/data/translations";

// prop type 
type IProps = {
  item: ITeamDT;
  handleTeamModal(team: ITeamDT): void;
}

export default function TeamItem({ item, handleTeamModal }: IProps) {
  const { t } = useTranslation();

  return (
    <div className="tp-team-item tp-hover-btn-wrapper marque fix mb-30">
      <div className="tp-hover-btn-item">
        <Image style={{ width: "auto", height: "auto" }} src={item.image} alt="team-img" width={375} height={464} />
      </div>
      <div className="tp-team-content">
        <span>{t(item.designation as keyof typeof translations.EN)}</span>
        <h4
          className="tp-team-title-sm"
          onClick={() => handleTeamModal(item)}
        >
          <Link href={`/team-details/${item.id}`}>{item.name}</Link>
        </h4>
      </div>
    </div>
  );
}
