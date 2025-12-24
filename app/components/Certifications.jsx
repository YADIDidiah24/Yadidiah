'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { certifications } from "@/lib/content";
import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({
  index,
  title,
  issuer,
  date,
  credentialId,
  icon,
  skills,
  url,
}) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeIn("up", "spring", index * 0.12, 0.8)}
      className="group relative overflow-hidden rounded-2xl bg-secondary/80 border border-quaternary/40 
                 hover:border-accent/60 hover:bg-secondary/90 transition-all duration-300
                 shadow-lg hover:shadow-accent/30 hover:-translate-y-1"
    >
      {/* Glow accent */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute -inset-20 bg-radial-gradient from-accent/15 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 flex gap-4 p-5">
        <div className="flex-shrink-0">
          <div className="relative w-14 h-14 rounded-xl bg-tertiary/60 flex items-center justify-center overflow-hidden">
            <Image
              src={icon}
              alt={issuer}
              width={56}
              height={56}
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col min-w-0">
          <h3 className="text-text-primary font-semibold text-base md:text-lg line-clamp-2">
            {title}
          </h3>
          <p className="text-text-secondary text-sm mt-1">
            {issuer} • <span className="text-text-muted">{date}</span>
          </p>
          {credentialId && (
            <p className="text-[11px] text-text-muted mt-1">
              Credential ID: {credentialId}
            </p>
          )}

          {skills && skills.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.slice(0, 4).map((skill) => (
                <span
                  key={skill}
                  className="text-[11px] px-2 py-1 rounded-full bg-tertiary/60 text-text-secondary 
                             group-hover:bg-accent/10 group-hover:text-text-primary transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
              {skills.length > 4 && (
                <span className="text-[11px] px-2 py-1 rounded-full bg-tertiary/40 text-text-muted">
                  +{skills.length - 4} more
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between px-5 pb-4 text-xs text-text-muted">
        <span className="group-hover:text-accent transition-colors duration-300">
          View credential
        </span>
        <span className="inline-flex items-center gap-1 group-hover:text-accent transition-colors duration-300">
          <span>Open</span>
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 7l-10 10m0-10h10v10"
            />
          </svg>
        </span>
      </div>
    </motion.a>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="w-full py-20 relative overflow-hidden">
      {/* subtle animated background orbs */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-32 -right-24 w-72 h-72 bg-accent/20 blur-3xl rounded-full animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-accent-secondary/20 blur-3xl rounded-full animate-pulse-slower" />
      </div>

      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        <p className="text-lg font-medium text-text-secondary text-center">
          Proof of Expertise
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-2 text-center">
          Certifications.
        </h2>
        <p className="mt-4 text-text-secondary text-center max-w-3xl mx-auto text-sm md:text-base">
          A curated collection of professional certifications that validate my skills
          across AI, data, cloud, and software engineering.
        </p>
      </motion.div>

      <div className="relative z-10 mt-12 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {certifications.map((cert, index) => (
            <CertificationCard key={`${cert.title}-${index}`} index={index} {...cert} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;


