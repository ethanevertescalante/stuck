"use client";

import StickyIcon from "@/public/StickyIcon.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import SessionDropdown from "@/app/components/MainPage/SessionDropdown";

export default function Header() {
  const size = { width: 63, height: 50 };
  const pathname = usePathname().slice(1);

  const {data: session, isPending} = useSession();
  const username = session?.user.username;

  return (
    <header>
      <div className="flex items-center p-3 align-baseline bg-header-gray h-[94px] ">
        <Link
          href={"/"}
          className="outline-header-gray flex items-center hover:text-main-gray"
        >
          <p className="text-header-main leading-none">St</p>
          <span
            className=" relative bg-current top-[6px]"
            style={{
              width: size.width,
              height: size.height,
              WebkitMaskImage: `url(${StickyIcon.src})`,
              maskImage: `url(${StickyIcon.src})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskSize: "contain",
              maskSize: "contain",
            }}
          />
          <p className="text-header-main leading-none ">ck/</p>
        </Link>
        <Link
          href={pathname}
          className="text-header-sub self-end leading-none hover:text-main-gray underline"
        >
          {pathname}
        </Link>
        <div className=" flex justify-end w-full items-center align-baseline p-3">
            {isPending ? (
                <p>------</p>
            ): username ? (
                <SessionDropdown username={username} />
                ) : (
                <Link
                    href={"/login"}
                    className="outline-header-gray text-header-sub underline hover:cursor-pointer hover:text-main-gray"
                >
                    Sign In
                </Link>
            )}
        </div>
      </div>
    </header>
  );
}
