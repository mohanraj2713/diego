'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import shape_1 from "@/assets/img/services/shape/services-shape-1.png";
import shape_2 from "@/assets/img/services/shape/services-shape-2.png";


interface DataType {
  subtitle: string;
  title: React.JSX.Element;
  sm_des: React.JSX.Element;
  accordion_data: {
    id: number;
    tab_id: string;
    question: string;
    answer: string;
    some_features: string[];
  }[];
}

const service_content: DataType = {
  subtitle: "What I Believe",
  title: <>Movement is <br /> more than exercise</>,
  sm_des: <>More than dance | More than performance. It shapes </>,
  accordion_data: [
    {
      id: 1,
      tab_id: "One",
      question: "Dance curriculum expert",
      answer: "Project systematization is something I place a lot of emphasis on. My passion Design Systems.",
      some_features: [
        "Interface design",
        "Creating design systems",
        "Ui kits",
      ]
    },
    {
      id: 2,
      tab_id: "Two",
      question: "Teacher Training & Teacher Wellness",
      answer: "Project systematization is something I place a lot of emphasis on. My passion Design Systems.",
      some_features: [
        "Interface design",
        "Creating design systems",
        "Ui kits",
      ]
    },
    {
      id: 3,
      tab_id: "Three",
      question: "Parent Engagement",
      answer: "Project systematization is something I place a lot of emphasis on. My passion Design Systems.",
      some_features: [
        "Interface design",
        "Creating design systems",
        "Ui kits",
      ]
    },
    {
      id: 4,
      tab_id: "Four",
      question: "Student Workshops",
      answer: "Project systematization is something I place a lot of emphasis on. My passion Design Systems.",
      some_features: [
        "Interface design",
        "Creating design systems",
        "Ui kits",
      ]
    },
    {
      id: 5,
      tab_id: "Five",
      question: "Leadership Workshops",
      answer: "Project systematization is something I place a lot of emphasis on. My passion Design Systems.",
      some_features: [
        "Interface design",
        "Creating design systems",
        "Ui kits",
      ]
    },
    {
      id: 6,
      tab_id: "Six",
      question: "Corporate Wellness",
      answer: "Project systematization is something I place a lot of emphasis on. My passion Design Systems.",
      some_features: [
        "Interface design",
        "Creating design systems",
        "Ui kits",
      ]
    },
    {
      id: 7,
      tab_id: "Seven",
      question: "Speaking & Facilitation",
      answer: "Project systematization is something I place a lot of emphasis on. My passion Design Systems.",
      some_features: [
        "Interface design",
        "Creating design systems",
        "Ui kits",
      ]
    }
  ]
}

const { subtitle, title, sm_des, accordion_data } = service_content;


const ServiceAreaHomeOne = () => {
  const [active, setActive] = useState(1);

  const handleItemClick = (index: number) => {
    setActive(index);
  }

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
            <div className="row gx-0">

              <div className="col-xl-6 col-lg-7">
                <div className="tp-services-wrapper tp-services-capsule-wrapper p-relative pt-100 pr-70" style={{ paddingTop: "100px", }}
                  data-tp-throwable-scene="true">
                  <div className="tp-section-title-wrapper tp_text_anim mb-170">
                    <div className="tp-section-title-inner p-relative">
                      <span className="tp-section-subtitle" style={{ position: 'relative', top: 0, left: 0, transform: 'none', display: 'inline-block', marginBottom: '10px' }}>{subtitle}</span>
                      <h3 className="tp-section-title tp_title_anim">{title}</h3>
                    </div>
                    <p>{sm_des}</p>
                  </div>

                  <div className="tp-services-capsule-item-wrapper">
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Teachers teach more creatively</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>How we lead</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>How we grow</span>
                    </p>
                    {/* <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Consulting</span>
                    </p> */}
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>How we learn</span>
                    </p>
                    {/* <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Consulting</span>
                    </p> */}
                    {/* <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Brand strategy</span>
                    </p> */}
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#19B3F1" }}>Project connect deeply</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>Families move,laugh, and connect</span>
                    </p>
                    {/* <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Testing</span>
                    </p> */}
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

              <div className="col-xl-6 col-lg-5">
                <div className="tp-services-accordion tp-accordion tp-accordion-2 pl-70 p-relative" style={{ marginTop: "90px" }}>
                  <span className="tp-services-accordion-border"></span>
                  <div className="accordion" id="accordionExample">

                    {accordion_data.map((item, i) => (
                      <div key={i} onClick={() => handleItemClick(i)} className={`accordion-item tp-services-accordion-item ${active === i ? 'active' : ''}`}>
                        <h2 className="accordion-header" id={`heading${item.tab_id}`}>
                          <button
                            className={`accordion-button ${i === 1 ? '' : 'collapsed'}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.tab_id}`}
                            aria-expanded={`${i === 1 ? 'true' : 'false'}`}
                            aria-controls={`collapse${item.tab_id}`}
                            tabIndex={0}
                          >
                            <span>0{item.id}</span>
                            {item.question}
                          </button>
                        </h2>
                        {/* <div
                          id={`collapse${item.tab_id}`}
                          className={`accordion-collapse collapse ${i === 1 ? 'show' : ''}`}
                          aria-labelledby={`heading${item.tab_id}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>{item.answer}</p>
                            <ul>
                              {item.some_features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        </div> */}
                        <span className="accordion-item-border"></span>
                      </div>
                    ))}

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