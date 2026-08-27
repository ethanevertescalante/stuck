import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import HeaderDirectory from "@/app/components/MainPage/HeaderDirectory";
import Link from "next/link";

type NavDropdownProps = {
  pathname: string;
};

const links: { title: string; href: string, pathname: string }[] = [
  {
    title: "home",
    href: "/",
    pathname: "",
  },
  {
    title: "board",
    href: "board",
    pathname: "board",
  },
];


export default function NavDropdown({ pathname }: NavDropdownProps) {

  const availablePathnames = links.filter((link) => link.pathname !== pathname);

  return (
    <NavigationMenu className="flex justify-start">
      <NavigationMenuList className="">
        <NavigationMenuItem className="">
          <NavigationMenuTrigger>
            <HeaderDirectory pathname={pathname} />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-full bg-header-gray text-sticky-small">
            {availablePathnames.map((path) => {
              return (
                <Link href={path.href} className={`flex hover:text-main-gray`} key={path.href}>
                  {path.title}
                </Link>
              );
            })}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
