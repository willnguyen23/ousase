import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ValueCards from '../Components/ValueCards'
import '../Styling/About.css'



export default function AboutUs() {
    return (
        <div className="about-us-container">
            <Header />
            <section className="about-title-container">
                <video src="./Images/sase-hype-vid.mp4" loop autoPlay muted />
            </section>
            <section className="about-all-sase-container">
                <div>
                    <h1>What is SASE?</h1>
                    <p>The <b>Society of Asian Scientists and Engineers</b> (SASE) is an organization that was founded in 2007 with the goal of <b>helping Asian heritage scientific and engineering professionals achieve their full potential.</b> SASE is known its success in talent and leadership development in the science, engineering, and technology fields. Currently, SASE has...</p>
                    <ul style={{listStylePosition: 'inside'}}>
                        <li style={{padding: '2% 0'}}><b>175+ Leaders</b> Across 70+ Asian ERGs</li>
                        <li style={{padding: '2% 0'}}><b>86 Collegiate Chapters</b> in the US</li>
                        <li style={{padding: '2% 0'}}> and chapters in at least <b>30 States</b></li>
                    </ul>    
                </div>
                <img src="./Images/regcon.png" />
            </section>
            <section className="about-our-chapter-container">
                <div className="about-our-chapter-info">
                    <h1>Our Chapter</h1>
                    <p>At the University of Oklahoma, our chapter supports the mission of the national organization. However, we have cultivated our own core values to reflect the community and culture of our campus. This identity not only distinguishes us from other organizations at OU, but also from other chapters within SASE. Our chapter identity is based on...</p>
                </div>
                <ValueCards />
            </section>
            <Footer />
        </div>
    )
}