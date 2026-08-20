"use client";

import Sticky from "@/app/components/Stickies/Sticky";
import { Note, Reminder } from "@/app/lib/StickyType";
import { Rnd } from "react-rnd";

export default function Board() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-main-gray">
      <Rnd
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
            <Sticky stickyType={Note} headerSticky={false} />
          </div>
        </div>
      </Rnd>
      <Rnd
        default={{
          x: 600,
          y: 100,
          width: 250,
          height: 250,
        }}
        bounds="parent"
      >
        <div className="w-full h-full">
          <div>
            <Sticky stickyType={Reminder} headerSticky={false} />
          </div>
        </div>
      </Rnd>
    </div>
  );
}
