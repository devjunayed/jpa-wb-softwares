import React, { useState, useEffect, useRef } from 'react';

const Slider = ({ slides, autoSlideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);

  const totalSlides = slides.length;

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentIndex >= totalSlides) {
        setIsTransitioning(false);
        setCurrentIndex(0);
        sliderRef.current.style.transition = 'none';
        sliderRef.current.style.transform = `translateX(0)`;
      }
    };

    const sliderElement = sliderRef.current;
    sliderElement.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      sliderElement.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [currentIndex, totalSlides]);

  useEffect(() => {
    if (isTransitioning) {
      sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
      sliderRef.current.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;
    }

    const interval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning, autoSlideInterval]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div
        ref={sliderRef}
        className="flex"
        style={{ width: `${(totalSlides + 1) * 100}%`, transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="w-full flex-shrink-0" key={index}>
            <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
        <div className="w-full flex-shrink-0">
          <img src={slides[0]} alt={`Slide 1`} className="w-full h-auto" />
        </div>
      </div>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`w-4 h-4 mx-1 rounded-full ${index === (currentIndex % totalSlides) ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
