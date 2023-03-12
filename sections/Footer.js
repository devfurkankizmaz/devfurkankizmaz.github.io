import React from "react";
import {FaCopyright} from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <footer className="px-4 mt-10 ">
        <hr className="opacity-25"/>
        <div className="grid justify-items-center opacity-80 py-4 text-[1rem] hover:bg-zinc-700 duration-200 ease-linear">
          <div>
            <span className="flex"><FaCopyright className="mt-1h-3 w-3"/><div className="ml-1 text-xs">DEVFURKAN | {new Date().getFullYear()}</div></span>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
