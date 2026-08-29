import Sticky from "@/app/components/Stickies/Sticky";
import { StickyType } from "@/app/generated/prisma/enums";
export default function Body() {
  return (
    <div className="flex-1 flex flex-col justify-start  items-center w-full min-h-screen  bg-main-gray overflow-hidden">
      <p className="text-header-main w-full text-center">As Easy As...</p>
      <p className="text-header-main w-full text-center pb-20 ">
        Click {"->"} Type {"->"} Go
      </p>
      <div className="relative flex flex-row justify-center w-full gap-22 items-center">
        <Sticky
          stickyType={StickyType.REMINDER}
          headerSticky={true}
          stickyTitle={"Reminder"}
        />
        <p className="text-header-main">OR</p>
        <Sticky stickyType={StickyType.NOTE} headerSticky={true} stickyTitle={"Note"} />
      </div>
    </div>
  );
}
