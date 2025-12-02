import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const education = [
  {
    degree: "Bachelor of Science in Computer Science (Magna Cum Laude)",
    institution: "Canadian University Dubai",
    location: "Dubai, UAE",
    duration: "Aug 2021 - May 2025",
    grade: "Magna Cum Laude",
    description: "Specialized in Artificial Intelligence and Machine Learning with advanced coursework in Deep Learning, Computer Vision, NLP, and MLOps. Completed multiple capstone projects achieving 98%+ model accuracy in healthcare and financial domains.",
    achievements: [
      "🏆 Magna Cum Laude Graduate - Top Academic Achievement",
      "📚 3 Peer-Reviewed Research Publications in IEEE & Springer",
      "🔬 Advanced AI/ML Projects - Computer Vision, NLP, MLOps",
      "💻 200+ LeetCode Problems Solved - Competitive Programming Excellence",
      "🎯 Multiple Virtual Internships - PwC, Deloitte, British Airways, BCG"
    ],
    icon: "🎓",
    color: "from-blue-500 to-cyan-500"
  }
];

const EducationCard = ({ degree, institution, location, duration, grade, description, achievements, icon, color, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="relative w-full mb-10"
    >
      <div className="relative">
        {/* Timeline connector */}
        {index < education.length - 1 && (
          <div className="absolute left-[28px] top-[60px] bottom-[-40px] w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 hidden md:block" />
        )}
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Icon/Year section */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-3xl shadow-2xl border-4 border-gray-900`}>
              {icon}
            </div>
          </motion.div>
          
          {/* Content card */}
          <motion.div 
            className="flex-1 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/20 group overflow-hidden relative"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 via-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              {/* Duration badge */}
              <motion.div 
                className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 px-4 py-1.5 rounded-full mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-cyan-300 text-sm font-semibold">📅 {duration}</span>
              </motion.div>
              
              {/* Degree */}
              <motion.h3 
                className="text-white font-bold text-2xl mb-2 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                {degree}
              </motion.h3>
              
              {/* Institution and location */}
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-blue-400 font-semibold text-lg">
                  🏛️ {institution}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-emerald-400 font-medium">
                  📍 {location}
                </span>
              </div>
              
              {/* Grade */}
              <motion.div 
                className="inline-block bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 px-4 py-2 rounded-xl mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-green-300 font-bold text-base">
                  ⭐ {grade}
                </span>
              </motion.div>
              
              {/* Description */}
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                {description}
              </p>
              
              {/* Achievements */}
              <div>
                <h4 className="text-purple-400 font-semibold text-lg mb-3 flex items-center gap-2">
                  <span>🏆</span>
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3 text-gray-300 text-base group/item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + idx * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-cyan-400 mt-0.5 text-lg group-hover/item:scale-125 transition-transform">
                        ▹
                      </span>
                      <span className="flex-1 group-hover/item:text-white transition-colors">
                        {achievement}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Decorative corner gradient */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  console.log("Education component is rendering!");

  return (
    <div className="max-w-7xl mx-auto relative z-0 py-10">
      {/* Section header */}
      <motion.div variants={textVariant()} className="relative mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 blur-3xl" />
        
        <div className="relative z-10">
          <p className={`${styles.sectionSubText} bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent`}>
            Academic Background
          </p>
          <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent`}>
            Education.
          </h2>
        </div>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-gray-300 text-lg max-w-3xl leading-relaxed relative z-10 mb-12"
        >
          My academic journey has been focused on building a strong foundation in computer science, 
          artificial intelligence, and machine learning. Through rigorous coursework and hands-on projects, 
          I've developed the technical expertise and research skills that drive my work today.
        </motion.p>
      </div>

      {/* Education cards */}
      <div className="mt-10">
        {education.map((edu, index) => (
          <EducationCard key={`education-${index}`} index={index} {...edu} />
        ))}
      </div>

      {/* Additional qualifications */}
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="mt-16 bg-gradient-to-br from-gray-900/90 via-indigo-900/20 to-purple-900/20 backdrop-blur-sm p-8 rounded-3xl border border-indigo-500/20 shadow-2xl"
      >
        <h3 className="text-white font-bold text-2xl mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent flex items-center gap-3">
          <span className="text-3xl">🎯</span>
          Additional Qualifications
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="text-2xl mb-3">📜</div>
            <h4 className="text-cyan-400 font-semibold text-lg mb-2">Professional Certifications</h4>
            <p className="text-gray-300 text-sm">
              30+ certifications from Google, Microsoft, AWS, HackerRank, and leading tech companies 
              covering AI/ML, Data Science, Cloud Computing, and Software Engineering.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="text-2xl mb-3">🔬</div>
            <h4 className="text-purple-400 font-semibold text-lg mb-2">Research Publications</h4>
            <p className="text-gray-300 text-sm">
              3 peer-reviewed papers published in IEEE Xplore and Springer on topics including 
              IoT security, ML optimization, and automated threat detection systems.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="text-2xl mb-3">💼</div>
            <h4 className="text-green-400 font-semibold text-lg mb-2">Virtual Internships</h4>
            <p className="text-gray-300 text-sm">
              Completed job simulations with PwC, Deloitte, BCG, British Airways, Quantium, 
              and Barclays focusing on data analytics, ML, and business intelligence.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="text-2xl mb-3">🏗️</div>
            <h4 className="text-yellow-400 font-semibold text-lg mb-2">Practical Projects</h4>
            <p className="text-gray-300 text-sm">
              15+ end-to-end ML/AI projects including LLM applications, computer vision systems, 
              MLOps pipelines, and full-stack data science applications deployed in production.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
