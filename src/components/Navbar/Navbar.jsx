import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import Rocket from "../../assets/rocket.gif";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-back-ground py-6">
      <div className="bg-back-ground mx-4 border-t-2 border-b-2 border-gray-100 px-4 py-4 shadow-md lg:mx-8 lg:px-16">
        <nav className="relative flex items-center justify-between">
          {/* Logo */}
          <a href="#">
            <img src={Logo} alt="Logo" className="h-10" />
          </a>

          {/* Mobile toggle */}
          <div className="absolute right-0 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-white"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Desktop menu */}
          <ul className="hidden items-center gap-10 font-semibold text-white md:flex">
            <a
              className="hover:text-nav-color active:text-nav-color font-cairo cursor-pointer transition"
              href="#whoWeAre"
            >
              Who we are
            </a>
            <div className="hover:text-nav-color active:text-nav-color">
              <a
                className="group font-cairo relative flex cursor-pointer items-center gap-1 transition"
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
              className="hover:text-nav-color active:text-nav-color font-cairo cursor-pointer transition"
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
              className="from-btn hidden rounded-full bg-gradient-to-r via-white to-white bg-[length:200%_200%] p-[2px] md:inline-block"
            >
              <button className="bg-btn font-alex flex cursor-pointer items-center gap-5 rounded-full px-5 py-2 text-white">
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
                    <img src={Rocket} alt="icon" className="h-full w-full" />
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
              className="bg-back-ground absolute left-0 z-50 mt-4 flex w-full flex-col items-center gap-4 text-center font-semibold text-white md:hidden"
            >
              <div className="mt-4 flex flex-col items-center gap-4 text-center font-semibold text-white md:hidden">
                <a
                  href="#whoWeAre"
                  className="hover:text-nav-color active:text-nav-color font-cairo cursor-pointer transition"
                >
                  Who we are
                </a>
                <a
                  href="#services"
                  className="hover:text-nav-color active:text-nav-color font-cairo cursor-pointer transition"
                >
                  Our Services
                </a>
                <a
                  href="#projects"
                  className="hover:text-nav-color active:text-nav-color font-cairo cursor-pointer transition"
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
                    className="from-btn inline-block self-center rounded-full bg-gradient-to-r via-white to-white bg-[length:200%_200%] p-[1px]"
                  >
                    <button className="bg-btn font-alex flex items-center gap-3 rounded-full px-4 py-1.5 text-sm text-white">
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
                            className="h-full w-full"
                          />
                        </foreignObject>
                      </svg>
                    </button>
                  </motion.div>
                </a>
              </div>
              <div className="w-[90%] border-t-2"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
