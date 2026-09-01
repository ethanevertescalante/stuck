"use client";

import Sticky from "@/app/components/Stickies/Sticky";
import {Note, Reminder, StickyConfig} from "@/lib/StickyType";
import { Rnd } from "react-rnd";
import {useStickies} from "@/lib/useStickies";
import BoardSticky from "@/app/components/Stickies/BoardSticky";
import { StickyData } from "@/lib/sticky";

export default function Board() {

    const { data: stickies, isPending, isError } = useStickies();

    if(isPending) {
        return <div className="h-screen flex flex-col overflow-hidden bg-main-gray justify-center items-center"></div>
    }

    if(isError) {
        return <div className="h-screen flex flex-col overflow-hidden bg-main-gray justify-center items-center text-header-main text-error">Failed To Load Stickies, Please Refresh</div>
    }

    if(stickies.length === 0) {
        return <div className="h-screen flex flex-col overflow-hidden bg-main-gray justify-center items-center text-header-main">No Stickies!</div>
    }

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-main-gray">
        {stickies?.map((sticky: StickyData) => (

        <Rnd
            key={sticky.id}
        default={{
          x: 100,
          y: 100,
          width: 250,
          height: 250,
        }}
        bounds="parent"
      >
        <div className="w-full h-full">
          <div>
                     <BoardSticky
                         title={sticky.stickyName}
                         stickyType={sticky.stickyType}
                         date={sticky.stickyDueDate || new Date()}
                     />

          </div>
        </div>
      </Rnd>
        ))}
    </div>
  );
}
