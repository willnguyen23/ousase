import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../Styling/Annoucements.css'

interface Annoucements {
    id: string;
    image: string;
    header: string;
    caption: string;
    link: string;
    action: string;
}

const annoucements: Annoucements[]  = [
    {
        id: "intern",
        image: "./Images/interns.png",
        header: "Become A Sase Intern!",
        caption: "Are you interested in making an impact, gaining hands-on experience, and become more involved on campus? Apply to be a SASE intern!",
        link: "",
        action: ""
    },
    {
        id: "natcon",
        image: "./Images/saseNatcon2025.png",
        header: "SASE National Convention",
        caption: "Travel with us to Pittsburgh from October 2-5 for SASE's annual national convention. Here, you will network with professionals and other like-minded individuals.",
        link: "https://forms.gle/5dZeCd7Gfkxhgk8r6",
        action: "Click here if interested!"
    },
    {
        id: "first day of school",
        image: "./Images/ou.png",
        header: "First Day of the Fall Semester",
        caption: "August 25th is the first day of the 2025 fall semester.",
        link: "",
        action: ""
    },
    {
        id: "first gbm",
        image: "./Images/gbm1.png",
        header: "First General Body Meeting",
        caption: "Come join us and ExxonMobil for our first general body and professional developement meeting of the semester. Soba Noodles will be served!",
        link: "",
        action: "Click here to apply!"
    },
]

export default function AnnoucementSlider() {
    let settings = {
        dots: true,
        autoplay: true,
        centerMode: true,
        autoplaySpeed: 3000,
        centerPadding: '0%',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    arrows: true,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                }
            }
        ]
    }

    return (
        <>
            <div className="annoucement-container">    
                    <Slider {...settings}>
                        { 
                            annoucements.map((item, index) => {
                                return (
                                    <div key={index} className="indiv-annoucement">
                                        <h1>{item.header}</h1>
                                        <img src={item.image} />
                                        <div style={{height: '10vh'}}>
                                            <p>{item.caption}</p>
                                            <p style={{paddingBottom: '10%'}}>{(item.link !== '') && <a href={item.link} target="_blank"><b>{item.action}</b></a>}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>     
            </div>
        </>
    )
}