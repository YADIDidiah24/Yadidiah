'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/lib/content";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.2, 0.75)}
    className="w-full xs:w-[250px]"
  >
    <div className="w-full p-[1px] rounded-[20px] bg-gradient-to-br from-tertiary to-secondary/30 hover:from-accent hover:to-blue-400 transition-all duration-300">
      <div className="bg-secondary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <Image
          src={icon}
          alt={title}
          width={64}
          height={64}
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-text-primary text-xl font-bold text-center">{title}</h3>
      </div>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="text-lg font-medium text-text-secondary">Introduction</p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-2">Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-4 text-text-secondary text-lg max-w-3xl leading-relaxed"
        >
          I'm a passionate and skilled developer with expertise in AI, machine learning, and web development. I thrive on solving complex problems and turning innovative ideas into tangible, high-quality software solutions.
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
