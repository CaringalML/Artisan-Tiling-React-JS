import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      title: "Residential Tiling",
      description: "Transform your home with expert tiling services for bathrooms, kitchens, floors, and more.",
      icon: "🏠"
    },
    {
      title: "Commercial Tiling",
      description: "Professional tiling solutions for offices, retail spaces, and commercial buildings.",
      icon: "🏢"
    },
    {
      title: "Industrial Tiling",
      description: "Heavy-duty tiling solutions for industrial facilities, warehouses, and factories.",
      icon: "🏭"
    },
    {
      title: "Custom Design",
      description: "Unique tile patterns and designs tailored to your specific requirements and style preferences.",
      icon: "✏️"
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Delivering excellence in tiling across Hamilton and surrounding areas
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;