"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import { useTranslation } from "@/provider/LanguageProvider";
import HeaderSeven from "@/layouts/headers/header-seven";
import StudioPanelOne from "@/components/studio-panels/studio-panel-1";
import StudioPanelTwo from "@/components/studio-panels/studio-panel-2";
import { studioPanel } from "@/utils/panel-animation";
import StudioPanelThree from "@/components/studio-panels/studio-panel-3";
import StudioPanelFour from "@/components/studio-panels/studio-panel-4";
import StudioPanelFive from "@/components/studio-panels/studio-panel-5";
// animation

const DepartmentMain = () => {
  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  const { language } = useTranslation();

  useGSAP(() => {
    let timerId: NodeJS.Timeout;
    const ctx = gsap.context(() => {
      timerId = setTimeout(() => {
        studioPanel();
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 500);
      }, 500);
    });
    return () => {
      clearTimeout(timerId);
      ctx.revert();
    };
  }, { dependencies: [language] });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderSeven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="tp-studio-right-layout">
              {/* hero area start */}

              {/* hero area end */}

              <section className="tp-project-2-area">
                <div className="panels-2 p-relative fix">
                  <div className="panels-container-2 d-flex align-items-center">

                    {/* panel one start */}
                    <StudioPanelOne/>
                    {/* panel one end */}

                    {/* panel two start */}
                    <StudioPanelTwo/>
                    {/* panel two end */}

                    {/* panel three start */}
                    <StudioPanelThree/>
                    {/* panel three end */}

                    {/* panel four start */}
                    <StudioPanelFour/>
                    {/* panel four end */}

                    {/* panel five start */}
                    <StudioPanelFive/>
                    {/* panel five end */}

                  </div>
                </div>
              </section>
            </div>
          </main>

          {/* footer area */}

          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default DepartmentMain;
