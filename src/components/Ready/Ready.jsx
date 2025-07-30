import React from "react";
import { motion } from "framer-motion";
import RotatingText from "../RotatingText/RotatingText";

export default function CallToAction() {
  return (
    <div className="flex items-center justify-center min-h-screen py-10 px-4 bg-[#02021E]">
      <div className="relative w-full max-w-[95%] sm:max-w-2xl md:max-w-3xl lg:max-w-7xl bg-[url('/assets/ready2.svg')] bg-no-repeat bg-contain bg-center p-6 sm:p-8 md:p-15 lg:p-20 text-center">
        <h1 className="text-base sm:text-lg md:text-2xl lg:text-4xl font-normal text-black mb-6 font-azonix leading-snug">
          READY TO SHAPE <br className="hidden lg:block" />
          YOUR NEXT{" "}
          <RotatingText
            texts={[
              "BIG IDEA?",
              "BIG LAUNCH?",
              "CLEAN CODE?",
              "SMART STACK?",
              "AGILE MOVE?",
              "CODE REVAMP?",
              "MVP POWER?",
              "DIGITAL CORE?",
              "FUTURE APP?",
              "CLOUD SHIFT?",
              "AI SOLUTION?",
            ]}
            mainClassName="text-[#FF6F00] overflow-hidden justify-center lg:inline-flex"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.05}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </h1>

        <p className="text-[#666666] font-cairo text-sm sm:text-base md:max-w-[1000] lg:text-xl max-w-2xl mx-auto mb-5 lg:mb-8">
          Let’s explore how the right software solutions can bring your vision
          to life combining smart technology with real business impact.
        </p>

        <a href="tel:201070101091">
          <motion.div
            whileHover={{
              backgroundPosition: "200% center",
              transition: { duration: 2, repeat: Infinity, ease: "circInOut" },
            }}
            className="inline-block mx-auto p-[2px] rounded-full bg-[length:200%_200%] bg-gradient-to-r from-dis-btn via-[#FF6F00] to-[#FF6F00]"
          >
            <button className="relative z-10 px-4 py-2 sm:py-3 sm:px-6 lg:px-4 lg:py-4 w-full rounded-full bg-[#0B0896] flex items-center justify-center">
              <span className="font-nebula text-sm sm:text-base lg:text-xl tracking-widest text-white">
                Book a Call
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 40 40"
                fill="none"
                className="ml-3"
              >
                <circle cx="20" cy="20" r="20" fill="white" />
                <foreignObject x="6" y="6" width="25" height="25">
                  <img
                    src="assets/calender.gif"
                    alt="icon"
                    className="w-full h-full"
                  />
                </foreignObject>
              </svg>
            </button>
          </motion.div>
        </a>
      </div>
    </div>
  );
}
