import '../Styling/Footer.css'

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="ou-sase-info">
                <h4><b>Society of Asian Scientists and Engineers @ University of Oklahoma</b></h4>
                <p>660 Parrington Oval, Norman, OK 73019</p>
                <p><a href="mailto:ou@saseconnect.org">ou@saseconnect.org</a></p>
            </div>
            <div className="socials-container">
                <h4><b>Follow Our Socials:</b></h4>
                <div className="socials">
                    <a href="https://ousase.carrd.co/" target="_blank"><img src="../Images/link.png" loading="lazy"/></a>
                    <a href="https://www.instagram.com/ou.sase/" target="_blank"><img src="../Images/insta.png" loading="lazy"/></a>
                    <a href="https://discord.gg/5ZRuAVvsJB" target="_blank"><img src="../Images/discord.png" loading="lazy"/></a>
                    <a href="https://www.linkedin.com/in/ou-sase/" target="_blank"><img src="../Images/linkedin.png" loading="lazy"/></a>
                </div>
            </div>
        </footer>
    )
}