"use client";
import { Reminder, StickyConfig, StickyType } from "@/app/lib/StickyType";
import Image from "next/image";
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

  return (
    <>
      {headerSticky ? (
        <div
          onClick={() => inputRef.current?.focus()}
          className={`
      group
      flex flex-col justify-center
      w-sticky h-sticky
      items-center
      ${stickyConfig.color}
      shadow-sticky
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

              // Reset first so it can shrink as well as grow
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
      ) : (
        <div className={`${stickyConfig.color} w-sticky h-sticky`}>
          <Image
            src={stickyConfig.icon}
            alt={stickyType}
            width={size.width}
            height={size.height}
          />
        </div>
      )}
    </>
  );
}
