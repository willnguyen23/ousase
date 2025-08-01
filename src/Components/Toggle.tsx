import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import AboutClick from '../Components/AboutClick'

const DropdownButton = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const openOverlay = () => setShowOverlay(true);
  const closeOverlay = () => setShowOverlay(false);

  return (
    <>
      <div className="toggle-logo-container"
           style={{display: showOverlay ? 'none' : 'flex'}}>
          <a href="https://www.saseconnect.org/" target="_blank">
              <img src="./Images/ou-sase-logo.png" 
                   alt="ou sase logo, link to national sase website"
              />    
          </a> 
      </div>
      <div className="toggle"
           style={{width: showOverlay ? '100%' : '50%'}}
      >
        <button onClick={openOverlay} 
                id="open-pages"
                style={{display: showOverlay ? 'none' : 'flex'}}
        > ≡ </button>

        {showOverlay && (
          <div className="all-pages">
              <button onClick={closeOverlay} 
                      id="close-pages"
                      style={{display: showOverlay ? 'flex' : 'none'}}
              > ╳ </button>  
            <div className="options">
              <Link to="/" className="navbar-button"><b>Home</b></Link>
              <AboutClick />
              <Link to="/events" className="navbar-button"><b>Events</b></Link>
              <Link to="/sponsor" className="navbar-button"><b>Sponsor Info</b></Link>
              <Link to="/faq" className="navbar-button"><b>FAQ</b></Link>
              <Link to="/contact" className="navbar-button"><b>Contact Us</b></Link>
              <Link to="/joinsase"><button className="join-sase-button"><b>JOIN SASE</b></button></Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DropdownButton;