import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../Styling/Sponsor.css'

export default function Sponsor() {
    return (
        <div className="sponsor-container">
            <Header />
            <section className="sponsor-title-container">
                <img src="./Images/saseHalloween.jpg" loading="lazy"/>
                <div>
                    <h1>Sponsor Info</h1>
                </div>
            </section>
            <section className="who-are-we">
                <h1 style={{fontFamily: 'Anton', 
                            fontSize: '3vh',
                            borderBottom: 'solid',
                            textAlign: 'center',
                }}>Who Are We?</h1>
                <div className="who-are-we-content">
                    <div className="who-are-we-text">
                        <p>
                            We are the <b>Society of Asian Scientists and Engineers</b> here at the University of Oklahoma. As one of the <b>largest Asian-interest and STEM-focused organizations</b> on campus, we celebrate Asian culture with our members who 
                            come from diverse STEM and cultural backgrounds.  Our goals are to <u>cultivate professionalism</u>, <u>develop cultural awareness</u>, and <u>serve our local community</u>. Our mission is to provide our membership with the knowledge, 
                            experience, and connections necessary to entering the professional world. <br /><br /> Diversity-focused organizations such as ours serve a niche but crucial role on campus.  Oklahoma, particularly Oklahoma City, served as a 
                            major destination for refugees during the Vietnam War.  These refugees, sponsored by Oklahoma’s Christian institutions, were able to establish themselves in the community thanks to the help of many generous Oklahomans.  
                            This means that the majority of our members are 1st and 2nd-generation students, along with a growing number of international students.  OU SASE builds that supportive community and safe space for individuals with these shared experiences. 
                        </p>
                    </div>
                    <img src="./Images/random.jpg" loading="lazy" />
                </div>
            </section>
            <section className="our-impact">
            <h1 style={{fontFamily: 'Anton', 
                            fontSize: '3vh',
                            borderBottom: 'solid',
                            textAlign: 'center',
                }}>Our Impact</h1>
                <p>Members of our executive board showcase our chapter's impact on their careers, specifically how the skills that are developed in SASE apply to our members' future. Last summer, we had executive members intern for... </p>
                <div className="wrap-container">
                    <div className="exec-intern-item">
                        <div className="exec-intern-item-image-container">
                            <img src="./Images/af.png" loading="lazy" />
                        </div>
                        <h2>American Fidelity</h2>
                    </div>
                    <div className="exec-intern-item">
                        <div className="exec-intern-item-image-container">
                            <img src="./Images/amazon.png" loading="lazy" />
                        </div>
                        <h2>Amazon</h2>
                    </div>
                    <div className="exec-intern-item">
                        <div className="exec-intern-item-image-container">
                            <img src="./Images/oneok.png" loading="lazy" />
                        </div>
                        <h2>OneOK</h2>
                    </div>
                    <div className="exec-intern-item">
                        <div className="exec-intern-item-image-container">
                            <img src="./Images/paycom.png" loading="lazy" />
                        </div>
                        <h2>Paycom</h2>
                    </div>
                    <div className="exec-intern-item">
                        <div className="exec-intern-item-image-container">
                            <img src="./Images/valero.png" loading="lazy" />
                        </div>
                        <h2>Valero</h2>
                    </div>
                </div>
                <p>Additionally, events and general body meetings create opportunity for our exec and members to pursue their desired careers.</p>
                <div className="wrap-container">
                    <div className="accomplishment-item">
                        <div className="accomplishment-item-image-container">
                            <img src="./Images/saseNatcon2025.png" loading="lazy" />
                        </div>
                        <p>We brought <b>20 Exec/General Members</b> to SASE's 2025 National Convention, giving them an opportunity to network with companies and get internships. </p>
                    </div>
                    <div className="accomplishment-item">
                        <div className="accomplishment-item-image-container">
                            <img src="./Images/regcon.png" loading="lazy" />
                        </div>
                        <p>We brought <b>30 Exec/General Members</b> to SASE's Regional Convention to help represent our chapter.</p>
                    </div>
                    <div className="accomplishment-item">
                        <div className="accomplishment-item-image-container">
                            <img src="./Images/gbm1.JPG" loading="lazy" />
                        </div>
                        <p>General body meetings had an average of 88 members.</p>
                    </div>
                    <div className="accomplishment-item">
                        <div className="accomplishment-item-image-container">
                            <img src="./Images/exxonmobil.png" loading="lazy" />
                        </div>
                        <p>Recruited companies, like EXXON Mobil and Google, to give informationals to individuals that were invested in their careers.</p>
                    </div>
                </div>
                <p>Our engagement has also improved, highlighting our presence in the Asian-American and STEM community on our campus.</p>
                <div className="wrap-container">
                    <div className="more-accomplishment-item">
                        <div className="more-accomplishment-item-image-container">
                            <img src="./Images/expectedMemb.JPG" loading="lazy" />
                        </div>
                        <p>We are expecting <b>125 paid members</b> this upcoming school year.</p>
                    </div>
                    <div className="more-accomplishment-item">
                        <div className="more-accomplishment-item-image-container">
                            <video src="./Images/engagement.mp4" autoPlay muted playsInline loop/>
                        </div>
                        <p>Our chapter has also made about <b>200,000 engagements</b> across our social media platforms.</p>
                    </div>
                </div>
            </section>
            <section className="future-goals">
                <h1 style={{fontFamily: 'Anton', 
                            fontSize: '3vh',
                            borderBottom: 'solid',
                            textAlign: 'center',
                }}>Future Goals</h1>
                <p>This year, we plan on being ambitious. We want to do the following things.</p>
                <div className="wrap-container">
                    <div className="future-goals-item">
                        <div className="future-goals-item-image-container">
                            <img src="./Images/volunteer.png" />
                        </div>
                        <p>Host 4 mandatory events with other organizations, including the Kaleo Foundation, ILNA, OU Food Bank, Calm Waters, Senior Homes, and Integris Hospital.</p>
                    </div>
                    <div className="future-goals-item">
                        <div className="future-goals-item-image-container">
                            <img src="./Images/internship.png" />
                        </div>
                        <p>Increase intership turnout among our exec and general body members through funded trips to conferences and networking opportunties.</p>
                    </div>
                    <div className="future-goals-item">
                        <div className="future-goals-item-image-container">
                            <img src="./Images/law.png" />
                        </div>
                        <p>Executed an intern-led project with an Oklahoma state representative to raise awareness on policies regarding engineering and make a lasting impact.</p>
                    </div>
                </div>
            <h3 style={{textAlign:'center'}}>With your help, we can accomplish these goals. If you are interested in sponsoring our chapter, click <a href="./Images/sponsorship_packet.pdf" target="_blank" download>here</a>.</h3>
            </section>
        <Footer />
        </div>
    )
}