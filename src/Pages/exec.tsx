import Header from '../Components/Header'
import Exec from '../Components/Exec'
import Footer from '../Components/Footer'
import '../Styling/Exec.css'

export default function ExecMembers() {
    return (
        <div className="exec-container">
            <Header />
            <section className="exec-title-container">
                <img src="./Images/exec2026.png" loading="lazy"/>
                <h1>Our 2025-2026 Executive Board</h1>
            </section>
            <Exec />
            <Footer />
        </div>
    )
}