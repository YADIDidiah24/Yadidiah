import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, publications, certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

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
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-violet-900/30 p-6 rounded-3xl sm:w-[380px] w-full backdrop-blur-sm border border-purple-500/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 group overflow-hidden"
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
        
        <div className="relative w-full h-[240px] overflow-hidden rounded-2xl">
          <motion.img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          <div className="absolute inset-0 flex justify-end m-4">
            <motion.div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-gradient-to-r from-gray-900 to-black/80 backdrop-blur-sm w-12 h-12 rounded-full flex justify-center items-center cursor-pointer border border-gray-600/50 shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src={github}
                alt="source code"
                className="w-6 h-6 object-contain filter brightness-0 invert"
              />
            </motion.div>
          </div>
        </div>

        <div className="mt-6 relative z-10">
          <motion.h3 
            className="text-white font-bold text-[26px] bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {name}
          </motion.h3>
          <motion.p 
            className="mt-3 text-gray-300 text-[15px] leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            {description}
          </motion.p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 relative z-10">
          {tags.map((tag, tagIndex) => (
            <motion.p
              key={`${name}-${tag.name}`}
              className={`text-[13px] font-medium ${tag.color} bg-gray-900/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-700/50 hover:border-gray-500/50 transition-all duration-300`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + tagIndex * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              #{tag.name}
            </motion.p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const PublicationCard = ({
  index,
  title,
  journal,
  date,
  url,
  pdfUrl,
  abstract,
  keywords,
  citations,
  icon,
  color,
}) => {
  const [showAbstract, setShowAbstract] = useState(false);

  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Tilt
        options={{ max: 25, scale: 1.02, speed: 450 }}
        className="relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-teal-900/30 p-7 rounded-3xl sm:w-[420px] w-full min-h-[320px] backdrop-blur-sm border border-blue-500/20 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 group overflow-hidden"
      >
        {/* Animated background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 via-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-400/10 via-blue-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
        
        <div className="flex items-center justify-between mb-5 relative z-10">
          <motion.div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center text-3xl shadow-lg`}
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          <div className="flex gap-3">
            <motion.div
              onClick={() => window.open(url, "_blank")}
              className="bg-gradient-to-r from-gray-800 to-gray-900 w-10 h-10 rounded-xl flex justify-center items-center cursor-pointer hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg border border-gray-600/50"
              title="View Publication"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-white text-sm">📄</span>
            </motion.div>
            {pdfUrl && (
              <motion.div
                onClick={() => window.open(pdfUrl, "_blank")}
                className="bg-gradient-to-r from-red-600 to-red-700 w-10 h-10 rounded-xl flex justify-center items-center cursor-pointer hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg"
                title="View PDF"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-white text-sm">📑</span>
              </motion.div>
            )}
          </div>
        </div>

        <div className="mb-4 relative z-10">
          <motion.h3 
            className="text-white font-bold text-[20px] leading-[26px] mb-3 bg-gradient-to-r from-white via-blue-200 to-teal-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {title}
          </motion.h3>
          <div className="flex justify-between items-center mb-3">
            <p className="text-blue-400 text-[15px] font-medium bg-blue-900/30 px-3 py-1 rounded-full border border-blue-500/30">
              {journal}
            </p>
            <p className="text-teal-300 text-[13px] bg-teal-900/30 px-2 py-1 rounded-full">
              {date}
            </p>
          </div>
        </div>

        <div className="mb-5 relative z-10">
          <motion.button
            onClick={() => setShowAbstract(!showAbstract)}
            className="text-green-400 text-[13px] hover:text-green-300 transition-colors font-medium bg-green-900/20 px-3 py-1.5 rounded-full border border-green-500/30 hover:border-green-400/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAbstract ? "Hide Abstract" : "Show Abstract"}
          </motion.button>
          {showAbstract && (
            <motion.p 
              className="mt-3 text-gray-300 text-[13px] leading-[20px] bg-gray-900/30 p-3 rounded-xl border border-gray-700/30"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {abstract}
            </motion.p>
          )}
        </div>

        <div className="flex flex-wrap gap-2 relative z-10">
          {keywords.slice(0, 4).map((keyword, idx) => (
            <motion.span
              key={idx}
              className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 text-[11px] px-3 py-1.5 rounded-full border border-gray-600/50 hover:border-gray-500/50 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + idx * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              {keyword}
            </motion.span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto relative z-0">
      {/* PROJECTS SECTION */}
      <motion.div variants={textVariant()} id="work" className="relative">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 blur-3xl" />
        
        <div className="relative z-10">
          <p className={`${styles.sectionSubText} bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent`}>
            My work
          </p>
          <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent`}>
            Projects.
          </h2>
        </div>
      </motion.div>

      <div className="w-full flex" id="projects">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-gray-300 text-[18px] max-w-3xl leading-[32px] relative z-10"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-24 flex flex-wrap gap-8 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {/* PUBLICATIONS SECTION */}
      <motion.div variants={textVariant()} className="mt-40 relative" id="experience">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-teal-600/10 to-green-600/10 blur-3xl" />
        
        <div className="relative z-10">
          <p className={`${styles.sectionSubText} bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent`}>
            Research & Publications
          </p>
          <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-white via-blue-200 to-teal-200 bg-clip-text text-transparent`}>
            Academic Work.
          </h2>
        </div>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-gray-300 text-[18px] max-w-3xl leading-[32px] relative z-10"
        >
          My research contributions span across IoT systems, cybersecurity, and
          machine learning applications. These publications represent
          peer-reviewed work in top-tier conferences and journals, demonstrating
          my ability to conduct rigorous research and contribute to the academic
          community.
        </motion.p>
      </div>

      {/* Research Metrics */}
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className="mt-10 flex flex-wrap gap-8 justify-center"
      >
        {[
          { label: "Publications", value: "3", icon: "📄", color: "from-blue-500 to-cyan-500" },
          { label: "Research Areas", value: "4", icon: "🔬", color: "from-purple-500 to-pink-500" },
          { label: "Impact Factor", value: "High", icon: "⭐", color: "from-yellow-500 to-orange-500" },
        ].map((metric, index) => (
          <motion.div
            key={index}
            className={`bg-gradient-to-br ${metric.color} p-6 rounded-2xl min-w-[140px] text-center shadow-2xl border border-white/10 hover:scale-105 transition-all duration-300`}
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-4xl mb-3">{metric.icon}</div>
            <div className="text-white font-bold text-2xl mb-1">{metric.value}</div>
            <div className="text-white/80 text-sm font-medium">{metric.label}</div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-8 justify-center">
        {publications.map((publication, index) => (
          <PublicationCard
            key={`publication-${index}`}
            index={index}
            {...publication}
          />
        ))}
      </div>

      {/* Research Areas */}
      <motion.div
        variants={fadeIn("up", "spring", 0.4, 0.75)}
        className="mt-20 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-teal-600/10 to-blue-600/10 blur-3xl" />
        
        <div className="relative z-10">
          <h3 className="text-white font-bold text-[28px] mb-8 text-center bg-gradient-to-r from-white via-green-200 to-teal-200 bg-clip-text text-transparent">
            Research Focus Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                area: "IoT & Smart Systems",
                color: "from-green-500 to-emerald-600",
                count: "2 papers",
                icon: "🌐"
              },
              { 
                area: "AI Security", 
                color: "from-red-500 to-rose-600", 
                count: "2 papers",
                icon: "🔐"
              },
              {
                area: "Machine Learning",
                color: "from-blue-500 to-indigo-600",
                count: "3 papers",
                icon: "🧠"
              },
              { 
                area: "Automation", 
                color: "from-purple-500 to-violet-600", 
                count: "2 papers",
                icon: "⚙️"
              },
            ].map((area, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${area.color} p-6 rounded-2xl text-white text-center shadow-2xl border border-white/10 hover:scale-105 transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-3">{area.icon}</div>
                <h4 className="font-bold text-lg mb-2">{area.area}</h4>
                <p className="text-white/90 text-sm">{area.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div variants={textVariant()} className="mt-40 relative">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 via-orange-600/10 to-red-600/10 blur-3xl" />
        
        <div className="relative z-10">
          <p className={`${styles.sectionSubText} bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent`}>
            Professional Credentials
          </p>
          <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent`}>
            Certifications.
          </h2>
        </div>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-gray-300 text-[18px] max-w-3xl leading-[32px] relative z-10"
        >
          These certifications represent my commitment to continuous learning and professional development in various technologies and domains. Click on any certification to view the credential.
        </motion.p>
      </div>

      {/* Certification Statistics */}
      <motion.div id="Certifications"
        variants={fadeIn("up", "spring", 0.2, 1)}
        className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start"
      >
        <motion.div 
          className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-6 min-w-[160px] text-center shadow-2xl border border-white/10"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-white font-bold text-[32px] mb-1">{certifications.length}</h3>
          <p className="text-white/80 text-[16px] font-medium">Total Certificates</p>
        </motion.div>
        <motion.div 
          className="bg-gradient-to-br from-teal-600 to-cyan-700 rounded-3xl p-6 min-w-[160px] text-center shadow-2xl border border-white/10"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-white font-bold text-[32px] mb-1">
            {new Set(certifications.map(cert => cert.issuer)).size}
          </h3>
          <p className="text-white/80 text-[16px] font-medium">Organizations</p>
        </motion.div>
        <motion.div 
          className="bg-gradient-to-br from-pink-600 to-rose-700 rounded-3xl p-6 min-w-[160px] text-center shadow-2xl border border-white/10"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-white font-bold text-[32px] mb-1">
            {new Set(certifications.flatMap(cert => cert.skills || [])).size}
          </h3>
          <p className="text-white/80 text-[16px] font-medium">Skills Covered</p>
        </motion.div>
      </motion.div>

      {/* Certification List */}
      <div className="mt-20 max-w-5xl mx-auto mb-16">
        <ul className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.li
              key={`cert-${index}`}
              variants={fadeIn("up", "spring", index * 0.1, 0.5)}
              className="relative overflow-hidden group"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Main card */}
              <motion.div
                className="relative flex items-center space-x-6 bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer"
                whileHover={{ borderColor: "rgba(34, 211, 238, 0.5)" }}
              >
                {/* Clickable overlay */}
                <motion.a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  whileHover={{ scale: 1.01 }}
                />
                
                {/* Icon with enhanced styling */}
                {cert.icon && (
                  <motion.div
                    className="relative flex-shrink-0"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={cert.icon}
                      alt={`${cert.issuer} logo`}
                      className="relative w-16 h-16 object-contain rounded-2xl shadow-lg border-2 border-gray-600/50 group-hover:border-cyan-400/50 transition-all duration-300"
                    />
                  </motion.div>
                )}
                
                {/* Content area */}
                <div className="flex flex-col flex-1 relative z-20 pointer-events-none">
                  {/* Title with enhanced styling */}
                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-white font-bold text-xl bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-purple-300 transition-all duration-300">
                      {cert.title}
                    </h3>
                    
                    {/* External link icon */}
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                    >
                      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.div>
                  </motion.div>
                  
                  {/* Issuer and date with colorful styling */}
                  <div className="text-base mt-2 flex items-center gap-2">
                    <span className="text-blue-400 font-semibold bg-blue-400/10 px-2 py-1 rounded-lg border border-blue-400/20">
                      {cert.issuer}
                    </span>
                    <span className="text-gray-400">&middot;</span>
                    <span className="text-emerald-400 font-medium bg-emerald-400/10 px-2 py-1 rounded-lg border border-emerald-400/20">
                      {cert.date}
                    </span>
                  </div>
                  
                  {/* Skills with enhanced colorful tags */}
                  {cert.skills.length > 0 && (
                    <div className="mt-4">
                      <span className="text-sm text-gray-400 mb-3 block font-medium">
                        🏆 Skills Covered:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.slice(0, 6).map((skill, skillIndex) => {
                          const colors = [
                            'from-pink-500/20 to-rose-500/20 border-pink-400/30 text-pink-300',
                            'from-purple-500/20 to-indigo-500/20 border-purple-400/30 text-purple-300',
                            'from-blue-500/20 to-cyan-500/20 border-blue-400/30 text-cyan-300',
                            'from-teal-500/20 to-emerald-500/20 border-teal-400/30 text-teal-300',
                            'from-yellow-500/20 to-orange-500/20 border-yellow-400/30 text-yellow-300',
                            'from-red-500/20 to-pink-500/20 border-red-400/30 text-red-300',
                          ];
                          const colorClass = colors[skillIndex % colors.length];
                          
                          return (
                            <motion.span
                              key={skillIndex}
                              className={`text-xs bg-gradient-to-r ${colorClass} px-3 py-1.5 rounded-full border font-medium shadow-sm hover:shadow-md transition-shadow duration-200`}
                              initial={{ opacity: 0, scale: 0.8, y: 10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{ 
                                delay: index * 0.1 + skillIndex * 0.05,
                                type: "spring",
                                stiffness: 200,
                                damping: 15
                              }}
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              {skill}
                            </motion.span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Hover indicator */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ scale: 0, rotate: -180 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                >
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                    VIEW CERT
                  </div>
                </motion.div>
                
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-pulse rounded-2xl"></div>
                </div>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>

    </div>
    </>
  );
};

// export default SectionWrapper(Works, "work");
export default Works;