type CalendarStickyProps = {
  date: Date;
  setDate: (date: Date) => void;
  displayDate: Date;
  setDisplayDate: (date: Date) => void;
};

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

  const hour = parts.find((p) => p.type === "hour")?.value;
  const minute = parts.find((p) => p.type === "minute")?.value;
  const ampm = parts.find((p) => p.type === "dayPeriod")?.value;

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const month = displayDate.getMonth();
  const year = displayDate.getFullYear();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthName = new Date(year, month).toLocaleString("default", {
    month: "long",
  });

  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  // const previousHour = () => {
  //     const newDate = new Date(date);
  //     newDate.setHours(hours - 1);
  //     setDate(newDate);
  // }

  const nextHour = () => {
    const newDate = new Date(date);
    newDate.setHours(hours + 1);
    newDate.setDate(displayDate.getDate());
    setDate(newDate);
  };

  // const previousMinute = () => {
  //     const newDate = new Date(date);
  //     newDate.setMinutes(minutes - 1);
  //     setDate(newDate);
  // }

  const nextMinute = () => {
    const newDate = new Date(date);
    newDate.setMinutes(minutes + 1);
    setDate(newDate);
  };

  const changeAMPM = () => {
    const newDate = new Date(date);

    if (newDate.getHours() >= 12) {
      newDate.setHours(hours - 12);
    } else {
      newDate.setHours(hours + 12);
    }

    setDate(newDate);
  };

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
    newDate.setFullYear(year);
    setDate(newDate);
  };

  return (
    <>
      <div className={"w-sticky h-sticky text-sticky-small bg-reminder-blue "}>
        <div className="flex justify-center  mt-13 text-center">
          <button
            onClick={previousMonth}
            disabled={new Date(year, month) < new Date()}
            className={`hover:text-main-gray ${new Date(year, month) < new Date() ? "text-gray-400 cursor-not-allowed" : "cursor-pointer"} `}
          >
            {"<\u00A0 \u00A0"}
          </button>
          <span
            className={`w-53 ${year < date.getFullYear() && "cursor-not-allowed text-gray"}`}
          >
            {monthName} {year}
          </span>
          <button
            onClick={nextMonth}
            className="hover:text-main-gray cursor-pointer"
          >
            {"\u00A0 \u00A0>"}
          </button>
        </div>

        <div className="grid grid-cols-7 text-sticky-small place-items-center">
          {Array.from({ length: firstDay }).map((_, index) => (
            <span key={`empty-${index}`} />
          ))}
          {days.map((day) => (
            <button
              key={day}
              className={`
                         pl-2 pr-2 
                        ${day === date.getDate() && month === date.getMonth() && year === date.getFullYear() ? " bg-reminder-blue-accent rounded-full" : "hover:text-main-gray"} 
                        ${day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear() ? "bg-gray-400  rounded-full" : ""}
                        ${new Date(year, month, day + 1) < new Date() ? "cursor-not-allowed text-gray-400" : "cursor-pointer"}          
                        `}
              onClick={() => changeDay(day)}
              disabled={new Date(year, month, day + 1) < new Date()}
            >
              {String(day).padStart(2, "0")}
            </button>
          ))}
        </div>
      </div>

      <div className="text-header-sub absolute bottom-1 flex select-none gap-1">
        <div onClick={() => nextHour()} className={"hover:text-main-gray"}>
          {hour}
        </div>
        :
        <div onClick={() => nextMinute()} className={"hover:text-main-gray"}>
          {minute}
        </div>
        <div onClick={() => changeAMPM()} className={"hover:text-main-gray"}>
          {ampm}
        </div>
      </div>
    </>
  );
}
