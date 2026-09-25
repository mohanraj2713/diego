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

import Count from '@/components/common/Count';

const workItems = [
    "Dance curriculum expert",
    "Teacher Training & Teacher Wellness",
    "Parent Engagement",
    "Student Workshops",
    "Leadership Workshops",
    "Corporate Wellness",
    "Speaking & Facilitation",
];

const counter_data = [
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
]

interface DataTypeHero {
    subtitle: string;
    title: string;
    info1: string;
    info2: string;
    slider_images_1: StaticImageData[];
    slider_images_2: StaticImageData[];
}

const hero_content: DataTypeHero = {
    subtitle: "My Work",
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


interface DataType {
    subtitle: string;
    title: React.JSX.Element;
    sm_des: React.JSX.Element;
}

const service_content: DataType = {
    subtitle: "My Work",
    title: <>I CREATE SPACES PEOPLE WANT TO BE PART OF. </>,
    sm_des: <>I’m known for my energy and my ability to make people feel at ease, open up and participate fully, whether I’m in a room of 10 or 500.My workshops & training are designed to be experienced, not simply attended <br />They bring together movement, play, interaction, reflection and moments of discovery.Because learning is most powerful when people feel free to participate, experience and discover. </>,
}

const { subtitle, title, sm_des } = service_content;

const MyWorkAreaHomeOneCopy = () => {

    return (
        <>
            <section className="tp-services-area tp-sv tp-services-bg-text-animation fix" id="services">
                <div className="container container-large">
                    <div className="tp-services-inner py-60 p-relative z-index-1" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
                        <div className="tp-services-bottom-text tp-services-bg-text">
                            {/* <p>Services</p> */}
                        </div>
                        <div className="row gx-0 align-items-start">

                            <div className="col-xl-5 col-lg-7">
                                <div className="tp-services-wrapper tp-services-capsule-wrapper p-relative pr-5" style={{ paddingTop: "0px" }}
                                    data-tp-throwable-scene="true">
                                    <div className="tp-section-title-wrapper tp_text_anim mb-20">
                                        <div className="tp-section-title-inner p-relative">
                                            <span className="tp-section-subtitle tp-service-home-subtitle" style={{ position: 'relative', top: 0, left: 0, transform: 'none', display: 'inline-block', marginBottom: '10px' }}>{subtitle}</span>
                                            {/* <h3 className="tp-section-title tp-service-home-title tp_title_anim" style={{ fontSize: '32px', lineHeight: '1.2' }}>{title}</h3> */}
                                        </div>
                                        {/* <p className="tp-service-home-desc">{sm_des}</p> */}
                                    </div>
                                    <div className="tp-my-work-list">
                                        {workItems.map((item, index) => (
                                            <div
                                                key={index}
                                                className="tp-mywork-home-item"
                                                style={{
                                                    padding: '18px 0',
                                                    fontSize: '17px',
                                                    fontWeight: '700',
                                                    fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                                                    transition: 'all 0.2s ease',
                                                    cursor: 'default',
                                                }}
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>


                                </div>
                            </div>

                            {/* Right Column: Swara Patel Image Showcase (No Card Background) */}
                            <div className="col-xl-7 col-lg-7 mywork-card-wrapper">
                                <style jsx global>{`
                            /* -------------------------------------------------------------
                               MY WORK SECTION - THEME CONTROLS MATCHING ABOUT ME
                            ------------------------------------------------------------- */
                            
                            /* DEFAULT & DARK THEME (#142213 Background + #E2E8F0 / #FFFFFF Text) */
                            .tp-mywork-home-section {
                                background-color: #142213 !important;
                            }
                            .tp-mywork-home-subtitle {
                                color: #54b960 !important;
                            }
                            .tp-mywork-home-item {
                                color: #E2E8F0 !important;
                                border-bottom: 1px solid rgba(255, 255, 255, 0.12) !important;
                            }
                            .tp-mywork-home-card,
                            .mywork-popout-card {
                                background-color: rgba(22, 36, 24, 0.92) !important;
                                border: 1px solid rgba(84, 185, 96, 0.35) !important;
                                boxShadow: 0 15px 40px rgba(0, 0, 0, 0.3) !important;
                            }
                            .tp-mywork-card-heading,
                            .mywork-card-title {
                                color: #ffffff !important;
                            }
                            .tp-mywork-card-text,
                            .mywork-card-text {
                                color: #E2E8F0 !important;
                            }
                            .tp-mywork-card-highlight,
                            .mywork-card-highlight {
                                color: #ffffff !important;
                            }
                            .tp-mywork-fact-item h4 {
                                color: #ffffff !important;
                            }
                            .tp-mywork-fact-item p {
                                color: #E2E8F0 !important;
                            }

                            /* EXPLICIT DARK THEME SELECTORS */
                            html[tp-theme='tp-theme-dark'] .tp-mywork-home-section,
                            body.tp-theme-dark .tp-mywork-home-section,
                            .tp-theme-dark .tp-mywork-home-section,
                            body:not(.tp-magic-cursor) .tp-mywork-home-section {
                                background-color: #142213 !important;
                            }
                            html[tp-theme='tp-theme-dark'] .tp-mywork-home-subtitle,
                            body.tp-theme-dark .tp-mywork-home-subtitle,
                            .tp-theme-dark .tp-mywork-home-subtitle {
                                color: #54b960 !important;
                            }
                            html[tp-theme='tp-theme-dark'] .tp-mywork-home-item,
                            body.tp-theme-dark .tp-mywork-home-item,
                            .tp-theme-dark .tp-mywork-home-item,
                            body:not(.tp-magic-cursor) .tp-mywork-home-item {
                                color: #E2E8F0 !important;
                                border-bottom: 1px solid rgba(255, 255, 255, 0.12) !important;
                            }
                            html[tp-theme='tp-theme-dark'] .tp-mywork-home-card,
                            html[tp-theme='tp-theme-dark'] .mywork-popout-card,
                            body.tp-theme-dark .tp-mywork-home-card,
                            body.tp-theme-dark .mywork-popout-card,
                            .tp-theme-dark .tp-mywork-home-card,
                            .tp-theme-dark .mywork-popout-card,
                            body:not(.tp-magic-cursor) .mywork-popout-card {
                                background-color: rgba(22, 36, 24, 0.92) !important;
                                border: 1px solid rgba(84, 185, 96, 0.35) !important;
                                box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3) !important;
                            }
                            html[tp-theme='tp-theme-dark'] .mywork-card-title,
                            body:not(.tp-magic-cursor) .mywork-card-title {
                                color: #ffffff !important;
                            }
                            html[tp-theme='tp-theme-dark'] .mywork-card-text,
                            body:not(.tp-magic-cursor) .mywork-card-text {
                                color: #E2E8F0 !important;
                            }
                            html[tp-theme='tp-theme-dark'] .mywork-card-highlight,
                            body:not(.tp-magic-cursor) .mywork-card-highlight {
                                color: #ffffff !important;
                            }
                            html[tp-theme='tp-theme-dark'] .tp-mywork-fact-item h4,
                            body:not(.tp-magic-cursor) .tp-mywork-fact-item h4 {
                                color: #ffffff !important;
                            }
                            html[tp-theme='tp-theme-dark'] .tp-mywork-fact-item p,
                            body:not(.tp-magic-cursor) .tp-mywork-fact-item p {
                                color: #E2E8F0 !important;
                            }

                            /* LIGHT THEME OVERRIDES (White Background + #27282C / #121212 Text) */
                            html[tp-theme='tp-theme-light'] .tp-mywork-home-section,
                            [tp-theme='tp-theme-light'] .tp-mywork-home-section,
                            [tp-theme='light'] .tp-mywork-home-section,
                            .tp-theme-light .tp-mywork-home-section,
                            body.tp-magic-cursor .tp-mywork-home-section {
                                background-color: #ffffff !important;
                            }
                            html[tp-theme='tp-theme-light'] .tp-mywork-home-subtitle,
                            [tp-theme='tp-theme-light'] .tp-mywork-home-subtitle,
                            [tp-theme='light'] .tp-mywork-home-subtitle,
                            .tp-theme-light .tp-mywork-home-subtitle,
                            body.tp-magic-cursor .tp-mywork-home-subtitle {
                                color: #54b960 !important;
                            }
                            html[tp-theme='tp-theme-light'] .tp-mywork-home-item,
                            [tp-theme='tp-theme-light'] .tp-mywork-home-item,
                            [tp-theme='light'] .tp-mywork-home-item,
                            .tp-theme-light .tp-mywork-home-item,
                            body.tp-magic-cursor .tp-mywork-home-item {
                                color: #27282C !important;
                                border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important;
                            }
                            html[tp-theme='tp-theme-light'] .tp-mywork-home-card,
                            html[tp-theme='tp-theme-light'] .mywork-popout-card,
                            [tp-theme='tp-theme-light'] .tp-mywork-home-card,
                            [tp-theme='tp-theme-light'] .mywork-popout-card,
                            [tp-theme='light'] .tp-mywork-home-card,
                            [tp-theme='light'] .mywork-popout-card,
                            .tp-theme-light .tp-mywork-home-card,
                            .tp-theme-light .mywork-popout-card,
                            body.tp-magic-cursor .tp-mywork-home-card,
                            body.tp-magic-cursor .mywork-popout-card {
                                background-color: #ffffff !important;
                                border: 1px solid rgba(84, 185, 96, 0.3) !important;
                                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06) !important;
                            }
                            html[tp-theme='tp-theme-light'] .mywork-card-title,
                            [tp-theme='tp-theme-light'] .mywork-card-title,
                            .tp-theme-light .mywork-card-title,
                            body.tp-magic-cursor .mywork-card-title {
                                color: #121212 !important;
                            }
                            html[tp-theme='tp-theme-light'] .mywork-card-text,
                            [tp-theme='tp-theme-light'] .mywork-card-text,
                            .tp-theme-light .mywork-card-text,
                            body.tp-magic-cursor .mywork-card-text {
                                color: #27282C !important;
                            }
                            html[tp-theme='tp-theme-light'] .mywork-card-highlight,
                            [tp-theme='tp-theme-light'] .mywork-card-highlight,
                            .tp-theme-light .mywork-card-highlight,
                            body.tp-magic-cursor .mywork-card-highlight {
                                color: #121212 !important;
                            }
                            html[tp-theme='tp-theme-light'] .tp-mywork-fact-item h4,
                            [tp-theme='tp-theme-light'] .tp-mywork-fact-item h4,
                            .tp-theme-light .tp-mywork-fact-item h4,
                            body.tp-magic-cursor .tp-mywork-fact-item h4 {
                                color: #121212 !important;
                            }
                            html[tp-theme='tp-theme-light'] .tp-mywork-fact-item p,
                            [tp-theme='tp-theme-light'] .tp-mywork-fact-item p,
                            .tp-theme-light .tp-mywork-fact-item p,
                            body.tp-magic-cursor .tp-mywork-fact-item p {
                                color: #27282C !important;
                            }

                            /* Desktop Layout (>= 992px) */
                            @media (min-width: 992px) {
                                .mywork-card-wrapper {
                                    margin-top: 0px !important;
                                }
                                .mywork-mobile-img {
                                    display: none !important;
                                }
                                .mywork-desktop-img {
                                    display: flex !important;
                                }
                                .mywork-text-block {
                                    max-width: 52% !important;
                                    padding-right: 15px !important;
                                }
                            }

                            /* Mobile & Tablet Layout (< 992px) */
                            @media (max-width: 991px) {
                                .mywork-card-wrapper {
                                    margin-top: 30px;
                                }
                                .mywork-desktop-img {
                                    display: none !important;
                                }
                                .mywork-mobile-img {
                                    display: block !important;
                                    width: 100%;
                                    max-width: 320px;
                                    margin: 0 auto 25px auto;
                                    text-align: center;
                                }
                                .mywork-popout-card {
                                    padding: 32px 24px !important;
                                    min-height: auto !important;
                                    flex-direction: column !important;
                                }
                                .mywork-text-block {
                                    max-width: 100% !important;
                                    padding-right: 0 !important;
                                }
                            }
                        `}</style>

                                <div
                                    className="tp-mywork-home-card mywork-popout-card position-relative"
                                    style={{
                                        borderRadius: '24px',
                                        padding: '48px 36px 48px 44px',
                                        position: 'relative',
                                        overflow: 'visible',
                                        minHeight: '440px',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    {/* Mobile Image Rendered First (< 992px) */}
                                    <div className="mywork-mobile-img">
                                        <img
                                            src="/assets/img/my-work/mywork_section_image.png"
                                            alt="Swara Patel - Connection"
                                            style={{
                                                width: '100%',
                                                maxWidth: '280px',
                                                height: 'auto',
                                                objectFit: 'contain',
                                                margin: '0 auto',
                                                display: 'block',
                                                filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.12))',
                                            }}
                                        />
                                    </div>

                                    {/* Card Text Content */}
                                    <div className="mywork-text-block" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
                                        <h3
                                            className="mywork-card-title mb-4"
                                            style={{
                                                fontFamily: 'Georgia, "Playfair Display", "Times New Roman", serif',
                                                fontSize: 'clamp(19px, 2vw, 24px)',
                                                fontWeight: '600',
                                                lineHeight: '1.38',
                                                letterSpacing: '-0.2px',
                                            }}
                                        >
                                            People often ask me, &ldquo;How do you connect with such a diverse range of people?&rdquo;
                                        </h3>

                                        <p
                                            className="mywork-card-text mb-3"
                                            style={{
                                                fontSize: '17px',
                                                lineHeight: '1.65',
                                                fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                                            }}
                                        >
                                            A child, a teacher, a student, a parent, a leader, a team.
                                        </p>

                                        <p
                                            className="mywork-card-text mb-4"
                                            style={{
                                                fontSize: '17px',
                                                lineHeight: '1.65',
                                                fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                                            }}
                                        >
                                            People may come with different roles, ages and backgrounds, but connection begins when you see the person, not the label.
                                        </p>

                                        <p
                                            className="mywork-card-highlight mb-0"
                                            style={{
                                                fontSize: '17px',
                                                lineHeight: '1.65',
                                                fontWeight: '700',
                                                fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                                            }}
                                        >
                                            And when people feel seen, they let go, participate fully, and connect more openly. That&rsquo;s where real connection begins.
                                        </p>
                                    </div>

                                    {/* Desktop Image (>= 992px) - Touches Both Top and Bottom */}
                                    <div
                                        className="mywork-desktop-img"
                                        style={{
                                            position: 'absolute',
                                            right: '0',
                                            top: '0',
                                            bottom: '0',
                                            width: '44%',
                                            height: '100%',
                                            zIndex: 5,
                                            pointerEvents: 'none',
                                            display: 'flex',
                                            alignItems: 'stretch',
                                            justifyContent: 'flex-end',
                                            overflow: 'hidden',
                                            borderRadius: '0 24px 24px 0',
                                        }}
                                    >
                                        <img
                                            src="/assets/img/my-work/mywork_section_image.png"
                                            alt="Swara Patel - Connection"
                                            style={{
                                                height: '100%',
                                                width: '100%',
                                                maxHeight: 'none',
                                                maxWidth: 'none',
                                                objectFit: 'cover',
                                                objectPosition: 'top center',
                                                filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.12))',
                                            }}
                                        />
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

export default MyWorkAreaHomeOneCopy;