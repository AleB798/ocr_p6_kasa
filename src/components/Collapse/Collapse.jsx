import React, { useState } from "react";
import whiteArrowOpen from "../../assets/arrow_open.svg";
import whiteArrowClose from '../../assets/arrow_close.svg';
import '../Collapse/collapse.scss';

function CollapseItem({ title, customTitle, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  return (
    <div>
      <div className="collapse-container" onClick={toggleCollapse}>
        <h3>{title || customTitle}</h3>
        <img
          src={isOpen ? whiteArrowClose : whiteArrowOpen}
          alt={isOpen ? "Fermer" : "Ouvrir"}
        />
      </div >
      {isOpen && <p>{content}</p>}
    </div>
  );
}

function Collapse({ data, title, customTitle, content, id }) {
  return (
    <div className='all-collapse'>
      {data.map(item => (
        <CollapseItem
          key={`${item[id]}-${item[title]}`}
          title={item[title]}
          customTitle={customTitle}
          content={item[content]}
        />
      ))}
    </div>
  );
}

export default Collapse;
