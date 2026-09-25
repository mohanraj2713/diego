'use client';
import React from 'react';
import Image from 'next/image';

import shape_1 from "@/assets/img/services/shape/services-shape-1.png";
import shape_2 from "@/assets/img/services/shape/services-shape-2.png";
import swara_img from "@/assets/img/my-work/swara_patel.png";

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
      <section className="tp-services-area tp-sv tp-services-bg-text-animation fix" id="services">
        <div className="container container-large">
          <div className="tp-services-inner pb-195 p-relative z-index-1">

            <span className="tp-services-inner-border tp-vertical-line transition-3"></span>
            <span className="tp-services-inner-border right tp-vertical-line transition-3"></span>

            <div className="tp-services-bottom-text tp-services-bg-text">
              <p>Services</p>
            </div>
            <div className="row gx-0 align-items-center">

              <div className="col-xl-6 col-lg-7">
                <div className="tp-services-wrapper tp-services-capsule-wrapper p-relative pt-100 pr-70" style={{ paddingTop: "100px" }}
                  data-tp-throwable-scene="true">
                  <div className="tp-section-title-wrapper tp_text_anim mb-170">
                    <div className="tp-section-title-inner p-relative">
                      <span className="tp-section-subtitle tp-service-home-subtitle" style={{ position: 'relative', top: 0, left: 0, transform: 'none', display: 'inline-block', marginBottom: '10px' }}>{subtitle}</span>
                      <h3 className="tp-section-title tp-service-home-title tp_title_anim" style={{ fontSize: '32px', lineHeight: '1.2' }}>{title}</h3>
                    </div>
                    <p className="tp-service-home-desc">{sm_des}</p>
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

              {/* Right Column: Swara Patel Image Showcase */}
              <div className="col-xl-6 col-lg-5">
                <div className="tp-services-img-wrapper pl-30 p-relative" style={{ marginTop: "60px" }}>
                  <div
                    className="p-relative rounded-4 overflow-hidden"
                    style={{
                      borderRadius: '28px',
                      boxShadow: '0 25px 60px rgba(0, 0, 0, 0.18), 0 0 40px rgba(84, 185, 96, 0.15)',
                      border: '1px solid rgba(84, 185, 96, 0.25)',
                      transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <Image
                      src={swara_img}
                      alt="Swara Patel - Movement Specialist"
                      className="w-100 h-auto d-block"
                      style={{
                        borderRadius: '28px',
                        objectFit: 'cover',
                        maxHeight: '520px',
                        transition: 'transform 0.5s ease',
                      }}
                      priority
                    />
                    
                    {/* Subtle Overlay Badge */}
                    <div
                      className="position-absolute bottom-0 start-0 w-100 p-4"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 100%)',
                        borderBottomLeftRadius: '28px',
                        borderBottomRightRadius: '28px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '13px',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          letterSpacing: '1.5px',
                          color: '#54b960',
                          display: 'block',
                          marginBottom: '4px',
                          fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                        }}
                      >
                        Movement Educator
                      </span>
                      <h4
                        style={{
                          fontSize: '24px',
                          fontWeight: '700',
                          color: '#FFFFFF',
                          margin: 0,
                          fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                        }}
                      >
                        Swara Patel
                      </h4>
                    </div>
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