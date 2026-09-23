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

import Slider from "react-slick";

interface DataType {
    subtitle: string;
    title: string;
    info1: string;
    info2: string;
    slider_images_1: StaticImageData[];
    slider_images_2: StaticImageData[];
}

const hero_content: DataType = {
    subtitle: "My workshops & training",
    title: "Designed to be experienced, not simply attended.",
    info1: "They bring together movement, play, interaction, reflection and moments of discovery.",
    info2: "Because learning is most powerful when people feel free to participate, experience and discover.",
    slider_images_1: [
        projects_img_1, projects_img_2, projects_img_3, projects_img_4,
        projects_img_1, projects_img_2, projects_img_3, projects_img_4,
    ],
    slider_images_2: [
        projects_img_1, projects_img_2, projects_img_3, projects_img_4,
        projects_img_1, projects_img_2, projects_img_3, projects_img_4,
    ]
}

const { subtitle, title, info1, info2, slider_images_1, slider_images_2 } = hero_content

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
    centerPadding: '120px',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
            }
        },
        {
            breakpoint: 992,
            settings: {
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
}



const ServiceHeroAreaHomeOne = () => {
    return (
        <>
            <div className="sv-inner__slider-area black-bg-3 sv-inner__slider-plr">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="sv-inner__slider-content-main d-flex justify-content-xl-end justify-content-start">
                                <div className="sv-inner__slider-content-wrap" style={{ maxWidth: '520px', paddingRight: '20px' }}>
                                    <div className="sv-inner__slider-title-box mb-25">
                                        <span
                                            style={{
                                                fontSize: '18px',
                                                fontWeight: '700',
                                                display: 'inline-block',
                                                marginBottom: '15px',
                                                background: 'linear-gradient(91deg, #9ABF03 5.09%, #FF8D62 98.42%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                                            }}
                                        >
                                            {subtitle}
                                        </span>
                                        <h2
                                            style={{
                                                fontSize: '44px',
                                                fontWeight: '700',
                                                lineHeight: '1.15',
                                                color: '#171718',
                                                marginBottom: '25px',
                                                fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                                            }}
                                        >
                                            {title}
                                        </h2>
                                    </div>
                                    <p
                                        style={{
                                            fontSize: '16px',
                                            lineHeight: '1.65',
                                            color: '#6F7074',
                                            marginBottom: '20px',
                                            fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                                        }}
                                    >
                                        {info1}
                                    </p>
                                    <p
                                        style={{
                                            fontSize: '16px',
                                            lineHeight: '1.65',
                                            color: '#6F7074',
                                            margin: 0,
                                            fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                                        }}
                                    >
                                        {info2}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="sv-inner__slider-main">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="sv-inner__slider-wrapper">
                                            <Slider {...setting_1} className="sv-inner__slider-active-1">
                                                {slider_images_1.map((item, index) => (
                                                    <div key={index} className="sv-inner__slider-item">
                                                        <Image src={item} alt="image-here" />
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="sv-inner__slider-wrapper">
                                            <Slider {...setting_1} className="sv-inner__slider-active-2">
                                                {slider_images_2.map((item, index) => (
                                                    <div key={index} className="sv-inner__slider-item">
                                                        <Image src={item} alt="image-here" />
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
        </>
    );
};

export default ServiceHeroAreaHomeOne;