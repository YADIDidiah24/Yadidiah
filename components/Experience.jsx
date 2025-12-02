'use client'

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { professionalExperience, virtualInternships } from "../constants";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "var(--secondary-color)",
        color: "var(--text-primary-color)",
        borderRadius: "1rem",
        boxShadow: "none",
      }}
      contentArrowStyle={{ borderRight: "7px solid var(--secondary-color)" }}
      date={experience.date}
      iconStyle={{ background: "var(--accent-color)", color: "#fff" }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon.src}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-text-primary text-2xl font-bold'>{experience.title}</h3>
        <p
          className='text-text-secondary text-lg font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-text-primary text-base pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const allExperiences = [...professionalExperience, ...virtualInternships];

  return (
    <section id="experience" className="w-full py-20">
      <style>
        {`
          :root {
            --primary-color: #0a0a0a;
            --secondary-color: #1a1a1a;
            --accent-color: #3b82f6;
            --text-primary-color: #f0f0f0;
            --text-secondary-color: #a0a0a0;
          }
          .vertical-timeline.vertical-timeline-custom-line::before {
            background: var(--tertiary-color, #2a2a2a);
          }
        `}
      </style>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-6"
      >
        <p className="text-lg font-medium text-text-secondary text-center">
          What I've Done So Far
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-2 text-center">
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline
          className="vertical-timeline-custom-line"
          lineColor="var(--tertiary-color, #2a2a2a)"
        >
          {allExperiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;

