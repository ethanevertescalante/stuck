"use client";
import {Reminder, StickyConfig, StickyType} from "@/app/lib/StickyType";
import { useRef, useState } from "react";

type BasicStickyProps = {
  stickyType: StickyType;
  headerSticky: boolean;
  stickyTitle?: string;
};

export default function BasicSticky({
  stickyType,
  headerSticky,
  stickyTitle,
}: BasicStickyProps) {
  const stickyConfig = StickyConfig[stickyType];
  const size = headerSticky
    ? stickyConfig.size.header
    : stickyConfig.size.normal;

  const [title, setTitle] = useState<string>(stickyTitle || stickyConfig.title);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const addToBoardCheck = title !== stickyConfig.title && title !== "";

  return (
    <>
      {headerSticky ? (
       <div className="relative flex flex-col-reverse items-center w-sticky shadow-sticky">
        <div
          onClick={() => inputRef.current?.focus()}
          className={`
      group
      flex flex-col justify-center
      w-sticky h-sticky
      items-center
      ${stickyConfig.color} 
      cursor-pointer
      hover:text-main-gray
      focus:border-main-gray
    `}
        >
          <textarea
            ref={inputRef}
            value={title}
            placeholder={stickyConfig.title}

            onFocus={() => {
              if (title === stickyConfig.title) {
                setTitle("");
              }
            }}

            onBlur={(e) => {
              if (title.trim() === "") {
                setTitle(stickyConfig.title);
                e.target.style.height = "30px";
              }
            }}

            onChange={(e) => {
              setTitle(e.target.value);
              e.target.style.height = "30px";
              e.target.style.height = `${Math.max(30, e.target.scrollHeight)}px`;
            }}

            className="
              w-full
              h-[112px]
              min-h-[112px]
              resize-none
              overflow-y-auto
              [scrollbar-width:thin]
              [scrollbar-color:rgba(0,0,0,0.2)_transparent]
              bg-transparent
              outline-none
              text-center
              text-header-main
              leading-tight
              pointer-events-none
            "
          />
          <span
            className="
              bg-current
              group-focus-within:hidden
            "
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
         {addToBoardCheck && (
             <button className={`absolute left-0 top-full shadow-sticky w-sticky-small text-header-sub underline text-center ${stickyConfig.color} hover:text-main-gray`} >Add {stickyConfig.title}</button>
         )}
       </div>
      ) : (

          <div
              className={`
            relative  
            ${stickyConfig.color}
            w-sticky-small
            h-sticky-small
            flex
            items-baseline
            gap-4
            shadow-sticky 
          `}
          >
            <div
                className="
                flex-1
                min-w-0
                ml-2
                text-sticky-small
                leading-none
                underline
                hover:text-main-gray
                cursor-pointer
              "
            >
              {title}
            </div>
            {stickyType === Reminder && (
                <div className="absolute cursor-pointer bottom-2 right-2 whitespace-nowrap leading-none underline hover:text-main-gray text-sticky-sub">
                  Due Today @ 9PM
                </div>
            )}
            <span
                className="bg-current shrink-0 self-start"
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
      )}
    </>
  );
}
