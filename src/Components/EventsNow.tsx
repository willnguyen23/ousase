import '../Styling/Events.css'
import React, { useState } from 'react'

interface Events {
    title: string,
    description: string,
    picture: string,
    id: number
}

const eventsThisMonth: Events[] = [
    {
        title: "New Engineers' Welcome",
        description: "A signature kickoff event hosted by the Gallogly College of Engineering to warmly welcome incoming engineering students to the OU community. Held at the start of the fall semester, this high-energy event introduces first-year students to their peers, faculty, and staff in a fun, engaging environment.",
        picture: "./Images/newEngineerWelcome.png",
        id: 1
    },
    {
        title: "OU Involvement Fair",
        description: "The OU Involvement Fair is one of the largest student engagement events of the year at the University of Oklahoma. Hosted early in the fall semester, this vibrant fair gives students the opportunity to explore hundreds of student organizations, campus departments, and leadership opportunities all in one place.",
        picture: "./Images/involvementFair.png",
        id: 2
    },
    {
        title: "Shell Fall Fest",
        description: "The Shell Fall Festival, hosted by the Gallogly College of Engineering at the University of Oklahoma, is a seasonal celebration that blends fun, food, and community-building for engineering students, faculty, and staff. Sponsored by Shell, this event takes place in the fall and offers a relaxed break from coursework with activities like",
        picture: "./Images/fallFest.jpg",
        id: 3
    }
]

export default function EventsNow() {
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const [isFlipped, setIsFlipped] = useState<Events | null>(null);
    
    const handleClick = (index: number, card: Events): void => {
        setActiveCard(index);

        if (isFlipped?.id === card.id) {
            setIsFlipped(null);
        }
        else {
            setIsFlipped(card);
        }
    };

    return ( 
        <div className="events-now-container">
            {eventsThisMonth.map((item, value) => (
                <div className="events-now-item" onClick={() => handleClick(value, item)} key={value}>
                    {activeCard === value && isFlipped ?
                        <div className="back-side">
                            <p>{item.description}</p>
                        </div>
                    :
                        <div className="front-side">
                            <div className="events-now-image-container">
                                <img src={item.picture} />
                            </div>
                            <h1 style={{fontSize: 'clamp(1.5vw, 1.5rem, 4vw'}}>{item.title}</h1>    
                        </div>
                    }   
                </div>
            ))}
        </div>
    )
}

{/*create an animation that when hovered it will turn around and show info*/}