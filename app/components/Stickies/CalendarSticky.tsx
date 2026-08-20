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

    const month = displayDate.getMonth();
    const year = displayDate.getFullYear();

    const firstDay = new Date(year, month, 1).getDay();

    const daysInMonth = new Date(year, month + 1, 0).getDate();


    const monthName = new Date(year, month).toLocaleString("default", {
        month: "long",
    });

    const days = Array.from(
        { length: daysInMonth },
        (_, index) => index + 1
    );



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
        <div className={"w-sticky h-sticky text-sticky-small bg-blue-400 "}>
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
                        className={`hover:text-main-gray cursor-pointer ${day === date.getDate()  && "bg-main-gray rounded-xl"}`}
                        onClick={() => changeDay(day)}
                    >
                        {String(day).padStart(2, "0")}
                    </span>
                ))}
            </div>

        </div>
           <div className={"absolute mb-3 text-center text-header-sub"}>
               {date.toLocaleTimeString("en-US", {
                   hour: "numeric",
                   minute: "2-digit",
               })}
           </div>
           </>

    )
}