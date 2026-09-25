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
        <section className="tp-my-work-area pt-100 pb-100 fix" style={{ backgroundColor: '#ffffff' }}>
            <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
                <div className="row align-items-center gx-5">
                    {/* Left Column: Heading & Work List */}
                    <div className="col-xl-5 col-lg-5 mb-40 mb-lg-0">
                        <div className="tp-my-work-left">
                            <span
                                style={{
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    color: '#BA9666',
                                    display: 'block',
                                    marginBottom: '12px',
                                    fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                                }}
                            >
                                My Work
                            </span>

                            {/* <h2
                style={{
                  fontSize: 'clamp(32px, 3.8vw, 44px)',
                  fontWeight: '700',
                  lineHeight: '1.2',
                  color: '#161934',
                  marginBottom: '35px',
                  fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                  letterSpacing: '-0.5px',
                }}
              >
                From classrooms to conference rooms
              </h2> */}

                            <div className="tp-my-work-list">
                                {workItems.map((item, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            padding: '18px 0',
                                            borderBottom: '1px solid #EBEBEB',
                                            fontSize: '17px',
                                            fontWeight: '700',
                                            color: '#161934',
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
                    <div className="col-xl-7 col-lg-7">
                        <div
                            style={{
                                backgroundColor: '#EAECE6',
                                borderRadius: '24px',
                                padding: '48px 40px 48px 48px',
                                position: 'relative',
                                overflow: 'hidden',
                                minHeight: '520px',
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
                                    maxWidth: '62%',
                                }}
                            >
                                <h3
                                    style={{
                                        fontFamily: 'Georgia, "Playfair Display", "Times New Roman", serif',
                                        fontSize: 'clamp(21px, 2.2vw, 26px)',
                                        fontWeight: '600',
                                        lineHeight: '1.35',
                                        color: '#242624',
                                        marginBottom: '24px',
                                        letterSpacing: '-0.2px',
                                    }}
                                >
                                    People often ask me, &ldquo;How do you connect with such a diverse range of people?&rdquo;
                                </h3>

                                <p
                                    style={{
                                        fontSize: '15px',
                                        lineHeight: '1.65',
                                        color: '#525452',
                                        marginBottom: '16px',
                                        fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                                    }}
                                >
                                    A child, a teacher, a student, a parent, a leader, a team.
                                </p>

                                <p
                                    style={{
                                        fontSize: '15px',
                                        lineHeight: '1.65',
                                        color: '#525452',
                                        marginBottom: '20px',
                                        fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                                    }}
                                >
                                    People may come with different roles, ages and backgrounds, but connection begins when you see the person, not the label.
                                </p>

                                <p
                                    style={{
                                        fontSize: '15px',
                                        lineHeight: '1.65',
                                        fontWeight: '700',
                                        color: '#161934',
                                        marginBottom: 0,
                                        fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                                    }}
                                >
                                    And when people feel seen, they let go, participate fully, and connect more openly. That&rsquo;s where real connection begins.
                                </p>
                                <p
                                    style={{
                                        fontSize: '15px',
                                        lineHeight: '1.65',
                                        fontWeight: '700',
                                        color: '#161934',
                                        marginBottom: 0,
                                        fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                                    }}
                                >
                                    From classrooms to conference rooms
                                </p>
                                <p
                                    style={{
                                        fontSize: '15px',
                                        lineHeight: '1.65',
                                        fontWeight: '700',
                                        color: '#161934',
                                        marginBottom: 0,
                                        fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                                    }}
                                >
                                    From students to leaders.
                                </p>
                                <p
                                    style={{
                                        fontSize: '15px',
                                        lineHeight: '1.65',
                                        fontWeight: '700',
                                        color: '#161934',
                                        marginBottom: 0,
                                        fontFamily: 'var(--tp-ff-dmsans), "DM Sans", sans-serif',
                                    }}
                                >
                                    From teaching to transformation.
                                </p>
                            </div>

                            {/* Right Side Overlay Image */}
                            <div
                                style={{
                                    position: 'absolute',
                                    right: '0',
                                    bottom: '0',
                                    height: '92%',
                                    width: '45%',
                                    maxHeight: '480px',
                                    zIndex: 1,
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    justifyContent: 'flex-end',
                                    pointerEvents: 'none',
                                }}
                            >
                                <img
                                    src="/assets/img/my-work/mywork_section_image.png"
                                    alt="My Work Section"
                                    style={{
                                        maxHeight: '100%',
                                        maxWidth: '100%',
                                        objectFit: 'contain',
                                        objectPosition: 'bottom right',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row align-items-center gx-5 mt-5' >
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
        </section>
    );
};

export default MyWorkAreaHomeOne;
