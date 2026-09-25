'use client';
import React from 'react';
import Image from 'next/image';

import shape_1 from "@/assets/img/services/shape/services-shape-1.png";
import shape_2 from "@/assets/img/services/shape/services-shape-2.png";
import swara_img from "@/assets/img/my-work/swara_patel.png";
const MyWorkShopTrainingHomeOne = () => {
  return (
    <section id="portfolio" className="tp-workshop-area tp-workshop-home-section pt-120 pb-120 fix p-relative">
      <div className="container container-large">
        <div className="row align-items-center gx-5">
          {/* Left Text Content Column */}
          <div className="col-xl-6 col-lg-6 mb-50 mb-lg-0">
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
          <div className="col-xl-6 col-lg-5">
            <div className="tp-services-img-wrapper pl-30 p-relative" style={{ marginTop: "30px" }}>
              <div className="p-relative d-flex justify-content-center">
                <Image
                  src={swara_img}
                  alt="Swara Patel - Movement Specialist"
                  className="w-100 h-auto d-block"
                  style={{
                    objectFit: 'contain',
                    maxHeight: '540px',
                    filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.1))',
                  }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWorkShopTrainingHomeOne;
