import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full bg-gradient-to-r from-green-400 to-pink-500 p-[2px] rounded-[20px] shadow-lg"
    >
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-gray-900 rounded-[20px] py-6 px-10 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-lg font-semibold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-gray-400 text-lg font-medium">Introduction</p>
        <h2 className="text-white text-4xl font-bold">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 mb-5 text-gray-300 text-lg max-w-3xl leading-relaxed"
      >
        I am a skilled computer science professional based in Dubai, UAE, with over four years of coding experience
        and proficiency in multiple programming languages, including Python, Java, and C/C++. My expertise spans
        various domains such as Data Science, Machine Learning, Deep Learning, Reinforcement Learning, and web
        development using frameworks like React.js, Three.js, Svelte, and the MERN stack.
      </motion.p>

      <div className="mt-16 flex flex-wrap gap-8 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");