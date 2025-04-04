import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import OtherTechnologies from "./OtherTechnologies.jsx";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div key={technology.name} className='w-28 h-28 relative group'>
          <BallCanvas icon={technology.icon} />
          <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded-md px-2 py-1">
            {technology.name}
          </span>
        </div>
      ))}
      <OtherTechnologies />
    </div>
  );
};

export default SectionWrapper(Tech, "");
