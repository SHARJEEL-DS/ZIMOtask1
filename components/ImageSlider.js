import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          className={index === currentIndex ? 'active' : ''}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
