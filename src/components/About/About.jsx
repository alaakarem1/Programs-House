import React from 'react'
import shapeBg from '../../assets/Vector 2.png'
import personImg from '../../assets/person.png'
import Pen from '../../assets/pen.gif'
import { motion } from "framer-motion";
export default function About() {
    return (
        <>
            <section className="relative bg-back-ground w-full lg:py-20 px-6 md:px-20 ">

                <img
                    src={shapeBg}
                    alt="shape background"
                    className="hidden absolute left-1/2 w-[85%] -translate-x-1/2 -translate-y-1/2 z-0 lg:absolute lg:block lg:h-xl lg:top-1/2 lg:left-1/2 lg:w-[80%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:z-0"
                />


                <div className="relative z-10 flex flex-col gap-8 lg:flex-row items-center justify-between ">

                    <div className="w-72 ">
                        <img
                            src={personImg}
                            alt="VR Person"
                            className="lg:absolute lg:-translate-y-8/12  lg:mt-2 lg:pt-48 lg:ml-22 lg:w-[560px] "
                        />
                    </div>


                    <div className=" lg:w-1/2 text-white text-center lg:text-left lg:space-y-5 font-azonix ">
                        <div className='lg:pl-9 lg:mt-10'>
                            <p className="uppercase text-2xl  lg:text-3xl  tracking-widest text-white lg:pb-4">AT</p>
                            <h2 className="text-3xl  font-bold">
                                <span className=" text-transparent text-2xl bg-clip-text bg-gradient-to-r bg-text-color lg:text-5xl font-azonix font-normal ">
                                    PROGRAMS HOUSE
                                </span>
                            </h2>
                        </div>

                        <div className=''>
                            <p className="text-gray-100 mx-2 text-2xl font-azonix font-normal lg:text-xl ">
                                WE KNOW THAT SUCCESS ISN’T JUST ABOUT IDEAS,{" "}
                                <br className='hidden lg:block'/>
                                <br className='hidden lg:block' />
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
                            className="relative mt-10 mx-20 p-[2px] lg:inline-block lg:mt-20 lg:mx-14 lg:p-[2px] rounded-full bg-[length:200%_200%] bg-gradient-to-r from-btn via-white to-white"
                        >
                            <button className="relative z-10 px-2 py-2 w-full h-full lg:px-6 lg:py-4 rounded-full bg-[#0B0896] flex items-center justify-center">
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
