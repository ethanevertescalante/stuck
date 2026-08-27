"use client";

import Link from "next/link";
import { useState } from "react";
import { signUpForm } from "@/lib/ZodForms/SignUpForm";
import * as z from "zod";
import { isUsernameAvailable, signIn, signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    signUpError?: string;
  }>({});

  const router = useRouter();

  const signUpToApp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = signUpForm.safeParse({
      username,
      email,
      password,
      confirmPassword,
    });

    if (!result.success) {
      const errors = z.flattenError(result.error).fieldErrors;
      setErrors({
        username: errors.username?.[0],
        email: errors.email?.[0],
        password: errors.password?.[0],
        confirmPassword: errors.confirmPassword?.[0],
      });
      return;
    }

    setErrors({});

    const passwordMatch = password === confirmPassword;

    if (!passwordMatch) {
      setErrors({
        confirmPassword: "Passwords must match",
      });
      return;
    }

    const { data: response, error: usernameError } = await isUsernameAvailable({
      username: username,
    });

    if (usernameError) {
      setErrors({
        signUpError: "Could not check username availability.",
      });
      return;
    }

    if (response?.available) {
      const { data, error } = await signUp.email({
        name: username,
        email: email,
        username: username,
        password: password,
        callbackURL: "/",
      });

      if (error) {
        setErrors({
          signUpError: error.message,
        });
      }

      router.replace("/");
      router.refresh();
    } else {
      setErrors({
        signUpError: "Username already exists, please select another.",
      });
      setUsername("");
      return;
    }
  };

  return (
    <form
      onSubmit={signUpToApp}
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
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="outline-header-gray w-full text-header-main text-center"
        />
        {errors.email && (
          <p className="text-error text-size-error">{errors.email}</p>
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

        <input
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          className="outline-header-gray w-full text-header-main  text-center"
        />
        {errors.confirmPassword && (
          <p className="text-error text-size-error">{errors.confirmPassword}</p>
        )}
        <button
          type="submit"
          className="outline-header-gray text-header-sub hover:cursor-pointer hover:text-main-gray underline"
        >
          Register
        </button>
        {errors.signUpError && (
          <p className="text-error text-size-error">{errors.signUpError}</p>
        )}

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
