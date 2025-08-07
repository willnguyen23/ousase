import '../Styling/ValueCard.css'
import React, { useState } from 'react';

interface Values {
    value: string;
    info: string;
    image: string;
    id: number;
}

const ourValues: Values[] = [
    {
        value: "Career Growth",
        info: "The Society of Asian Scientists and Engineers (SASE) empowers Asian heritage students and professionals in STEM to achieve career success through a wide range of resources and opportunities. From nationwide networking and mentorship programs to career development workshops and leadership training, SASE helps members build the skills and connections needed to thrive. ",
        image: "./Images/exxonmobil.png",
        id: 1
    },
    {
        value: "Philantrophy",
        info: "The SASE OU Chapter is committed to giving back through meaningful philanthropic efforts that serve both the campus and the greater Norman community. Whether it’s volunteering at local nonprofits, organizing donation drives, or participating in campus-wide service initiatives, our members actively contribute their time and energy to support important causes. These experiences help us grow as compassionate leaders while making a lasting impact beyond the classroom.",
        image: "./Images/saseVolunteer.png",
        id: 2
    },
    {
        value: "Community and Leadership",
        info: "At SASE OU, building a strong, welcoming community is at the heart of everything we do. We create a space where students from all backgrounds can connect, support one another, and grow together—both academically and professionally. Through socials, study sessions, mentorship, and collaborative events, we foster lasting friendships and a sense of belonging that extends throughout our time at OU and beyond.",
        image: "./Images/apida.png",
        id: 3
    },
    {
        value: "Celebrating Culture",
        info: "The SASE OU Chapter proudly celebrates the diverse cultures and identities within our Asian and Pacific Islander community. We host cultural events, share traditions, and participate in campus-wide multicultural celebrations that honor our members’ heritage and stories. By creating opportunities to express and embrace our cultural backgrounds, we empower each other to take pride in who we are—both in and outside of STEM.",
        image: "./Images/celebrateCulture.png",
        id: 4
    }
]

export default function ValueCards() {
    const [activeValue, setActiveValue] = useState<Values | null>(null);

    const handleClick = (value:Values): void => {
        if (activeValue?.id === value.id) {
            setActiveValue(null);
        } 
        else {
            setActiveValue(value);
        }
    };

    return (
        <div className="about-our-chapter-card-container">
            <div className="about-our-chapter-card-row">
                {ourValues.map((item) => (
                    <button key={item.id} onClick={() => handleClick(item)} className="value-button">{item.value}</button>
                ))}
            </div>
            <div className="about-ouwhatr-chapter-card">
                {activeValue && (
                    <div className="about-our-chapter-card-info">
                        <img src={ourValues.find(v => v.id === activeValue.id)?.image} loading="lazy" />
                        <h2>{ourValues.find(v => v.id === activeValue.id)?.value}</h2>
                        <p>{ourValues.find(v => v.id === activeValue.id)?.info}</p>
                     </div>
                )}
            </div>
         </div>
    )
}