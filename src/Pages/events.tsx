import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Calendar from '../Components/Calendar'
import EventsNow from '../Components/EventsNow'
import '../Styling/Events.css'

export default function Events() {
    return (
        <div className="events-container">
            <Header />
                <section className="events-calendar-container">
                    <Calendar />
                </section>
                <section className="events-this-month-container">
                    <h1 style={{fontFamily: 'Anton', 
                                fontSize: '3vh',
                                borderBottom: 'solid',
                    }}> Events This Month </h1>
                    <EventsNow />
                </section>
                <section className="previous-events-container">
                    <h1 style={{fontFamily: 'Anton', 
                                fontSize: '3vh',
                                borderBottom: 'solid',
                    }}> Previous Events (Spring 2025) </h1>
                </section>
            <Footer />
        </div>
    )
}