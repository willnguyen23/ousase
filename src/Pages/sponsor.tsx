import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function Sponsor() {
    return (
        <>
            <Header />
            <div className="sase-info-container">
                <section className="who-are-we">
                    <img src="./Images/saseHalloween.jpg" />
                    <div>
                        <h1>Who Are We?</h1>
                        <p>
                        We are the <b>Society of Asian Scientists</b> and Engineers here at the University of Oklahoma. As one of the <b>largest Asian-interest and STEM-focused organizations</b> on campus, we celebrate Asian culture with our members who 
                        come from diverse STEM and cultural backgrounds.  Our goals are to <u>cultivate professionalism</u>, <u>develop cultural awareness</u>, and <u>serve our local community</u>. Our mission is to provide our membership with the knowledge, 
                        experience, and connections necessary to entering the professional world. <br /><br /> Diversity-focused organizations such as ours serve a niche but crucial role on campus.  Oklahoma, particularly Oklahoma City, served as a 
                        major destination for refugees during the Vietnam War.  These refugees, sponsored by Oklahoma’s Christian institutions, were able to establish themselves in the community thanks to the help of many generous Oklahomans.  
                        This means that the majority of our members are 1st and 2nd-generation students, along with a growing number of international students.  OU SASE builds that supportive community and safe space for individuals with these shared experiences. 
                        </p>
                    </div>
                </section>
                <section className="about-our-chapter">
                    <img src="./Images/saseLNY.jpg" id="saseLNY"/>
                    <h1 style={{textAlign: 'center'}}>More About Us</h1>
                    <div className="first-graphs">
                        <img src="./Images/sase_year.png" alt="graph of sase years"/>
                        <ul id="other-engagements"><h2>Our Members Are Also Active In...</h2>
                            <li>Asian American Student Association</li>
                            <li>Asian American Health Assocation</li>
                            <li>Korean Student Assocation</li>
                            <li>Hacklahoma</li>
                            <li>Biomedical Engineering Society</li>
                            <li>OU AI/ML Club</li>
                            <li>Sooner Rover Team</li>
                            <li>Girls Who Code</li>
                            <li>Society of Women Engineers</li>
                            <li>Undergraduate Research Labs</li>
                            <li>Civic Orchestra</li> 
                            <li>Crimson Chords</li>
                            <li>And much more...</li>
                        </ul>
                    </div>
                    <div className="second-graphs">
                        <ul id="minors"><h2>Our Members Also Pursue Minors In...</h2>
                            <li>Japanese</li>
                            <li>Environmental Sustainability</li>
                            <li>Health, Medicine, and Society</li>
                            <li>Mathematics</li>
                            <li>Art History</li>
                            <li>Marketing</li>
                            <li>And more...</li>
                        </ul>
                        <img src="./Images/sase_major.png" alt="graph of sase majors" />
                    </div>
                </section>
                <section className="our-impact">
                    <img src="./Images/saseNatcon2025.jpg" id="natcon"></img>
                    <div className="impact">
                        <h1>Our Impact on the Community</h1>
                        <ul>
                            <li>We brought <b>20 Exec/General Members</b> to SASE's 2025 National Convention, giving them an opportunity to network with companies and get internships. </li>
                            <li>We brought <b>30 Exec/General Members</b> to SASE's Regional Convention to help represent our chapter. </li>
                            <li>General body meetings had an average of 88 members.</li>
                            <li>Recruited companies, like EXXON Mobil and Google, to give informationals to individuals that were invested in their careers.</li>
                            <li>Collaborations with UI/UX, Hacklahoma, VSA, KSA, and AASA to further build a community on campus. </li>
                        </ul>
                    </div>
                    <h2 style={{textAlign:'center'}}>If you are interested in sponsoring our chapter, click <a href="./Images/sponsorship_packet.pdf" target="_blank" download>here</a>.</h2>
                </section>
        </div>
        <Footer />
        </>
    )
}