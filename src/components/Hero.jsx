import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto bg-gradient-to-br from-[#0f172a] to-[#1e293b] overflow-hidden">
      {/* Text Content */}
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 flex flex-row items-start gap-5 z-20">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#4ADE80] shadow-lg animate-pulse" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#4ADE80] to-[#22D3EE]" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white leading-tight`}>
            Hi, I'm <span className="text-[#4ADE80] drop-shadow-lg">Yadidiah 👋🏾</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-gray-300`}>
            I build intelligent systems, develop AI-driven models,  
            and create deep learning solutions for real-world challenges.  
            I also specialize in data science and analytics 
          </p>
        </div>
      </div>

      {/* Computer Canvas - Hidden on mobile or with proper mobile handling */}
      <div className={`absolute inset-0 z-10 ${isMobile ? 'pointer-events-none touch-none' : ''}`}>
        {isMobile ? (
          // Static fallback for mobile
          <div className="w-full h-full flex items-center justify-center opacity-30">
            <div className="text-6xl">💻</div>
          </div>
        ) : (
          <ComputersCanvas />
        )}
      </div>

      {/* Mobile Touch Area - Allow scrolling */}
      {isMobile && (
        <div 
          className="absolute inset-0 z-30 pointer-events-auto"
          style={{ touchAction: 'pan-y' }}
          onTouchStart={(e) => {
            // Allow touch events to bubble up for scrolling
            e.stopPropagation();
          }}
        />
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center items-center z-40">
        <a href="#about">
          <div className="w-[40px] h-[70px] rounded-3xl border-4 border-[#4ADE80] flex justify-center items-start p-2 bg-zinc-900/80 backdrop-blur-md shadow-md hover:bg-zinc-800/80 transition-colors">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#4ADE80] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;