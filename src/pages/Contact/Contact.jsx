import React, { useRef, useEffect, useState } from 'react';
import './contact.scss';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 600);
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Safaricom',
      value: '0724401931',
      link: 'tel:0724401931'
    },
    {
      icon: <FaPhone />,
      title: 'Airtel',
      value: '0736122757',
      link: 'tel:0736122757'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'nyaberajane70@gmail.com',
      link: 'mailto:nyaberajane70@gmail.com'
    }
  ];

  return (
    <section id="contact" className={`contact${isMobile ? ' contact--mobile' : ''}`} ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className={`contact__container ${isVisible ? 'visible' : ''}`}
          style={isMobile ? { justifyContent: 'center', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' } : {}}>
          <div className="contact__info">
            <div className="contact__intro" style={{ animationDelay: '0.2s' }}>
              <h3>Let's Connect</h3>
              <p>
                For direct communication, use the contact details below. On mobile, tap to call or email instantly.
              </p>
            </div>
            <div className="contact__methods">
              {contactInfo.map((info, index) => (
                <div 
                  className="contact__method" 
                  key={index}
                  style={{ animationDelay: `${0.4 + (index * 0.1)}s` }}
                >
                  <div className="contact__method-icon">
                    {info.icon}
                  </div>
                  <div className="contact__method-content">
                    <h4>{info.title}</h4>
                    {isMobile ? (
                      <a href={info.link}>{info.title === 'Email' ? info.value : `Call`}</a>
                    ) : (
                      <a href={info.link}>{info.value}</a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="contact__decoration contact__decoration--1"></div>
      <div className="contact__decoration contact__decoration--2"></div>
    </section>
  );
};

export default Contact;