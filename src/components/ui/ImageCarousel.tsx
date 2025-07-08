'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { src: '/resources/img1.jpg', caption: 'New Administrative Block' },
    { src: '/resources/img2.jpg', caption: 'Old Administrative Block' },
    { src: '/resources/img3.jpg', caption: 'Civil Department Block-1' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="image-carousel">
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`mySlides fade ${index === currentSlide ? 'block' : 'hidden'}`}
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          >
            <div className="numbertext">{index + 1} / {slides.length}</div>
            <Image 
              src={slide.src} 
              alt={slide.caption}
              width={1000}
              height={400}
              style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }}
            />
            <div className="text">{slide.caption}</div>
          </div>
        ))}

        <a className="prev" onClick={prevSlide}>&#10094;</a>
        <a className="next" onClick={nextSlide}>&#10095;</a>
      </div>
      <br />

      <div style={{ textAlign: 'center' }}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageCarousel;