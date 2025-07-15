import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="header-container">
            <div className="logo">
                <a href="https://www.saseconnect.org/" target="_blank">
                    <img src="./Images/ou-sase-logo.png" className="ou-sase-logo" alt="ou sase logo" />
                </a> 
            </div>
                <div className="navbar-button">
                    <Link to="/exec"><button><b>2026 Executive Board</b></button></Link>
                    <Link to="/"><button><b>Home</b></button></Link>
                    <Link to="/sponsor"><button><b>Sponsors</b></button></Link>
                </div>
            <div className="empty-space">
                <button id="menu-toggle">☰ Menu</button>
                <nav id="menu" className="hidden">
                    <ul>
                        <li><Link to="/exec"><button><b>2026 Executive Board</b></button></Link></li>
                        <li><Link to="/"><button><b>Home</b></button></Link></li>
                        <li><Link to="/sponsor"><button><b>Sponsors</b></button></Link></li>
                    </ul>
                </nav>

                <script src="toggle.ts"></script>
            </div>
        </header>  
    )
}