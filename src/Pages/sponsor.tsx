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
                        We are the <b>Society of Asian Scientists and Engineers</b> here at the University of Oklahoma. As one of the <b>largest Asian-interest and STEM-focused organizations</b> on campus, we celebrate Asian culture with our members who 
                        come from diverse STEM and cultural backgrounds.  Our goals are to <u>cultivate professionalism</u>, <u>develop cultural awareness</u>, and <u>serve our local community</u>. Our mission is to provide our membership with the knowledge, 
                        experience, and connections necessary to entering the professional world. <br /><br /> Diversity-focused organizations such as ours serve a niche but crucial role on campus.  Oklahoma, particularly Oklahoma City, served as a 
                        major destination for refugees during the Vietnam War.  These refugees, sponsored by Oklahoma’s Christian institutions, were able to establish themselves in the community thanks to the help of many generous Oklahomans.  
                        This means that the majority of our members are 1st and 2nd-generation students, along with a growing number of international students.  OU SASE builds that supportive community and safe space for individuals with these shared experiences. 
                        </p>
                    </div>
                </section>
                <section className="our-impact">
                    <img src="./Images/saseLNY.jpg" id="saseLNY"/>
                    <h1>Our Impact</h1>
                    <p>Members of our executive board showcase our chapter's impact on their careers, specifically how the skills that are developed in SASE apply to our members' future. Last summer, we had executive members intern for... </p>
                    <ul>
                        <li>Valero</li>
                        <li>Amazon</li>
                        <li>American Fidelity</li>
                        <li>Paycom</li>
                        <li>OneOK</li>
                    </ul>
                    <p>Additionally, events and general body meetings create opportunity for our exec and members to pursue their desired careers.</p>
                    <ul>
                        <li>We brought <b>20 Exec/General Members</b> to SASE's 2025 National Convention, giving them an opportunity to network with companies and get internships. </li>
                        <li>We brought <b>30 Exec/General Members</b> to SASE's Regional Convention to help represent our chapter. </li>
                        <li>General body meetings had an average of 88 members.</li>
                        <li>Recruited companies, like EXXON Mobil and Google, to give informationals to individuals that were invested in their careers.</li>                   
                    </ul>
                    <p>Our engagement has also improved, highlighting our presence in the Asian-American and STEM community on our campus.</p>
                    <ul>
                        <li>We are expecting <b>125 paid members</b> this upcoming school year.</li>
                        <li>Our chapter has also made about 200,000 engagements across our social media platforms.</li>
                    </ul>
                </section>
                <section className="future-goals">
                    <img src="./Images/saseNatcon2025.jpg" id="natcon"></img>
                    <div className="impact">
                        <h1>Future Goals</h1>
                        <p>This year, we plan on being ambitious. We want to do the following things.</p>
                        <ul>
                            <li>Host 4 mandatory events with other organizations, including the Kaleo Foundation, ILNA, OU Food Bank, Calm Waters, Senior Homes, and Integris Hospital.</li>
                            <li>Increase interships turnout among our exec and general body members.</li>
                            <li>Have our intersn, work with an Oklahoma state representaitve to raise awareness on policies regarding engineering.</li>
                        </ul>
                    </div>
                    <h2 style={{textAlign:'center'}}>With your help, we can accomplish these goals. If you are interested in sponsoring our chapter, click <a href="./Images/sponsorship_packet.pdf" target="_blank" download>here</a>.</h2>
                </section>
        </div>
        <Footer />
        </>
    )
}