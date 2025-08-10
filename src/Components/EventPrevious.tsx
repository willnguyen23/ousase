import '../Styling/EventCarousel.css'
import Slider from "react-slick";

interface previousEvents {
    title: string,
    picture: string
}

const previousEvents: previousEvents[] = [
    {
        title: "SASE Lunar New Year GBM",
        picture: "./Images/saseLNY.jpg"
    },
    {
        title: "Regional Conference in Austin, Texas",
        picture: "./Images/regcon.png"
    },
    {
        title: "SASE Competes in the Apida Olympics",
        picture: "./Images/apida.png"
    },
    {
        title: "GBM with ExxonMobil",
        picture: "./Images/exxonmobil.png"
    },
    {
        title: "SASE in AASA's Annual Asian Royalty",
        picture: "./Images/ar.JPG"
    },
    {
        title: "Big Event",
        picture: "./Images/bigEvent.jpg"
    },
    {
        title: "Nature Walk to Wrap Up Science Week",
        picture: "./Images/scienceWeek.jpg"
    },
]



export default function Carousel() {
    let settings = {
        cssEase: 'linear',
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0,
        slidesToShow: 3,
        infinite: true,
        arrows: false,
        draggable: false,
        swipe: false,
        fade: false,
        rtl: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        centerPadding: '10%',
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    arrows: true,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                }
            }
        ]
    }

    return (
        <>
            <div className="previous-events-slider-container">  
                <Slider {...settings}>
                    { 
                        previousEvents.map((item, index) => {
                                return (
                                <div key={index} className="previous-events-items">
                                    <div className="previous-events-image-container">
                                        <img src={item.picture} loading="lazy" />
                                    </div>
                                    <h3>{item.title}</h3>
                                </div>
                            )
                        })
                    }
                </Slider>     
            </div>
        </>
    )
}