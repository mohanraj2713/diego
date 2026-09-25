'use client';
import React, { useState } from 'react';

const FAQAreaHomeOne: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const faqs = [
    {
      question: "Does every training & workshop involve dance?",
      answer: "Not necessarily. Dance is an important part of my work, but every experience is designed around its purpose and audience. Workshops may include movement, games, reflection, discussion, creativity, and other experiential activities."
    },
    {
      question: "Are Swara’s workshops suitable for both children and adults?",
      answer: " Yes. I work across the entire spectrum, from early years to senior professionals.My work has included parent-child sessions with early years families, leadership workshops with school students, wellness workshops with Grade 12 students, sessions with IIT students, teacher and support-staff training, and wellness experiences for corporate teams at offsites and organisational events.The content and facilitation style changes with the audience, but the underlying approach remains the same: high participation, movement, interaction, reflection and learning through experience."
    },
    {
      question: "Can a training & workshop be customised for our organisation or audience?",
      answer: "Absolutely. I work with the organiser to understand the audience, context and intended outcomes, and shape the experience accordingly"
    },
    {
      question: "How large a group can Swara facilitate?",
      answer: "My workshops work particularly well with groups of 20 to 150 participants, though I can also accommodate larger groups. The format and facilitation approach can be adapted depending on the group size, setting, and nature of the experience."
    },
    {
      question: "What can participants expect to take away from a Swara workshop?",
      answer: "Something you don’t just understand, but experience and carry with you. New perspectives, deeper connection, confidence, joy and a shift in the way you see yourself and others.And you don’t have to take our word for it. Visit the Testimonial section on this website and hear it, see it and feel it through the people who have experienced a Swara workshop"
    },
    {
      question: "How long are the workshops?",
      answer: "The duration depends on the type of experience and the audience. For example, Mind | Body | Soul is a 120-minute movement-based wellness experience, while a Student Leadership Workshop is typically around 90 minutes.These formats can be adapted based on the objectives, audience, group size and setting."
    },
    {
      question: "Can Swara conduct workshops at our school, organisation or event location?",
      answer: "Yes. I facilitate both on-site and event-based experiences, depending on the requirements and location."
    },
    {
      question: "Who can invite Swara for a workshop or speaking engagement?",
      answer: "Schools, educational institutions, organisations, corporate teams, conferences and events can invite me to design and facilitate an experience suited to their audience and objectives."
    },
    {
      question: "How can we invite Swara to speak or conduct a workshop?",
      answer: " Simply get in touch through the Let’s Talk section. Share a little about your organisation, audience, objective and preferred format, and we can start the conversation."
    }
  ];

  return (
    <section className="tp-faq-area tp-faq-home-section pt-90 pb-100 p-relative fix">
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
        <div className="tp-section-title-wrapper p-relative mb-40">
          <h2 className="tp-section-title tp-faq-home-title" style={{ fontSize: 'clamp(26px, 3.5vw, 32px)' }}>
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
                className={`tp-faq-home-card ${isOpen ? 'is-open' : ''}`}
                style={{
                  borderRadius: '16px',
                  padding: '20px 24px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px'
                }}>
                  <h3
                    className="tp-faq-home-question"
                    style={{
                      fontSize: '17px',
                      fontWeight: isOpen ? '700' : '600',
                      fontFamily: 'inherit',
                      margin: 0,
                      lineHeight: '1.4'
                    }}
                  >
                    {faq.question}
                  </h3>

                  <div
                    className={`tp-faq-home-arrow ${isOpen ? 'is-open' : ''}`}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease, background-color 0.2s ease'
                    }}
                  >
                    {isOpen ? '↑' : '→'}
                  </div>
                </div>

                {isOpen && (
                  <p
                    className="tp-faq-home-answer"
                    style={{
                      fontSize: '15px',
                      marginTop: '16px',
                      marginBottom: 0,
                      lineHeight: '1.7',
                      fontFamily: 'inherit'
                    }}
                  >
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
