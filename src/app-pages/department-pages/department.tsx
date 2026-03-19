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
  const [prevLang, setPrevLang] = React.useState(language);

  // Force reload on language change specifically on this page 
  // because horizontal scroll layouts are very sensitive to text width changes
  useEffect(() => {
    if (prevLang !== language) {
      window.location.reload();
    }
  }, [language, prevLang]);

  useGSAP(() => {
    let timerId: NodeJS.Timeout;
    let refreshId: NodeJS.Timeout;

    const ctx = gsap.context(() => {
      // Clear existing scroll positions to avoid jump
      window.scrollTo(0, 0);

      timerId = setTimeout(() => {
        // Initial build
        studioPanel();
        
        // Multiple refreshes to catch lazy-loaded text/images
        setTimeout(() => ScrollTrigger.refresh(), 100);
        refreshId = setTimeout(() => ScrollTrigger.refresh(), 1000);
      }, 300); // Wait for content to settle
    });

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timerId);
      clearTimeout(refreshId);
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, { dependencies: [language], revertOnUpdate: true });

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
