
import React from 'react';
import Image from 'next/image';
import award_img from "@/assets/img/about/award-icon.svg";
import about_img from "@/assets/img/about/about-1.png";
// import about_img from "@/assets/img/my-work/about-me.png";
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
  // about_des:<></>,
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
        {/* the body. <strong>It influences how we feel, think, behave and connect.</strong> */}
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
            <div className="row">
              <div className="col-xl-5 col-lg-5">
                <div className="tp-about-wrapper">
                  <div className="tp-section-title-wrapper p-relative mb-45">
                    <span className="tp-section-subtitle-bg">{subtitle}</span>
                    <span className="tp-section-subtitle tp-section-subtitle-1 tp-about-subtitle">{subtitle}</span>
                  </div>
                  <div className="tp-about-thumb-wrapper p-relative z-index-1">
                    <div className="tp-about-thumb p-relative z-index-1">
                      <div className="tp-about-thumb-bg-shape include-bg"
                        style={{ backgroundImage: 'url(/assets/img/about/shape/about-shape-1.png)' }}></div>
                      <Image src={about_img} alt="image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="tp-about-desc">
                  {/* <div className="tp-about-award d-inline-block">
                    <div className="tp-about-award-icon d-inline-block" style={{ marginRight: "15px" }}>
                      <span>
                        <Image src={award_img} alt="image" />
                      </span>
                    </div>
                    <div className="tp-about-award-content d-inline-block">
                      <h4 className="tp-about-award-title">{award_title}</h4>
                      <p>{award_des}</p>
                    </div>
                  </div> */}
                  <div className="tp-about-desc-content mb-40">
                    <div>{about_des}</div>
                  </div>
                  <div className="tp-about-fact">
                    <div className="row">
                      {counter_data.map((item, index) => (
                        <div key={index} className="col-md-4 col-sm-6 mb-30">
                          <div className="tp-about-fact-item">
                            <h4 className="d-flex">
                              <span className="purecounter">
                                <Count number={item.count} />
                              </span>+
                            </h4>
                            <p>{item.text}</p>
                          </div>
                        </div>
                      ))}
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

export default AboutAreaHomeOne;