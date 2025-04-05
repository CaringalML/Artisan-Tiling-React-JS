import React, { useState } from 'react';
import '../styles/Projects.css';
import ImageModal from './ImageModal';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentProject, setCurrentProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filters = ['all', 'residential', 'commercial', 'industrial'];

  const projects = [
    {
      title: "Modern Bathroom Renovation",
      category: "residential",
      images: [
        "/images/projects/bathroom.png",
        "/images/projects/bathroom-2.png",
        "/images/projects/bathroom-3.png"
      ],
      description: "Complete bathroom transformation with premium porcelain tiles"
    },
    {
      title: "Corporate Office Flooring",
      category: "commercial",
      images: [
        "/images/projects/office.jpg",
        "/images/projects/office-2.jpg",
        "/images/projects/office-3.jpg"
      ],
      description: "Large-scale commercial flooring project for a corporate client"
    },
    {
      title: "Industrial Kitchen Tiling",
      category: "industrial",
      images: [
        "/images/projects/kitchen.jpg",
        "/images/projects/kitchen-2.jpg",
        "/images/projects/kitchen-3.jpg"
      ],
      description: "Heavy-duty tiling solution for a commercial kitchen"
    },
    {
      title: "Luxury Home Flooring",
      category: "residential",
      images: [
        "/images/projects/luxury-home.jpg",
        "/images/projects/luxury-home-2.jpg",
        "/images/projects/luxury-home-3.jpg"
      ],
      description: "Premium marble tiling for a luxury residence"
    },
    {
      title: "Shopping Mall Installation",
      category: "commercial",
      images: [
        "/images/projects/mall.jpg",
        "/images/projects/mall-2.jpg",
        "/images/projects/mall-3.jpg"
      ],
      description: "Large-format tiling for a shopping mall common area"
    },
    {
      title: "Factory Floor Restoration",
      category: "industrial",
      images: [
        "/images/projects/factory.jpg",
        "/images/projects/factory-2.jpg",
        "/images/projects/factory-3.jpg"
      ],
      description: "Durable industrial tiling solution with chemical resistance"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openModal = (project, index = 0) => {
    setCurrentProject(project);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset the image index when modal closes
    setTimeout(() => {
      setCurrentImageIndex(0);
      setCurrentProject(null);
    }, 300);
  };
  
  const nextImage = (e) => {
    e.stopPropagation();
    if (currentProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === currentProject.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  
  const prevImage = (e) => {
    e.stopPropagation();
    if (currentProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? currentProject.images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Our Projects</h2>
        <p className="section-subtitle">
          Explore our portfolio of successful tiling projects across New Zealand
        </p>

        <div className="filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <div 
                className="project-image" 
                onClick={() => openModal(project)}
              >
                <img src={project.images[0]} alt={project.title} />
                <div className="image-overlay">
                  <span className="view-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="16"></line>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <span className="project-category">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {currentProject && (
        <ImageModal
          project={currentProject}
          currentImageIndex={currentImageIndex}
          isOpen={isModalOpen}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </section>
  );
};

export default Projects;