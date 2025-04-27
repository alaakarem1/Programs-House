import React from 'react'
import Rocket from '../../assets/rocket.gif'
import robotImg from '../../assets/Robot Model.png'
import background from '../../assets/Subtract.png'
import vectorImg from '../../assets/Vector 1.png'
import { motion } from "framer-motion";
export default function Hero() {
    return (

        <div className=" relative h-full flex px-8  bg-back-ground  ">
            <img
                src={background}
                className=" absolute h-full w-11/12 ml-7 top-0  z-0 "
                alt="Background Image"
            />
            <div className="relative z-10 flex flex-col lg:flex-row items-center w-full justify-around px-8 pt-7  ">
                {/* النصوص */}
                <div className=" space-y-6 text-white">

                    <h1 className=" hero-title font-azonix ">
                        WE BELIEVE
                    </h1>

                    {/* <h1 className="text-4xl md:text-5xl font-bold font-azonix ">
                        <span className="text-transparent  bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">WE</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B448D] to-[#5DA4F6]">BELEVE</span>
                    </h1> */}

                    <p className="text-5xl text-left font-normal leading-relaxed font-azonix">THERE'S NO BAD </p>
                    <p className="text-5xl font-normal leading-relaxed font-azonix">BUSINESS, THERE'S BAD</p>

                    <h1 className="text-4xl font-bold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r   from-[#FF6F00]  to-[#007BFF] font-azonix font-normal text-6xl">DEVELPERS</span>
                    </h1>
                    <motion.div
                        whileHover={{
                            backgroundPosition: "200% center",
                            transition: { duration: 2, repeat: Infinity, ease: "circInOut" },
                        }}
                        className="relative inline-block mt-20 ml-36 mx-14 p-[2px] rounded-full bg-[length:200%_200%] bg-gradient-to-r from-dis-btn via-btn-color to-btn-color"
                    >
                        <button className="relative z-10 px-7 py-3  w-full h-full rounded-full bg-dis-btn flex items-center justify-center">
                            <span className="font-nebula text-xl tracking-widest text-white"> DISCOVER NOW</span>
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
                    {/* <button className="mt-20 px-7 py-3 ml-36 font-nebula text-2xl rounded-full bg-dis-btn text-white border-2  flex  items-center gap-2 ">
                        DISCOVER NOW
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className='ml-4'>
                            <circle cx="20" cy="20" r="20" fill="white" />
                            <foreignObject x="6" y="6" width="28" height="28">
                                <img
                                    src={Rocket}
                                    alt="icon"
                                    className="w-full h-full "
                                />
                            </foreignObject>
                        </svg>
                    </button> */}

                </div>

                {/* الروبوت */}
                <div className="relative mr-25 z-10 overflow-hidden">
                    <img src={robotImg} alt="robot" className=" w-[550px] drop-shadow-[0_0_8px_#5f4fd8] overflow-hidden" />
                </div>

                {/* النص الثابت */}
                <div className="absolute right-15 top-[20%] text-left text-5xl font-glitch font-bold  text-white leading-tight ">
                    <p>FOR</p>
                    <p>EVERY</p>
                    <p>BUSINESS</p>
                </div>
            </div>
            <img src={vectorImg} alt="" style={{ justifySelf: "anchor-center" }} className='absolute bottom-0  w-96 z-60 right-0.5' />

        </div>


    )
}
