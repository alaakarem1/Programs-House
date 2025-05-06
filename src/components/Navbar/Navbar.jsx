import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import Rocket from "../../assets/rocket.gif";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" bg-back-ground py-6">
      <div className="bg-back-ground py-4 px-4 lg:px-16 mx-16 shadow-md border-t-2 border-b-2 border-gray-100">
        <nav className="flex relative justify-between items-center">
          {/* Logo */}
          <a href="#">
            <img src={Logo} alt="Logo" className="h-10" />
          </a>

          {/* Mobile toggle */}
          <div className=" md:hidden absolute right-0 ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-10 text-white font-semibold">
            <a
              className=" cursor-pointer hover:text-nav-color active:text-nav-color transition font-cairo"
              href="#whoWeAre"
            >
              Who we are
            </a>
            <div className="hover:text-nav-color active:text-nav-color">
              <a
                className="relative group cursor-pointer transition flex items-center gap-1 font-cairo"
                href="#services"
              >
                Our Services
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg> */}
              </a>
            </div>
            <a
              className="cursor-pointer hover:text-nav-color active:text-nav-color transition font-cairo"
              href="#projects"
            >
              Projects
            </a>
          </ul>

          {/* Contact button (desktop only) */}
          <a
            href="https://wa.me/201070101091"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{
                backgroundPosition: "200% center",
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="hidden md:inline-block p-[2px] rounded-full bg-[length:200%_200%] bg-gradient-to-r from-btn via-white to-white"
            >
              <button className="flex items-center gap-5 bg-btn text-white font-alex py-2 px-5 rounded-full">
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <circle cx="20" cy="20" r="20" fill="white" />
                  <foreignObject x="6" y="6" width="28" height="28">
                    <img src={Rocket} alt="icon" className="w-full h-full" />
                  </foreignObject>
                </svg>
              </button>
            </motion.div>
          </a>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className=" md:hidden mt-4 flex flex-col gap-4 text-white font-semibold items-center text-center"
            >
              <div className="md:hidden mt-4 flex flex-col gap-4 text-white font-semibold items-center text-center">
                <a
                  href="#whoWeAre"
                  className="cursor-pointer hover:text-nav-color active:text-nav-color transition font-cairo"
                >
                  Who we are
                </a>
                <a
                  href="#services"
                  className="cursor-pointer hover:text-nav-color active:text-nav-color transition font-cairo"
                >
                  Our Services
                </a>
                <a
                  href="#projects"
                  className="cursor-pointer hover:text-nav-color active:text-nav-color transition font-cairo"
                >
                  Projects
                </a>
                <a
                  href="https://wa.me/201070101091"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileHover={{
                      backgroundPosition: "200% center",
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    className="inline-block p-[1px] rounded-full bg-[length:200%_200%] bg-gradient-to-r from-btn via-white to-white self-center"
                  >
                    <button className="flex items-center gap-3 bg-btn text-white font-alex py-1.5 px-4 rounded-full text-sm ">
                      Contact Us
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
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
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
