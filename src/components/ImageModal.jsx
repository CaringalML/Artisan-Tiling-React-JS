import React, { useEffect, useState, useRef } from 'react';
import '../styles/ImageModal.css';

const ImageModal = ({ project, currentImageIndex, isOpen, onClose, onNext, onPrev }) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNext(e);
      } else if (e.key === 'ArrowLeft') {
        onPrev(e);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeydown);
      document.body.style.overflow = 'hidden';
      resetZoom();
    }

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart - touchEnd > 50) {
      onNext(e);
    }

    if (touchStart - touchEnd < -50) {
      onPrev(e);
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY * 0.001;
    const newScale = Math.max(1, Math.min(3, scale - delta));
    setScale(newScale);

    if (newScale === 1) {
      setPosition({ x: 0, y: 0 }); // Reset position when zoomed out
    }
  };

  const handleMouseDown = (e) => {
    const startX = e.clientX - position.x;
    const startY = e.clientY - position.y;

    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX - startX,
        y: e.clientY - startY,
      });
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  if (!isOpen || !project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{project.title}</h3>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div
          className="modal-body"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
        >
          <button
            className="nav-button prev"
            onClick={onPrev}
            aria-label="Previous image"
          >
            ❮
          </button>

          <div className="modal-image-container">
            <img
              ref={imageRef}
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="modal-image"
              style={{ transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)` }}
              onMouseDown={handleMouseDown}
            />
          </div>

          <button
            className="nav-button next"
            onClick={onNext}
            aria-label="Next image"
          >
            ❯
          </button>
        </div>

        <div className="image-counter">
          {currentImageIndex + 1} / {project.images.length}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;