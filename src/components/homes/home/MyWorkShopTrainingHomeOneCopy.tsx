'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';

import portfolio_img_1 from "@/assets/img/portfolio/portfolio-2.jpg";
import portfolio_img_2 from "@/assets/img/portfolio/portfolio-3.jpg";
import portfolio_img_3 from "@/assets/img/portfolio/portfolio-1.jpg";

import projects_img_1 from "@/assets/img/projects/project-1.jpg";
import projects_img_2 from "@/assets/img/projects/project-2.jpg";
import projects_img_3 from "@/assets/img/projects/project-3.png";
import projects_img_4 from "@/assets/img/projects/project-4.png";

import projects_new_img_1 from "@/assets/img/projects/1.jpg";
import projects_new_img_2 from "@/assets/img/projects/2.jpg";
import projects_new_img_3 from "@/assets/img/projects/3.jpg";
import projects_new_img_4 from "@/assets/img/projects/4.jpg";
import projects_new_img_5 from "@/assets/img/projects/5.jpg";
import projects_new_img_6 from "@/assets/img/projects/6.jpg";

import Slider from "react-slick";

interface DataTypeHero {
    subtitle: string;
    title: string;
    info1: string;
    info2: string;
    slider_images_1: StaticImageData[];
    slider_images_2: StaticImageData[];
}

const hero_content: DataTypeHero = {
    subtitle: "My workshops & training",
    title: "I CREATE SPACES PEOPLE WANT TO BE PART OF.",
    info1: "I’m known for my energy and my ability to make people feel at ease, open up and participate fully, whether I’m in a room of 10 or 500.My workshops & training are designed to be experienced, not simply attended. ",
    info2: "They bring together movement, play, interaction, reflection and moments of discovery.Because learning is most powerful when people feel free to participate, experience and discover.",
    slider_images_1: [
        projects_new_img_1, projects_new_img_2, projects_new_img_3
    ],
    slider_images_2: [
        projects_new_img_6, projects_new_img_5, projects_new_img_4
    ]
}

const { subtitle: textSubtitle, title: texttitle, info1, info2, slider_images_1, slider_images_2 } = hero_content

const setting_1 = {
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesPerRow: 1,
    slidesToShow: 2,
    arrows: false,
    buttons: false,
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
}

interface DataType {
    subtitle: string;
    title: React.JSX.Element;
    sm_des: React.JSX.Element;
}

const service_content: DataType = {
    subtitle: "My workshops & training",
    title: <>I CREATE SPACES PEOPLE WANT TO BE PART OF.</>,
    sm_des: (
        <>
            I’m known for my energy and my ability to make people feel at ease, open up and participate fully, whether I’m in a room of 10 or 500.

            <span className="d-block my-3"></span>

            My workshops & training are designed to be experienced, not simply attended

            <span className="d-block my-3"></span>

            They bring together movement, play, interaction, reflection and moments of discovery.

            <span className="d-block my-3"></span>

            Because learning is most powerful when people feel free to participate, experience and discover.
        </>
    ),
};

const { subtitle, title, sm_des } = service_content;

const MyWorkShopTrainingHomeOneCopy = () => {

    return (
        <>
            <section className="tp-services-area tp-sv tp-services-bg-text-animation fix" id="workshops">
                <div className="container container-large">
                    <div className="tp-services-inner py-60 p-relative z-index-1"
                    // style={{ paddingTop: '60px', paddingBottom: '60px' }}

                    >
                        <div className="tp-services-bottom-text tp-services-bg-text">
                            {/* <p>Services</p> */}
                        </div>
                        <div className="row gx-0 align-items-center">

                            <div className="col-xl-6 col-lg-6 mb-4 mb-lg-0">
                                <div className="tp-services-wrapper tp-services-capsule-wrapper p-relative pr-lg-4 pr-xl-5" style={{ paddingTop: "0px" }}
                                    data-tp-throwable-scene="true">
                                    <div className="tp-section-title-wrapper tp_text_anim mb-30">
                                        <div className="tp-section-title-inner p-relative">
                                            <span className="tp-section-subtitle tp-service-home-subtitle" style={{ position: 'relative', top: 0, left: 0, transform: 'none', display: 'inline-block', marginBottom: '10px' }}>{subtitle}</span>
                                            <h3 className="tp-section-title tp-service-home-title tp_title_anim" style={{ fontSize: '32px', lineHeight: '1.2' }}>{title}</h3>
                                        </div>
                                        <p className="tp-service-home-desc mb-0">{sm_des}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Swara Patel Image Showcase (No Card Background) */}
                            <div className="col-xl-6 col-lg-6">
                                <div className="sv-inner__slider-main" style={{ maxHeight: '500px', overflow: 'hidden' }}>
                                    <div className="row g-2 g-md-3">
                                        <div className="col-6 col-md-6 col-lg-6 col-xl-6">
                                            <div className="sv-inner__slider-wrapper" style={{ maxHeight: '500px', overflow: 'hidden' }}>
                                                <Slider {...setting_1} className="sv-inner__slider-active-1">
                                                    {slider_images_1.map((item, index) => (
                                                        <div key={index} className="sv-inner__slider-item" style={{ padding: '6px 0' }}>
                                                            <Image
                                                                src={item}
                                                                alt="workshop image"
                                                                style={{
                                                                    width: '100%',
                                                                    height: '220px',
                                                                    objectFit: 'cover',
                                                                    borderRadius: '12px',
                                                                    display: 'block'
                                                                }}
                                                            />
                                                        </div>
                                                    ))}
                                                </Slider>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-6 col-lg-6 col-xl-6">
                                            <div className="sv-inner__slider-wrapper" style={{ maxHeight: '500px', overflow: 'hidden' }}>
                                                <Slider {...setting_1} className="sv-inner__slider-active-2">
                                                    {slider_images_2.map((item, index) => (
                                                        <div key={index} className="sv-inner__slider-item" style={{ padding: '6px 0' }}>
                                                            <Image
                                                                src={item}
                                                                alt="workshop image"
                                                                style={{
                                                                    width: '100%',
                                                                    height: '220px',
                                                                    objectFit: 'cover',
                                                                    borderRadius: '12px',
                                                                    display: 'block'
                                                                }}
                                                            />
                                                        </div>
                                                    ))}
                                                </Slider>
                                            </div>
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

export default MyWorkShopTrainingHomeOneCopy;