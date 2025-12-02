import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const blogPosts = [
  {
    title: "Building Production-Ready LLM Applications with RAG",
    excerpt: "A comprehensive guide to implementing Retrieval-Augmented Generation systems for real-world applications, covering vector databases, chunking strategies, and performance optimization.",
    date: "Mar 2025",
    readTime: "12 min read",
    category: "LLM Engineering",
    tags: ["RAG", "LangChain", "FAISS", "LLM"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    url: "https://medium.com/@yadidiah.k/building-production-ready-llm-applications-with-rag-0ff4fa016f0e",
    icon: "🤖",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "MLOps Best Practices: From Jupyter Notebooks to Production",
    excerpt: "Learn how to transform experimental ML models into production-grade systems using MLflow, DVC, and modern CI/CD pipelines. Real-world case study included.",
    date: "Feb 2025",
    readTime: "15 min read",
    category: "MLOps",
    tags: ["MLOps", "MLflow", "DVC", "CI/CD"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    url: "https://medium.com/@yadidiah.k/mlops-best-practices-how-to-take-models-from-jupyter-notebooks-to-production-49525b9f3885",
    icon: "⚙️",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Deep Learning for Medical Imaging: Pneumonia Detection",
    excerpt: "Building an explainable AI system for pneumonia detection from chest X-rays using CNNs and Grad-CAM visualizations. Achieved 98.42% accuracy.",
    date: "Jan 2025",
    readTime: "10 min read",
    category: "Computer Vision",
    tags: ["Deep Learning", "Healthcare AI", "TensorFlow"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
    url: "https://medium.com/@yadidiah.k/deep-learning-for-medical-imaging-pneumonia-detection-from-chest-x-rays-c1518175f5fc",
    icon: "🏥",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Fine-Tuning Large Language Models: A Practical Guide",
    excerpt: "Explore parameter-efficient fine-tuning techniques like LoRA and QLoRA for adapting LLMs to specific domains without breaking the bank.",
    date: "Dec 2024",
    readTime: "18 min read",
    category: "LLM Engineering",
    tags: ["Fine-tuning", "LoRA", "PEFT", "Transformers"],
    image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800",
    url: "https://medium.com/@yadidiah.k/b3e8bbaaf3fb",
    icon: "🎯",
    color: "from-orange-500 to-red-500"
  },

];

const BlogCard = ({ title, excerpt, date, readTime, category, tags, image, url, icon, color, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.article
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative group"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/20"
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 via-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Image section */}
        <div className="relative h-48 overflow-hidden bg-gray-800">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse" />
          )}
          <motion.img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
          
          {/* Category badge */}
          <motion.div
            className={`absolute top-4 left-4 bg-gradient-to-r ${color} px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg flex items-center gap-2`}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-lg">{icon}</span>
            {category}
          </motion.div>
          
          {/* Read time */}
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-xs font-medium">
            ⏱️ {readTime}
          </div>
        </div>
        
        {/* Content section */}
        <div className="p-6 relative z-10">
          {/* Date */}
          <p className="text-cyan-400 text-sm font-semibold mb-3">
            📅 {date}
          </p>
          
          {/* Title */}
          <motion.h3
            className="text-white font-bold text-xl mb-3 leading-tight bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-purple-300 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {title}
          </motion.h3>
          
          {/* Excerpt */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
            {excerpt}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-800/80 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-600/50 hover:border-cyan-400/50 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          {/* Read more link */}
          <motion.div
            className="flex items-center gap-2 text-cyan-400 font-semibold text-sm group-hover:gap-3 transition-all"
            whileHover={{ x: 5 }}
          >
            Read Article
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.div>
        </div>
        
        {/* Hover effect border */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-pulse rounded-3xl" />
        </div>
      </a>
    </motion.article>
  );
};

const Blog = () => {
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", "LLM Engineering", "MLOps", "Computer Vision", "AI Security", "Career Advice"];
  
  const filteredPosts = filter === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  return (
    <div className="max-w-7xl mx-auto relative z-0 py-10">
      {/* Section header */}
      <motion.div variants={textVariant()} className="relative mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-red-600/10 blur-3xl" />
        
        <div className="relative z-10">
          <p className={`${styles.sectionSubText} bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent`}>
            Insights & Tutorials
          </p>
          <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent`}>
            Blog & Articles.
          </h2>
        </div>
      </motion.div>

      <div className="w-full flex flex-col">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-gray-300 text-lg max-w-3xl leading-relaxed relative z-10 mb-8"
        >
          I regularly write about AI/ML engineering, data science, and software development. 
          Here you'll find technical deep-dives, tutorials, career advice, and insights from 
          my research and project work.
        </motion.p>

        {/* Category filter */}
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat, idx) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-gray-800/50 text-gray-300 border border-gray-700/50 hover:border-cyan-400/50 hover:text-cyan-400"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Blog stats */}
      <motion.div
        variants={fadeIn("up", "spring", 0.3, 0.75)}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        {[
          { label: "Articles", value: blogPosts.length, icon: "📝", color: "from-blue-500 to-cyan-500" },
          { label: "Total Followers", value: "1K+", icon: "👀", color: "from-purple-500 to-pink-500" },
          { label: "Topics", value: categories.length - 1, icon: "🏷️", color: "from-orange-500 to-red-500" },
          { label: "Avg. Read Time", value: "12 min", icon: "⏱️", color: "from-green-500 to-emerald-500" }
        ].map((stat, index) => (
          <motion.div
            key={index}
            className={`bg-gradient-to-br ${stat.color} p-6 rounded-2xl text-center shadow-2xl border border-white/10`}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-white font-bold text-2xl mb-1">{stat.value}</div>
            <div className="text-white/80 text-sm font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Blog posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, index) => (
          <BlogCard key={`blog-${index}`} index={index} {...post} />
        ))}
      </div>

      {/* Call to action */}
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="mt-16 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm p-8 rounded-3xl border border-cyan-500/20 text-center"
      >
        <h3 className="text-white font-bold text-2xl mb-4 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
          Want to stay updated?
        </h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Follow me on Medium, and LinkedIn for the latest articles on AI/ML, 
          data science, and software engineering.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="https://medium.com/@yadidiah.k"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            📝 Follow on Medium
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/yadidiah-kanaparthi/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-6 py-3 rounded-full font-bold border-2 border-white hover:bg-white hover:text-gray-900 transition-colors shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            💻 Follow on LinkedIn
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Blog, "blog");
