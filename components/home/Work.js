import React from "react";

const Work = () => {
  return (
    <>
      <div className="px-4 mt-10">
        <div className="font-bold text-sm opacity-50">WORK</div>
        <hr className="opacity-25 pb-4" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
          <div>
            <div className="text-xs opacity-60 italic ">
              2021 &#40;6 Months&#41;
            </div>
            <div className="leading-tight font-bold">Intern</div>
            <div className="font-light text-sm">Tekin Mühendislik</div>
            <div>
              <ul className="text-xs list-disc ml-4 opacity-90 mt-2 font-[300]">
                <li className="mb-1.5">
                  Electrical and Lighting Plans drawing in AutoCAD
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="text-xs opacity-60 italic ">
              2013 &#40;8 Months&#41;
            </div>
            <div className="leading-tight font-bold">Intern</div>
            <div className="font-light text-sm">
              Intertech IT and Marketing Inc.
            </div>
            <div>
              <ul className="text-xs list-disc ml-4 opacity-90 mt-2 font-[300]">
                <li className="mb-1.5">
                  Installing and configuring computer hardware, software,
                  systems, networks, printers, and scanners.
                </li>
                <li className="mb-1.5">Setting up accounts for new users.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Work;
