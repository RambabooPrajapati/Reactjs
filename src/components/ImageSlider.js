// ImageSlider.js
import React, { useState } from 'react';
import './ImageSlider.css'
const ImageSlider = () => {
    // productImages = productData.productData
    // const slideImage = productImages.map(data=> data.images);
    // console.log(slideImage)
  const images = [
    'https://via.placeholder.com/800x400?text=Slide+1',
    'https://via.placeholder.com/800x400?text=Slide+2',
    'https://via.placeholder.com/800x400?text=Slide+3',
  ]; // Add your image URLs here
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <button className="prev-button" onClick={prevSlide}>
        &#10094;
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
      <button className="next-button" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
