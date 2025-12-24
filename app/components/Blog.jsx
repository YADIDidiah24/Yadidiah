'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/content";
import { fadeIn, textVariant } from "../utils/motion";

const BlogCard = ({ index, title, excerpt, image, url }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="bg-secondary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 640px) 100vw, 360px"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-text-primary font-bold text-2xl">{title}</h3>
          <p className="mt-2 text-text-secondary text-sm">{excerpt}</p>
        </div>

        <div className="mt-4 flex justify-end">
          <p className="text-accent font-semibold">Read More &rarr;</p>
        </div>
      </a>
    </motion.div>
  );
};

const Blog = () => {
  return (
    <section id="blog" className="w-full py-20">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-6"
      >
        <p className="text-lg font-medium text-text-secondary text-center">
          Insights & Articles
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-2 text-center">
          My Blog.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center max-w-7xl mx-auto px-6">
        {blogPosts.map((post, index) => (
          <BlogCard key={`blog-${index}`} index={index} {...post} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
