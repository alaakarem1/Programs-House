import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RotatingText from "../RotatingText/RotatingText";
// import readyImage from '/assets/ready2.svg';
export default function CallToAction() {
  return (
    <div className="flex lg:items-center lg:justify-center lg:min-h-screen py-10 lg:py-6 px-2 bg-[#02021E] lg:px-4 lg:mb-6">
      <div className="relative lg:max-w-4xl w-[1500px]  bg-[url('/assets/ready2.svg')]  bg-no-repeat bg-contain bg-center p-10 lg:p-30 text-center ">
        <h1 className="text-sm lg:text-4xl font-normal text-[#000000] lg:mb-6 font-azonix leading-snug"> 
          READY TO SHAPE <br className="hidden lg:block"/>
          YOUR NEXT{" "}
          <RotatingText
            texts={["BIG IDEA?","BIG LAUNCH?","CLEAN CODE?","SMART STACK?","AGILE MOVE?","CODE REVAMP?"," MVP POWER?",

              "DIGITAL CORE?",

              "FUTURE APP?",

              "CLOUD SHIFT?",

              "AI SOLUTION?",
            ]}
            mainClassName="  text-[#FF6F00] overflow-hidden  justify-center lg:inline-flex"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.05}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </h1>

        <p className="text-[#666666] font-cairo text-sm lg:text-xl md:text-xl lg:max-w-2xl mx-auto lg:mb-8 mb-5">
          Let’s explore how the right software solutions can bring your vision
          to life combining smart technology with real business impact.
        </p>

        <motion.div
          whileHover={{
            backgroundPosition: "200% center",
            transition: { duration: 2, repeat: Infinity, ease: "circInOut" },
          }}
          className="relative inline-block mx-auto  p-[2px] rounded-full bg-[length:200%_200%] bg-gradient-to-r from-dis-btn via-[#FF6F00] to-[#FF6F00]"
        >
          <button className="relative z-10 px-1 py-1 lg:px-4 lg:py-4 lg:w-full lg:h-full rounded-full bg-[#0B0896] flex items-center justify-center">
            <span className="font-nebula text-sm lg:text-xl lg:tracking-widest text-white">
              Book a Call
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 40 40"
              fill="none"
              className="ml-4"
            >
              <circle cx="20" cy="20" r="20" fill="white" />
              <foreignObject x="6" y="6" width="25" height="25">
                <img
                  src="assets/calender.gif"
                  alt="icon"
                  className=" w-full h-full"
                />
              </foreignObject>
            </svg>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
