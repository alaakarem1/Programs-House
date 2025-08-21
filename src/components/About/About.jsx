import React from "react";
import shapeBg from "../../assets/Vector 2.png";
import personImg from "../../assets/person.png";
import Pen from "../../assets/pen.gif";
import { motion } from "framer-motion";
export default function About() {
  return (
    <>
      <section
        id="whoWeAre"
        className="relative mx-6 md:mx-20 "
      >
        <img
          src={shapeBg}
          alt="shape background"
          className="hidden  z-0 lg:absolute lg:block lg:w-full lg:h-9/12 bottom-0  lg:z-0"
        />

        <div className="relative z-10 flex flex-col gap-8 lg:flex-row items-center justify-between">
            <img
              src={personImg}
              alt="VR Person"
              className=" lg:w-[600px]  "
            />

          <div className="flex flex-col lg:w-1/2 text-white text-center lg:text-left lg:space-y-5 lg:self-end lg:pb-10 font-azonix ">
            <div className="lg:pl-9 lg:mt-10">
              <p className="uppercase text-2xl  lg:text-3xl  tracking-widest text-white lg:pb-4">
                AT
              </p>
              <h2 className="text-3xl  font-bold">
                <span className=" text-transparent text-2xl bg-clip-text bg-gradient-to-r bg-text-color lg:text-5xl font-azonix font-normal ">
                  PROGRAMS HOUSE
                </span>
              </h2>
            </div>

            <div className="">
              <p className="text-gray-100 mx-2 text-2xl font-azonix font-normal lg:text-xl lg:mx-0 ">
                WE KNOW THAT SUCCESS ISN’T JUST ABOUT IDEAS,{" "}
                <br className="hidden lg:block" />
                <br className="hidden lg:block" />
                IT’S ABOUT HAVING THE RIGHT SOFTWARE.
              </p>
              <p className="hidden lg:font-cairo lg:text-gray-400 lg:block lg:mx-auto lg:pt-5 lg:text-xl lg:font-normal">
                We craft smart, scalable solutions that drive growth and turn
                <br />
                challenges into opportunities. With the right technology,
                success isn’t
                <br />
                just possible — it’s inevitable."
              </p>
            </div>
            <a href="#WhoWeAreBtn" className="mx-auto">
              <motion.div
                whileHover={{
                  backgroundPosition: "200% center",
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="relative mt-10 p-[2px] self-center lg:inline-block lg:mr-30 w-fit lg:mt-20 lg:p-[2px] rounded-full bg-[length:200%_200%] bg-gradient-to-r from-btn via-white to-white"
              >
                <button className="relative z-10 px-3  py-2 w-fit h-full lg:px-6 lg:py-4 rounded-full bg-[#0B0896] flex items-center justify-center">
                  <span className="font-nebula text-xl tracking-widest text-white">
                    WHO WE ARE
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
                      <img src={Pen} alt="icon" className="w-full h-full" />
                    </foreignObject>
                  </svg>
                </button>
              </motion.div>
            </a>

            {/* <button className="mt-20 px-3 py-4 rounded-full bg-[#0B0896] border border-white  flex items-center  justify-center mx-14">
                            <span className="font-nebula text-xl tracking-widest text-white">WHO WE ARE</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className='ml-4'>
                                <circle cx="20" cy="20" r="20" fill="white" />
                                <foreignObject x="6" y="6" width="28" height="28">
                                    <img
                                        src={Pen}
                                        alt="icon"
                                        className="w-full h-full "
                                    />
                                </foreignObject>
                            </svg>
                        </button>  */}
          </div>
        </div>
      </section>
    </>
  );
}
