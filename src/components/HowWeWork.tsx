import React, { useRef, useEffect } from 'react';
import './HowWeWork.css';

const HowWeWork = () => {
  const sectionRef = useRef(null);
  
  const steps = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12l2 2 4-4"></path>
          <circle cx="12" cy="12" r="9"></circle>
        </svg>
      ),
      title: "Consultation",
      description: "Understanding your needs and goals"
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      ),
      title: "Solutions",
      description: "Tailored strategies for your success"
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      title: "Execution",
      description: "Implementation with latest tech"
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12l2 2 4-4"></path>
          <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h9l4-4-4-4H3"></path>
        </svg>
      ),
      title: "Quality",
      description: "Thorough testing and assurance"
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ),
      title: "Feedback",
      description: "Continuous improvement cycle"
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14,2 14,8 20,8"></polyline>
        </svg>
      ),
      title: "Support",
      description: "Ongoing maintenance & help"
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
        </svg>
      ),
      title: "Growth",
      description: "Measurable business results"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const index = parseInt(element.dataset.index || '0');
          
          setTimeout(() => {
            element.classList.add('animate-stamp-in');
          }, index * 200);
        }
      });
    }, { threshold: 0.3 });

    const elements = document.querySelectorAll('.timeline-item');
    elements.forEach((el, index) => {
      el.dataset.index = index.toString();
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="how-we-work" 
      ref={sectionRef}
      className="how-we-work-section"
    >
      <div className="how-we-work-container">
        <h2 className="how-we-work-title">
          HOW WE WORK
        </h2>
        
        <p className="how-we-work-subtitle">
          Our proven process ensures consistent quality and results
        </p>
        
        <div className="timeline-container">
          {/* Timeline line */}
          <div className="timeline-line"></div>
          
          {/* Timeline items */}
          <div className="timeline-items">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`timeline-item ${
                  index % 2 === 0 ? 'timeline-left' : 'timeline-right'
                }`}
                data-index={index}
              >
                {/* Content */}
                <div className={`timeline-content ${index % 2 === 0 ? 'content-left' : 'content-right'}`}>
                  <div className="content-card">
                    <h3 className="step-title">
                      {step.title}
                    </h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
                
                {/* Icon */}
                <div className="timeline-icon-container">
                  <div className="timeline-icon">
                    <div className="icon-wrapper">
                      {step.icon}
                    </div>
                  </div>
                </div>
                
                {/* Empty space for opposite side on desktop */}
                <div className="timeline-spacer"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;