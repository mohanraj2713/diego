'use client';
import React from 'react';
import Image from 'next/image';

import img_mask_group from '@/assets/img/my-workshop-training/Mask group.png';
import img_mask_group1 from '@/assets/img/my-workshop-training/Mask group1.png';
import img_8 from '@/assets/img/my-workshop-training/image 8.jpg';
import img_9 from '@/assets/img/my-workshop-training/image 9.jpg';

const MyWorkShopTrainingHomeOne = () => {
  return (
    <section id="portfolio" className="tp-workshop-area tp-workshop-home-section pt-120 pb-120 fix p-relative">
      <div className="container container-large">
        <div className="row align-items-center gx-5">
          {/* Left Text Content Column */}
          <div className="col-xl-5 col-lg-5 mb-50 mb-lg-0">
            <div className="tp-workshop-content pr-30">
              <div className="tp-section-title-wrapper mb-25">
                <span
                  className="tp-workshop-home-subtitle"
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    display: 'inline-block',
                    marginBottom: '15px',
                    fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                  }}
                >
                  My workshops &amp; training
                </span>
                <h2
                  className="tp-section-title tp-workshop-home-title"
                  style={{
                    fontSize: '44px',
                    fontWeight: '700',
                    lineHeight: '1.15',
                    marginBottom: '25px',
                    fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                  }}
                >
                  Designed to be experienced, not simply attended.
                </h2>
              </div>
              <p
                className="tp-workshop-home-desc"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.65',
                  marginBottom: '20px',
                  fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                }}
              >
                They bring together movement, play, interaction, reflection and moments of discovery.
              </p>
              <p
                className="tp-workshop-home-desc"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.65',
                  margin: 0,
                  fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                }}
              >
                Because learning is most powerful when people feel free to participate, experience and discover.
              </p>
            </div>
          </div>

          {/* Right Image Gallery Grid Column */}
          <div className="col-xl-7 col-lg-7">
            <div className="row g-3 align-items-start">
              {/* Left Grid Column */}
              <div className="col-6">
                <div className="d-flex flex-column gap-3">
                  <div
                    className="tp-workshop-img-box overflow-hidden"
                    style={{
                      borderRadius: '12px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <Image
                      src={img_mask_group}
                      alt="Workshop training 1"
                      className="w-100 h-auto d-block"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div
                    className="tp-workshop-img-box overflow-hidden"
                    style={{
                      borderRadius: '12px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <Image
                      src={img_8}
                      alt="Workshop training 2"
                      className="w-100 h-auto d-block"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div
                    className="tp-workshop-img-box overflow-hidden"
                    style={{
                      borderRadius: '12px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <Image
                      src={img_9}
                      alt="Workshop training 3"
                      className="w-100 h-auto d-block"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Grid Column */}
              <div className="col-6">
                <div className="d-flex flex-column gap-3">
                  <div
                    className="tp-workshop-img-box p-relative overflow-hidden"
                    style={{
                      borderRadius: '12px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <Image
                      src={img_mask_group1}
                      alt="Workshop training 4"
                      className="w-100 h-auto d-block"
                      style={{ objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'rgba(255, 255, 255, 0.85)',
                        backdropFilter: 'blur(6px)',
                        padding: '6px 18px',
                        borderRadius: '25px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.12)',
                        border: '1px solid rgba(255,255,255,0.6)',
                        pointerEvents: 'none',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '16px',
                          fontWeight: '700',
                          color: '#2a4365',
                          fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                          letterSpacing: '0.5px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        IIT Indore
                      </span>
                    </div>
                  </div>
                  <div
                    className="tp-workshop-img-box overflow-hidden"
                    style={{
                      borderRadius: '12px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <Image
                      src={img_9}
                      alt="Workshop training 5"
                      className="w-100 h-auto d-block"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWorkShopTrainingHomeOne;
