import { Reminder } from "@/lib/StickyType";
import { StickyProps } from "@/lib/StickyProps";

export default function BoardSticky({
  title,
  setTitle,
  stickyType,
  stickyConfig,
  headerSticky,
}: StickyProps) {
  const size = headerSticky
    ? stickyConfig.size.header
    : stickyConfig.size.normal;
  return (
    <div
      className={`relative flex items-baseline  ${stickyConfig.color} w-sticky-small h-sticky-small gap-4 shadow-sticky`}
    >
      <div className={`flex-1`}>
        <div className={`min-w-0 ml-2 w-fit text-sticky-small leading-none underline hover:text-main-gray cursor-pointer`}>
            {title}
        </div>
      </div>
      {stickyType === Reminder && (
        <div className={`absolute cursor-pointer bottom-2 right-2 whitespace-nowrap leading-none underline hover:text-main-gray text-sticky-sub`}>
          Due Today @ 9PM
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
