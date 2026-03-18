import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import Social from '@/components/social/social';
import { Dots } from '@/components/svg';

interface Props {
    title: string;
    subtitle: string;
    desc: string;
    client: string;
    date: string;
    services: string;
    overview_title: string;
    overview_desc: string;
    solution_title: string;
    solution_desc: string;
    full_img: StaticImageData;
    full_img_2: StaticImageData;
    slider_images: StaticImageData[];
    prev_link: string;
    next_link: string;
}

const slider_setting:SwiperOptions = {
  slidesPerView: 3,
  loop: true,
  autoplay: true,
  spaceBetween: 20,
  speed: 1000,
  breakpoints: {
    '1400': {
      slidesPerView: 3,
    },
    '1200': {
      slidesPerView: 3,
    },
    '992': {
      slidesPerView: 2,
    },
    '768': {
      slidesPerView: 2,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  },
}

export default function DepartmentDetailsArea(props: Props) {
  const { title, subtitle, desc, client, date, services, overview_title, overview_desc, solution_title, solution_desc, full_img, full_img_2, slider_images, prev_link, next_link } = props;

  return (
    <>
      <div className="pd-custom-area pt-145 pb-80">
        <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                  <div className="project-details-1-title-box">
                    <span className="project-details-1-subtitle"><i>{subtitle}</i>{title}</span>
                    <h4 className="project-details-1-title fs-100 tp-char-animation">{title}</h4>
                    <p className="mb-35 tp_title_anim">{desc}</p>
                    <Link className="project-details-custom-link" href="/contact">Get in Touch</Link>
                  </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                  <div className="pd-custom-info-wrap">
                    <div className="project-details-1-info-wrap">
                        <div className="project-details-1-info tp_fade_bottom">
                          <span>Client</span>
                          <h4>{client}</h4>
                        </div>
                        <div className="project-details-1-info tp_fade_bottom">
                          <span>Date</span>
                          <h4>{date}</h4>
                        </div>
                        <div className="project-details-1-info tp_fade_bottom">
                          <span>Services</span>
                          <h4>{services}</h4>
                        </div>
                        <div className="project-details-1-info tp_fade_bottom">
                          <span>Share</span>
                          <div className="project-details-2-social">
                              <Social/>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>

      <div className="pd-custom-full-img">
        <Image data-speed=".8" src={full_img} alt="full_img" style={{height: "auto", width: "100%", objectFit: "cover"}}/>
      </div>

      <div className="pd-visual-content-area pt-125 pb-125">
          <div className="container">
              <div className="row">
                <div className="col-xl-6">
                    <div className="pd-visual-content-left">
                      <div className="pd-visual-title-box">
                          <span className="pd-visual-subtitle tp_fade_bottom">{subtitle}</span>
                          <h4 className="project-details-1-title fs-100 fw-700 tp-char-animation">{overview_title}</h4>
                      </div>
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6">
                    <div className="pd-visual-left-text">
                      <span className="tp-char-animation">{title} Expertise & Control</span>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="pd-visual-right-content">
                      <p className="tp_title_anim">{overview_desc}</p>
                    </div>
                </div>
              </div>
              <div className="pd-custom-full-img-2 mb-120 mt-120">
                <Image style={{width:"100%", height:"auto"}} data-speed=".8" src={full_img_2} alt="full-image"/>
              </div>
          </div>
        </div>


      <div className="pd-visual-slider-wrap pb-120">
          <Swiper {...slider_setting} modules={[Autoplay]} className="swiper-container pd-visual-slider-active">
              {slider_images.map((imgSrc, index) => (
                <SwiperSlide key={index}>
                  <div className="pd-visual-slider-thumb fix">
                    <Image src={imgSrc} alt="port-img" style={{height:"600px", width: "100%", objectFit: "cover"}}/>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

      <div className="pd-visual-content-area pb-80">
        <div className="container">
            <div className="row">
              <div className="col-xl-6">
                  <div className="pd-visual-content-left">
                    <div className="pd-visual-title-box">
                        <span className="pd-visual-subtitle tp_fade_bottom">02</span>
                        <h4 className="project-details-1-title fs-100 fw-700 tp-char-animation">{solution_title}</h4>
                    </div>
                  </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6">
                  <div className="pd-visual-left-text">
                    <span className="tp-char-animation">Reliable Connections & Growth</span>
                  </div>
              </div>
              <div className="col-xl-6">
                  <div className="pd-visual-right-content tp_title_anim">
                    <p>{solution_desc}</p>
                  </div>
              </div>
            </div>
        </div>
      </div>


      <div className="pd-navigation-area">
        <div className="container">
            <div className="row">
              <div className="col-xl-12">
                  <div className="project-details-1-navigation d-flex justify-content-between align-items-center">
                    <Link className="project-details-1-prev" href={prev_link}>
                        <i className="fa-sharp fa-regular fa-arrow-left"></i>
                        <span>Prev</span>
                    </Link>
                    <Link href="/department">
                        <span>
                          <Dots/>
                        </span>
                    </Link>
                    <Link className="project-details-1-next" href={next_link}>
                        <span>Next</span>
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                    </Link>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
