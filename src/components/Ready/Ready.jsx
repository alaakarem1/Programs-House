import React from "react";
import { motion } from "framer-motion";
import RotatingText from "../RotatingText/RotatingText";

export default function CallToAction() {
  return (
    <div className="flex items-center justify-center bg-[#02021E] px-0 py-10 md:py-25 lg:min-h-screen lg:py-10">
      <div className="relative w-full bg-[url('/assets/ready2.svg')] bg-cover md:bg-contain mx-8 rounded-2xl bg-center bg-no-repeat p-6 text-center sm:max-w-2xl sm:p-8 md:max-w-3xl md:p-15 lg:max-w-7xl lg:p-20">
        <h1 className="font-azonix mb-6 text-base leading-snug font-normal text-black sm:text-lg md:text-2xl lg:text-4xl">
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

        <p className="font-cairo mx-auto mb-5 hidden max-w-2xl text-sm text-[#666666] sm:text-base md:block md:max-w-[1000] md:text-2xl lg:mb-8 lg:text-xl">
          Let’s explore how the right software solutions can bring your vision
          to life combining smart technology with real business impact.
        </p>

        <a href="tel:201070101091">
          <motion.div
            whileHover={{
              backgroundPosition: "200% center",
              transition: { duration: 2, repeat: Infinity, ease: "circInOut" },
            }}
            className="from-dis-btn mx-auto inline-block rounded-full bg-gradient-to-r via-[#FF6F00] to-[#FF6F00] bg-[length:200%_200%] p-[2px]"
          >
            
            <button className="relative z-10 flex w-full cursor-pointer items-center justify-center rounded-full bg-[#0B0896] px-4 py-2 sm:px-6 sm:py-3 lg:px-4 lg:py-4">
              <span className="font-nebula text-sm tracking-widest text-white sm:text-base lg:text-xl">
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
                    className="h-full w-full"
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
