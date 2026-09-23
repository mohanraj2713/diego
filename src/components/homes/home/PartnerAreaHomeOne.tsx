'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

interface PartnerItem {
  id: number;
  img: string;
  name: string;
}

const partner_data: PartnerItem[] = [
  { id: 1, img: '/assets/img/partner/1.png', name: 'IIT Indore' },
  { id: 2, img: '/assets/img/partner/2.png', name: 'jain international residential school' },
  { id: 3, img: '/assets/img/partner/3.png', name: 'IIT Indore' },
  { id: 4, img: '/assets/img/partner/4.png', name: 'jain international residential school' },
  { id: 5, img: '/assets/img/partner/5.png', name: 'IIT Indore' },
  { id: 6, img: '/assets/img/partner/6.png', name: 'jain international residential school' },
  { id: 7, img: '/assets/img/partner/7.png', name: 'IIT Indore' },
  { id: 8, img: '/assets/img/partner/8.png', name: 'jain international residential school' },
  { id: 9, img: '/assets/img/partner/9.png', name: 'IIT Indore' },
  { id: 10, img: '/assets/img/partner/10.png', name: 'jain international residential school' },
  { id: 11, img: '/assets/img/partner/11.png', name: 'IIT Indore' },
  { id: 12, img: '/assets/img/partner/12.png', name: 'jain international residential school' },
  { id: 13, img: '/assets/img/partner/13.png', name: 'IIT Indore' },
  { id: 14, img: '/assets/img/partner/14.png', name: 'jain international residential school' },
  { id: 15, img: '/assets/img/partner/15.png', name: 'IIT Indore' },
  { id: 16, img: '/assets/img/partner/16.png', name: 'jain international residential school' },
  { id: 17, img: '/assets/img/partner/17.png', name: 'IIT Indore' },
  { id: 18, img: '/assets/img/partner/18.png', name: 'jain international residential school' },
  { id: 19, img: '/assets/img/partner/19.png', name: 'IIT Indore' },
];

const PartnerAreaHomeOne = () => {
  return (
    <section
      className="tp-skill-area tp-partner-area pt-100 pb-100 p-relative z-index-1 fix theme-bg-2"
      style={{ backgroundImage: 'url(/assets/img/skill/bg-distort.png)' }}
    >
      <div className="tp-skill-shape">
        <span className="tp-skill-shape-1"></span>
        <span className="tp-skill-shape-2"></span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-section-title-wrapper mb-50 text-center">
              <h2
                className="tp-section-title text-center"
                style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  marginBottom: '10px',
                  color: '#1e2022',
                  fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                }}
              >
                Trusted By
              </h2>
              <p
                style={{
                  fontSize: '16px',
                  color: '#666',
                  margin: '0',
                  fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                }}
              >
                Schools, educational institutions, organisations and corporate teams.
              </p>
            </div>
          </div>
        </div>

        <div className="tp-partner-slider-wrapper">
          <style>{`
            .tp-partner-slider-active .swiper-wrapper {
              transition-timing-function: linear !important;
            }
          `}</style>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={30}
            loop={true}
            speed={3500}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              576: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              992: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 35,
              },
            }}
            className="tp-partner-slider-active swiper-container"
          >
            {partner_data.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="tp-partner-item text-center"
                  style={{
                    padding: '20px 10px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                  }}
                >
                  <div
                    className="tp-partner-img-box d-flex align-items-center justify-content-center mx-auto"
                    style={{
                      width: '140px',
                      height: '140px',
                      borderRadius: '50%',
                      backgroundColor: '#ffffff',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.06)',
                      padding: '18px',
                      marginBottom: '15px',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={100}
                      height={100}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  {/* <h4
                    style={{
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#1e2022',
                      margin: 0,
                      lineHeight: '1.4',
                      textTransform: 'capitalize',
                      fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                    }}
                  >
                    {item.name}
                  </h4> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PartnerAreaHomeOne;
