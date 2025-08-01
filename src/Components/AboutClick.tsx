import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export default function AboutClick() {
    const [isAboutOpen, setIsAboutOpen] = useState(false);

    const toggleAbout = () => {
        setIsAboutOpen(prev => !prev);
    };

    return (
        <>
            <ul className="about-toggle">
                <li className="expandable">
                    <div className="toggle-click" onClick={toggleAbout}>
                        <Link to="/about" className="navbar-button">About {isAboutOpen ? ' ' : '+'}</Link>
                    </div>
                        {isAboutOpen && (
                            <ul className="submenu">
                                <Link to="/about" className="navbar-button"><li>About Us</li></Link>
                                <Link to="/exec" className="navbar-button"><li>Executive Board</li></Link>
                                <Link to="/merch" className="navbar-button"><li>Merch</li></Link>
                            </ul>
                        )}
                </li>
            </ul>
        </>
    )
}


    /*
        <div className="navbar-button" 
             onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)} 
        >
            <Link to="/about" className="navbar-button"><b>About +</b></Link>
                {isOpen && (
                    <div className="dropdown-content">
                        <Link to="/about" className="dropdown-item"><b>About Us</b></Link>
                        <Link to="/exec" className="dropdown-item"><b>Executive Board</b></Link>
                        <Link to="/merch" className="dropdown-item"><b>Merch</b></Link>
                    </div>
                )}
        </div>
    */