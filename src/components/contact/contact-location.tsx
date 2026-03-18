import React from "react";
import Image from "next/image";
// images
import location_1 from "@/assets/img/inner-contact/contact/spain.png";
import location_2 from "@/assets/img/inner-contact/contact/usa.png";
import location_3 from "@/assets/img/inner-contact/contact/turkiye.png";
import Link from "next/link";
import { useTranslation } from "@/provider/LanguageProvider";

// fallback data is defined directly inside the component mapping now,
// since we rely heavily on translations.

const ContactLocation = () => {
  const { t } = useTranslation();
  
  const translated_location_data = [
    {
      id: 1,
      img: location_1,
      country: t('spain'),
      time: "09:00 am GMT+1",
      location_title: t('spain_title'),
      address: t('spain_office'),
      phone: t('spain_phone'),
      email: t('spain_email'),
    },
    {
      id: 2,
      img: location_2,
      country: t('usa'),
      time: "09:00 am EST",
      location_title: t('usa_title'),
      address: t('usa_office'),
      phone: t('usa_phone'),
      email: t('usa_email'),
    },
    {
      id: 3,
      img: location_3,
      country: t('turkey') || "Türkiye", // Fallback to literal if missing in translation
      time: "09:00 am GMT+3",
      location_title: t('turkey_title') || "TURKEY OFFICE",
      address: t('turkey_office') || "Besevler Mahallesi, Simge Sokak, <br /> Nilufer/Bursa",
      phone: t('turkey_phone') || "+34 633 623 632",
      email: t('turkey_email') || "info@interlooms.com",
    },
  ];

  return (
    <div className="cn-contact-info-area">
      <div className="container container-1840">
        <div className="cn-contact-info-bg black-bg">
          {translated_location_data.map((item) => (
            <div key={item.id} className="cn-contact-info-item">
              <div className="row">
                <div className="col-xl-7">
                  <div className="cn-contact-left d-flex flex-wrap align-items-center">
                    <div className="cn-contact-info-thumb">
                      <Image src={item.img} alt="image" style={{ height: "auto" }} />
                    </div>
                    <div className="cn-contact-left-info">
                      <h4 className="cn-contact-left-title">{item.country}</h4>
                      <span>
                        <i className="fa-regular fa-clock"></i>
                        {item.time}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="cn-contact-right-wrap d-flex align-items-start justify-content-between">
                    <div className="cn-contact-right">
                      <div className="cn-contact-location">
                        <span className="cn-contact-location-title">
                          {item.location_title}
                        </span>
                        <Link
                          href="https://www.google.com/maps"
                          target="_blank"
                          dangerouslySetInnerHTML={{ __html: item.address }}
                        ></Link>
                      </div>
                      <div className="cn-contact-map">
                        <Link href="#">Google Maps</Link>
                      </div>
                    </div>
                    <div className="cn-contact-right-info text-start text-md-end">
                      <Link href={`tel:${item.phone.replace(/\s+/g, '')}`}>{item.phone}</Link> <br />
                      <Link href={`mailto:${item.email}`}>{item.email}</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactLocation;
