import { Link } from "react-router-dom"
import AboutDropdown from '../Components/AboutDropdown'
import Toggle from '../Components/Toggle'
import '../Styling/Header.css'

export default function Header() {
    return (
        <>
            <div className="header-container">
                <div className="logo-container">
                    <a href="https://www.saseconnect.org/" target="_blank">
                        <img src="./Images/ou-sase-logo.png" loading="lazy" alt="ou sase logo, link to national sase website"/>
                    </a> 
                </div>
                <div className="join-sase-container">
                <Link to="/joinsase"><button><b>JOIN SASE</b></button></Link>
                </div>

                <div className="toggle-container">
                    <Toggle /> 
                </div>
            </div>  
        </>
    
    )
}