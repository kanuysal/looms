'use client';
import React from "react";
import CounterItem from "./counter-item";
import { useTranslation } from "@/provider/LanguageProvider";

export default function CounterTwo() {
  const { t } = useTranslation();

  const counter_data = [
    {
      id: 1,
      title: t('countries'),
      count: 23,
    },
    {
      id: 2,
      title: t('subsectors'),
      count: 7,
    },
    {
      id: 3,
      title: t('customers'),
      count: 150,
    },
  ];

  return (
    <div className="row gx-0">
      {counter_data.map((item) => (
        <div key={item.id} className="col-xl col-lg col-md col-sm-4 col-6">
          <div className="tp-studio-funfact-item text-start text-md-center">
            <h4 className="tp-studio-funfact-title">
              <span>+</span>
              <CounterItem min={0} max={item.count} />
            </h4>
            <span>{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
