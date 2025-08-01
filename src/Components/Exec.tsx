import { useState } from 'react'

interface MemberImages {
    id: string;
    num: number;
    alt: string;
    src: string;
    info: string[];
}

const memberImages: MemberImages[] = [
    {
        id: "daniel",
        num: 1,
        alt: "daniel park - president",
        src: "./Images/daniel.png",
        info: ["Daniel Park", "President", "Chemical Engineering", "Junior"]
    }, 
    {
        id: "ian",
        num: 2,
        alt: "ian dang - vpx",
        src: "./Images/ian.png",
        info: ["Ian Dang", "Vice President External", "Computer Science", "Junior"]
    },
    {
        id: "donald",
        num: 3,
        alt: "donald nguyen - vpi",
        src: "./Images/donald.png",
        info: ["Donald Nguyen", "Vice President Internal", "Management Information Systems", "Senior"]
    }, 
    {
        id: "sarah",
        num: 4,
        alt: "sarah kim - secretary",
        src: "./Images/sarah.png",
        info: ["Sarah Kim", "Secretary", "Chemical Biosciences", "Junior"]
    }, 
    {
        id: "josh",
        num: 5,
        alt: "josh tu - finance",
        src: "./Images/blank.png",
        info: ["Joshua Tu", "Director of Finance", "Computer Engineering", "Junior"]
    }, 
    {
        id: "janes",
        num: 6,
        alt: "janes le - community",
        src: "./Images/janes.png",
        info: ["Janes Le", "Community Chair", "Computer Engineering", "Junior"]
    },
    {
        id: "dylan",
        num: 7,
        alt: "dylan quan - community",
        src: "./Images/blank.png",
        info: ["Dylan Quan", "Community Chair", "Industrial and Systems Engineering", "Senior"]
    }, 
    {
        id: "anson",
        num: 8,
        alt: "anson tang - marketing",
        src: "./Images/anson.png",
        info: ["Anson Tang", "Marketing Director", "Mechanical Engineering", "Junior"]
    }, 
    {
        id: "don",
        num: 9,
        alt: "don dao - graphics",
        src: "./Images/blank.png",
        info: ["Don Dao", "Graphic Designer", "Information Science and Technology", "Senior"]
    }, 
    {
        id: "angela",
        num: 10,
        alt: "angela vu - creative",
        src: "./Images/blank.png",
        info: ["Angela Vu", "Creative Chair", "Computer Engineering", "Sophomore"]
    },
    {
        id: "melissa",
        num: 11,
        alt: "melissa ng - marketing asst",
        src: "./Images/melissa.png",
        info: ["Melissa Ng", "Marketing Assistant", "Computer Science", "Senior"]
    }, 
    {
        id: "bea",
        num: 12,
        alt: "bea nazareno - intern coor",
        src: "./Images/blank.png",
        info: ["Bea Nazareno", "Intern Coordinator", "Biomedical Engineering", "Senior"]
    }, 
    {
        id: "will",
        num: 13,
        alt: "william nguyen - intern coor.",
        src: "./Images/blank.png",
        info: ["William Nguyen", "Intern Coordinator", "Computer Engineering", "Junior"]
    }, 
    {
        id: "jet",
        num: 14,
        alt: "jet flener - event coor.",
        src: "./Images/blank.png",
        info: ["Jet Flener", "Event Coordinator", "Computer Engineering", "Junior"]
    },
    {
        id: "carina",
        num: 15,
        alt: "carina chen - event coor.",
        src: "./Images/blank.png",
        info: ["Carina Chen", "Event Coordinator", "Biology (Pre-Dent)", "Sophomore"]
    }, 
    {
        id: "grace",
        num: 16,
        alt: "grace chaing - science chair",
        src: "./Images/blank.png",
        info: ["Grace Chiang", "Science Chair", "Pre-Nursing", "Sophomore"]
    }, 
]


export default function Members() { 
    // Utility to chunk an array into groups of a given size
    const chunkArray = <T,>(arr:T[], size:number) => {
        const chunks: T[][] = [];

        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size));
        }

        return chunks;
    };
    
    let rowAmount: number = window.innerWidth < 450 ? 3 : 4;
    rowAmount = window.innerWidth < 250 ? 2 : rowAmount;
    const imageGroups = chunkArray(memberImages, rowAmount);
    const [activeGroupIndex, setActiveGroupIndex] = useState<number | null>(null);
    const [activeMember, setActiveMember] = useState<MemberImages | null>(null);
    
    const handleClick = (groupIndex:number, member:MemberImages): void => {
        if (activeGroupIndex === groupIndex && activeMember?.id === member.id) {
            // If the same image is clicked again, close it
            setActiveGroupIndex(null);
            setActiveMember(null);
        } 
        else {
            setActiveGroupIndex(groupIndex);
            setActiveMember(member);
        }
    };
    
    return (
        <div className = "img-section">
            {imageGroups.map((group, groupIndex) => (
                <div key={groupIndex} className = "img-row">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${rowAmount}, 1fr)`,
                        gap: '15px',
                    }}>
                    {group.map(member => (
                        <img
                            className="member-images"
                            key={member.id}
                            src={member.src}
                            alt={member.alt}
                            onClick={() => handleClick(groupIndex, member)}
                        />
                    ))}
                </div>
    
                {activeGroupIndex === groupIndex && activeMember && (
                    <div style={{
                        marginTop: '15px',
                        padding: '20px',
                        backgroundColor: '#f9f9f9',
                        border: '1px solid #ddd',
                        borderRadius: '6px',
                    }} 
                        className = "info-container">
                            <h1>{activeMember.info[0]}</h1>
                            <p><strong>Position:</strong> {activeMember.info[1]}</p>
                            <p><strong>Major:</strong> {activeMember.info[2]}</p>
                            <p><strong>Year:</strong> {activeMember.info[3]}</p>                                                   
                    </div>
                )}
                </div>
            ))}
        </div>
    );
}