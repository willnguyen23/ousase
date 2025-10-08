import Header from '../Components/Header'
import Footer from '../Components/Footer'
import TitleContainer from '../Components/TitleContainer'
import Annoucements from '../Components/AnnoucementSlider'
import Calendar from '../Components/Calendar'
import HomeAbout from '../Components/HomeAbout'
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <Header />
        {/*
            <section className="main-image-container">
                <TitleContainer />
            </section>
        */}
            <section className="home-annoucement-container">
                <h1 style={{fontFamily: 'Anton', 
                            fontSize: '3vh',
                            borderBottom: 'solid',
                }}> Announcements</h1>
                <Annoucements />
            </section>
            <section className="home-events-container">
                <h1 style={{fontFamily: 'Anton', 
                            fontSize: '3vh',
                            borderBottom: 'solid',
                            width: '100%',
                }}> Upcoming Events </h1>
                <Calendar />
            </section>
            <section className="home-vision-container">
                <h1 style={{fontFamily: 'Anton', 
                                fontSize: '3vh',
                                borderBottom: 'solid',
                }}> About Us </h1>  
                <HomeAbout />
            </section>
            <Footer />
        </div>
    )
}


/*
            
           

            
*/