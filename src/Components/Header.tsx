import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="header-container">
            <div className="logo">
                <a href="https://www.saseconnect.org/" target="_blank">
                    <img src="ousase/Images/ou-sase-logo.png" className="ou-sase-logo" alt="ou sase logo" />
                </a> 
            </div>
            <div className="navbar-button">
                <Link to="/exec"><button><b>2026 Executive Board</b></button></Link>
                <Link to="/"><button><b>Home</b></button></Link>
                <Link to="/sponsor"><button><b>Sponsors</b></button></Link>
            </div>
            <div className="empty-space">

            </div>
        </header>  
    )
}