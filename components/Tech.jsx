'use client'

import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { technologies, otherTechnologies } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  const allTech = [...technologies, ...otherTechnologies];

  return (
    <section id="tech" className="w-full py-20">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-6"
      >
        <p className="text-lg font-medium text-text-secondary text-center">
          My Arsenal
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-2 text-center">
          Technologies.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-row flex-wrap justify-center gap-10'>
        {allTech.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className='w-28 h-28'
          >
            <BallCanvas icon={technology.icon.src} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
