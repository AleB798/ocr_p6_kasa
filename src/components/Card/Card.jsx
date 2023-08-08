import React from 'react';
import { Link } from "react-router-dom";

function Card({id, cover, title}) {
    return (
          <div key={id} className="rental-card">
            <Link to={`/Rental/${id}`}>
              <div>
                <img src={cover} alt={title}/>
              </div>
              <div className='overlay-card'>
                <h2>{title}</h2>
              </div>
            </Link>
          </div>
    )
}

export default Card;