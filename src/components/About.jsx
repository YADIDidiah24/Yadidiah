import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <div className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="w-full bg-gradient-to-r from-green-400 to-pink-500 p-[2px] rounded-[20px] shadow-lg"
    >
      <div className="bg-gray-900 rounded-[20px] py-6 px-4 sm:px-6 md:px-10 min-h-[250px] sm:min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
        <h3 className="text-white text-base sm:text-lg font-semibold text-center px-2">{title}</h3>
      </div>
    </motion.div>
  </div>
);

const SkillBar = ({ skill, level, delay }) => (
  <motion.div
    variants={fadeIn("up", "spring", delay, 0.75)}
    className="mb-4"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.1 }}
  >
    <div className="flex justify-between mb-2">
      <span className="text-white font-medium text-sm sm:text-base">{skill}</span>
      <span className="text-gray-400 text-sm sm:text-base">{level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2">
      <motion.div
        className="bg-gradient-to-r from-green-400 to-pink-500 h-2 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1.5, delay: delay + 0.5 }}
      />
    </div>
  </motion.div>
);

const ExperienceCard = ({ year, role, company, description, index }) => (
  <motion.div
    variants={fadeIn("left", "spring", index * 0.2, 0.75)}
    className="relative pl-6 sm:pl-8 pb-8 border-l-2 border-green-400"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.1 }}
  >
    <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-green-400 to-pink-500 rounded-full"></div>
    <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
      <span className="text-green-400 font-semibold text-xs sm:text-sm">{year}</span>
      <h4 className="text-white text-lg sm:text-xl font-bold mt-1">{role}</h4>
      <h5 className="text-gray-300 text-base sm:text-lg mb-3">{company}</h5>
      <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{description}</p>
    </div>
  </motion.div>
);

const StatCard = ({ number, label, icon, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    className="text-center p-4 sm:p-6 bg-gray-800 rounded-lg shadow-lg"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.1 }}
  >
    <div className="text-2xl sm:text-3xl mb-2">{icon}</div>
    <motion.h3
      className="text-2xl sm:text-3xl font-bold text-white mb-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: index * 0.2 }}
    >
      {number}
    </motion.h3>
    <p className="text-gray-400 text-sm sm:text-base">{label}</p>
  </motion.div>
);

const About = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState(null);

  const programmingSkills = [
    { skill: "Python", level: 95 },
    { skill: "Java", level: 90 },
    { skill: "C/C++", level: 85 },
    { skill: "JavaScript", level: 88 },
    { skill: "React.js", level: 92 },
    { skill: "Three.js", level: 80 }
  ];

  const aiSkills = [
    { skill: "Generative AI", level: 92 },
    { skill: "RAG Systems", level: 88 },
    { skill: "Fine-tuning", level: 85 },
    { skill: "n8n Automation", level: 82 },
    { skill: "LLM Integration", level: 90 },
    { skill: "Prompt Engineering", level: 95 }
  ];

  const mlopsSkills = [
    { skill: "MLOps Pipelines", level: 87 },
    { skill: "Cloud Platforms (AWS/GCP)", level: 90 },
    { skill: "Docker/Kubernetes", level: 83 },
    { skill: "CI/CD for ML", level: 85 },
    { skill: "Model Monitoring", level: 80 },
    { skill: "Feature Stores", level: 78 }
  ];

  const dataSkills = [
    { skill: "Data Analysis", level: 93 },
    { skill: "Statistical Modeling", level: 88 },
    { skill: "Data Visualization", level: 90 },
    { skill: "SQL/NoSQL", level: 92 },
    { skill: "ETL Pipelines", level: 85 },
    { skill: "Business Intelligence", level: 80 }
  ];

  const stats = [
    { number: "4+", label: "Years Experience", icon: "🚀" },
    { number: "50+", label: "Projects Completed", icon: "💼" },
    { number: "15+", label: "Technologies", icon: "⚡" },
  ];

  return (
    <section 
      id="about" 
      className="w-full min-h-screen py-10 sm:py-16 lg:py-20 bg-gray-900/50 backdrop-blur-md rounded-xl shadow-lg border border-gray-700/50"
      style={{ 
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className="text-gray-400 text-base sm:text-lg font-medium">Introduction</p>
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-4 mb-8 text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed"
        >
          I am a skilled computer science professional based in Dubai, UAE, with over four years of coding experience
          and proficiency in multiple programming languages, including Python, Java, and C/C++. My expertise spans
          various domains such as Data Science, Machine Learning, Deep Learning, Reinforcement Learning, and web
          development using frameworks like React.js, Three.js, Svelte, and the MERN stack.
        </motion.p>

        {/* Statistics Section */}
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-white text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">Key Achievements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} {...stat} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Services Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 sm:mt-16 mb-12 sm:mb-16"
        >
          <h3 className="text-white text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">Services</h3>
          <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 justify-center">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </motion.div>

        {/* Technical Skills Section */}
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 sm:mt-16"
        >
          <h3 className="text-white text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">Technical Skills</h3>
          
          {/* Skills Dropdown Sections */}
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { key: "programming", title: "Programming & Development", skills: programmingSkills },
              { key: "ai", title: "AI & Generative AI", skills: aiSkills },
              { key: "mlops", title: "Machine Learning & MLOps", skills: mlopsSkills },
              { key: "data", title: "Data Analysis & Intelligence", skills: dataSkills }
            ].map((category, index) => (
              <motion.div
                key={category.key}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="bg-gray-800 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setActiveSkillCategory(
                    activeSkillCategory === category.key ? null : category.key
                  )}
                  className="w-full px-4 sm:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-700 transition-colors duration-300" 
                >
                  <span className="text-white text-base sm:text-lg font-semibold pr-4">{category.title}</span>
                  <motion.div
                    animate={{ rotate: activeSkillCategory === category.key ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-green-400 flex-shrink-0"
                  >
                    ▼
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: activeSkillCategory === category.key ? "auto" : 0,
                    opacity: activeSkillCategory === category.key ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-6 pb-6 mt-2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {category.skills.map((skill, skillIndex) => (
                        <SkillBar 
                          key={skill.skill} 
                          {...skill} 
                          delay={activeSkillCategory === category.key ? skillIndex * 0.1 : 0} 
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-400 to-pink-500 p-[1px] rounded-lg inline-block">
            <div className="bg-gray-900 px-6 sm:px-8 py-4 rounded-lg">
              <p className="text-white text-base sm:text-lg">
                Ready to collaborate on your next project?{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-pink-500 font-semibold">
                  Let's create something amazing together!
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");