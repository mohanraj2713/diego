'use client';
import React, { useState } from 'react';

const FAQAreaHomeOne: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const faqs = [
    {
      question: "Does every training & workshop involve dance?",
      answer: "While dance is a foundational modality, workshops integrate structured movement, creative play, bodily awareness, non-verbal exercises, and interactive reflection tailored to group goals."
    },
    {
      question: "Are Swara’s workshops suitable for both children and adults?",
      answer: "Yes. I work across the entire spectrum, from early years to senior professionals. My work has included parent-child sessions with early years families, leadership workshops with school students, wellness workshops with Grade 12 students, sessions with IIT students, teacher and support-staff training, and wellness experiences for corporate teams at offsites and organisational events. The content and facilitation style changes with the audience, but the underlying approach remains the same: high participation, movement, interaction, reflection and learning through experience."
    },
    {
      question: "Can a training & workshop be customised for our organisation or audience?",
      answer: "Absolutely. Every session is designed after understanding your organisation's specific objectives, group size, space, and target outcomes."
    },
    {
      question: "How large a group can Swara facilitate?",
      answer: "From intimate leadership groups of 10-15 participants to large auditorium gatherings of 200+ attendees."
    },
    {
      question: "What can participants expect to take away from a Swara workshop?",
      answer: "Increased self-awareness, enhanced team cohesion, stress regulation techniques, creative confidence, and practical movement tools for daily life."
    },
    {
      question: "How long are the workshops?",
      answer: "Sessions range from 90-minute keynotes to half-day intensives or multi-day retreats."
    },
    {
      question: "Can Swara conduct workshops at our school, organisation or event location?",
      answer: "Yes, workshops can be hosted on-site at your venue, offsite locations, or virtually."
    },
    {
      question: "Who can invite Swara for a workshop or speaking engagement?",
      answer: "Schools, universities, corporate HR/wellness teams, event organisers, non-profits, and educational institutions."
    },
    {
      question: "How can we invite Swara to speak or conduct a workshop?",
      answer: "You can submit the contact form above or reach out directly via email to initiate a discussion."
    }
  ];

  return (
    <section className="tp-faq-area pt-90 pb-100 p-relative fix" style={{ backgroundColor: '#ffffff' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
        <div className="tp-section-title-wrapper p-relative mb-40">
          <h2 className="tp-section-title" style={{ fontSize: 'clamp(26px, 3.5vw, 32px)' }}>
            FAQ
          </h2>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                style={{
                  backgroundColor: '#f6f7fb',
                  borderRadius: '16px',
                  padding: '20px 24px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border: isOpen ? '1px solid #dcdfe8' : '1px solid transparent'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px'
                }}>
                  <h3 style={{
                    fontSize: '17px',
                    fontWeight: isOpen ? '700' : '600',
                    color: '#161934',
                    fontFamily: 'inherit',
                    margin: 0,
                    lineHeight: '1.4'
                  }}>
                    {faq.question}
                  </h3>

                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: '#161934',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    flexShrink: 0,
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease'
                  }}>
                    {isOpen ? '↑' : '→'}
                  </div>
                </div>

                {isOpen && (
                  <p style={{
                    fontSize: '15px',
                    color: '#555975',
                    marginTop: '16px',
                    marginBottom: 0,
                    lineHeight: '1.7',
                    fontFamily: 'inherit'
                  }}>
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQAreaHomeOne;
