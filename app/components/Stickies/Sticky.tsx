"use client";
import { StickyConfig, StickyType} from "@/app/lib/StickyType";
import {  useState } from "react";
import { DateTime } from "luxon";
import HeaderSticky from "@/app/components/Stickies/HeaderSticky";
import BoardSticky from "@/app/components/Stickies/BoardSticky";

type BasicStickyProps = {
  stickyType: StickyType;
  headerSticky: boolean;
  stickyTitle?: string;
};

export default function Sticky({
  stickyType,
  headerSticky,
  stickyTitle,
}: BasicStickyProps) {

  const stickyConfig = StickyConfig[stickyType];
  const [title, setTitle] = useState<string>(stickyTitle || stickyConfig.title);
  const [date, setDate] = useState<DateTime>(new Date());

  return (
    <>
      {headerSticky ? (
       <HeaderSticky
           title={title}
           setTitle={setTitle}
           date={date}
           setDate={setDate}
           stickyType={stickyType}
           stickyConfig={stickyConfig}
           headerSticky={headerSticky}
       />
      ) : (
        <BoardSticky
            title={title}
            setTitle={setTitle}
            stickyType={stickyType}
            stickyConfig={stickyConfig}
            headerSticky={headerSticky}
        />
      )}
    </>
  );
}
