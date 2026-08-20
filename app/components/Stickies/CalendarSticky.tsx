import {DateTime} from "luxon";

type CalendarStickyProps = {
    date: DateTime,
    setDate: (date: DateTime) => void,
}


export default function CalendarSticky() {
    return (
        <p className="text-header-main">hello</p>
    )
}