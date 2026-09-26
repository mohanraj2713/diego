
import React from 'react';
import Image from 'next/image';
import award_img from "@/assets/img/about/award-icon.svg";
import swara_img from "@/assets/img/my-work/about-me.png";
import Count from '@/components/common/Count';


type DataType = {
  subtitle: string;
  award_title: string;
  award_des: string;
  about_des: React.JSX.Element;
  counter_data: {
    id: number;
    count: number;
    text: string;
  }[];
}


const about_content: DataType = {
  subtitle: "About Me",
  award_title: "Independent Of The Year",
  award_des: "Annual Awards 2020 • awwwards.com",
  about_des: (
    <>
      <p>
        If you had met me years ago, you probably wouldn’t recognize the person I am today.
        <br />
        I thought dance was changing my skills.
        <br />
        <strong>It was actually changing me.</strong>
      </p>

      <p>
        Over time, I began to understand that movement doesn’t just train the body. It influences how we feel, think, behave and connect.
        <br />
        That realisation became part of my life’s work.
      </p>

      <p>
        Today, I bring that understanding into the way I teach, train, speak and facilitate, helping others experience what movement can make possible.
      </p>
    </>
  ),
  counter_data: [
    {
      id: 1,
      count: 16,
      text: "Years of movement education",
    },
    {
      id: 2,
      count: 40000,
      text: "Children, educators, parents, leaders and teams",
    },
    {
      id: 3,
      count: 100,
      text: "Schools, Organisations and Corporate Spaces",
    }
  ],
}

const { subtitle, award_title, award_des, about_des, counter_data } = about_content

const AboutAreaHomeOne = () => {
  return (
    <>
      <section id="about-me" className="tp-about-area fix">
        <div className="container container-large">
          <div className="tp-about-inner pt-145 pb-80" style={{ paddingTop: "145px", paddingBottom: "80px" }}>
            <span className="tp-about-inner-border transition-3"></span>
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-5">
                <div className="tp-about-wrapper">
                  <div className="tp-section-title-wrapper p-relative mb-45">
                    <span className="tp-section-subtitle-bg">{subtitle}</span>
                    <span className="tp-section-subtitle tp-section-subtitle-1 tp-about-subtitle">{subtitle}</span>
                  </div>
                  <div className="tp-about-thumb-wrapper p-relative z-index-1">
                    <div className="d-flex justify-content-center align-items-center">
                      <Image
                        src={swara_img}
                        alt="Swara Patel - About Me"
                        style={{
                          width: '100%',
                          maxWidth: '380px',
                          height: 'auto',
                          objectFit: 'contain',
                          display: 'block',
                          filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.12))',
                        }}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="tp-about-desc">
                  <div className="tp-about-desc-content">
                    <style jsx global>{`
                      .tp-about-desc-content p {
                        font-size: 18px !important;
                        line-height: 1.7 !important;
                        margin-bottom: 22px !important;
                        color: #242528;
                      }

                      .tp-about-desc-content p:last-child {
                        margin-bottom: 0 !important;
                      }

                      .tp-about-desc-content p strong {
                        font-weight: 700;
                        color: #0f0f11;
                      }

                      html[tp-theme='tp-theme-light'] .tp-about-desc-content p,
                      .tp-theme-light .tp-about-desc-content p {
                        color: #242528 !important;
                      }

                      html[tp-theme='tp-theme-light'] .tp-about-desc-content p strong,
                      .tp-theme-light .tp-about-desc-content p strong {
                        color: #0f0f11 !important;
                      }

                      html[tp-theme='tp-theme-dark'] .tp-about-desc-content p,
                      .tp-theme-dark .tp-about-desc-content p {
                        color: #e2e8f0 !important;
                      }

                      html[tp-theme='tp-theme-dark'] .tp-about-desc-content p strong,
                      .tp-theme-dark .tp-about-desc-content p strong {
                        color: #ffffff !important;
                      }
                    `}</style>
                    <div>{about_des}</div>
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

export default AboutAreaHomeOne;