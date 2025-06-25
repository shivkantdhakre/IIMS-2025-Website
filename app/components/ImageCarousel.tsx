'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function ImageCarousel() {
  const [slideIndex, setSlideIndex] = useState(1)

  const slides = [
    { src: '/resources/img1.jpg', caption: 'New Administrative Block' },
    { src: '/resources/img2.jpg', caption: 'Old Administrative Block' },
    { src: '/resources/img3.jpg', caption: 'Civil Department Block-1' }
  ]

  const plusSlides = (n: number) => {
    let newIndex = slideIndex + n
    if (newIndex > slides.length) newIndex = 1
    if (newIndex < 1) newIndex = slides.length
    setSlideIndex(newIndex)
  }

  const currentSlide = (n: number) => {
    setSlideIndex(n)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      plusSlides(1)
    }, 5000)

    return () => clearInterval(timer)
  }, [slideIndex])

  return (
    <section className="image-carousel">
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`mySlides fade ${index + 1 === slideIndex ? 'block' : 'hidden'}`}
            style={{ display: index + 1 === slideIndex ? 'block' : 'none' }}
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

        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
      </div>
      <br />

      <div style={{ textAlign: 'center' }}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index + 1 === slideIndex ? 'active' : ''}`}
            onClick={() => currentSlide(index + 1)}
          ></span>
        ))}
      </div>
    </section>
  )
}