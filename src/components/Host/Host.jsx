import React from "react";
import '../Host/host.scss';

function Host({ data }) {
  return (
      <div>
        {data.map(item => (
          <div key={item.id}>
            <div className='host'>
              <p>{item.host.name}</p>
              <img src={item.host.picture} alt={item.host.name}/>
            </div>
          </div>
        ))}
      </div>
    );
  };

export default Host;
