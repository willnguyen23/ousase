import '../Styling/TitleContainer.css'
import { Link } from "react-router-dom"

export default function TitleContainer() {
    return (
        <>
            <img src="../Images/saseLNY.jpg" loading="lazy" alt="lunar new year gbm" />
            <div className="intro-container">
                <div className="title-container">
                    <h1>Society of Asian Scientists and Engineers</h1>
                    <h3>University of Oklahoma</h3>
                </div>
                {/* <div className="intro-navbar">
                    <Link to="/about" className="intro-navbar-button"><b>About Us</b></Link>
                    <Link to="/sponsor" className="intro-navbar-button"><b>Sponsor Info</b></Link>
                    <Link to="/faq" className="intro-navbar-button"><b>FAQ</b></Link>
                </div> */}
            </div>
        </>
    )
}