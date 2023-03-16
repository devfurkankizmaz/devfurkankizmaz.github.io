import React from "react";
import Link from "next/link";

const Articles = () => {
  return (
    <>
      <div className="px-4 mt-5">
        <div className="grid grid-rows-1 gap-4 font-thin">
          <div>
            <Link href="/writing/docker-go-container" className="">
              <div className="flex justify-between items-center hover:bg-nosferatu-200">
                <div className="m-2">Building Docker Containers for Go Apps</div>
                <div className="text-sm m-2">3-16-2023</div>
              </div>
            </Link>
            <hr className="opacity-25 pb-4 " />
          </div>
        </div>
        <div className="flex flex-col min-h-screen text-xl items-center"></div>
      </div>
    </>
  );
};
export default Articles;
