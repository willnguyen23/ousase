import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react"
import { createViewMonthGrid, CalendarApp } from '@schedule-x/calendar'
import "@schedule-x/theme-default/dist/calendar.css"

export default function Calendar () {
    const calendar: CalendarApp = useCalendarApp({
        views: [
            createViewMonthGrid()
        ],
        events: [
            {
                id: 1,
                title: "New Engineers' Welcome",
                start: "2025-08-20 12:00",
                end: "2025-08-20 15:00",
            },
            {
                id: 2,
                title: "OU Involvement Fair",
                start: "2025-08-23 19:00",
                end: "2025-08-23 21:00",
            },
            {
                id: 3,
                title: "Shell Fall Fest",
                start: "2025-08-29 11:00",
                end: "2025-08-29 14:00",
            },
            {
                id: 4,
                title: "First General Body Meeting with ExxonMobil",
                start: "2025-09-10",
                end: "2025-09-10",
            },
            {
                id: 5,
                title: "Engineering Career Fair",
                start: "2025-09-18",
                end: "2025-08-18",
            },
            {
                id: 6,
                title: "Second GBM with AAHA",
                start: "2025-09-24",
                end: "2025-09-24",
            },
            {
                id: 7,
                title: "NatCon",
                start: "2025-10-03",
                end: "2025-10-05",
            },
            {
                id: 8,
                title: "Volunteer Event",
                start: "2025-10-12",
                end: "2025-10-12",
            },
            {
                id: 9,
                title: "Third GBM",
                start: "2025-10-22",
                end: "2025-10-22",
            },
            {
                id: 10,
                title: "Tunnels of Terror",
                start: "2025-10-29",
                end: "2025-10-29",
            },
            {
                id: 11,
                title: "SASE Spirit Week",
                start: "2025-11-03",
                end: "2025-11-07",
            },
            {
                id: 12,
                title: "SASE Outdoor KBBQ Social",
                start: "2025-11-16",
                end: "2025-11-16",
            },
            {
                id: 13,
                title: "Fourth GBM",
                start: "2025-11-19",
                end: "2025-11-19",
            },
            {
                id: 14,
                title: "Thanksgiving Break",
                start: "2025-11-26",
                end: "2025-11-28",
            },
            {
                id: 15,
                title: "Finals Week",
                start: "2025-12-15",
                end: "2025-12-19",
            },
            {
                id: 16,
                title: "Fifth GBM",
                start: "2026-01-28",
                end: "2026-01-28",
            },
            {
                id: 17,
                title: "Volunteer Event",
                start: "2026-02-11",
                end: "2026-02-11",
            },
            {
                id: 18,
                title: "Sixth GBM",
                start: "2026-02-18",
                end: "2026-02-18",
            },
            {
                id: 19,
                title: "Spring Break",
                start: "2026-03-16",
                end: "2026-03-20",
            },
            {
                id: 20,
                title: "Seventh GBM",
                start: "2026-03-25",
                end: "2026-03-25",
            },
            {
                id: 21,
                title: "Big Event",
                start: "2026-04-05",
                end: "2026-04-05",
            },
            {
                id: 22,
                title: "Last GBM",
                start: "2026-04-15",
                end: "2026-04-15",
            },
        ],
        selectedDate: new Date().toISOString().split("T")[0],
    })

    return (
        <>
            <ScheduleXCalendar calendarApp={calendar} />
        </>
    )
}