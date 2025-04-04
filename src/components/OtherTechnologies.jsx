import React from "react";
import { otherTechnologies } from "../constants/index";

const OtherTechnologies = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {otherTechnologies.map((technology, index) => (
        <div
          key={`${technology.name}-${index}`}
          className="w-28 h-28 flex items-center justify-center relative group
                     bg-gradient-to-br from-slate-500 to-gray-700 shadow-lg 
                     rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-xl"
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Tooltip */}
          <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 opacity-0 
                           group-hover:opacity-100 transition-opacity bg-slate-800 text-white 
                           text-xs rounded-md px-2 py-1 shadow-md">
            {technology.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default OtherTechnologies;
