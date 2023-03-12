import Link from "next/link";
import React from "react";

const Repos = () => {
  return (
    <>
      <div className="px-4 mt-10">
        <div className="font-bold text-sm opacity-50">REPOSITORIES</div>
        <hr className="opacity-25 pb-4" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-thin">
          <Link href="https://github.com/devfurkankizmaz/go-mongo-rest-app">
            <div className="cursor-pointer duration-100 ease-in-out space-y-1  opacity-75 dark:bg-nosferatu-700 bg-nosferatu-200 p-3 rounded-md dark:border-nosferatu-50 border-nosferatu-500 hover:border-b-4">
              <div className="flex items-center justify-between">
                <p className="text-dracula-400 text-xs font-black">
                  go-mongo-rest-app
                </p>
                <p className="text-gray-300 border text-xs rounded-lg p-1 gap-4">
                  Public
                </p>
              </div>
              <p className="text-xs">CRUD RESTful API Server with Gin.</p>
              <div className="flex items-center space-x-2">
                <div className="bg-cyan-500 border-none rounded-full w-3 h-3"></div>
                <p className="">Go</p>
              </div>
            </div>
          </Link>
          <Link href="https://github.com/devfurkankizmaz/devfurkankizmaz.github.io">
            <div className="cursor-pointer duration-100 ease-in-out space-y-1  opacity-75 dark:bg-nosferatu-700 bg-nosferatu-200 p-3 rounded-md dark:border-nosferatu-50 border-nosferatu-500 hover:border-b-4">
              <div className="flex items-center justify-between">
                <p className="text-dracula-400 text-xs font-black">
                  devfurkankizmaz.github.io
                </p>
                <p className="text-gray-300 border text-xs rounded-lg p-1 gap-4">
                  Public
                </p>
              </div>
              <p className="text-xs">A repo holding my next.js webpage.</p>
              <div className="flex items-center space-x-2">
                <div className="bg-orange border-none rounded-full w-3 h-3"></div>
                <p className="">Javascript</p>
              </div>
            </div>
          </Link>
          <Link href="https://github.com/devfurkankizmaz">
            <div className="cursor-pointer duration-100 ease-in-out space-y-1   opacity-75 dark:bg-nosferatu-700 bg-nosferatu-200 p-3 rounded-md dark:border-nosferatu-50 border-nosferatu-500 hover:border-b-4">
              <div className="flex items-center justify-between">
                <p className="text-dracula-400 text-xs font-black">null</p>
                <p className="text-gray-300 border text-xs rounded-lg p-1 gap-4">
                  Public
                </p>
              </div>
              <p className="text-xs">null</p>
              <div className="flex items-center space-x-2">
                <div className="bg-white border-none rounded-full w-3 h-3"></div>
                <p className="">null</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Repos;
