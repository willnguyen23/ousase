import '../Styling/HomeAbout.css'
import { Link } from "react-router-dom"

export default function HomeAbout() {
    return (
        <>
            <div className="our-vision-item" style={{textAlign: 'center'}}>
                <h2>Our Mission</h2>
                <div className="our-mission-item">
                    <p> SASE is <b>dedicated</b> to the <b>advancement of Asian heritage scientists and engineers</b> in education and employment so that they can <b>achieve their full career potential. </b> We accomplish this through...</p>
                </div>
                <div className="about-us-image-container">
                    <div className="about-us-images" id="culture">
                        <img src="./Images/culture.png" loading="lazy"/>
                        <h3>Culture & Branding</h3>
                    </div>
                    <div className="about-us-images" id="prodev">
                        <img src="./Images/pro-dev.png" loading="lazy"/>
                        <h3>Professional Development</h3>
                    </div>
                    <div className="about-us-images" id="gbm">
                        <img src="./Images/gbm.png" loading="lazy"/>
                        <h3>General Body Meetings</h3>
                    </div>
                    <div className="about-us-images" id="conference">
                        <img src="./Images/conference.png" loading="lazy"/>
                        <h3>Conferences</h3>
                    </div>   
                </div>
                <div className="sase-membership-interest">
                    <p>Are you interested in becoming a member? Click <Link to="/join"><b>here</b></Link> for more information.</p>
                </div>
            </div>
        </>
    )
}