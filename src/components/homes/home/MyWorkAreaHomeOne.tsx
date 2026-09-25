'use client';

import React from 'react';
import Image from 'next/image';
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


const MyWorkAreaHomeOne: React.FC = () => {
    return (
        <section className="tp-my-work-area tp-mywork-home-section pt-100 pb-100 fix">
            <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
                <div className="row align-items-center gx-5">
                    {/* Left Column: Heading & Work List */}
                    <div className="col-xl-5 col-lg-5 mb-40 mb-lg-0">
                        <div className="tp-my-work-left">
                            <span
                                className="tp-mywork-home-subtitle"
                                style={{
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    display: 'block',
                                    marginBottom: '12px',
                                    fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                                }}
                            >
                                My Work
                            </span>

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

                    {/* Right Column: Featured Quote & Persona Card */}
                    <div className="col-xl-7 col-lg-7 mywork-card-wrapper">
                        <style jsx global>{`
                            /* -------------------------------------------------------------
                               MY WORK SECTION - GLOBAL THEME CONTROLS
                            ------------------------------------------------------------- */
                            
                            /* DEFAULT & DARK THEME (Dark Background + Pure White Text) */
                            .tp-mywork-home-section {
                                background-color: #142213 !important;
                            }
                            .tp-mywork-home-subtitle {
                                color: #54b960 !important;
                            }
                            .tp-mywork-home-item {
                                color: #ffffff !important;
                                border-bottom: 1px solid rgba(255, 255, 255, 0.15) !important;
                            }
                            .tp-mywork-home-card,
                            .mywork-popout-card {
                                background-color: rgba(22, 36, 24, 0.92) !important;
                                border: 1px solid rgba(84, 185, 96, 0.35) !important;
                                box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3) !important;
                            }
                            .tp-mywork-card-heading,
                            .mywork-card-title {
                                color: #ffffff !important;
                            }
                            .tp-mywork-card-text,
                            .mywork-card-text {
                                color: rgba(255, 255, 255, 0.9) !important;
                            }
                            .tp-mywork-card-highlight,
                            .mywork-card-highlight {
                                color: #ffffff !important;
                            }
                            .tp-mywork-fact-item h4,
                            .tp-mywork-fact-item p {
                                color: #ffffff !important;
                            }

                            /* EXPLICIT DARK THEME SELECTORS */
                            html[tp-theme='tp-theme-dark'] .tp-mywork-home-section,
                            body.tp-theme-dark .tp-mywork-home-section,
                            .tp-theme-dark .tp-mywork-home-section {
                                background-color: #142213 !important;
                            }
                            html[tp-theme='tp-theme-dark'] .tp-mywork-home-subtitle,
                            body.tp-theme-dark .tp-mywork-home-subtitle,
                            .tp-theme-dark .tp-mywork-home-subtitle {
                                color: #54b960 !important;
                            }
                            html[tp-theme='tp-theme-dark'] .tp-mywork-home-item,
                            body.tp-theme-dark .tp-mywork-home-item,
                            .tp-theme-dark .tp-mywork-home-item {
                                color: #ffffff !important;
                                border-bottom: 1px solid rgba(255, 255, 255, 0.15) !important;
                            }
                            html[tp-theme='tp-theme-dark'] .tp-mywork-home-card,
                            html[tp-theme='tp-theme-dark'] .mywork-popout-card,
                            body.tp-theme-dark .tp-mywork-home-card,
                            body.tp-theme-dark .mywork-popout-card,
                            .tp-theme-dark .tp-mywork-home-card,
                            .tp-theme-dark .mywork-popout-card {
                                background-color: rgba(22, 36, 24, 0.92) !important;
                                border: 1px solid rgba(84, 185, 96, 0.35) !important;
                                box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3) !important;
                            }
                            html[tp-theme='tp-theme-dark'] .tp-mywork-card-heading,
                            html[tp-theme='tp-theme-dark'] .mywork-card-title,
                            body.tp-theme-dark .tp-mywork-card-heading,
                            body.tp-theme-dark .mywork-card-title,
                            .tp-theme-dark .tp-mywork-card-heading,
                            .tp-theme-dark .mywork-card-title {
                                color: #ffffff !important;
                            }
                            html[tp-theme='tp-theme-dark'] .tp-mywork-card-text,
                            html[tp-theme='tp-theme-dark'] .mywork-card-text,
                            body.tp-theme-dark .tp-mywork-card-text,
                            body.tp-theme-dark .mywork-card-text,
                            .tp-theme-dark .tp-mywork-card-text,
                            .tp-theme-dark .mywork-card-text {
                                color: rgba(255, 255, 255, 0.9) !important;
                            }
                            html[tp-theme='tp-theme-dark'] .tp-mywork-card-highlight,
                            html[tp-theme='tp-theme-dark'] .mywork-card-highlight,
                            body.tp-theme-dark .tp-mywork-card-highlight,
                            body.tp-theme-dark .mywork-card-highlight,
                            .tp-theme-dark .tp-mywork-card-highlight,
                            .tp-theme-dark .mywork-card-highlight {
                                color: #ffffff !important;
                            }
                            html[tp-theme='tp-theme-dark'] .tp-mywork-fact-item h4,
                            html[tp-theme='tp-theme-dark'] .tp-mywork-fact-item p,
                            body.tp-theme-dark .tp-mywork-fact-item h4,
                            body.tp-theme-dark .tp-mywork-fact-item p,
                            .tp-theme-dark .tp-mywork-fact-item h4,
                            .tp-theme-dark .tp-mywork-fact-item p {
                                color: #ffffff !important;
                            }

                            /* LIGHT THEME OVERRIDES (White Background + Pure Black Text) */
                            html[tp-theme='tp-theme-light'] .tp-mywork-home-section,
                            [tp-theme='tp-theme-light'] .tp-mywork-home-section,
                            [tp-theme='light'] .tp-mywork-home-section,
                            .tp-theme-light .tp-mywork-home-section,
                            body.tp-theme-light .tp-mywork-home-section {
                                background-color: #ffffff !important;
                            }
                            html[tp-theme='tp-theme-light'] .tp-mywork-home-subtitle,
                            [tp-theme='tp-theme-light'] .tp-mywork-home-subtitle,
                            [tp-theme='light'] .tp-mywork-home-subtitle,
                            .tp-theme-light .tp-mywork-home-subtitle,
                            body.tp-theme-light .tp-mywork-home-subtitle {
                                color: #54b960 !important;
                            }
                            html[tp-theme='tp-theme-light'] .tp-mywork-home-item,
                            [tp-theme='tp-theme-light'] .tp-mywork-home-item,
                            [tp-theme='light'] .tp-mywork-home-item,
                            .tp-theme-light .tp-mywork-home-item,
                            body.tp-theme-light .tp-mywork-home-item {
                                color: #000000 !important;
                                border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
                            }
                            html[tp-theme='tp-theme-light'] .tp-mywork-home-card,
                            html[tp-theme='tp-theme-light'] .mywork-popout-card,
                            [tp-theme='tp-theme-light'] .tp-mywork-home-card,
                            [tp-theme='tp-theme-light'] .mywork-popout-card,
                            [tp-theme='light'] .tp-mywork-home-card,
                            [tp-theme='light'] .mywork-popout-card,
                            .tp-theme-light .tp-mywork-home-card,
                            .tp-theme-light .mywork-popout-card,
                            body.tp-theme-light .tp-mywork-home-card,
                            body.tp-theme-light .mywork-popout-card {
                                background-color: #eaf2e8 !important;
                                border: 1px solid rgba(84, 185, 96, 0.3) !important;
                                box-shadow: 0 15px 40px rgba(0, 0, 0, 0.06) !important;
                            }
                            html[tp-theme='tp-theme-light'] .tp-mywork-card-heading,
                            html[tp-theme='tp-theme-light'] .mywork-card-title,
                            [tp-theme='tp-theme-light'] .tp-mywork-card-heading,
                            [tp-theme='tp-theme-light'] .mywork-card-title,
                            [tp-theme='light'] .tp-mywork-card-heading,
                            [tp-theme='light'] .mywork-card-title,
                            .tp-theme-light .tp-mywork-card-heading,
                            .tp-theme-light .mywork-card-title,
                            body.tp-theme-light .tp-mywork-card-heading,
                            body.tp-theme-light .mywork-card-title {
                                color: #000000 !important;
                            }
                            html[tp-theme='tp-theme-light'] .tp-mywork-card-text,
                            html[tp-theme='tp-theme-light'] .mywork-card-text,
                            [tp-theme='tp-theme-light'] .tp-mywork-card-text,
                            [tp-theme='tp-theme-light'] .mywork-card-text,
                            [tp-theme='light'] .tp-mywork-card-text,
                            [tp-theme='light'] .mywork-card-text,
                            .tp-theme-light .tp-mywork-card-text,
                            .tp-theme-light .mywork-card-text,
                            body.tp-theme-light .tp-mywork-card-text,
                            body.tp-theme-light .mywork-card-text {
                                color: #121212 !important;
                            }
                            html[tp-theme='tp-theme-light'] .tp-mywork-card-highlight,
                            html[tp-theme='tp-theme-light'] .mywork-card-highlight,
                            [tp-theme='tp-theme-light'] .tp-mywork-card-highlight,
                            [tp-theme='tp-theme-light'] .mywork-card-highlight,
                            [tp-theme='light'] .tp-mywork-card-highlight,
                            [tp-theme='light'] .mywork-card-highlight,
                            .tp-theme-light .tp-mywork-card-highlight,
                            .tp-theme-light .mywork-card-highlight,
                            body.tp-theme-light .tp-mywork-card-highlight,
                            body.tp-theme-light .mywork-card-highlight {
                                color: #000000 !important;
                            }
                            html[tp-theme='tp-theme-light'] .tp-mywork-fact-item h4,
                            html[tp-theme='tp-theme-light'] .tp-mywork-fact-item p,
                            [tp-theme='tp-theme-light'] .tp-mywork-fact-item h4,
                            [tp-theme='tp-theme-light'] .tp-mywork-fact-item p,
                            [tp-theme='light'] .tp-mywork-fact-item h4,
                            [tp-theme='light'] .tp-mywork-fact-item p,
                            .tp-theme-light .tp-mywork-fact-item h4,
                            .tp-theme-light .tp-mywork-fact-item p,
                            body.tp-theme-light .tp-mywork-fact-item h4,
                            body.tp-theme-light .tp-mywork-fact-item p {
                                color: #000000 !important;
                            }

                            /* Desktop Layout (>= 992px) */
                            @media (min-width: 992px) {
                                .mywork-card-wrapper {
                                    margin-top: 80px;
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
                                    margin-top: 40px;
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
                                        fontSize: '14.5px',
                                        lineHeight: '1.65',
                                        fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                                    }}
                                >
                                    A child, a teacher, a student, a parent, a leader, a team.
                                </p>

                                <p
                                    className="mywork-card-text mb-4"
                                    style={{
                                        fontSize: '14.5px',
                                        lineHeight: '1.65',
                                        fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                                    }}
                                >
                                    People may come with different roles, ages and backgrounds, but connection begins when you see the person, not the label.
                                </p>

                                <p
                                    className="mywork-card-highlight mb-0"
                                    style={{
                                        fontSize: '14.5px',
                                        lineHeight: '1.65',
                                        fontWeight: '700',
                                        fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                                    }}
                                >
                                    And when people feel seen, they let go, participate fully, and connect more openly. That&rsquo;s where real connection begins.
                                </p>
                            </div>

                            {/* Desktop Out-Of-The-Box Pop-Out Image (>= 992px) */}
                            <div
                                className="mywork-desktop-img"
                                style={{
                                    position: 'absolute',
                                    right: '-25px',
                                    bottom: '0',
                                    width: '340px',
                                    height: '520px',
                                    top: '-80px',
                                    zIndex: 5,
                                    pointerEvents: 'none',
                                    alignItems: 'flex-end',
                                    justifyContent: 'flex-end',
                                }}
                            >
                                <img
                                    src="/assets/img/my-work/mywork_section_image.png"
                                    alt="Swara Patel - Connection"
                                    style={{
                                        height: '520px',
                                        width: 'auto',
                                        maxWidth: 'none',
                                        objectFit: 'contain',
                                        objectPosition: 'bottom right',
                                        filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.12))',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row align-items-center gx-5' style={{ marginTop: '80px' }}>
                    <div className="tp-about-fact">
                        <div className="row">
                            {counter_data.map((item, index) => (
                                <div key={index} className="col-md-4 col-sm-6 mb-30">
                                    <div className="tp-about-fact-item tp-mywork-fact-item">
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
        </section>
    );
};

export default MyWorkAreaHomeOne;
