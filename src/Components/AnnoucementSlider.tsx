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
        header: "Tech Talk!",
        caption: "Come join us for our first professional developement meeting of the semester. Food will be catered and served!",
        link: "",
        action: "Click here to apply!"
    },
]

export default function AnnoucementSlider() {
    let settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
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
            <div className="annoucement-container">  
                <Slider {...settings}>
                    { 
                        annoucements.map((item, index) => {
                                return (
                                <div key={index} className="indiv-annoucement">
                                    <h1>{item.header}</h1>
                                    <img src={item.image} />
                                    <div className = "indiv-annoucement-text">                                            
                                        <p>{item.caption}</p>
                                    </div>
                                    <div className = "indiv-call-to-action">
                                        <p>{(item.link !== '') ? <b><a href={item.link}>{item.action}</a></b> : <b style={{color: 'rgb(242, 241, 241)'}}>""</b>}</p>
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