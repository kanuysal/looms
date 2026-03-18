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
import HeaderFour from "@/layouts/headers/header-four";
import HeroBannerFour from "@/components/hero-banner/hero-banner-four";
import GalleryOne from "@/components/gallery/gallery-one";
import RibbonSection from "@/components/elements/RibbonSection";
import AboutThree from "@/components/about/about-three";
import BrandThree from "@/components/brand/brand-three";
import ProjectFour from "@/components/project/project-four";
import VideoThree from "@/components/video/video-three";
import ServiceFour from "@/components/service/service-four";
import ContactOne from "@/components/contact/contact-one";
import FooterFour from "@/layouts/footers/footer-four";
import { textInvert } from "@/utils/text-invert";
import { fadeAnimation, revelAnimationOne, titleAnimation, charAnimation } from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";
import { ctaAnimation } from "@/utils/cta-anim";


const HomeFourMain = () => {
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
        try { fadeAnimation(); } catch(e) { console.error('fadeAnimation failed', e); }
        try { revelAnimationOne(); } catch(e) { console.error('revelAnimationOne failed', e); }
        try { titleAnimation(); } catch(e) { console.error('titleAnimation failed', e); }
        try { charAnimation(); } catch(e) { console.error('charAnimation failed', e); }
        try { projectThreeAnimation(); } catch(e) { console.error('projectThreeAnimation failed', e); }
        try { ctaAnimation(); } catch(e) { console.error('ctaAnimation failed', e); }
        try { textInvert(); } catch(e) { console.error('textInvert failed', e); }
        
        // Next.js deferred images often break ScrollTrigger geometry, force proper refreshes
        const doRefresh = () => ScrollTrigger.refresh(true);
        if (typeof window !== 'undefined') {
          window.addEventListener('load', doRefresh);
        }
        setTimeout(doRefresh, 800);
        setTimeout(doRefresh, 2500);
        setTimeout(doRefresh, 5000);
        
      }, 500);
    });
    return () => {
      clearTimeout(timerId);
      if (typeof window !== 'undefined') {
        window.removeEventListener('load', () => ScrollTrigger.refresh(true));
      }
      ctx.revert();
    };
  }, { dependencies: [language] });

  return (
    <Wrapper>

      {/* header area start */}
      <HeaderFour />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>

            {/* hero area start */}
            <HeroBannerFour />
            {/* hero area end */}

            {/* gallery area start */}
            <GalleryOne />
            {/* gallery area end */}

            {/* ribbon area start */}
            <RibbonSection />
            {/* ribbon area end */}

            {/* about area start */}
            <AboutThree />
            {/* about area end */}




            {/* project area start */}
            <ProjectFour />
            {/* project area end */}

            {/* video area start */}
            <VideoThree />
            {/* video area end */}

            {/* service area start */}
            <ServiceFour />
            {/* service area end */}

            {/* contact area start */}
            <ContactOne />
            {/* contact area end */}

          </main>

          {/* footer area */}
          <FooterFour />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeFourMain;
