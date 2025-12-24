'use client'

import React from "react";
import { motion } from "framer-motion";
import { technologies, otherTechnologies } from "@/lib/content";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  const allTech = [...technologies, ...otherTechnologies];

  return (
    <section id="tech" className="w-full py-20 relative overflow-hidden">
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

      {/* Technologies Grid */}
      <div className='mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 max-w-7xl mx-auto px-6'>
        {allTech.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.05, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className='card text-center p-4 hover:scale-105 transition-transform'
          >
            <div className='w-16 h-16 mx-auto mb-3 relative'>
              <img 
                src={technology.icon} 
                alt={technology.name}
                className='w-full h-full object-contain'
                onError={(e) => {
                  // Fallback to a default icon if the image fails to load
                  e.target.src = '/assets/tech/default.svg';
                }}
              />
            </div>
            <h3 className='text-sm font-semibold text-text-primary'>{technology.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
