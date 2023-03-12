import React from "react";
import {TbBrandGolang} from "react-icons/tb"
import {MdJavascript} from "react-icons/md"
import {MdIndeterminateCheckBox} from "react-icons/md"
import {FaJava} from "react-icons/fa"

const Skills = () => {
  return (
    <>
      <div className="px-4 mt-10">
        <div className="font-bold text-sm opacity-50">SKILLS</div>
        <hr className="opacity-25 pb-4 " />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm font-thin">
          <div>
            <div className="mb-1"><TbBrandGolang className="mt-1 w-12 h-12"/></div>
            <div className="flex gap-1.5 flex-row flex-wrap text-xs font-[300]">
              <div className="dark:bg-nosferatu-700 bg-nosferatu-200 px-2 py-0.5 rounded-[0.5rem] hover:bg-morbius-200 hover:dark:bg-blade-900">text/templates</div>
              <div className="dark:bg-nosferatu-700 bg-nosferatu-200 px-2 py-0.5 rounded-[0.5rem] hover:bg-morbius-200 hover:dark:bg-blade-900">Gin</div>
              <div className="dark:bg-nosferatu-700 bg-nosferatu-200 px-2 py-0.5 rounded-[0.5rem] hover:bg-morbius-200 hover:dark:bg-blade-900">Gorilla</div>
              <div className="dark:bg-nosferatu-700 bg-nosferatu-200 px-2 py-0.5 rounded-[0.5rem] hover:bg-morbius-200 hover:dark:bg-blade-900">Testing</div>
            </div>
          </div>
          <div>
            <div className="mb-1"><MdJavascript className="mt-1 w-12 h-12"/></div>
            <div className="flex gap-1.5 flex-row flex-wrap text-xs font-[300]">
              <div className="dark:bg-nosferatu-700 bg-nosferatu-200 px-2 py-0.5 rounded-[0.5rem] hover:bg-morbius-200 hover:dark:bg-blade-900">React.js</div>
              <div className="dark:bg-nosferatu-700 bg-nosferatu-200 px-2 py-0.5 rounded-[0.5rem] hover:bg-morbius-200 hover:dark:bg-blade-900">Next.js</div>
              <div className="dark:bg-nosferatu-700 bg-nosferatu-200 px-2 py-0.5 rounded-[0.5rem] hover:bg-morbius-200 hover:dark:bg-blade-900">npm</div>
              <div className="dark:bg-nosferatu-700 bg-nosferatu-200 px-2 py-0.5 rounded-[0.5rem] hover:bg-morbius-200 hover:dark:bg-blade-900">Node.js</div>
            </div>
          </div>
          <div>
            <div className="mb-3"><MdIndeterminateCheckBox className="mt-2 w-8 h-8"/></div>
            <div className="flex gap-1.5 flex-row flex-wrap text-xs font-[300]">
              <div className="dark:bg-nosferatu-700 bg-nosferatu-200 px-2 py-0.5 rounded-[0.5rem] hover:bg-morbius-200 hover:dark:bg-blade-900">HTML</div>
              <div className="dark:bg-nosferatu-700 bg-nosferatu-200 px-2 py-0.5 rounded-[0.5rem] hover:bg-morbius-200 hover:dark:bg-blade-900">CSS</div>
              <div className="dark:bg-nosferatu-700 bg-nosferatu-200 px-2 py-0.5 rounded-[0.5rem] hover:bg-morbius-200 hover:dark:bg-blade-900">Tailwind</div>
              <div className="dark:bg-nosferatu-700 bg-nosferatu-200 px-2 py-0.5 rounded-[0.5rem] hover:bg-morbius-200 hover:dark:bg-blade-900">MongoDB</div>
              <div className="dark:bg-nosferatu-700 bg-nosferatu-200 px-2 py-0.5 rounded-[0.5rem] hover:bg-morbius-200 hover:dark:bg-blade-900">PostgreSQL</div>
              <div className="dark:bg-nosferatu-700 bg-nosferatu-200 px-2 py-0.5 rounded-[0.5rem] hover:bg-morbius-200 hover:dark:bg-blade-900">Bash</div>
              <div className="dark:bg-nosferatu-700 bg-nosferatu-200 px-2 py-0.5 rounded-[0.5rem] hover:bg-morbius-200 hover:dark:bg-blade-900">Linux</div>
              <div className="dark:bg-nosferatu-700 bg-nosferatu-200 px-2 py-0.5 rounded-[0.5rem] hover:bg-morbius-200 hover:dark:bg-blade-900">Docker</div>
              <div className="dark:bg-nosferatu-700 bg-nosferatu-200 px-2 py-0.5 rounded-[0.5rem] hover:bg-morbius-200 hover:dark:bg-blade-900">Git</div>
              <div className="dark:bg-nosferatu-700 bg-nosferatu-200 px-2 py-0.5 rounded-[0.5rem] hover:bg-morbius-200 hover:dark:bg-blade-900">Postman</div>
            </div>
          </div>
          <div>
            <div className="mb-4"><FaJava className="mt-1 w-8 h-8"/></div>
            <div className="flex gap-1.5 flex-row flex-wrap text-xs font-[300]">
              <div className="dark:bg-nosferatu-700 bg-nosferatu-200 px-2 py-0.5 rounded-[0.5rem] hover:bg-morbius-200 hover:dark:bg-blade-900">FX</div>
              <div className="dark:bg-nosferatu-700 bg-nosferatu-200 px-2 py-0.5 rounded-[0.5rem] hover:bg-morbius-200 hover:dark:bg-blade-900">Socket</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
