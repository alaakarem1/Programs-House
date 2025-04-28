import React from 'react'
import Logo from '../../assets/Logo.png'
import Rocket from '../../assets/rocket.gif'
import { motion } from "framer-motion";
export default function Navbar() {
    return (
        <>
            <div className=' bg-back-ground py-6'>
                <nav className="bg-back-ground mx-16 py-4 px-8  flex justify-between items-center shadow-md border-t-2 border-b-2  border-gray-100">
                    <div className="flex items-center">
                        <img src={Logo} alt="Logo" className="h-10" />
                    </div>

                    <ul className="flex items-center gap-10 text-white font-semibold">
                        <a className="cursor-pointer hover:text-nav-color transition font-cairo">Who we are</a>
                        <div className='hover:text-nav-color'>
                            <a className="relative group cursor-pointer transition flex items-center gap-1 font-cairo">
                                Our Services
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 fill-current"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                                        capRule="evenodd"
                                    />
                                </svg>
                                <ul className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white text-black font-normal rounded-md shadow-lg w-48 z-50">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Web Development</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Mobile Apps</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">UI/UX Design</li>
                                </ul>
                            </a>
                        </div>

                        <a className="cursor-pointer hover:text-nav-color transition font-cairo">Projects</a>
                    </ul>
                    <motion.div
                        whileHover={{
                            backgroundPosition: "200% center",
                            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                        }}
                        className="relative inline-block   p-[2px] rounded-full bg-[length:200%_200%] bg-gradient-to-r from-btn via-white to-white"
                    >
                        <button className="flex items-center gap-5 bg-btn text-white font-alex py-2 px-5 rounded-full ">
                            Contact Us
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="20" fill="white" />
                                <foreignObject x="6" y="6" width="28" height="28">
                                    <img
                                        src={Rocket}
                                        alt="icon"
                                        className="w-full h-full"
                                    />
                                </foreignObject>
                            </svg>

                        </button>
                    </motion.div>
                </nav>
            </div>

            {/* <div className="w-full h-[2px] bg-gradient-to-r from-[#5f4fd8] to-[#a383ff]" /> */}
        </>
    )
}
