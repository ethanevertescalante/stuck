import { Reminder, StickyConfig } from "@/lib/StickyType";
import { BoardStickyProps } from "@/lib/StickyProps";
import { formatStickyDateTime } from "@/lib/formatSticky";
import Link from "next/link";
import StickyDetailPage from "@/app/board/[stickyId]/page";

export default function BoardSticky({
  id,
  title,
    content,
  stickyType,
  date,
}: BoardStickyProps) {
  const stickyConfig = StickyConfig[stickyType];

  const size = stickyConfig.size.normal;

  return (
    <div
      className={`relative flex items-baseline  ${stickyConfig.color} w-sticky-small h-sticky-small gap-4 shadow-sticky`}
    >
      <div className={`flex-1 flex-col wrap-anywhere`}>
        <Link
          href={`/board/${id}`}
          className={`min-w-0 ml-2 w-fit text-sticky-small leading-none underline hover:text-main-gray cursor-pointer`}
        >
          {title}
        </Link>
          <div className={`min-w-0 mt-2 ml-2 w-full leading-none text-sticky-sub italic max-h-30 overflow-hidden `}>{content}</div>
      </div>
      {stickyType === Reminder && (
        <div
          className={`absolute cursor-pointer bottom-2 right-2 whitespace-nowrap leading-none underline hover:text-main-gray text-sticky-sub`}
        >
          Due {formatStickyDateTime(date)}
        </div>
      )}
      <span
        className="bg-current shrink-0 self-start"
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
  );
}
