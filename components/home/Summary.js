import React from "react";
import Link from "next/link";

const Summary = () => {
  return (
    <div className="leading-none pt-7 px-4">
      <div className="mb-2 font-bold text-4xl">
        <h3>Furkan K&#305;zmaz</h3>
      </div>
      <div>Programmer, Web Developer</div>
      <div className="mt-1 opacity-70 text-xs">Istanbul, Turkey</div>
      <div className=" dark:bg-nosferatu-700 bg-nosferatu-200 py-2 px-5 my-3 leading-5 rounded-[0.5rem]">
        <p className="opacity-90 text-sm font-[300]">
          New to server-side web development. Follow the innovations in this
          field with excitement. Know how to research well. Value
          self-reliance and responsibility. In terms of skills, would fall in
          the generalist category. Preference for solving interesting problems.
          High value on making things that can remain stable and simple.
        </p>
      </div>
      <div className="grid sm:grid-cols-3 gap-4 grid-cols-2 sm:gap-3 sm:print:grid-cols-3 xs:grid-cols-1">
        <div>
          <div className="font-bold text-sm opacity-50">Homepage</div>
          <Link href="https://furkandev.net">
            <p className="underline text-xs text-dracula-500">furkandev.net</p>
          </Link>
        </div>
        <div>
          <div className="font-bold text-sm opacity-50">Github</div>
          <Link href="https://github.com/devfurkankizmaz">
            <p className="underline text-xs text-dracula-500">
              github.com/devfurkankizmaz
            </p>
          </Link>
        </div>
        <div>
          <div className="font-bold text-sm opacity-50">Linkedin</div>
          <Link href="https://www.linkedin.com/in/furkankizmaz/">
            <p className="underline text-xs text-dracula-500">
              linkedin.com/in/furkankizmaz
            </p>
          </Link>
        </div>
        <div>
          <div className="font-bold text-sm opacity-50">Email</div>
          <p className="text-xs">dev.furkan@outlook.com</p>
        </div>
      </div>
    </div>
  );
};
export default Summary;
