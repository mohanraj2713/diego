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

                    {/* Right Column: Featured Quote & Persona Card with High Pop-Out Image */}
                    <div className="col-xl-7 col-lg-7" style={{ marginTop: '80px' }}>
                        <style jsx>{`
                            .mywork-popout-card {
                                background-color: #eaf2e8;
                                border: 1px solid rgba(84, 185, 96, 0.3);
                                box-shadow: 0 15px 40px rgba(0, 0, 0, 0.06);
                            }
                            .mywork-card-title {
                                color: #152216;
                            }
                            .mywork-card-text {
                                color: #3d4d3e;
                            }
                            .mywork-card-highlight {
                                color: #111a12;
                            }

                            html[tp-theme='tp-theme-dark'] .mywork-popout-card,
                            .tp-theme-dark .mywork-popout-card {
                                background-color: rgba(22, 36, 24, 0.85);
                                border: 1px solid rgba(84, 185, 96, 0.35);
                                box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
                            }
                            html[tp-theme='tp-theme-dark'] .mywork-card-title,
                            .tp-theme-dark .mywork-card-title {
                                color: #ffffff;
                            }
                            html[tp-theme='tp-theme-dark'] .mywork-card-text,
                            .tp-theme-dark .mywork-card-text {
                                color: rgba(255, 255, 255, 0.82);
                            }
                            html[tp-theme='tp-theme-dark'] .mywork-card-highlight,
                            .tp-theme-dark .mywork-card-highlight {
                                color: #ffffff;
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
                            {/* Card Text Content */}
                            <div
                                style={{
                                    position: 'relative',
                                    zIndex: 2,
                                    width: '100%',
                                    maxWidth: '52%',
                                    paddingRight: '15px',
                                }}
                            >
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

                            {/* Out-Of-The-Box Pop-Out Image (Head & Hair Extending High Above Card) */}
                            <div
                                style={{
                                    position: 'absolute',
                                    right: '-25px',
                                    bottom: '0',
                                    width: '340px',
                                    height: '520px',
                                    top: '-80px',
                                    zIndex: 5,
                                    pointerEvents: 'none',
                                    display: 'flex',
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
