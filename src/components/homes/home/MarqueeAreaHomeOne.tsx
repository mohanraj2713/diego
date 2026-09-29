'use client'
import React from 'react';

const marquee_data = [
  { text: ' I believe movement is one of the oldest ' },
  { text: ' Most natural ways we learn,connect and grow ' },
  { text: ' I believe movement is one of the oldest ' },
  { text: ' Most natural ways we learn,connect and grow' },
];

const MarqueeAreaHomeOne = () => {
  return (
    <>
      <div className="tp-marquee-area z-index-5">
        <style jsx>{`
          .marquee-track-container {
            overflow: hidden;
            width: 100%;
            background-color: #BCE70C;
            height: 84px;
            display: flex;
            align-items: center;
          }
          .marquee-track-content {
            display: flex;
            align-items: center;
            white-space: nowrap;
            will-change: transform;
            animation: tpContinuousMarquee 45s linear infinite;
          }
          .tp-marquee-area:hover .marquee-track-content {
            animation-play-state: paused;
          }
          @keyframes tpContinuousMarquee {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(-50%, 0, 0);
            }
          }
          .marquee-text-item {
            color: #1A2813;
            font-size: 30px;
            font-weight: 600;
            text-transform: uppercase;
            line-height: 84px;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            white-space: nowrap;
          }
          @media (max-width: 768px) {
            .marquee-track-container {
              height: 60px;
            }
            .marquee-track-content {
              animation-duration: 35s;
            }
            .marquee-text-item {
              font-size: 20px;
              line-height: 60px;
            }
          }
        `}</style>
        <div className="tp-marquee-wrapper">
          <div className="tp-marquee-slider fix marquee-track-container">
            <div className="marquee-track-content">
              {[...marquee_data, ...marquee_data, ...marquee_data, ...marquee_data].map((item, index) => (
                <div key={index} className="tp-marquee-item d-inline-flex align-items-center">
                  <p className="marquee-text-item">
                    {item.text.trim()}
                    <span 
                      style={{ 
                        display: 'inline-block',
                        paddingLeft: '30px', 
                        paddingRight: '30px', 
                        opacity: 0.5,
                        fontWeight: 300 
                      }}
                    >
                      |
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarqueeAreaHomeOne;