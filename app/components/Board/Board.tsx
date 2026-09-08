"use client";

import { Rnd } from "react-rnd";
import { useStickies } from "@/lib/useStickies";
import BoardSticky from "@/app/components/Stickies/BoardSticky";
import { StickyData } from "@/lib/sticky";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";

export default function Board() {
  const session = useSession().data?.user;
  const { data: stickies, isPending, isError } = useStickies();

  if (!session) {
    return (
      <div className="h-screen flex flex-row gap-5 overflow-hidden bg-main-gray justify-center items-center text-header-main">
        <span>Please</span>
        <Link className="underline hover:text-header-gray" href={"/login"}>
          Login
        </Link>
        <span> To See Board!</span>
      </div>
    );
  }

  if (isPending) {
    return (
      <div className="h-screen flex flex-col overflow-hidden bg-main-gray justify-center items-center"></div>
    );
  }

  if (isError) {
    return (
      <div className="h-screen flex flex-col overflow-hidden bg-main-gray justify-center items-center text-header-main text-error">
        Failed To Load Stickies, Please Refresh
      </div>
    );
  }

  if (stickies.length === 0) {
    return (
      <div className="h-screen flex flex-col overflow-hidden bg-main-gray justify-center items-center text-header-main">
        No Stickies!
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-main-gray">
      {stickies.map((sticky: StickyData) => (
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
                key={sticky.id}
                id={sticky.id}
                title={sticky.stickyName}
                content={sticky.stickyContent}
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
