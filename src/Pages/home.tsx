import Header from '../Components/Header'
import Carousel from '../Components/ImageCarousel'
import About from '../Components/SaseMission'
import Annoucements from '../Components/Annoucements'
import Footer from '../Components/Footer'

export default function Home() {
    return (
        <>
            <Header />
            <Carousel />
            <About />
            <Annoucements />
            <Footer />
        </>
    )
}