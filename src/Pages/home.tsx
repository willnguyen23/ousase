import Header from '/src/Components/Header'
import Carousel from '/src/Components/ImageCarousel'
import About from '/src/Components/AboutSase'
import Annoucements from '/src/Components/Annoucements'
import Footer from '/src/Components/Footer'

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