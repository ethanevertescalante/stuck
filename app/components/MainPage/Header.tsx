import sticky from "@/public/StickyIcon.png";
import Image from "next/image";
import StickyIcon from "@/public/StickyIcon.svg";
import Link from "next/link";

export default function Header() {
  const size = { width: 63, height: 50 };

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
        <div className=" flex justify-end w-full items-center align-baseline p-3">
          <Link
            href={"/login"}
            className="outline-header-gray text-header-sub underline hover:cursor-pointer hover:text-main-gray"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}
