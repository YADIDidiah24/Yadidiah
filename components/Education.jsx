'use client'

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { education } from "../constants";
import { textVariant } from "../utils/motion";

const EducationCard = ({ educationItem }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "var(--secondary-color)",
        color: "var(--text-primary-color)",
        borderRadius: "1rem",
        boxShadow: "none",
      }}
      contentArrowStyle={{ borderRight: "7px solid var(--secondary-color)" }}
      date={educationItem.date}
      iconStyle={{ background: "var(--accent-color)", color: "#fff" }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <p className="text-3xl">{educationItem.icon}</p>
        </div>
      }
    >
      <div>
        <h3 className='text-text-primary text-2xl font-bold'>{educationItem.degree}</h3>
        <p
          className='text-text-secondary text-lg font-semibold'
          style={{ margin: 0 }}
        >
          {educationItem.institution}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {educationItem.points.map((point, index) => (
          <li
            key={`education-point-${index}`}
            className='text-text-primary text-base pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <section id="education" className="w-full py-20">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-6"
      >
        <p className="text-lg font-medium text-text-secondary text-center">
          My Academic Background
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-2 text-center">
          Education.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline
          className="vertical-timeline-custom-line"
          lineColor="var(--tertiary-color, #2a2a2a)"
        >
          {education.map((edu, index) => (
            <EducationCard
              key={`education-${index}`}
              educationItem={edu}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;
