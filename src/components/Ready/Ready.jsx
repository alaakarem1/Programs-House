import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RotatingText from "../RotatingText/RotatingText";
import readyImage from '/assets/ready2.svg';
export default function CallToAction() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#05031A] to-[#020111] px-4">
      <div className="relative max-w-4xl w-[1500px] bg-[url('/assets/ready2.svg')] bg-no-repeat bg-contain bg-center p-10 md:p-16 text-center ">
        <h1 className="text-2xl md:text-5xl font-normal text-[#000000] mb-6 font-azonix leading-snug">
          READY TO SHAPE <br />
          YOUR NEXT{" "}
          <RotatingText
            texts={[
              "BIG IDEA?",
              "BIG LAUNCH?",

              "CLEAN CODE?",

              "SMART STACK?",

              "AGILE MOVE?",

              "TECH UPGRADE?",

              "CODE REVAMP?",

              " MVP POWER?",

              "NEXT PLATFORM?",

              "SCALABLE SYSTEM?",

              "UX REVOLUTION?",

              "DIGITAL CORE?",

              "FUTURE APP?",

              "CUSTOM BUILD?",

              "CLOUD SHIFT?",

              "AI SOLUTION?",
            ]}
            mainClassName="  text-[#FF6F00] overflow-hidden  justify-center inline-flex"
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

        <p className="text-[#666666] font-cairo text-xl md:text-xl max-w-2xl mx-auto mb-8">
          Let’s explore how the right software solutions can bring your vision
          to life combining smart technology with real business impact.
        </p>

        <motion.div
          whileHover={{
            backgroundPosition: "200% center",
            transition: { duration: 2, repeat: Infinity, ease: "circInOut" },
          }}
          className="relative inline-block mx-auto p-[2px] rounded-full bg-[length:200%_200%] bg-gradient-to-r from-dis-btn via-[#FF6F00] to-[#FF6F00]"
        >
          <button className="relative z-10 px-4 py-4 w-full h-full rounded-full bg-[#0B0896] flex items-center justify-center">
            <span className="font-nebula text-xl tracking-widest text-white">
              Book a Call
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
                <img
                  src="assets/calender.gif"
                  alt="icon"
                  className="w-full h-full"
                />
              </foreignObject>
            </svg>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
