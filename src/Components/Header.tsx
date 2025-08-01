import { Link } from "react-router-dom"
import AboutDropdown from '../Components/AboutDropdown'
import Toggle from '../Components/Toggle'

export default function Header() {
    return (
        <>
            <header className="header-container">
                <div className="logo-container">
                    <a href="https://www.saseconnect.org/" target="_blank">
                        <img src="./Images/ou-sase-logo.png" alt="ou sase logo, link to national sase website"/>
                    </a> 
                </div>
                <div className="navbar-container">
                    <Link to="/" className="navbar-button"><b>Home</b></Link>    
                    <AboutDropdown />
                    <Link to="/events" className="navbar-button"><b>Events</b></Link>
                    <Link to="/sponsor" className="navbar-button"><b>Sponsor Info</b></Link>
                    <Link to="/faq" className="navbar-button"><b>FAQ</b></Link>
                    <a href="mailto:ou@saseconnect.org" className="navbar-button"><b>Contact Us</b></a>
                </div>
                <div className="join-sase-container">
                <Link to="/joinsase"><button><b>JOIN SASE</b></button></Link>
                </div>
                <div className="toggle-container">
                    <Toggle /> 
                </div>
            </header>  
        </>
    
    )
}