import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "@/lib/auth-client";

type SessionDropdownProps = {
  username: string;
};

export default function SessionDropdown({ username }: SessionDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button className="outline-header-gray text-header-sub underline hover:cursor-pointer hover:text-main-gray">
            {username}
          </button>
        }
      />
      <DropdownMenuContent
        className="w-50 rounded-none  bg-header-gray"
        align="start"
      >
        <DropdownMenuGroup className="focus:text-main-gray">
          <DropdownMenuItem className="cursor-pointer text-sticky-sub focus:bg-main-gray ">
            My Boards
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer text-sticky-sub focus:bg-main-gray ">
            My Stickies
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            variant={"destructive"}
            onClick={() => signOut()}
            className="cursor-pointer text-sticky-sub focus:text-red-400 "
          >
            Sign out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
