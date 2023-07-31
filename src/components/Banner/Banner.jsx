import React from 'react';
import '../Banner/banner.css'

const Banner = ({ image, text, alt }) => {
  return (
    <div className="banner">
      <img src={image} alt={alt} />
      {text && <p className="banner-text">{text}</p>}
    </div>
  );
};

export default Banner;

