import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
      {/* Text Content - Positioned above canvas */}
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 flex flex-row items-start gap-5 z-20 pointer-events-none">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#4ADE80] shadow-lg animate-pulse" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#4ADE80] to-[#22D3EE]" />
        </div>

        < div className="flex-1">
          <h1 className={`${styles.heroHeadText} text-white leading-tight drop-shadow-2xl`}>
            Hi, I'm <span className="text-[#4ADE80] drop-shadow-lg">Yadidiah 👋🏾</span>
          </h1>
          <p className={`${styles.heroSubText}  text-gray-300 drop-shadow-lg leading-relaxed`}>
            I craft intelligent systems that transform ideas into reality,
            developing cutting-edge AI models and deep learning solutions
            that solve complex real-world problems. From predictive analytics
            to generative AI, I turn data into actionable insights that drive innovation.
          </p>

        </div>
      </div>

      {/* Computer Canvas - Full interactive area */}
      <div className="absolute inset-0 z-10">
        {/* Desktop: Canvas positioned to not interfere with text at the top */}
        <div className="hidden md:block w-full h-full">
          <div className="w-full h-full mt-[60px]">
            <ComputersCanvas />
          </div>
        </div>
        
        {/* Mobile: Canvas positioned below text area with reduced size */}
        <div className="block md:hidden w-full h-full">
          <div className="w-full h-[300px] mt-[410px]">
            <ComputersCanvas />
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Always visible */}
      <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 flex justify-center items-center z-30 pointer-events-auto">
        <a href="#about">
          <div className="w-[40px] h-[70px]  rounded-3xl border-4 border-[#4ADE80] flex justify-center items-start p-2 bg-zinc-900/80 backdrop-blur-md shadow-md hover:bg-zinc-800/80 transition-colors duration-300 ">
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