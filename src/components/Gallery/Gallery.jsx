import React from 'react';
import useFetch from "../../hooks/useFetch.jsx";
import Card from '../Card/Card.jsx';
import '../Gallery/gallery.scss';

function Gallery() {
  const { data } = useFetch('logements.json');

  return (
    <div className='rental-gallery-container'>
      <div className="rental-gallery">
        {data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            cover={item.cover}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;

