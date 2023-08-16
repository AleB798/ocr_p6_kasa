import React from 'react';
import { useLocation } from 'react-router-dom'; // Importer le hook de routage
import '../Banner/banner.scss';

const Banner = ({ image, text, alt }) => {
  const location = useLocation(); // Obtenir l'URL actuelle
  const withTextSlogan = location.pathname === "/"; // Vérifier si l'URL correspond

  return (
    <div className="banner">
      <img src={image} alt={alt} />
      {withTextSlogan && <h1>{text}</h1>}
    </div>
  );
};

export default Banner;