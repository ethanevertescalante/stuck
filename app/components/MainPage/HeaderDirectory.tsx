import Link from "next/link";

type HeaderDirectoryProps = {
  pathname: string;
};

export default function HeaderDirectory({ pathname }: HeaderDirectoryProps) {
  return (
    <Link
      href={`/${pathname}`}
      className={`text-header-sub self-end leading-none text-black hover:text-main-gray cursor-pointer`}
    >
      {pathname === "" ?
          <div className="flex items-baseline">
        <p className="text-header-main">/</p>
        home
      </div> : <div className="flex items-baseline">
            <p className="text-header-main">/</p>
            {pathname}
      </div>
      }
    </Link>
  );
}
