import BasicSticky from "@/app/components/Stickies/BasicSticky";
import { Reminder, Note } from "@/app/lib/StickyType";

export default function Body() {
  return (
    <div className="flex-1 flex flex-col justify-start  items-center w-full min-h-screen  bg-main-gray overflow-hidden">
      <p className="text-header-main w-full text-center">As Easy As...</p>
      <p className="text-header-main w-full text-center pb-20 ">
        Click {"->"} Type {"->"} Enter
      </p>
      <div className="flex flex-row justify-center w-full gap-22 items-center">
        <BasicSticky
          stickyType={Reminder}
          headerSticky={true}
          stickyTitle={"Reminder"}
        />
        <p className="text-header-main">OR</p>
        <BasicSticky
          stickyType={Note}
          headerSticky={true}
          stickyTitle={"Note"}
        />
      </div>
    </div>
  );
}
