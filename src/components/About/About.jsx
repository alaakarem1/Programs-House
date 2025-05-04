import React from 'react'
import shapeBg from '../../assets/Vector 2.png'
import personImg from '../../assets/person.png'
import Pen from '../../assets/pen.gif'
import { motion } from "framer-motion";
export default function About() {
    return (
        <>
            <section className="relative bg-back-ground w-full py-20 px-6 md:px-20 ">

                <img
                    src={shapeBg}
                    alt="shape background"
                    className="absolute top- left-1/2 w-[85%] -translate-x-1/2 -translate-y-1/2 z-0 lg:absolute lg:h-xl lg:top-1/2 lg:left-1/2 lg:w-[80%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:z-0"
                />


                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between ">

                    <div className=" flex">
                        <img
                            src={personImg}
                            alt="VR Person"
                            className="absolute  -translate-y-8/12 ml-2.5 mt-2 w-46  lg:w-[540px] lg:pt-33 lg:ml-18"
                        />
                    </div>


                    <div className=" w-full lg:w-1/2 text-white text-center lg:text-left lg:space-y-5 font-azonix ">
                        <div className='pl-25  lg:pl-9 lg:mt-10'>
                            <p className="uppercase text-sm  lg:text-3xl  tracking-widest text-white lg:pb-4">AT</p>
                            <h2 className="text-3xl  font-bold">
                                <span className=" text-transparent text-sm bg-clip-text bg-gradient-to-r bg-text-color lg:text-5xl font-azonix font-normal ">
                                    PROGRAMS HOUSE
                                </span>
                            </h2>
                        </div>

                        <div className=''>
                            <p className=" text-sm text-gray-100 font-azonix font-normal lg:text-xl ">
                                WE KNOW THAT SUCCESS ISN’T JUST ABOUT IDEAS,
                                <br className='hidden lg:block'/>
                                <br />
                                IT’S ABOUT HAVING THE RIGHT SOFTWARE.
                            </p>
                            <p className="hidden lg:font-cairo lg:text-gray-400 lg:block lg:mx-auto lg:pt-5 lg:text-xl lg:font-normal">
                                We craft smart, scalable solutions that drive growth and turn
                                <br />
                                challenges into opportunities. With the right
                                technology, success isn’t
                                <br />
                                just possible — it’s inevitable."
                            </p>
                        </div>
                        <motion.div
                            whileHover={{
                                backgroundPosition: "200% center",
                                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                            }}
                            className="relative inline-block mt-20 mx-14 p-[2px] rounded-full bg-[length:200%_200%] bg-gradient-to-r from-btn via-white to-white"
                        >
                            <button className="relative z-10 px-6 py-4 w-full h-full rounded-full bg-[#0B0896] flex items-center justify-center">
                                <span className="font-nebula text-xl tracking-widest text-white">WHO WE ARE</span>
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
    )
}
