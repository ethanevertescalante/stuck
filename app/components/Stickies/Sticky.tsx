"use client";
import { StickyConfig } from "@/lib/StickyType";
import { StickyType } from "@/app/generated/prisma/enums";
import { useState } from "react";
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
  const [date, setDate] = useState<Date>(new Date());

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
