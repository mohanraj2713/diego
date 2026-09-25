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
            <div className="sv-inner__slider-area tp-service-hero-area sv-inner__slider-plr">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="sv-inner__slider-content-main d-flex justify-content-xl-end justify-content-start">
                                <div className="sv-inner__slider-content-wrap" style={{ maxWidth: '520px', paddingRight: '20px' }}>
                                    <div className="sv-inner__slider-title-box mb-25">
                                        <span
                                            className="tp-service-hero-subtitle"
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
                                            className="tp-service-hero-title"
                                            style={{
                                                fontSize: '32px',
                                                fontWeight: '700',
                                                lineHeight: '1.25',
                                                marginBottom: '20px',
                                                fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                                            }}
                                        >
                                            {title}
                                        </h2>
                                    </div>
                                    <p
                                        className="tp-service-hero-desc"
                                        style={{
                                            fontSize: '16px',
                                            lineHeight: '1.65',
                                            marginBottom: '20px',
                                            fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                                        }}
                                    >
                                        {info1}
                                    </p>
                                    <p
                                        className="tp-service-hero-desc"
                                        style={{
                                            fontSize: '16px',
                                            lineHeight: '1.65',
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
                            <div className="sv-inner__slider-main" style={{ maxHeight: '540px', overflow: 'hidden' }}>
                                <div className="row g-3">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="sv-inner__slider-wrapper" style={{ maxHeight: '540px', overflow: 'hidden' }}>
                                            <Slider {...setting_1} className="sv-inner__slider-active-1">
                                                {slider_images_1.map((item, index) => (
                                                    <div key={index} className="sv-inner__slider-item" style={{ padding: '8px 0' }}>
                                                        <Image
                                                            src={item}
                                                            alt="workshop image"
                                                            style={{
                                                                width: '100%',
                                                                height: '240px',
                                                                objectFit: 'cover',
                                                                borderRadius: '16px',
                                                                display: 'block'
                                                            }}
                                                        />
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="sv-inner__slider-wrapper" style={{ maxHeight: '540px', overflow: 'hidden' }}>
                                            <Slider {...setting_1} className="sv-inner__slider-active-2">
                                                {slider_images_2.map((item, index) => (
                                                    <div key={index} className="sv-inner__slider-item" style={{ padding: '8px 0' }}>
                                                        <Image
                                                            src={item}
                                                            alt="workshop image"
                                                            style={{
                                                                width: '100%',
                                                                height: '240px',
                                                                objectFit: 'cover',
                                                                borderRadius: '16px',
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
        </>
    );
};

export default ServiceHeroAreaHomeOne;