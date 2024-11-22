import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


export default function Calendar({user}) {
    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            eventContent={renderEventContent}
        />
    )
}

function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText = user.interview}</b>
            <i>{eventInfo.event.title}</i>
        </>
    )
}