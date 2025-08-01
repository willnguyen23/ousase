import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Annoucements from '../Components/AnnoucementSlider'
import Calendar from '../Components/Calendar'
import { Link } from "react-router-dom"

/*Notes: what we do, natcon, join sase */

export default function Home() {
    return (
        <>
            <Header />
            <section className="main-image-container">
                <img src="../Images/saseLNY.jpg" alt="lunar new year gbm" />
                <div className="intro-container">
                    <h1>Society of Asian Scientists and Engineers</h1>
                    <h3>University of Oklahoma</h3>
                    <div className="intro-navbar">
                        <Link to="/about" className="intro-navbar-button"><b>About Us</b></Link>
                        <Link to="/sponsor" className="intro-navbar-button"><b>Sponsor Info</b></Link>
                        <Link to="/faq" className="intro-navbar-button"><b>FAQ</b></Link>
                    </div>
                </div>
            </section>
            <section className="home-annoucement-container">
                <h1 style={{fontFamily: 'Anton', 
                            fontSize: '4vh',
                            borderBottom: 'solid',
                }}> Announcements</h1>
                <Annoucements />
            </section>
            <section className="home-events-container">
                <h1 style={{fontFamily: 'Anton', 
                            fontSize: '4vh',
                            borderBottom: 'solid',
                }}> Upcoming Events </h1>
                <Calendar />
            </section>
            <section className="home-vision-container">
                <h1 style={{fontFamily: 'Anton', 
                                fontSize: '4vh',
                                borderBottom: 'solid',
                                width: '100%',
                }}> About Us </h1>  
                <div className="our-vision-item" style={{textAlign: 'center'}}>
                    <h2>Our Mission</h2>
                    <p> SASE is <b>dedicated</b> to the <b>advancement of Asian heritage scientists and engineers</b> in education and employment so that they can <b>achieve their full career potential. </b> We accomplish this through...</p>
                    <div className="about-us-image-container">
                        <div className="about-us-images" >
                            <img src="./Images/culture.png" />
                            <h3>Culture & Branding</h3>
                        </div>
                        <div className="about-us-images" >
                            <img src="./Images/pro-dev.png" />
                            <h3>Professional Development</h3>
                        </div>
                        <div className="about-us-images" >
                            <img src="./Images/gbm.png" />
                            <h3>General Body Meetings</h3>
                        </div>
                        <div className="about-us-images" >
                            <img src="./Images/conference.png" />
                            <h3>Conferences</h3>
                        </div>   
                    </div>
                    <p style={{paddingTop: '1%'}}>Are you interested in becoming a member? Click <Link to="/join"><b>here</b></Link> for more information.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}