'use client';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Slider from 'react-slick';

interface TestimonialVideoItem {
  id: number;
  video: string;
}

const testimonial_video_data: TestimonialVideoItem[] = [
  { id: 1, video: "/assets/video/testimonials/1.mp4" },
  { id: 2, video: "/assets/video/testimonials/2.mp4" },
  { id: 3, video: "/assets/video/testimonials/3.mp4" },
  { id: 4, video: "/assets/video/testimonials/4.mp4" },
  { id: 5, video: "/assets/video/testimonials/5.mp4" },
];

const PlayIcon = () => (
  <svg width="22" height="24" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <style jsx>{`
          /* Light Theme Styles */
          :global(html[tp-theme='tp-theme-light']) .tp-testimonial-area {
            background-color: #f7f9f7 !important;
          }
          :global(html[tp-theme='tp-theme-light']) .testimonial-section-title {
            color: #121212 !important;
          }
          :global(html[tp-theme='tp-theme-light']) .testimonial-video-card {
            background-color: #ffffff !important;
            border: 1px solid rgba(84, 185, 96, 0.3) !important;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07) !important;
          }
          :global(html[tp-theme='tp-theme-light']) .testimonial-video-card:hover {
            box-shadow: 0 16px 35px rgba(84, 185, 96, 0.22) !important;
            border-color: rgba(84, 185, 96, 0.6) !important;
          }

          /* Dark Theme Styles */
          :global(html[tp-theme='tp-theme-dark']) .tp-testimonial-area,
          :global(html:not([tp-theme='tp-theme-light'])) .tp-testimonial-area {
            background-color: #0f1811 !important;
          }
          :global(html[tp-theme='tp-theme-dark']) .testimonial-section-title,
          :global(html:not([tp-theme='tp-theme-light'])) .testimonial-section-title {
            color: #ffffff !important;
          }
          :global(html[tp-theme='tp-theme-dark']) .testimonial-video-card,
          :global(html:not([tp-theme='tp-theme-light'])) .testimonial-video-card {
            background-color: #162218 !important;
            border: 1px solid rgba(84, 185, 96, 0.25) !important;
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35) !important;
          }
          :global(html[tp-theme='tp-theme-dark']) .testimonial-video-card:hover,
          :global(html:not([tp-theme='tp-theme-light'])) .testimonial-video-card:hover {
            box-shadow: 0 15px 35px rgba(84, 185, 96, 0.35) !important;
            border-color: rgba(84, 185, 96, 0.6) !important;
          }

          /* Hover Transformations */
          .testimonial-video-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          }
          .play-btn-overlay {
            transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
          }
          .play-btn-overlay:hover {
            transform: translate(-50%, -50%) scale(1.15) !important;
            box-shadow: 0 0 35px rgba(84, 185, 96, 1) !important;
            background-color: #45a451 !important;
          }
        `}</style>

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
                      <h3 className="tp-section-title testimonial-section-title" style={{ fontSize: '36px', fontWeight: 800 }}>
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
                        className="testimonial-video-card p-2"
                        style={{
                          borderRadius: '20px',
                        }}
                      >
                        {/* Video Thumbnail Box Only */}
                        <div 
                          className="testimonial-video-thumb p-relative fix"
                          style={{
                            height: '320px',
                            overflow: 'hidden',
                            position: 'relative',
                            borderRadius: '16px'
                          }}
                        >
                          <video
                            className="video-element"
                            src={`${item.video}#t=0.5`}
                            preload="metadata"
                            muted
                            playsInline
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              borderRadius: '16px',
                              display: 'block',
                              pointerEvents: 'none',
                              transition: 'transform 0.4s ease'
                            }}
                          />
                          {/* Dark Overlay Gradient */}
                          <div 
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.45) 100%)',
                              borderRadius: '16px',
                              pointerEvents: 'none'
                            }}
                          />

                          {/* Play Button Overlay */}
                          <button 
                            className="play-btn-overlay d-flex align-items-center justify-content-center"
                            style={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              width: '60px',
                              height: '60px',
                              borderRadius: '50%',
                              backgroundColor: '#54b960',
                              border: 'none',
                              boxShadow: '0 0 20px rgba(84, 185, 96, 0.7)',
                              transition: 'all 0.3s ease',
                              zIndex: 2,
                              cursor: 'pointer',
                              pointerEvents: 'auto'
                            }}
                            onClick={(e) => handlePlayVideo(e, item.video)}
                            aria-label="Play testimonial video"
                          >
                            <div style={{ marginLeft: '3px', display: 'flex' }}>
                              <PlayIcon />
                            </div>
                          </button>
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
                width: 'auto',
                maxWidth: '90vw',
                maxHeight: '90vh',
                backgroundColor: '#0d130e',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 30px rgba(84, 185, 96, 0.5)',
                border: '1px solid rgba(84, 185, 96, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
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
              <video 
                src={selectedVideo}
                controls
                autoPlay
                style={{
                  maxWidth: '85vw',
                  maxHeight: '85vh',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '16px',
                  display: 'block'
                }}
              />
            </div>
          </div>,
          document.body
        )}
      </section>
    </>
  );
};

export default TestimonialAreaHomeOne;
