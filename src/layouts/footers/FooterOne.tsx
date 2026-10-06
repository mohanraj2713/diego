'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo_black from "@/assets/img/logo/logo-black.png";
import logo_white from "@/assets/img/logo/logo-white.png";

const FooterOne = ({ style }: { style?: any }) => {
  const bg_img = style ? "/assets/img/footer/overly-bg-2.png" : "/assets/img/skill/bg-distort.png";

  return (
    <footer>
      <div
        className={`tp-footer-bg tp-footer-home-section ${style ? "tp-footer__customize black-bg-3" : "tp-footer-bg-light theme-bg-2"} p-relative fix z-index-1`}
        style={{
          backgroundImage: `url(${bg_img})`,
          paddingTop: '80px',
          paddingBottom: '80px'
        }}
      >
        <div className="container" style={{ maxWidth: '1140px' }}>
          <div className="row g-4 justify-content-between align-items-start">
            {/* Logo & Social Icons */}
            <div className="col-xl-4 col-lg-4 col-md-12 mb-4 mb-lg-0">
              <div className="logo mb-4">
                <Link className="logo-black" href="https://agilekids.dance/" target="_blank" rel="noopener noreferrer">
                  <Image src={logo_black} alt="Swara Patel Logo" style={{ width: '145px', height: 'auto', objectFit: 'contain' }} />
                </Link>
                <Link className="logo-white" href="https://agilekids.dance/" target="_blank" rel="noopener noreferrer">
                  <Image src={logo_white} alt="Swara Patel Logo" style={{ width: '145px', height: 'auto', objectFit: 'contain' }} />
                </Link>
              </div>

              {/* Circular Social Buttons */}
              <div className="d-flex align-items-center gap-2">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=swarahappyfeet@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="tp-footer-social-btn" style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
                </a>
                <a href="https://www.instagram.com/patelswara?stkn=MTBnODI0YzY1YWo1" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="tp-footer-social-btn" style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://www.linkedin.com/in/swarapatelagilekids?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="tp-footer-social-btn" style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="https://www.agilekids.dance/" target="_blank" rel="noopener noreferrer" aria-label="Website" className="tp-footer-social-btn" style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </a>
              </div>
            </div>

            {/* Explore Column */}
            <div className="col-xl-2 col-lg-2 col-md-4 col-6">
              <h3 className="tp-footer-column-title" style={{
                fontSize: '22px',
                fontWeight: '700',
                fontFamily: 'Georgia, serif',
                marginBottom: '18px'
              }}>
                Explore
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li><Link href="#about-me" className="tp-footer-link" style={{ textDecoration: 'none', fontSize: '15px' }}>About Us</Link></li>
                <li><Link href="#what-i-believe" className="tp-footer-link" style={{ textDecoration: 'none', fontSize: '15px' }}>Services</Link></li>
                <li><Link href="#workshops" className="tp-footer-link" style={{ textDecoration: 'none', fontSize: '15px' }}>Portfolio</Link></li>
                <li><Link href="#contact" className="tp-footer-link" style={{ textDecoration: 'none', fontSize: '15px' }}>Contact</Link></li>
              </ul>
            </div>

            {/* Address Column */}
            <div className="col-xl-3 col-lg-3 col-md-4 col-6">
              <h3 className="tp-footer-column-title" style={{
                fontSize: '22px',
                fontWeight: '700',
                fontFamily: 'Georgia, serif',
                marginBottom: '18px'
              }}>
                Address
              </h3>
              <div className="tp-footer-text" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                <div>Address</div>
                <div>mumbai, India</div>
              </div>
            </div>

            {/* Say Hello Column */}
            <div className="col-xl-3 col-lg-3 col-md-4 col-12">
              <h3 className="tp-footer-column-title" style={{
                fontSize: '22px',
                fontWeight: '700',
                fontFamily: 'Georgia, serif',
                marginBottom: '18px'
              }}>
                Say Hello
              </h3>
              <div className="tp-footer-text" style={{ fontSize: '15px', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=swarahappyfeet@gmail.com" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>swarahappyfeet@gmail.com</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <a href="tel:+919619252433" style={{color: 'inherit', textDecoration: 'none'}}>+91 9619252433</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;