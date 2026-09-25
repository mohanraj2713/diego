'use client';
import React, { useState } from 'react';

const ContactAreaHomeOne: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    comments: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="tp-contact-area tp-contact-home-section pt-90 pb-100 p-relative fix">
      <div className="container" style={{ maxWidth: '820px' }}>
        {/* Section Header with Theme Typography */}
        <div className="tp-section-title-wrapper p-relative mb-45 text-center">
          <span className="tp-section-subtitle tp-contact-home-subtitle" style={{ position: 'relative', top: 0, left: 0, transform: 'none', display: 'inline-block', marginBottom: '8px' }}>
            Contact Us
          </span>

          <h2 className="tp-section-title tp-contact-home-title" style={{ fontSize: 'clamp(28px, 4vw, 34px)', lineHeight: '1.15', marginBottom: '16px' }}>
            Let’s Talk
          </h2>

          <p className="tp-contact-home-desc" style={{
            fontSize: '16px',
            lineHeight: '1.6',
            maxWidth: '560px',
            margin: '0 auto'
          }}>
            Interested in bringing a workshop, training or speaking experience to your school, organisation or team?
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {/* Row 1: Your Name & Company */}
          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="tp-contact-home-input"
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  borderRadius: '12px',
                  fontSize: '15px',
                  fontFamily: 'inherit',
                  outline: 'none'
                }}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="tp-contact-home-input"
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  borderRadius: '12px',
                  fontSize: '15px',
                  fontFamily: 'inherit',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Row 2: Email Id */}
          <div>
            <input
              type="email"
              placeholder="Email Id"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="tp-contact-home-input"
              style={{
                width: '100%',
                padding: '16px 20px',
                borderRadius: '12px',
                fontSize: '15px',
                fontFamily: 'inherit',
                outline: 'none'
              }}
            />
          </div>

          {/* Row 3: Comments */}
          <div>
            <textarea
              rows={4}
              placeholder="Comments"
              value={formData.comments}
              onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
              className="tp-contact-home-input"
              style={{
                width: '100%',
                padding: '16px 20px',
                borderRadius: '12px',
                fontSize: '15px',
                fontFamily: 'inherit',
                outline: 'none',
                resize: 'vertical'
              }}
            />
          </div>

          {/* Submit Button */}
          <div style={{ marginTop: '10px' }}>
            <button
              type="submit"
              className="tp-contact-home-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 32px',
                borderRadius: '30px',
                fontSize: '16px',
                fontWeight: '700',
                fontFamily: 'inherit',
                border: 'none',
                cursor: 'pointer',
                transition: 'transform 0.2s ease'
              }}
            >
              <span>Get in Touch</span>
              <span style={{ fontSize: '18px' }}>→</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactAreaHomeOne;
