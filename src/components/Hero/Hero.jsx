import React from "react";
import Rocket from "../../assets/rocket.gif";
import robotImg from "../../assets/Robot Model.png";
import background from "../../assets/Subtract.png";
import vectorImg from "../../assets/Vector 1.png";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <div className=" lg:relative lg:h-full lg:flex lg:mx-8 bg-back-ground lg:overflow-hidden ">
      <img
        src={background}
        className="hidden lg:block lg:absolute lg:h-full lg:w-full lg:top-0 lg:z-0  "
        alt="Background Image"
      />
      <div className="relative z-10 flex flex-col md:flex lg:flex-row items-center w-full justify-around px-8 pt-7  ">
        {/* النصوص */}
        <div className=" lg:space-y-6 text-white">
          <h1 className=" hero-title font-azonix text-4xl lg:text-7xl lg:ml-7">
            WE BELIEVE
          </h1>

          <p className="text-xl text-center  font-normal leading-relaxed font-azonix lg:text-4xl lg:pt-5 lg:ml-5 lg:text-left">
            THERE'S NO BAD{" "}
          </p>
          <p className="text-xl text-center font-normal leading-relaxed font-azonix lg:ml-5 lg:text-4xl">
            BUSINESS, THERE'S BAD
          </p>

          <h1 className="text-4xl font-bold text-center lg:text-start">
            <span className="text-transparent bg-clip-text bg-gradient-to-r  from-[#FF6F00]  to-[#007BFF] font-azonix font-normal text-3xl text-center lg:text-6xl lg:ml-5">
              DEVELOPER
            </span>
          </h1>
          <a href="#discover">
            <motion.div
              whileHover={{
                backgroundPosition: "200% center",
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "circInOut",
                },
              }}
              className="relative inline-block ml-7 mt-100 p-[2px] rounded-full bg-[length:200%_200%] bg-gradient-to-r from-dis-btn via-btn-color to-btn-color lg:mt-20 lg:ml-36 lg:mx-14 lg:p-[2px]"
            >
              <button className="relative z-10 px-4 py-1 w-full h-full rounded-full bg-dis-btn flex items-center justify-center lg:z-10 lg:px-7 lg:py-3 lg:relative lg:flex lg:items-center lg:justify-center">
                <span className="font-nebula text-sm tracking-widest text-white lg:text-xl">
                  DISCOVER NOW
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  className="ml-2 lg:ml-4"
                >
                  <circle cx="20" cy="20" r="20" fill="white" />
                  <foreignObject x="6" y="6" width="28" height="28">
                    <img src={Rocket} alt="icon" className="w-full h-full" />
                  </foreignObject>
                </svg>
              </button>
            </motion.div>
          </a>
        </div>

        {/* الروبوت */}
        <div className="z-10 lg:relative lg:mr-20 lg:z-10 ">
          <img
            src={robotImg}
            alt="robot"
            className="absolute overflow-hidden drop-shadow-[0_0_8px_#5f4fd8] top-50 right-20 w-[250px] lg:w-[550px] lg:relative lg:top-0 lg:left-10 md:left-66  lg:overflow-hidden"
          />
        </div>

        {/* النص الثابت */}
        <div className="text-xl absolute right-13 top-[40%] font-glitch font-bold text-white leading-tight z-1 pointer-events-none md:right-55 lg:absolute lg:right-25 lg:top-[20%] lg:text-left lg:text-5xl lg:font-glitch lg:font-bold  lg:text-white lg:leading-tight ">
          <p>FOR</p>
          <p>EVERY</p>
          <p>BUSINESS</p>
        </div>
      </div>
      <img
        src={vectorImg}
        alt=""
        style={{ justifySelf: "anchor-center" }}
        className="hidden lg:absolute lg:bottom-0 lg:w-96 lg:z-60 lg:right-0.5 lg:block"
      />
    </div>
  );
}
