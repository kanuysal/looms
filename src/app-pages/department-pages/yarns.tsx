"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderSeven from "@/layouts/headers/header-seven";
import PortfolioDetailsCustomLightArea from "@/components/portfolio/details/portfolio-details-custom-light-area";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation, fadeAnimation, titleAnimation } from "@/utils/title-animation";

import YarnsArea from "@/components/department-details/yarns-area";

const YarnsMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      titleAnimation();
      charAnimation();
      fadeAnimation();
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Wrapper>
      <HeaderSeven />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <YarnsArea />
          </main>
          <FooterTwo topCls="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default YarnsMain;
