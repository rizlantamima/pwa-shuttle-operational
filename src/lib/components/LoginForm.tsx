"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import TextInput from "./TextInput";
import useAuth from "../hooks/useAuth";
import CircularSpinner from "./CircularSpinner";
import AlertError from "./AlertError";
import { useRouter } from "next/navigation";

type LoginFormProps = {
  // onSuccess: Function;
};
export default function LoginForm(props: LoginFormProps) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shouldRemember, setShouldRemember] = useState(false);
  // const [status, setStatus] = useState(null);

  const { login, loading, authenticated, error } = useAuth();

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    console.log(email, password, shouldRemember);
    login(email, password);
  };

  useEffect(() => {
    if (authenticated) {
      router.replace("./app");
    }
  }, [authenticated, router]);
  return (
    <>
      <div className="mb-2">
        {!loading && <AlertError isShown={error != ""}>{error}</AlertError>}
      </div>
      <form action="" method="post" onSubmit={handleSubmitForm}>
        <TextInput
          label="email"
          id="email"
          placeholder="Your Email"
          autoComplete="email"
          labelclass=""
          autoFocus={true}
          type="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />

        <TextInput
          className="mt-2"
          label="password"
          id="password"
          placeholder="Password"
          autoComplete="password"
          type="password"
          labelclass=""
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
        />

        <div className="block mt-4">
          <label htmlFor="remember_me" className="inline-flex items-center">
            <input
              id="remember_me"
              type="checkbox"
              name="remember"
              className="rounded border-gray-300 text-emerald-600 shadow-sm focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setShouldRemember(event.target.checked)
              }
            />

            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
        </div>

        <div className="mt-2 text-right">
          <Link className="text-sm underline" href="./forgot-password">
            Forgot Your password ?
          </Link>
          <button
            disabled={loading}
            className="ml-2 btn-primary w-18"
            type="submit"
          >
            {!loading ? "Submit" : <CircularSpinner className="h-5 w-5" />}
          </button>
        </div>
      </form>
    </>
  );
}
