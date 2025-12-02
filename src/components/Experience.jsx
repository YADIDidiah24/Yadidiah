import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion, AnimatePresence } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { professionalExperience, virtualInternships } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [isVirtualExpanded, setIsVirtualExpanded] = useState(false);

  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <p className={`${styles.sectionSubText} text-center`}>
          Professional Journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Experience
        </h2>
      </motion.div>

      {/* Professional Experience Section */}
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {professionalExperience.map((experience, index) => (
            <ExperienceCard
              key={`professional-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>

      {/* Virtual Internship Section with Dropdown */}
      <motion.div
        className='mt-16'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Dropdown Header */}
        <motion.button
          onClick={() => setIsVirtualExpanded(!isVirtualExpanded)}
          className={`w-full bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 ${
            isVirtualExpanded ? 'shadow-xl shadow-cyan-500/20' : ''
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center justify-between">
            <div className="text-left">
              <h3 className="text-white text-xl font-bold flex items-center gap-3">
                <span className="text-2xl">🎓</span>
                Virtual Internship Experience
              </h3>
              <p className="text-gray-400 mt-2">
                7 Professional Internships & Training Programs
              </p>
            </div>
            <motion.div
              animate={{ rotate: isVirtualExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-cyan-400 text-2xl"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>
        </motion.button>

        {/* Expandable Content */}
        <AnimatePresence>
          {isVirtualExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{
                opacity: { duration: 0.3 },
                height: { duration: 0.4, ease: "easeInOut" },
                marginTop: { duration: 0.4 }
              }}
              className="overflow-hidden"
            >
              <div className="border border-gray-700/50 rounded-2xl p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm">
                <VerticalTimeline>
                  {virtualInternships.map((experience, index) => (
                    <ExperienceCard
                      key={`virtual-${index}`}
                      experience={experience}
                    />
                  ))}
                </VerticalTimeline>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
