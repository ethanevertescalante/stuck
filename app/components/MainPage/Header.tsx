import sticky from "@/public/StickyIcon.png";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="flex items-center p-3  bg-header-gray h-[94px]">
        <p className="text-header-main leading-none">St</p>
        <Image
          className="relative top-[2px]"
          src={sticky}
          alt="Stuck"
          width={49}
          height={39}
        />
        <p className="text-header-main leading-none">ck</p>
        <p className="text-header-main leading-none">/</p>
      </div>
    </header>
  );
}
