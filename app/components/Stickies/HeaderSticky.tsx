import { StickyType } from "@/app/generated/prisma/enums";
import {
  formatStickyDate,
  formatStickyDateTime,
  formatStickyTime,
} from "@/lib/formatSticky";
import { ChangeEvent, useRef, useState } from "react";
import { StickyProps } from "@/lib/StickyProps";
import type { FocusEvent } from "react";
import CalendarSticky from "@/app/components/Stickies/CalendarSticky";
import { DaysOfWeek } from "@/lib/DaysOfWeek";
import { createSticky } from "@/lib/sticky";

export default function HeaderSticky({
  title,
  setTitle,
  date,
  setDate,
  stickyType,
  stickyConfig,
  headerSticky,
}: StickyProps) {


  const size = headerSticky
    ? stickyConfig.size.header
    : stickyConfig.size.normal;
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const addToBoardCheck = title !== stickyConfig.title && title !== "";
  const [showCalendar, setShowCalendar] = useState(false);
  const [displayDate, setDisplayDate] = useState<Date>(
    new Date(date || new Date()),
  );

  console.log(title, date, stickyType)

  const calendar = () => {
    if (showCalendar) {
      setShowCalendar(false);
    } else {
      setShowCalendar(true);
    }
  };

  const isSameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  const isTomorrow = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate() + 1;

  const titleCheck = () => {
    if (title === stickyConfig.title) {
      setTitle("");
    }
  };

  const titleReset = (e: FocusEvent<HTMLTextAreaElement>) => {
    if (title.trim() === "") {
      setTitle(stickyConfig.title);
      e.target.style.height = "30px";
    }
  };

  const titleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
    e.target.style.height = "30px";
    e.target.style.height = `${Math.max(30, e.target.scrollHeight)}px`;
  };

  return (
    <div className="relative flex flex-col-reverse items-center w-sticky shadow-sticky">
      {!showCalendar ? (
        <div
          onClick={() => inputRef.current?.focus()}
          className={`group flex flex-col justify-center w-sticky h-sticky items-center ${stickyConfig.color} cursor-pointer hover:text-main-gray focus:border-main-gray`}
        >
          <textarea
            ref={inputRef}
            value={title}
            placeholder={stickyConfig.title}
            onFocus={() => titleCheck()}
            onBlur={(e) => titleReset(e)}
            onChange={(e) => titleChange(e)}
            className={`w-full h-[112px] min-h-[112px] resize-none overflow-y-auto [scrollbar-width:none] [scrollbar-color:rgba(0,0,0,0.2)_transparent] bg-transparent outline-none text-center text-header-main leading-tight pointer-events-none`}
          />
          <span
            className={`
              bg-current
              group-focus-within:hidden 
            `}
            style={{
              width: size.width,
              height: size.height,
              WebkitMaskImage: `url(${stickyConfig.icon.src})`,
              maskImage: `url(${stickyConfig.icon.src})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskSize: "contain",
              maskSize: "contain",
            }}
          />
        </div>
      ) : (
        <>
          {date && setDate && (
            <CalendarSticky
              date={date || new Date()}
              setDate={setDate}
              displayDate={displayDate}
              setDisplayDate={setDisplayDate}
            />
          )}
        </>
      )}
      {stickyType === StickyType.REMINDER && date && (
        <button
          onClick={() => calendar()}
          className={`absolute top-2 text-sticky-small hover:text-main-gray cursor-pointer `}
        >
          {isSameDay(date, new Date()) ? (
            <div>
              Today ({formatStickyDate(date)}) {formatStickyTime(date)}
            </div>
          ) : isTomorrow(date, new Date()) ? (
            <div>
              Tomorrow ({formatStickyDate(date)}) {formatStickyTime(date)}
            </div>
          ) : (
            <div>
              {DaysOfWeek[date?.getDay()]}, {formatStickyDateTime(date)}
            </div>
          )}
        </button>
      )}
      {addToBoardCheck && (
        <button
          onClick={() => createSticky({
            stickyName: title,
            stickyType: stickyType,
            stickyDueDate: date || undefined
          })}
          className={`absolute top-full shadow-sticky w-full text-header-sub underline text-center ${stickyConfig.color} hover:text-main-gray`}
        >
          Add {stickyConfig.title}
        </button>
      )}
    </div>
  );
}
