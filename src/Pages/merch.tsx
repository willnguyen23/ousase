import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../Styling/Merch.css'

export default function Merch() {
    return (
        <div className="merch-container">
            <Header />
            <section className="merch-title-container">
                <video src="./Images/sase-vid.mp4" autoPlay muted loop/>
            </section>
            <section className="merch-info-container">
                <h1>Coming Soon...</h1>
            </section>
            <Footer />
        </div>
    )
}