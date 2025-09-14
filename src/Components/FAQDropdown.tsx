import React, { useState } from 'react';

interface QandA {
    question: string,
    answer: string
    id: number
}

const questions: QandA[] = [
    {
        question: "Do I have to be of Asian heritage to be a part of SASE?",
        answer: "No, you do not have to be of Asian heritage to be a part of SASE. SASE is open to everyone who supports its mission of promoting diversity and inclusion in STEM fields. We welcome individuals of all backgrounds who are interested in professional development, leadership, and community engagement.",
        id: 1
    },
    {
        question: "Do I have to be a STEM major to join SASE?",
        answer: "No, while SASE focuses on supporting those in STEM fields, students of all majors are welcome! The organization offers professional development, networking, and leadership opportunities that are valuable to everyone.",
        id: 2
    },
    {
        question: "What makes SASE at the University of Oklahoma unique?",
        answer: "SASE at OU is a tight-knit and inclusive community focused on helping students grow personally and professionally. We collaborate with other student orgs, host culturally engaging events, and connect students to real career opportunities through workshops and conferences.",
        id: 3
    },
    {
        question: "Do I need to attend every meeting to be considered an active member?",
        answer: "Not at all. While we love consistent participation, we understand students have busy schedules. We offer a range of events—social, professional, and volunteer-based—so you can get involved in the way that works best for you.",
        id: 4
    },
    {
        question: "How do I join the OU chapter of SASE?",
        answer: "You can click ${<Link>here</Link>}",
        id: 5
    },
]


export default function FAQ() {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
    const [isDropped, setIsDropped] = useState<QandA | null>(null);

    const handleClick = (index: number, question: QandA): void => {
        setActiveQuestion(index);
        
        if (isDropped?.id === question?.id) {
            setIsDropped(null);
        }
        else {
            setIsDropped(question);
        }
    }

    return (
        <>
            <div className="faq-dropdown-container">
                {questions.map((item, value) => (
                    <div className="faq-dropdown-item" onClick={() => handleClick(value, item)} key={value}>
                        <div>
                            <p>{item.question}</p>
                        </div>
                        {activeQuestion === value && isDropped && (
                                <div>
                                    <p>{item.answer}</p>
                                </div>
                            )
                        }
                    </div>
                ))}
            </div>
        </>
    )
}