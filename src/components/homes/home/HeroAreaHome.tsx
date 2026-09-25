'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState, useRef, type JSX } from 'react';
import { scroller } from 'react-scroll';
import { animatedHeadline } from '@/utils/animatedHeadline';
import HeroHand from "@/assets/img/hero/hero-hand.png";
import HeroArrowIcon from '@/svg/home/HeroIcons/HeroArrowIcon';

interface DataType {
  slide_text: string[];
  sub_title: string;
  title_1: string;
  words: string[];
  title_2: string;
  sm_info: JSX.Element;
  btn_text: JSX.Element;
}

const hero_content: DataType = {
  slide_text: [
    "Wellness", "Facilitator"
  ],
  sub_title: "Hello There!",
  title_1: "I am Swara Patel",
  words: ["Dance Educator", "Keynote Speaker", "Trainer", "Wellness Facilitator", "Entrepreneur"],
  title_2: "",
  sm_info: <>I use movement to unlock what words often cannot confidence, connection, joy, and self-expression.</>,
  btn_text: <>Get <br /> In Touch</>,
}

const { slide_text, sub_title, title_1, words, title_2, sm_info, btn_text } = hero_content;

const scrollTo = () => {
  scroller.scrollTo('tp-sv', {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
  });
};

const HeroAreaHome = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => (prevWord + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    animatedHeadline();
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      e.preventDefault();
      scroller.scrollTo('contact', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }
  };

  return (
    <>
      <section id="home" className="tp-hero-area p-relative tp-btn-trigger z-index-1 fix theme-bg-2" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        
        {/* Background Video */}
        <video
          ref={videoRef}
          src="/assets/img/my-work/Swara ma'am Showreel.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />

        {/* Video Overlay Layer for Text Legibility */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.55) 50%, rgba(15, 23, 42, 0.75) 100%)',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        />

        {/* Background Sliding Text */}
        <div className="tp-hero-bottom-text-wrapper" style={{ zIndex: 2, opacity: 0.25 }}>
          <div className="tp-hero-bottom-text">
            {slide_text.map((item, index) => (
              <p key={index} style={{ color: '#ffffff' }}>{item}</p>
            ))}
          </div>
          <div className="tp-hero-bottom-text">
            {slide_text.map((item, index) => (
              <p key={index} style={{ color: '#ffffff' }}>{item}</p>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="container p-relative" style={{ zIndex: 3 }}>
          <div className="row align-items-center">
            <div className="col-xl-9 col-lg-10 col-md-12">
              <div className="tp-hero-left-wrapper" style={{ paddingTop: '140px', paddingBottom: '100px' }}>
                <div className="tp-hero-content tp_text_anim p-relative z-index-1">
                  
                  <span className="singleLine" style={{ color: '#e2e8f0', fontSize: '18px', fontWeight: 600 }}>
                    {sub_title} <Image src={HeroHand} alt="hand-greeting" />
                  </span>

                  <h3 className="tp-hero-title cd-headline clip tp_title_anim" style={{ color: '#ffffff', fontSize: '56px', fontWeight: 800, lineHeight: 1.15, marginTop: '15px', marginBottom: '20px' }}>
                    {title_1} <br />
                    <span className="cd-words-wrapper" style={{ color: '#54b960' }}>
                      {words.map((word, index) => (
                        <b
                          key={index}
                          className={`${index === currentWord ? "is-visible" : "is-hidden"}`}
                          style={{ color: '#54b960' }}
                        >
                          {word}
                        </b>
                      ))}
                    </span> {' '}
                    {title_2}
                  </h3>

                  <p style={{ color: 'rgba(255, 255, 255, 0.88)', fontSize: '18px', maxWidth: '620px', lineHeight: 1.6, marginBottom: '30px' }}>
                    {sm_info}
                  </p>

                  {/* Signature Logo */}
                  <div className="tp-hero-signature mb-4 text-start d-flex justify-content-start">
                    <img
                      src="/assets/img/my-work/Signature.png"
                      alt="Swara Patel Signature"
                      style={{
                        maxHeight: '80px',
                        width: 'auto',
                        objectFit: 'contain',
                        filter: 'brightness(0) invert(1)',
                        opacity: 0.95
                      }}
                    />
                  </div>

                  <div className="tp-hero-btn wrap">
                    <div className="tp-hover-btn-wrapper tp-btn-bounce">
                      <Link href="/contact" onClick={handleScrollToContact} className="tp-hover-btn tp-hover-btn-item tp-btn-circle square">
                        <span className="tp-btn-circle-text">
                          {btn_text}
                        </span>
                        <span className="tp-btn-circle-arrow">
                          <HeroArrowIcon />
                        </span>
                        <i className="tp-btn-circle-dot"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="tp-hero-scroll smooth">
                    <a className="pointer" onClick={scrollTo}>
                      <span className="tp-hero-scroll-bar"></span>
                      <span className="tp-hero-scroll-mouse"></span>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Bottom Action Bar (3 Actions: Play, Pause, Mute) */}
        <div 
          className="hero-video-controls d-flex align-items-center gap-1"
          style={{
            position: 'absolute',
            bottom: '30px',
            right: '30px',
            zIndex: 10,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '40px',
            padding: '4px 6px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
          }}
        >
          {/* Action 1: Play */}
          <button
            type="button"
            onClick={handlePlay}
            title="Play Video"
            style={{
              backgroundColor: isPlaying ? 'rgba(255, 255, 255, 0.25)' : 'transparent',
              color: '#ffffff',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              opacity: isPlaying ? 1 : 0.7
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>

          {/* Action 2: Pause */}
          <button
            type="button"
            onClick={handlePause}
            title="Pause Video"
            style={{
              backgroundColor: !isPlaying ? 'rgba(255, 255, 255, 0.25)' : 'transparent',
              color: '#ffffff',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              opacity: !isPlaying ? 1 : 0.7
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          </button>

          {/* Action 3: Mute / Unmute */}
          <button
            type="button"
            onClick={toggleMute}
            title={isMuted ? "Unmute Sound" : "Mute Sound"}
            style={{
              backgroundColor: isMuted ? 'rgba(255, 255, 255, 0.25)' : 'transparent',
              color: '#ffffff',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              opacity: isMuted ? 1 : 0.7
            }}
          >
            {isMuted ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            )}
          </button>
        </div>

      </section>
    </>
  );
};

export default HeroAreaHome;
