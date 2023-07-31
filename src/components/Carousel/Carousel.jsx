import React, { useState } from 'react';
import arrowPrev from '../../assets/arrow_prev.svg';
import arrowNext from '../../assets/arrow_next.svg';
import '../Carousel/carousel.css';

function Carousel({ pictures, title, index }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? pictures.length -1 : currentIndex -1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const lastSlide = currentIndex === pictures.length -1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="prev">
        <img src={arrowPrev} alt={'prev button'} />
      </button>
      <div key={index}>
        <img src={pictures[currentIndex]} alt={title} />
      </div>
      <button onClick={nextSlide} className="next">
        <img src={arrowNext} alt={'next button'} />
      </button>
      <p>
        {currentIndex + 1} / {pictures.length}
      </p>
    </div>
  );
}

export default Carousel;
