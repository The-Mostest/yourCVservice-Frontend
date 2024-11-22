import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useEffect, useState } from 'react'

import { indexInterview } from '../services/interviewServices'

import styles from './calendar.module.scss'







export default function Calendar() {

    const [interviews, setInterviews] = useState([])


    useEffect(() => {
        const fetchInterviews = async () => {
            try {
                const { data } = await indexInterview()
                setInterviews(data)


            } catch (e) {
                console.log(e)
            }
        }
        fetchInterviews()
    }, [])

    const events = interviews.map((interview) => ({
        title: `Interview with ${interview.company}`,
        start: interview.date,
        end: interview.end_date || null,

    }));






    return (


        <div className={styles.calendarContainer}>
            
        <FullCalendar
            defaultView="dayGridMonth"
            plugins={[dayGridPlugin]}
            events={events}
            />
            </div>
    )
}
