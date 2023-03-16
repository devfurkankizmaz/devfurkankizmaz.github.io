import React from "react";
import { HiHome } from "react-icons/hi";
import { MdArticle } from "react-icons/md";
import {useTheme} from "next-themes";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  systemTheme == "dark"

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;
    
    if (currentTheme === "dark") {
      return (
        <div className="border-2 rounded-full p-1 border-aro dark:border-nosferatu-200"><BsSunFill
          className="w-5 h-5  text-yellow-500"
          role="button"
          onClick={() => setTheme("light")}
        /></div>
      );
    } else {
      return (
        <div className="border-2 rounded-full p-1 border-aro dark:border-nosferatu-200"><BsMoonFill
          className="w-5 h-5 text-gray-900"
          role="button"
          onClick={() => setTheme("dark")}
        /></div>
      );
    }
  };

  return (
    <header>
      <div className=" px-4">
        <div className="flex items-center opacity-80 space-x-4 py-4 text-[1rem]">
          <div className="md:w-full mb-2 "></div>
          <div className="hover:border-b">
            <Link href="/">
              <div className="flex">
                <HiHome className="h-5 mr-1" />
                Home
              </div>
            </Link>
          </div>
          <div className="hover:border-b">
            <Link href="/writing">
              <div className="flex">
                <MdArticle className="h-5 mr-1" />
                Writing
              </div>
            </Link>
          </div>
          <div className="hover:border-b">
            <Link href="https://github.com/devfurkankizmaz">
              <div className="flex">
                <BsGithub className="h-5 mr-1" />
                Github
              </div>
            </Link>
          </div>
          <div>
            <div> {renderThemeChanger()}</div>
          </div>
          <div></div>
        </div>
        <hr className="opacity-25" />
      </div>
    </header>
  );
};
export default Header;
