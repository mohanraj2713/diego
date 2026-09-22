'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import sp_logo from "@/assets/img/source/Simple SP Letter Logo 1.png";

const FooterOne = ({ style }: { style?: any }) => {
  const bg_img = style ? "/assets/img/footer/overly-bg-2.png" : "/assets/img/skill/bg-distort.png";

  return (
    <footer>
      <div 
        className={`tp-footer-bg ${style ? "tp-footer__customize black-bg-3" : "tp-footer-bg-light theme-bg-2"} p-relative fix z-index-1`}
        style={{ 
          backgroundImage: `url(${bg_img})`,
          backgroundColor: '#14172c',
          color: '#ffffff',
          paddingTop: '80px',
          paddingBottom: '80px'
        }}
      >
        <div className="container" style={{ maxWidth: '1140px' }}>
          <div className="row g-4 justify-content-between align-items-start">
            {/* Logo & Social Icons */}
            <div className="col-xl-4 col-lg-4 col-md-12 mb-4 mb-lg-0">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '6px'
                }}>
                  <Image src={sp_logo} alt="Swara Patel Logo" width={24} height={24} style={{ objectFit: 'contain' }} />
                </div>
                <span style={{
                  fontSize: '26px',
                  fontWeight: '700',
                  color: '#ffffff',
                  fontFamily: 'Georgia, serif',
                  letterSpacing: '-0.3px'
                }}>
                  Swara Patel
                </span>
              </div>

              {/* Circular Social Buttons */}
              <div className="d-flex align-items-center gap-2">
                <a href="mailto:contact@swarapatel.com" aria-label="Email" style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255, 255, 255, 0.85)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)'
                }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                </a>
                <a href="#" aria-label="Website" style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255, 255, 255, 0.85)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)'
                }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 000 18 14.5 14.5 0 000-18z"/></svg>
                </a>
                <a href="#" aria-label="Behance" style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255, 255, 255, 0.85)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)'
                }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6h5a3 3 0 010 6H4V6zm0 6h5.5a3.5 3.5 0 010 7H4v-7zm10-3h5v2h-5V9zm0 6a3 3 0 106 0 3 3 0 00-6 0z"/></svg>
                </a>
                <a href="#" aria-label="Youtube" style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255, 255, 255, 0.85)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)'
                }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="6" width="20" height="12" rx="4"/><polygon points="10,9 15,12 10,15" fill="currentColor"/></svg>
                </a>
              </div>
            </div>

            {/* Explore Column */}
            <div className="col-xl-2 col-lg-2 col-md-4 col-6">
              <h3 style={{
                fontSize: '22px',
                fontWeight: '700',
                color: '#ffffff',
                fontFamily: 'Georgia, serif',
                marginBottom: '18px'
              }}>
                Explore
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li><Link href="#about-me" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '15px' }}>About Us</Link></li>
                <li><Link href="#what-i-believe" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '15px' }}>Services</Link></li>
                <li><Link href="#workshops" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '15px' }}>Portfolio</Link></li>
                <li><Link href="#contact" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '15px' }}>Contact</Link></li>
              </ul>
            </div>

            {/* Address Column */}
            <div className="col-xl-3 col-lg-3 col-md-4 col-6">
              <h3 style={{
                fontSize: '22px',
                fontWeight: '700',
                color: '#ffffff',
                fontFamily: 'Georgia, serif',
                marginBottom: '18px'
              }}>
                Address
              </h3>
              <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '15px', lineHeight: '1.6' }}>
                <div>Address</div>
                <div>mumbai, India</div>
              </div>
            </div>

            {/* Say Hello Column */}
            <div className="col-xl-3 col-lg-3 col-md-4 col-12">
              <h3 style={{
                fontSize: '22px',
                fontWeight: '700',
                color: '#ffffff',
                fontFamily: 'Georgia, serif',
                marginBottom: '18px'
              }}>
                Say Hello
              </h3>
              <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '15px', lineHeight: '1.6' }}>
                <div>email id</div>
                <div>Phone number</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;