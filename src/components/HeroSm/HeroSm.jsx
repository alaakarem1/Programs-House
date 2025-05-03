import React from "react";
import Rocket from "../../assets/rocket.gif";
import robotImg from "../../assets/Robot Model.png";
import background from "../../assets/Subtract.png";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function HeroSm() {
  return (
    <div className="relative flex flex-col items-center justify-center bg-back-ground overflow-hidden px-4 py-12">
      {/* ✅ Background Image */}
      <img
        src={background}
        alt="Background"
        className="absolute top-0 right-0 h-full object-cover z-0 pointer-events-none w-full ml-0 mx-auto"
      />

      {/* ✅ Static Text Behind Robot */}
      <div className="absolute top-[9%] right-[7%] text-left text-3xl sm:text-4xl font-glitch font-bold text-white leading-tight z-10 pointer-events-none">
        <p>FOR</p>
        <p>EVERY</p>
        <p>BUSINESS</p>
      </div>

      {/* ✅ Main Content */}
      <div className="relative z-20 flex flex-col-reverse items-center justify-between w-full gap-12">
        {/* ✨ Text Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="text-white space-y-6 text-center max-w-2xl"
        >
          <motion.h1
            variants={childVariants}
            className="hero-title font-azonix text-4xl sm:text-5xl"
          >
            WE BELIEVE
          </motion.h1>

          <motion.p
            variants={childVariants}
            className="text-2xl sm:text-3xl font-normal leading-relaxed font-azonix"
          >
            THERE'S NO BAD
          </motion.p>
          <motion.p
            variants={childVariants}
            className="text-2xl sm:text-3xl font-normal leading-relaxed font-azonix"
          >
            BUSINESS, THERE'S BAD
          </motion.p>

          <motion.h1 variants={childVariants}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F00] to-[#007BFF] font-azonix text-4xl sm:text-6xl">
              DEVELPERS
            </span>
          </motion.h1>

          {/* ✨ CTA Button */}
          <motion.div
            variants={childVariants}
            whileHover={{
              backgroundPosition: "200% center",
              transition: { duration: 2, repeat: Infinity, ease: "circInOut" },
            }}
            className="inline-block p-[2px] rounded-full bg-[length:200%_200%] bg-gradient-to-r from-dis-btn via-btn-color to-btn-color mt-8"
          >
            <button className="px-6 py-2 rounded-full bg-dis-btn flex items-center justify-center gap-3 w-full sm:w-auto">
              <span className="font-nebula text-sm sm:text-base tracking-widest text-white">
                DISCOVER NOW
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
              >
                <circle cx="20" cy="20" r="20" fill="white" />
                <foreignObject x="6" y="6" width="28" height="28">
                  <img src={Rocket} alt="icon" className="w-full h-full" />
                </foreignObject>
              </svg>
            </button>
          </motion.div>
        </motion.div>

        {/* ✅ Robot Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 flex justify-center"
        >
          <img
            src={robotImg}
            alt="robot"
            className="w-[280px] sm:w-[350px] drop-shadow-[0_0_8px_#5f4fd8] relative z-20"
          />
        </motion.div>
      </div>
    </div>
  );
}
