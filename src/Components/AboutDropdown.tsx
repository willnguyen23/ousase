import { Link } from "react-router-dom"
import React, { useState } from 'react';

export default function AboutDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown-container" 
             onMouseEnter={() => setIsOpen(true)} 
             onMouseLeave={() => setIsOpen(false)}
             style={{width: '100%', display: 'flex', justifySelf: 'center'}}
        >
            <Link to="/about" className="navbar-button"><b>About</b></Link>
                {isOpen && (
                    <div className="dropdown-content">
                        <Link to="/about" className="dropdown-item"><b>About Us</b></Link>
                        <Link to="/exec" className="dropdown-item"><b>Executive Board</b></Link>
                        <Link to="/merch" className="dropdown-item"><b>Merch</b></Link>
                    </div>
                )}
        </div>
    )
}