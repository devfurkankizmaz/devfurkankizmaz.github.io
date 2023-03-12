import React from "react";

const Lang = () => {
  return (
    <>
      <div className="px-4 mt-10">
        <div className="font-bold text-sm opacity-50">LANGUAGES</div>
        <hr className="opacity-25 pb-4" />
        <div className="grid grid-cols-1 gap-1 text-sm font-thin">
          <div className="flex space-x-6">
            <div className="font-bold">Turkish</div>
            <div className="font-light text-sm">Native</div>
          </div>
          <div className="flex space-x-6">
            <div className="font-bold">English</div>
            <div className="font-light text-sm">Intermediate</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Lang;
