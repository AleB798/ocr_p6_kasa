import React from 'react';
import { Link } from "react-router-dom";
import '../Card/card.css'


function Card({id, cover, title}) {
    return (
        <div>
          <div key={id} className="rental-card">
            <Link to={`/Rental/${id}`}>
              <div className="image-card">
                <img src={cover} alt={title}/>
              </div>
              <h2>{title}</h2>
            </Link>
          </div>
        </div>
    )
}

export default Card;