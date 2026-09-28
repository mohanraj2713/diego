'use client';
import React from 'react';
import Image from 'next/image';

import shape_1 from "@/assets/img/services/shape/services-shape-1.png";
import shape_2 from "@/assets/img/services/shape/services-shape-2.png";
// import swara_img from "@/assets/img/my-work/swara_patel.png";

interface DataType {
  subtitle: string;
  title: React.JSX.Element;
  sm_des: React.JSX.Element;
}

const service_content: DataType = {
  subtitle: "What becomes possible ",
  title: <>when we use movement </>,
  sm_des: <>as a way to learn, connect and grow?  </>,
}

const { subtitle, title, sm_des } = service_content;

const ServiceAreaHomeOne = () => {
  return (
    <>
      <section className="tp-services-area tp-sv tp-services-bg-text-animation fix" id="possibilities">
        <style jsx>{`
          /* Light Theme Styles */
          :global(html[tp-theme='tp-theme-light']) .tp-services-area {
            background-color: #f7f9f7 !important;
          }
          :global(html[tp-theme='tp-theme-light']) .tp-service-home-title {
            color: #121212 !important;
          }
          :global(html[tp-theme='tp-theme-light']) .tp-service-home-desc {
            color: rgba(18, 18, 18, 0.75) !important;
          }
          :global(html[tp-theme='tp-theme-light']) .tp-services-quote-text {
            color: #121212 !important;
          }

          /* Dark Theme Styles */
          :global(html[tp-theme='tp-theme-dark']) .tp-services-area,
          :global(html:not([tp-theme='tp-theme-light'])) .tp-services-area {
            background-color: #0f1811 !important;
          }
          :global(html[tp-theme='tp-theme-dark']) .tp-service-home-title,
          :global(html:not([tp-theme='tp-theme-light'])) .tp-service-home-title {
            color: #ffffff !important;
          }
          :global(html[tp-theme='tp-theme-dark']) .tp-service-home-desc,
          :global(html:not([tp-theme='tp-theme-light'])) .tp-service-home-desc {
            color: rgba(255, 255, 255, 0.8) !important;
          }
          :global(html[tp-theme='tp-theme-dark']) .tp-services-quote-text,
          :global(html:not([tp-theme='tp-theme-light'])) .tp-services-quote-text {
            color: #ffffff !important;
          }

          .tp-services-quote-text {
            font-size: 48px;
            line-height: 1.35;
            font-weight: 700;
            letter-spacing: -0.02em;
            transition: color 0.3s ease;
          }
          @media (max-width: 1400px) {
            .tp-services-quote-text {
              font-size: 42px;
              line-height: 1.35;
            }
          }
          @media (max-width: 1200px) {
            .tp-services-quote-text {
              font-size: 34px;
              line-height: 1.35;
            }
          }
          @media (max-width: 768px) {
            .tp-services-quote-text {
              font-size: 24px;
              line-height: 1.4;
              text-align: center;
            }
          }
        `}</style>

        <div className="container container-large">
          <div className="tp-services-inner pb-195 p-relative z-index-1">

            <span className="tp-services-inner-border tp-vertical-line transition-3"></span>
            <span className="tp-services-inner-border right tp-vertical-line transition-3"></span>

            <div className="tp-services-bottom-text tp-services-bg-text">
              <p>Services</p>
            </div>
            <div className="row gx-0 align-items-center">

              {/* Left Column */}
              <div className="col-xl-6 col-lg-6 p-relative">
                <div 
                  className="tp-services-wrapper tp-services-capsule-wrapper p-relative pt-40 pr-40" 
                  style={{ paddingTop: "40px", minHeight: "520px" }}
                  data-tp-throwable-scene="true"
                >
                  <div className="tp-section-title-wrapper tp_text_anim mb-25">
                    <div className="tp-section-title-inner p-relative">
                      <span className="tp-section-subtitle tp-service-home-subtitle" style={{ position: 'relative', top: 0, left: 0, transform: 'none', display: 'inline-block', marginBottom: '8px' }}>{subtitle}</span>
                      <h3 className="tp-section-title tp-service-home-title tp_title_anim" style={{ fontSize: '36px', lineHeight: '1.2', fontWeight: 700 }}>{title}</h3>
                    </div>
                    <p className="tp-service-home-desc" style={{ marginTop: '8px', opacity: 0.8 }}>{sm_des}</p>
                  </div>

                  <div className="tp-services-capsule-item-wrapper">
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Children enjoy learning</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>Teachers teach more creatively</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Leaders communicate with greater presence</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Adults reconnect with themselves</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#19B3F1" }}>Families move, laugh and connect</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>People connect deeply</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="">
                        <Image src={shape_1} alt="brand-img" />
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="">
                        <Image src={shape_2} alt="brand-img" />
                      </span>
                    </p>
                  </div>

                </div>
              </div>

              {/* Right Column: Swara Patel Text Showcase */}
              <div className="col-xl-6 col-lg-6">
                <div className="tp-services-img-wrapper pl-30 pr-10 p-relative">
                  <div className="p-relative d-flex align-items-center">
                    <p className="tp-services-quote-text">
                      I use movement to unlock what words often cannot- confidence, connection, joy, and self-expression.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaHomeOne;