import React, { useState } from "react";
import whiteArrowOpen from "../../assets/arrow_open.svg";
import whiteArrowClose from '../../assets/arrow_close.svg';
import '../Collapse/collapse.css';

function CollapseItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  return (
    <div>
      <div className="collapse-container" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <img
          src={isOpen ? whiteArrowClose : whiteArrowOpen}
          alt={isOpen ? "Fermer" : "Ouvrir"}
        />
      </div>
      {isOpen && <p className="collapse-content">{content}</p>}
    </div>
  );
}

function Collapse({ data, title, content }) {
  return (
    <div>
      {data.map(item => (
        <CollapseItem
          key={item.id}
          title={item[title]}
          content={item[content]}
        />
      ))}
    </div>
  );
}

export default Collapse;