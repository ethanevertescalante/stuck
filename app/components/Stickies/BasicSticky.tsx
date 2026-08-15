import { Reminder, StickyConfig, StickyType } from "@/app/lib/StickyType";
import Image from "next/image";

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

  return (
    <>
      {headerSticky ? (
        <div
          className={`flex flex-col justify-center w-sticky h-sticky items-center align-middle ${stickyConfig.color}  shadow-sticky cursor-pointer`}
        >
          <p className="text-header-main">{stickyTitle}</p>
          <Image
            src={stickyConfig.icon}
            alt={stickyType}
            width={size.width}
            height={size.height}
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
