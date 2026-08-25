import Link from "next/link";
import { PathnameColors } from "@/lib/PathnameColor";

type HeaderDirectoryProps = {
    pathname: string;
}

export default function HeaderDirectory({
    pathname,
                                        }: HeaderDirectoryProps) {

    const baseColor = PathnameColors[pathname].baseColor;
    const accentColor = PathnameColors[pathname].accentColor;

    return (
        <Link href={`/${pathname}`} className={`text-header-sub self-end leading-none pl-2 pr-2 ${baseColor} ${accentColor} cursor-pointer`}>
            {pathname === "" ? (
                <p>/home</p>
                ): (
                <p>/{pathname}</p>
            )}
        </Link>
    )

}