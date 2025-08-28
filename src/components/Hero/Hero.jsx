import React from "react";
import Rocket from "../../assets/rocket.gif";
import robotImg from "../../assets/Robot Model.png";
import background from "../../assets/Subtract.png";
import vectorImg from "../../assets/Vector 1.png";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <div className="bg-back-ground lg:relative lg:mx-8 lg:flex lg:h-full lg:overflow-hidden">
      <img
        src={background}
        className="hidden lg:absolute lg:top-0 lg:z-0 lg:block lg:h-full lg:w-full"
        alt="Background Image"
      />
      <div className="relative z-10 flex w-full flex-col items-center justify-around px-8 pt-7 md:flex-row md:gap-5">
        {/* النصوص */}
        <div className="text-white md:space-y-4 lg:space-y-6">
          <h1 className="hero-title font-azonix text-4xl lg:ml-7 lg:text-7xl">
            WE BELIEVE
          </h1>

          <p className="font-azonix text-center text-xl leading-relaxed font-normal lg:ml-5 lg:pt-5 lg:text-left lg:text-4xl">
            THERE'S NO BAD{" "}
          </p>
          <p className="font-azonix text-center text-xl leading-relaxed font-normal lg:ml-5 lg:text-4xl">
            BUSINESS, THERE'S BAD
          </p>

          <h1 className="text-center text-4xl font-bold lg:text-start">
            <span className="font-azonix bg-gradient-to-r from-[#FF6F00] to-[#007BFF] bg-clip-text text-center text-3xl font-normal text-transparent lg:ml-5 lg:text-6xl">
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
              className="from-dis-btn via-btn-color to-btn-color relative mt-100 ml-7 inline-block rounded-full bg-gradient-to-r bg-[length:200%_200%] p-[2px] md:mt-0 lg:mx-14 lg:mt-20 lg:ml-36 lg:p-[2px]"
            >
              <button className="bg-dis-btn relative z-10 flex h-full w-full cursor-pointer items-center justify-center rounded-full px-4 py-1 lg:relative lg:z-10 lg:flex lg:items-center lg:justify-center lg:px-7 lg:py-3">
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
                    <img src={Rocket} alt="icon" className="h-full w-full" />
                  </foreignObject>
                </svg>
              </button>
            </motion.div>
          </a>
        </div>

        <div>
          {/* الروبوت */}
          <div className="z-10 md:relative lg:z-10 lg:mr-20">
            <img
              src={robotImg}
              alt="robot"
              className="absolute top-50 right-20 w-[250px] overflow-hidden drop-shadow-[0_0_8px_#5f4fd8] md:relative md:top-auto md:right-auto lg:top-0 lg:left-10 lg:w-[550px] lg:overflow-hidden"
            />
          </div>
          {/* النص الثابت */}
          <div className="font-glitch lg:font-glitch pointer-events-none absolute top-[40%] right-13 z-1 text-xl leading-tight font-bold text-white md:top-[25%] md:right-12 lg:absolute lg:top-[20%] lg:right-20 lg:text-left lg:text-5xl lg:leading-tight lg:font-bold lg:text-white">
            <p>FOR</p>
            <p>EVERY</p>
            <p>BUSINESS</p>
          </div>
        </div>
      </div>
      <img
        src={vectorImg}
        alt=""
        style={{ justifySelf: "anchor-center" }}
        className="hidden lg:absolute lg:right-0.5 lg:bottom-0 lg:z-60 lg:block lg:w-96"
      />
    </div>
  );
}
