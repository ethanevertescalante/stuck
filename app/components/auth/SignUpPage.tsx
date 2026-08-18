import Link from "next/link";

export default function SignUpPage() {
  return (
    <form className="flex-1 flex flex-col justify-center items-center  bg-main-gray overflow-hidden">
      <div className="flex flex-col justify-center items-center w-[900px] h-[900px]  bg-header-gray">
        <input
          placeholder="Username"
          type="text"
          className="outline-header-gray w-full text-header-main text-center"
        />
        <input
          placeholder="Email"
          type="text"
          className="outline-header-gray w-full text-header-main text-center"
        />
        <input
          placeholder="Password"
          type="password"
          className="outline-header-gray w-full text-header-main  text-center"
        />
        <input
          placeholder="Confirm Password"
          type="password"
          className="outline-header-gray w-full text-header-main  text-center"
        />
        <button
          type="submit"
          className="outline-header-gray text-header-sub hover:cursor-pointer hover:text-main-gray underline"
        >
          Register
        </button>
        <Link
          href={"/login"}
          className="outline-header-gray text-header-sub hover:text-main-gray underline"
        >
          Got An Account?: Login
        </Link>
      </div>
    </form>
  );
}
