'use client';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image, { StaticImageData } from 'next/image';
import Slider from 'react-slick';

import user_avatar_1 from "@/assets/img/users/user-1.jpg";
import user_avatar_2 from "@/assets/img/users/avata-1.png";
import user_avatar_3 from "@/assets/img/users/avata-2.png";
import user_avatar_4 from "@/assets/img/users/avata-3.png";

import StartIcon from '@/svg/icons/StartIcon';

interface TestimonialVideoItem {
  id: number;
  name: string;
  designation: string;
  rating_text: string;
  video: string;
  description: string;
  avatar: StaticImageData;
}

const testimonial_video_data: TestimonialVideoItem[] = [
  {
    id: 1,
    name: "Testimonial 1",
    designation: "Client Story",
    rating_text: "5.0 Rating",
    video: "/assets/video/testimonials/1.mp4",
    description: "Exceptional quality and outstanding execution. The results exceeded all our expectations.",
    avatar: user_avatar_1,
  },
  {
    id: 2,
    name: "Testimonial 2",
    designation: "Client Story",
    rating_text: "5.0 Rating",
    video: "/assets/video/testimonials/2.mp4",
    description: "Incredible attention to detail and smooth collaboration throughout the project lifecycle.",
    avatar: user_avatar_2,
  },
  {
    id: 3,
    name: "Testimonial 3",
    designation: "Client Story",
    rating_text: "5.0 Rating",
    video: "/assets/video/testimonials/3.mp4",
    description: "Professional design and seamless workflow that helped boost our business growth.",
    avatar: user_avatar_3,
  },
  {
    id: 4,
    name: "Testimonial 4",
    designation: "Client Story",
    rating_text: "5.0 Rating",
    video: "/assets/video/testimonials/4.mp4",
    description: "Top-tier creative strategy and flawless technical implementation. Truly impressive!",
    avatar: user_avatar_4,
  },
  {
    id: 5,
    name: "Testimonial 5",
    designation: "Client Story",
    rating_text: "5.0 Rating",
    video: "/assets/video/testimonials/5.mp4",
    description: "Transformed our digital presence completely with modern animations and robust design.",
    avatar: user_avatar_1,
  },
];

const PlayIcon = () => (
  <svg width="20" height="22" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 8.26795C18.3333 9.03775 18.3333 10.9623 17 11.7321L3.5 19.5263C2.16667 20.2961 0.499999 19.3338 0.499999 17.7942L0.5 2.20577C0.5 0.666173 2.16667 -0.296077 3.5 0.473724L17 8.26795Z" fill="#ffffff"/>
  </svg>
);

const slider_settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const TestimonialAreaHomeOne = ({ style }: { style?: boolean }) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const sliderRef = useRef<Slider | null>(null);

  const bg_img = style ? null : "/assets/img/bg/distort-bg.png";

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePlayVideo = (e: React.MouseEvent, videoUrl: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
    setSelectedVideo(videoUrl);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedVideo) {
        handleCloseVideo();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedVideo]);

  return (
    <>
      <section 
        style={{ backgroundImage: bg_img ? `url(${bg_img})` : undefined }} 
        className={`tp-testimonial-area ${style ? 'sv-inner__customize pb-60' : 'theme-bg-2 pb-80'} pt-25`}
      >
        <div className="container">
          {!style && (
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-testimonial-section-title">
                  <div className="tp-section-title-wrapper tp_text_anim mb-50 text-center">
                    <div className="tp-section-title-inner tp_title_anim p-relative">
                      <span 
                        className="tp-section-subtitle" 
                        style={{ position: 'relative', top: 0, left: 0, transform: 'none', display: 'inline-block', marginBottom: '10px', color: '#54b960', fontWeight: 600 }}
                      >
                        Testimonials
                      </span>
                      <h3 className="tp-section-title" style={{ fontSize: '36px', fontWeight: 800 }}>
                        What People Say
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="row">
            <div className="col-xl-12">
              <div className="tp-testimonial-slider ml-10 mr-10">
                <Slider
                  {...slider_settings}
                  ref={(slider) => {
                    sliderRef.current = slider;
                  }}
                  className="tp-testimonial-slider-video-active"
                >
                  {testimonial_video_data.map((item) => (
                    <div key={item.id} className="px-2 py-3">
                      <div 
                        className="testimonial-video-card p-3"
                        style={{
                          backgroundColor: '#162218',
                          border: '1px solid rgba(84, 185, 96, 0.25)',
                          borderRadius: '20px',
                          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.35)',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer'
                        }}
                        onClick={(e) => handlePlayVideo(e, item.video)}
                      >
                        {/* Video Thumbnail Box */}
                        <div 
                          className="testimonial-video-thumb p-relative mb-3 fix rounded-3"
                          style={{
                            height: '210px',
                            cursor: 'pointer',
                            overflow: 'hidden',
                            position: 'relative',
                            borderRadius: '14px'
                          }}
                        >
                          <video
                            src={`${item.video}#t=0.5`}
                            preload="metadata"
                            muted
                            playsInline
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              borderRadius: '14px',
                              display: 'block',
                              pointerEvents: 'none'
                            }}
                          />
                          {/* Dark Overlay */}
                          <div 
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)',
                              borderRadius: '14px',
                              pointerEvents: 'none'
                            }}
                          />

                          {/* Play Button */}
                          <div 
                            className="play-btn-overlay d-flex align-items-center justify-content-center"
                            style={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              width: '56px',
                              height: '56px',
                              borderRadius: '50%',
                              backgroundColor: '#54b960',
                              boxShadow: '0 0 20px rgba(84, 185, 96, 0.7)',
                              transition: 'all 0.3s ease',
                              zIndex: 2,
                              pointerEvents: 'none'
                            }}
                          >
                            <div style={{ marginLeft: '3px', display: 'flex' }}>
                              <PlayIcon />
                            </div>
                          </div>
                        </div>

                        {/* Testimonial Meta & Content */}
                        <div className="testimonial-video-body">
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <div className="tp-testimonial-rating">
                              <StartIcon /> <StartIcon /> <StartIcon /> <StartIcon /> <StartIcon />
                            </div>
                            <span style={{ fontSize: '13px', color: '#54b960', fontWeight: 600 }}>
                              {item.rating_text}
                            </span>
                          </div>

                          <div className="d-flex align-items-center mb-3">
                            <div style={{ width: '42px', height: '42px', borderRadius: '50%', overflow: 'hidden', marginRight: '12px', flexShrink: 0, border: '2px solid rgba(84, 185, 96, 0.4)' }}>
                              <Image src={item.avatar} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div>
                              <h4 style={{ fontSize: '16px', fontWeight: 700, margin: 0, color: '#ffffff' }}>
                                {item.name}
                              </h4>
                              <span style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)', fontWeight: 500 }}>
                                {item.designation}
                              </span>
                            </div>
                          </div>

                          <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.88)', margin: 0, fontStyle: 'italic' }}>
                            &ldquo;{item.description}&rdquo;
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>

        {/* Video Lightbox Modal Portaled to Document Body */}
        {mounted && selectedVideo && createPortal(
          <div 
            className="testimonial-video-modal-overlay"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.88)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              zIndex: 999999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
            onClick={handleCloseVideo}
          >
            <div 
              className="testimonial-video-modal-content"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '900px',
                backgroundColor: '#0d130e',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 30px rgba(84, 185, 96, 0.5)',
                border: '1px solid rgba(84, 185, 96, 0.4)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={handleCloseVideo}
                aria-label="Close modal"
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  zIndex: 10,
                  background: 'rgba(0, 0, 0, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#fff',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  fontSize: '20px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
              >
                ✕
              </button>
              <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
                <video 
                  src={selectedVideo}
                  controls
                  autoPlay
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: '16px'
                  }}
                />
              </div>
            </div>
          </div>,
          document.body
        )}
      </section>
    </>
  );
};

export default TestimonialAreaHomeOne;
