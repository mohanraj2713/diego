'use client';
import React from 'react';

const belief_points = [
  {
    id: 1,
    label: "More Than Exercise",
    desc: "It goes beyond physical exertion, unlocking deeper body awareness.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
        <line x1="6" y1="1" x2="6" y2="4"></line>
        <line x1="10" y1="1" x2="10" y2="4"></line>
        <line x1="14" y1="1" x2="14" y2="4"></line>
      </svg>
    )
  },
  {
    id: 2,
    label: "More Than Dance",
    desc: "It isn't confined to choreography; it is an intuitive form of self-expression.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
      </svg>
    )
  },
  {
    id: 3,
    label: "More Than Performance",
    desc: "It is not about being watched—it is about being authentically present.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    )
  }
];

const transformation_cards = [
  {
    id: "learn",
    title: "How We Learn",
    desc: "Movement unlocks experiential intelligence, fostering curiosity and deep understanding.",
    number: "01"
  },
  {
    id: "lead",
    title: "How We Lead",
    desc: "Embodied presence builds trust, empathy, and confident leadership in any space.",
    number: "02"
  },
  {
    id: "connect",
    title: "How We Connect",
    desc: "Shared physical rhythm creates non-verbal trust, breaking barriers effortlessly.",
    number: "03"
  },
  {
    id: "grow",
    title: "How We Grow",
    desc: "Stepping into movement expands boundaries, sparking personal and collective growth.",
    number: "04"
  }
];

const WhatIBelieveAreaHomeOne = () => {
  return (
    <>
      <style jsx global>{`
        .tp-believe-area {
          position: relative;
          z-index: 1;
        }

        /* Subtitle Font Theme */
        .tp-believe-subtitle {
          font-family: var(--tp-ff-garamond, 'Garamond', serif);
          font-size: 20px;
          font-weight: 600;
          color: #54b960;
          letter-spacing: 0.04em;
          display: inline-block;
        }

        /* Section Heading Font Theme */
        .tp-believe-title {
          font-family: var(--tp-ff-dmsans, 'DM Sans', sans-serif);
          line-height: 1.25;
        }

        /* Theme-aware Pillar & Transform Cards */
        .believe-pillar-card,
        .believe-transform-card {
          background-color: rgba(22, 34, 24, 0.65);
          border: 1px solid rgba(84, 185, 96, 0.25);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transition: all 0.35s ease;
        }
        
        .believe-pillar-card:hover,
        .believe-transform-card:hover {
          transform: translateY(-5px);
          border-color: rgba(84, 185, 96, 0.6);
          box-shadow: 0 15px 35px rgba(84, 185, 96, 0.15);
        }

        .believe-card-title {
          font-family: var(--tp-ff-dmsans, 'DM Sans', sans-serif);
          color: #ffffff;
        }

        .believe-card-desc {
          color: rgba(255, 255, 255, 0.8);
        }

        .believe-left-desc {
          color: rgba(255, 255, 255, 0.85);
        }

        /* Light Theme Overrides */
        html[tp-theme='tp-theme-light'] .believe-pillar-card,
        html[tp-theme='tp-theme-light'] .believe-transform-card,
        .tp-theme-light .believe-pillar-card,
        .tp-theme-light .believe-transform-card {
          background-color: #ffffff;
          border: 1px solid rgba(84, 185, 96, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }

        html[tp-theme='tp-theme-light'] .believe-pillar-card:hover,
        html[tp-theme='tp-theme-light'] .believe-transform-card:hover,
        .tp-theme-light .believe-pillar-card:hover,
        .tp-theme-light .believe-transform-card:hover {
          border-color: #54b960;
          box-shadow: 0 15px 35px rgba(84, 185, 96, 0.12);
        }

        html[tp-theme='tp-theme-light'] .believe-card-title,
        .tp-theme-light .believe-card-title {
          color: var(--tp-common-black-5, #141414);
        }

        html[tp-theme='tp-theme-light'] .believe-card-desc,
        .tp-theme-light .believe-card-desc {
          color: #555555;
        }

        html[tp-theme='tp-theme-light'] .believe-left-desc,
        .tp-theme-light .believe-left-desc {
          color: #4a4a4a;
        }

        /* Quote Box Styling */
        .believe-quote-box {
          background: linear-gradient(135deg, rgba(84, 185, 96, 0.12) 0%, rgba(84, 185, 96, 0.03) 100%);
          border: 1px solid rgba(84, 185, 96, 0.3);
          backdrop-filter: blur(10px);
        }

        .believe-quote-text {
          font-family: var(--tp-ff-garamond, 'Garamond', serif);
          color: var(--tp-common-white, #ffffff);
        }

        html[tp-theme='tp-theme-light'] .believe-quote-box,
        .tp-theme-light .believe-quote-box {
          background: linear-gradient(135deg, rgba(84, 185, 96, 0.1) 0%, rgba(255, 255, 255, 0.9) 100%);
          border: 1px solid rgba(84, 185, 96, 0.35);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.05);
        }

        html[tp-theme='tp-theme-light'] .believe-quote-text,
        .tp-theme-light .believe-quote-text {
          color: var(--tp-common-black-5, #141414);
        }
      `}</style>

      <section className="tp-believe-area pt-100 pb-90 p-relative fix">
        <div className="container">
          {/* Section Header */}
          <div className="row justify-content-center">
            <div className="col-xl-10 text-center">
              <div className="tp-section-title-wrapper mb-50">
                <span className="tp-believe-subtitle mb-15">
                  WHAT I BELIEVE
                </span>
                <h2 
                  className="tp-section-title tp-believe-title" 
                  style={{ fontSize: 'clamp(30px, 4vw, 46px)', fontWeight: 800 }}
                >
                  Movement is more than exercise. <br />
                  <span style={{ color: '#54b960' }}>More than dance.</span> More than performance.
                </h2>
              </div>
            </div>
          </div>

          {/* 3 Core Pillars */}
          <div className="row mb-50 justify-content-center">
            {belief_points.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 mb-30">
                <div className="believe-pillar-card p-4 rounded-4 text-center h-100">
                  <div 
                    className="icon-box mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: 'rgba(84, 185, 96, 0.14)',
                      color: '#54b960'
                    }}
                  >
                    {item.icon}
                  </div>
                  <h4 className="believe-card-title mb-2" style={{ fontSize: '20px', fontWeight: 700 }}>
                    {item.label}
                  </h4>
                  <p className="believe-card-desc mb-0" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* How Movement Shapes Us - 4 Grid */}
          <div className="row align-items-center mb-60">
            <div className="col-xl-4 col-lg-5 mb-30">
              <div className="tp-believe-left-content">
                <span 
                  className="badge px-3 py-2 rounded-pill mb-3" 
                  style={{ backgroundColor: 'rgba(84, 185, 96, 0.15)', color: '#54b960', fontWeight: 600, fontSize: '13px' }}
                >
                  Core Philosophy
                </span>
                <h3 className="tp-section-title tp-believe-title mb-20" style={{ fontSize: '32px', fontWeight: 700 }}>
                  It Shapes How We Transform
                </h3>
                <p className="believe-left-desc mb-0" style={{ fontSize: '16px', lineHeight: 1.7 }}>
                  Movement is a universal human language. It goes far beyond physical motion to fundamentally reshape our minds, relationships, and leadership capabilities.
                </p>
              </div>
            </div>

            <div className="col-xl-8 col-lg-7">
              <div className="row">
                {transformation_cards.map((card) => (
                  <div key={card.id} className="col-md-6 mb-30">
                    <div className="believe-transform-card p-4 rounded-4 h-100 position-relative">
                      <span 
                        style={{
                          fontSize: '28px',
                          fontWeight: 800,
                          color: '#54b960',
                          opacity: 0.8,
                          display: 'block',
                          marginBottom: '10px'
                        }}
                      >
                        {card.number}
                      </span>
                      <h4 className="believe-card-title mb-2" style={{ fontSize: '20px', fontWeight: 700 }}>
                        {card.title}
                      </h4>
                      <p className="believe-card-desc mb-0" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                        {card.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Highlight Summary Quote Banner */}
          <div className="row justify-content-center">
            <div className="col-xl-11">
              <div className="believe-quote-box p-4 p-md-5 rounded-4 text-center position-relative overflow-hidden">
                <div 
                  style={{
                    fontSize: '52px',
                    color: '#54b960',
                    lineHeight: 1,
                    marginBottom: '10px',
                    fontFamily: 'var(--tp-ff-garamond, serif)'
                  }}
                >
                  &ldquo;
                </div>
                <blockquote 
                  className="believe-quote-text mb-0 mx-auto"
                  style={{ 
                    maxWidth: '850px',
                    fontSize: 'clamp(20px, 2.5vw, 26px)',
                    fontWeight: 600,
                    lineHeight: 1.5,
                    fontStyle: 'italic'
                  }}
                >
                  I believe movement is one of the oldest, most natural ways we learn, connect, and grow.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatIBelieveAreaHomeOne;
