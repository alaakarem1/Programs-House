import React from "react";
import Rocket from "../../assets/rocket.gif";
import robotImg from "../../assets/Robot Model.png";
import background from "../../assets/Subtract.png";
import vectorImg from "../../assets/Vector 1.png";
import { motion } from "framer-motion";

const HeroLarge = () => {
  return (
    <div className="relative h-full w-full px-20 py-12 bg-back-ground  overflow-hidden">
      {/* ✅ الخلفية */}
      <img
        src={background}
        className="absolute top-0 left-0 w-[94%] h-full ml-10 z-0 pointer-events-none"
        alt="Background Image"
      />

      {/* ✅ المحتوى الرئيسي */}
      <div className="relative z-10 flex flex-row items-center justify-between w-full h-full pt-7">
        {/* ✅ النصوص */}
        <div className="space-y-6 text-white max-w-[50%]">
          <h1 className="hero-title font-azonix">WE BELIEVE</h1>

          <p className="text-5xl font-normal leading-relaxed font-azonix">
            THERE'S NO BAD
          </p>
          <p className="text-5xl font-normal leading-relaxed font-azonix">
            BUSINESS, THERE'S BAD
          </p>

          <h1 className="text-4xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F00] to-[#007BFF] font-azonix font-normal text-6xl">
              DEVELPERS
            </span>
          </h1>

          <motion.div
            whileHover={{
              backgroundPosition: "200% center",
              transition: { duration: 2, repeat: Infinity, ease: "circInOut" },
            }}
            className="relative inline-block mt-20 ml-36 p-[2px] rounded-full bg-[length:200%_200%] bg-gradient-to-r from-dis-btn via-btn-color to-btn-color"
          >
            <button className="relative z-10 px-7 py-3 w-full h-full rounded-full bg-dis-btn flex items-center justify-center">
              <span className="font-nebula text-xl tracking-widest text-white">
                DISCOVER NOW
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="ml-4"
              >
                <circle cx="20" cy="20" r="20" fill="white" />
                <foreignObject x="6" y="6" width="28" height="28">
                  <img src={Rocket} alt="icon" className="w-full h-full" />
                </foreignObject>
              </svg>
            </button>
          </motion.div>
        </div>

        {/* ✅ الروبوت */}
        <div className="relative z-10 flex items-end p-15">
          <img
            src={robotImg}
            alt="robot"
            className="w-[500px] drop-shadow-[0_0_8px_#5f4fd8] translate-y-27 -translate-x-8"
          />
        </div>

        {/* ✅ النص الثابت خلف الروبوت */}
        <div className="absolute right-0 top-[35%] pl-4 text-left text-5xl font-glitch font-bold text-white leading-tight z-0 pointer-events-none">
          <p>FOR</p>
          <p>EVERY</p>
          <p>BUSINESS</p>
        </div>
      </div>
    </div>
  );
};

export default HeroLarge;
