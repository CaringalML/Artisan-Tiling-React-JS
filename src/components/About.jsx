import React from 'react';
import '../styles/About.css';

const About = () => {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "3", label: "Expert Teams" }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <div className="image-stack">
              <div className="image-stack__item image-stack__item--top">
                {/* You'll need to add these images */}
                <img src="/images/about-2.jpeg" alt="Tiling work in progress" />
              </div>
              <div className="image-stack__item image-stack__item--bottom">
                <img src="/images/aboutone.jpg" alt="Completed tiling project" />
              </div>
            </div>
          </div>
          
          <div className="about-content">
            <h2 className="section-title">About Artisan Tiling</h2>
            <p className="about-description">
              Based in Hamilton, New Zealand, Artisan Tiling has been delivering exceptional tiling solutions for over a decade. Our commitment to quality craftsmanship and attention to detail has made us the preferred choice for residential, commercial, and industrial tiling projects.
            </p>
            <p className="about-description">
              Our team of experienced professionals brings expertise, creativity, and precision to every project, ensuring results that not only meet but exceed our clients' expectations.
            </p>
            
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div className="stat-item" key={index}>
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;