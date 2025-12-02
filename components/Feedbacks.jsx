'use client'

import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-secondary p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-text-primary font-black text-5xl'>"</p>

    <div className='mt-1'>
      <p className='text-text-primary tracking-wider text-lg'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-text-primary font-medium text-base'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-text-secondary text-xs'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <section id="feedbacks" className="w-full py-20">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-6"
      >
        <p className="text-lg font-medium text-text-secondary text-center">
          What Others Say
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-2 text-center">
          Testimonials.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center max-w-7xl mx-auto px-6">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Feedbacks;
