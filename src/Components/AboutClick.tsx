import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export default function AboutClick() {
    const [isAboutOpen, setIsAboutOpen] = useState(false);

    const toggleAbout = () => {
        setIsAboutOpen(prev => !prev);
    };

    return (
        <>
            <div className="about-toggle">
                <div className="toggle-click" onClick={toggleAbout} style={{marginBottom: isAboutOpen ? '0vh' : '3vh'}}>
                    <Link to="/about" className="navbar-button"> {isAboutOpen ? " - " : " + "} About </Link>
                </div>
                    {isAboutOpen && (
                        <ul className="submenu">
                            <Link to="/about" className="navbar-button"><li>About Us</li></Link>
                            <Link to="/exec" className="navbar-button"><li>Executive Board</li></Link>
                            <Link to="/merch" className="navbar-button"><li>Merch</li></Link>
                        </ul>
                    )}
            </div>
        </>
    )
}