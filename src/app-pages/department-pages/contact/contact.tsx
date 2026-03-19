'use client';
import { gsap } from "gsap";
import React from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "@/provider/LanguageProvider";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import ContactTwo from "@/components/contact/contact-two";
import ContactLocation from "@/components/contact/contact-location";
import VFXFooter from "@/components/elements/VFXHeroSection";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation } from "@/utils/title-animation";

const ContactMain = () => {
  const { t } = useTranslation();
  useScrollSmooth();

  useGSAP(() => {
    let timerId: NodeJS.Timeout;
    const ctx = gsap.context(() => {
      timerId = setTimeout(() => {
        charAnimation();
      }, 200);
    });
    return () => {
      clearTimeout(timerId);
      ctx.revert();
    };
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div
            className="inner-bg"
            style={{
              backgroundImage:
                "url(/assets/img/home-01/team/team-details-bg.png)",
            }}
          >
            <main>
              {/* hero area start */}
              <div className="tm-hero-area tm-hero-ptb p-relative">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-hero-content">
                        <span className="tm-hero-subtitle">Interlooms</span>
                        <h4 className="tm-hero-title-big tp-char-animation">
                          {t('get_in_touch')}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* hero area end */}

              {/* contact area */}
              <ContactTwo/>
              {/* contact area */}

              {/* contact location */}
              <ContactLocation/>
              {/* contact location */}
            </main>

            {/* footer area */}
            <FooterTwo topCls="" whiteFooter={true} />
            {/* footer area */}

            <VFXFooter />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactMain;
