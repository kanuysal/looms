'use client';
import React from "react";
import CounterItem from "../counter/counter-item";
import { Leaf } from "../svg";
import { useTranslation } from "@/provider/LanguageProvider";

export default function FunFactOne() {
  const { t } = useTranslation();

  const counter_data = [
    {
      id: 1,
      title: t('years_in_business'),
      count: 11,
      text: "+",
    },
    {
      id: 2,
      title: t('countries'),
      count: 23,
      text: "",
    },
    {
      id: 3,
      title: t('customers'),
      count: 150,
      text: "+",
    },
    {
      id: 4,
      title: t('subsectors'),
      count: 7,
      text: "",
    },
  ];

  return (
    <div className="ab-funfact-area pb-40">
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-4">
            <div className="ab-funfact-title-box">
              <span className="ab-inner-subtitle mb-25">
                <Leaf />
                {t('fun_facts')}
              </span>
              <h4 className="ab-inner-funfact-title tp_title_anim">
                {t('agency_snapshots').split('<br />')[0]} <br /> {t('agency_snapshots').split('<br />')[1] || ''}
              </h4>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="ab-funfact-wrap">
              <div className="row gx-75">
                {counter_data.map((item) => (
                  <div key={item.id} className="col-xl-6 col-lg-6 col-md-6">
                    <div className="ab-funfact-item mb-90">
                      <span>
                        <CounterItem min={0} max={item.count} />
                        {item.text}
                      </span>
                      <p>{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
