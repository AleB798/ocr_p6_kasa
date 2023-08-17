import React from 'react';
import { Link } from "react-router-dom";

function Card({id, cover, title}) {
    return (
          <div key={id} className="rental-card">
            <Link to={`/rentals/${id}`}>
              <div>
                <img src={cover} alt={title}/>
              </div>
              <div className='overlay-card'>
                <h3>{title}</h3>
              </div>
            </Link>
          </div>
    )
}

export default Card;