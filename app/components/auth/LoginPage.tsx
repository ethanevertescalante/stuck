"use client";

import Link from "next/link";
import { signIn } from "@/lib/auth-client";
import { useState } from "react";
import { signInForm } from "@/lib/ZodForms/SignInForm";
import * as z from "zod";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
    signInError?: string;
  }>({});

  const signIntoApp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = signInForm.safeParse({
      username,
      password,
    });

    if (!result.success) {
      const errors = z.flattenError(result.error).fieldErrors;
      setErrors({
        username: errors.username?.[0],
        password: errors.password?.[0],
      });
      return;
    }

    setErrors({});

    const userInfo = result.data;

    const isEmail = username.includes("@");

    if (isEmail) {
      const { data, error } = await signIn.email({
        email: userInfo.username,
        password: userInfo.password,
        callbackURL: "/",
      });

      if (error) {
        setErrors({
          ...errors,
        });

        return;
      }
    } else {
      const { error } = await signIn.username({
        username: userInfo.username,
        password: userInfo.password,
      });

      if (error) {
        setErrors({
          signInError: "Login failed, please try again",
        });
        return;
      }
    }

    router.replace("/");
    router.refresh();
  };

  return (
    <form
      onSubmit={signIntoApp}
      className="flex-1 flex flex-col justify-center items-center  bg-main-gray overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center w-[900px] h-[900px]  bg-header-gray">
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className="outline-header-gray w-full text-header-main text-center"
        />
        {errors.username && (
          <p className="text-error text-size-error">{errors.username}</p>
        )}
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="outline-header-gray w-full text-header-main  text-center"
        />
        {errors.password && (
          <p className="text-error text-size-error">{errors.password}</p>
        )}
        <button
          type="submit"
          className="outline-header-gray text-header-main hover:cursor-pointer hover:text-main-gray underline"
        >
          Login
        </button>
        {errors.signInError && (
          <p className="text-error text-size-error">{errors.signInError}</p>
        )}
        <Link
          href={"/register"}
          className="outline-header-gray text-header-sub hover:text-main-gray underline"
        >
          No Account?: Sign Up
        </Link>
      </div>
    </form>
  );
}
