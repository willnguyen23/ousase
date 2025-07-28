import { Link } from "react-router-dom"
import Toggle from '../Components/Toggle'


export default function Header() {
    return (
        <header className="header-container">
            <div className="logo-container">
                <a href="https://www.saseconnect.org/" target="_blank">
                    <img src="./Images/ou-sase-logo.png" alt="ou sase logo, link to national sase website" />
                </a> 
            </div>
            <div className="navbar-container">
                <Link to="/"><button><b>Home</b></button></Link>
                <Link to="/events"><button><b>Events</b></button></Link>
                <div className="dropdown">
                    <Link to="/about"><button><b>About</b></button></Link>
                    <div className="dropdown-content">
                        <Link to="/about"><button className="dropbutton"><b>About Us</b></button></Link>
                        <Link to="/exec"><button className="dropbutton"><b>Executive Board</b></button></Link>
                        <Link to="/merch"><button className="dropbutton"><b>Merch</b></button></Link>
                    </div>
                </div>
                <Link to="/sponsor"><button><b>Sponsor Info</b></button></Link>
                <Link to="/faq"><button><b>FAQ</b></button></Link>
                <Link to="/contact"><button><b>Contact Us</b></button></Link>
            </div>
            <div className="toggle-container">
                
                
            </div>
            <div className="join-sase-container">
                <Link to="/joinsase"><button><b>Join SASE</b></button></Link>
            </div>
        </header>  
    )
}