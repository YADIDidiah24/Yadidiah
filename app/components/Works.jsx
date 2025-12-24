'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/content";
import { fadeIn, textVariant } from "../utils/motion";

const githubIcon = "/assets/github.png";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="bg-secondary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 640px) 100vw, 360px"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <Image
              src={githubIcon}
              alt="github"
              width={20}
              height={20}
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-text-primary font-bold text-2xl">{name}</h3>
        <p className="mt-2 text-text-secondary text-sm">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-sm ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section id="work" className="w-full py-20">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-6"
      >
        <p className="text-lg font-medium text-text-secondary">
          My Work
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-2">
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-text-secondary text-lg max-w-3xl leading-[30px] max-w-7xl mx-auto px-6"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center max-w-7xl mx-auto px-6">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;
