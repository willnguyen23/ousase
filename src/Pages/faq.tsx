import Header from '../Components/Header'
import Footer from '../Components/Footer'
import FAQDropdown from '../Components/FAQDropdown'
import '../Styling/FAQ.css'

export default function FAQ() {
    return (
        <div className="faq-container">
            <Header />
            <section className="faq-title-container">
                <img src="./Images/saseNatcon2025.png" />
                <div>
                    <h1>Frequently Asked Questions</h1>
                </div>
            </section>
            <FAQDropdown />
            <Footer />
        </div>
    )
}