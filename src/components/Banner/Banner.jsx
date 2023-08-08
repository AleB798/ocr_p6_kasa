import React from 'react';
import '../Banner/banner.scss'

const Banner = ({ image, text, alt }) => {
  return (
    <div className="banner">
      <img src={image} alt={alt} />
      {text && <p>{text}</p>}
    </div>
  );
};

export default Banner;

