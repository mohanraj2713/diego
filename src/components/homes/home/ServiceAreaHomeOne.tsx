'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import shape_1 from "@/assets/img/services/shape/services-shape-1.png";
import shape_2 from "@/assets/img/services/shape/services-shape-2.png";

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
  const [isPlaying, setIsPlaying] = useState(false);

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
                      <span className="tp-section-subtitle" style={{ position: 'relative', top: 0, left: 0, transform: 'none', display: 'inline-block', marginBottom: '10px' }}>{subtitle}</span>
                      <h3 className="tp-section-title tp_title_anim" style={{ fontSize: '32px', lineHeight: '1.2' }}>{title}</h3>
                    </div>
                    <p>{sm_des}</p>
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

              {/* Right Column: Interactive Video Showreel Container */}
              <div className="col-xl-6 col-lg-5">
                <div className="tp-services-video-container pl-30 p-relative" style={{ marginTop: "60px" }}>
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '16 / 10',
                      minHeight: '380px',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      boxShadow: '0 20px 45px rgba(0, 0, 0, 0.15)',
                      backgroundColor: '#111115',
                    }}
                  >
                    {!isPlaying ? (
                      <div
                        onClick={() => setIsPlaying(true)}
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: '100%',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <img
                          src="/assets/img/projects/2.jpg"
                          alt="Showreel Thumbnail"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            filter: 'brightness(0.9)',
                            transition: 'transform 0.5s ease',
                          }}
                        />

                        {/* Dark Overlay Gradient */}
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 100%)',
                          }}
                        />

                        {/* Play Button Icon */}
                        <div
                          style={{
                            position: 'absolute',
                            width: '76px',
                            height: '76px',
                            borderRadius: '50%',
                            backgroundColor: '#BA9666',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 10px 30px rgba(186, 150, 102, 0.5)',
                            zIndex: 3,
                          }}
                        >
                          <svg
                            width="26"
                            height="28"
                            viewBox="0 0 24 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ marginLeft: '4px' }}
                          >
                            <path
                              d="M22.5 11.402C23.8333 12.1718 23.8333 14.0963 22.5 14.8661L3.75 25.6914C2.41666 26.4612 0.749999 25.4989 0.749999 23.9594L0.75 2.30873C0.75 0.769229 2.41667 -0.193022 3.75 0.576778L22.5 11.402Z"
                              fill="#FFFFFF"
                            />
                          </svg>
                        </div>

                        {/* Label Badge */}
                        <div
                          style={{
                            position: 'absolute',
                            bottom: '24px',
                            left: '24px',
                            zIndex: 3,
                          }}
                        >
                          <span
                            style={{
                              fontSize: '13px',
                              fontWeight: '700',
                              textTransform: 'uppercase',
                              letterSpacing: '1.2px',
                              color: '#BA9666',
                              display: 'block',
                              marginBottom: '4px',
                              fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                            }}
                          >
                            Watch Showreel
                          </span>
                          <h4
                            style={{
                              fontSize: '22px',
                              fontWeight: '700',
                              color: '#FFFFFF',
                              margin: 0,
                              fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                            }}
                          >
                            Swara&rsquo;s Showreel
                          </h4>
                        </div>
                      </div>
                    ) : (
                      <video
                        src="/assets/img/my-work/Swara ma'am Showreel.mp4"
                        controls
                        autoPlay
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '24px',
                        }}
                      />
                    )}
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