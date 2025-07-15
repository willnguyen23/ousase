import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const DropdownButton = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  const handleOptionClick = (option: any) => {
    console.log('Selected:', option);
    setOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={handleToggle}>
        ≡ Menu
      </button>
      {open && (
        <div className="dropdown-menu-container">
          <ul className="dropdown-menu">
            <li onClick={() => handleOptionClick('Option 1')}><Link to="/exec"><button><b>2026 Executive Board</b></button></Link></li>
            <li onClick={() => handleOptionClick('Option 2')}><Link to="/"><button><b>Home</b></button></Link></li>
            <li onClick={() => handleOptionClick('Option 3')}><Link to="/sponsor"><button><b>Sponsors</b></button></Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;