import React, { useState } from 'react';
import "../App.css"

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className='same1' style={{marginLeft:"15px"}}>{title}</div>
        <div className='same1' style={{float:"right",marginRight:"15px"}}>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;