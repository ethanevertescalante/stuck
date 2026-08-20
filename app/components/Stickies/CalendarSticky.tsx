type CalendarStickyProps = {
    date: Date,
    setDate: (date: Date) => void,
    displayDate: Date,
    setDisplayDate: (date: Date) => void,
}


export default function CalendarSticky({
    date,
    setDate,
    displayDate,
    setDisplayDate,
                                       }: CalendarStickyProps) {


    const parts = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
    }).formatToParts(date);

    const hour = parts.find(p => p.type === "hour")?.value;
    const minute = parts.find(p => p.type === "minute")?.value;
    const ampm = parts.find(p => p.type === "dayPeriod")?.value;


    const hours = date.getHours();
    const minutes = date.getMinutes();
    const month = displayDate.getMonth();
    const year = displayDate.getFullYear();

    console.log(hours)

    const firstDay = new Date(year, month, 1).getDay();

    const daysInMonth = new Date(year, month + 1, 0).getDate();


    const monthName = new Date(year, month).toLocaleString("default", {
        month: "long",
    });

    const days = Array.from(
        { length: daysInMonth },
        (_, index) => index + 1
    );

    const previousHour = () => {
        const newDate = new Date(date);
        newDate.setHours(hours - 1);
        setDate(newDate);
    }

    const nextHour = () => {
        const newDate = new Date(date);
        newDate.setHours(hours + 1);
        newDate.setDate(displayDate.getDate());
        setDate(newDate);
    }

    const previousMinute = () => {
        const newDate = new Date(date);
        newDate.setMinutes(minutes - 1);
        setDate(newDate);
    }

    const nextMinute = () => {
        const newDate = new Date(date);
        newDate.setMinutes(minutes + 1);
        setDate(newDate);
    }

    const changeAMPM = () => {
        const newDate = new Date(date);

        if(newDate.getHours() >= 12){
            newDate.setHours(hours-12)
        }else{
            newDate.setHours(hours+12)
        }

        setDate(newDate);
    }

    const previousMonth = () => {
        const newDate = new Date(displayDate);
        newDate.setMonth(newDate.getMonth() - 1);
        setDisplayDate(newDate);
    };

    const nextMonth = () => {
        const newDate = new Date(displayDate);
        newDate.setMonth(newDate.getMonth() + 1);
        setDisplayDate(newDate);
    };

    const changeDay = (day: number) => {
        const newDate = new Date(date);
        newDate.setMonth(displayDate.getMonth());
        newDate.setDate(day);
        newDate.setFullYear(year)
        setDate(newDate)
    }

    return (
       <>
        <div className={"w-sticky h-sticky text-sticky-small bg-reminder-blue "}>
            <div className="flex justify-center  mt-13 text-center">
                <button onClick={previousMonth} className="hover:text-main-gray cursor-pointer">{"<\u00A0 \u00A0"}</button>
                <span className="w-53">
                    {monthName} {year}
                </span>
                <button onClick={nextMonth} className="hover:text-main-gray cursor-pointer">{"\u00A0 \u00A0>"}</button>
            </div>

            <div className="grid grid-cols-7 text-sticky-small place-items-center">
                {Array.from({ length: firstDay }).map((_, index) => (
                    <span key={`empty-${index}`} />
                ))}


                {days.map((day) => (
                    <span
                        key={day}
                        className={`cursor-pointer pl-2 pr-2 ${day === date.getDate() && month === date.getMonth() && year === date.getFullYear()  ? " bg-reminder-blue-accent rounded-full" : "hover:text-main-gray"} ${day === new Date().getDate() && month === new Date().getMonth() ?  "bg-gray-400  rounded-full":""}`}

                        onClick={() => changeDay(day)}
                    >
                        {String(day).padStart(2, "0")}
                    </span>
                ))}
            </div>

        </div>

               <div className="text-header-sub absolute bottom-1 flex select-none gap-1">
                   <div onClick={() => nextHour()} className={"hover:text-main-gray"}>{hour}</div>:
                   <div onClick={() => nextMinute()} className={"hover:text-main-gray"}>{minute}</div>
                   <div onClick={() => changeAMPM()} className={"hover:text-main-gray"}>{ampm}</div>
               </div>
           </>

    )
}