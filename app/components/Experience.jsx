'use client'

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { professionalExperience, virtualInternships } from "@/lib/content";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ item, isExpanded, onToggle }) => {
  return (
    <div className="border border-quaternary/30 rounded-xl overflow-hidden bg-secondary/20 backdrop-blur-sm">
      {/* Card Header - Clickable */}
      <button
        onClick={onToggle}
        className="w-full p-6 text-left hover:bg-tertiary/20 transition-colors duration-300"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-lg bg-secondary/80 border border-quaternary/40 flex items-center justify-center overflow-hidden flex-shrink-0">
              <Image
                src={item.icon}
                alt={item.company_name}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-text-primary text-lg md:text-xl font-semibold">
                {item.title}
              </h3>
              <p className="text-text-secondary text-sm md:text-base">
                @ {item.company_name}
              </p>
              {item.date && (
                <p className="text-xs text-text-muted uppercase tracking-wide mt-1">
                  {item.date}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg text-text-secondary font-bold">
              {isExpanded ? '▼' : '▶'}
            </span>
          </div>
        </div>
      </button>

      {/* Card Content - Collapsible */}
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pt-0">
          <ul className="space-y-3 text-text-secondary text-sm md:text-base leading-relaxed">
            {item.points.map((point, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1 block h-1 w-1 rounded-full bg-accent/70 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState(() => {
    // By default, only expand the first item (professional experience)
    return { 0: true };
  });

  const allExperiences = [...professionalExperience, ...virtualInternships];

  const toggleItem = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="experience" className="w-full py-20 relative overflow-hidden">
      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-32 left-0 w-64 h-64 bg-accent/15 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 right-0 w-80 h-80 bg-accent-secondary/15 blur-3xl rounded-full" />
      </div>

      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        <p className="text-lg font-medium text-text-secondary text-center">
          What I've Done So Far
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-2 text-center">
          Work Experience.
        </h2>
        <p className="mt-4 text-text-secondary text-center max-w-3xl mx-auto text-sm md:text-base">
          A timeline of professional roles and virtual internships that shaped my
          journey across AI, data, and software engineering.
        </p>
      </motion.div>

      <div className="relative z-10 mt-14 max-w-4xl mx-auto px-6">
        <div className="space-y-4">
          {allExperiences.map((exp, index) => (
            <motion.div
              key={`${exp.company_name}-${index}`}
              variants={fadeIn("up", "spring", index * 0.1, 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <ExperienceCard
                item={exp}
                isExpanded={expandedItems[index]}
                onToggle={() => toggleItem(index)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
