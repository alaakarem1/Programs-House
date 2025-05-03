import React from "react";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import Ballpit from '../ball/Ballpit'
function Footer() {
  return (
    <div className=" bg-[#02021E]">
      <div className="relative text-white bg-[url('/assets/Footer-bg.png')]  bg-cover bg-no-repeat ">
        <div className="px-6 flex flex-col items-center gap-30">
          <h1 className="text-5xl md:text-9xl font-normal text-center font-glitch">
            PROGRAMS
            <br />
            HOUSE
          </h1>

          <div className=" flex flex-col md:flex-row justify-between w-full gap-6 pl-10 text-sm text-center md:text-left">
            <div className="flex flex-col gap-2">
              <span className="uppercase font-azonix font-thin text-xl">
                Found us here:
              </span>
              <div className="flex gap-7 justify-center md:justify-start text-4xl mx-auto">
                <a href="">
                  <FaWhatsapp className="hover:text-[#25D366] transition-colors duration-300" />
                </a>
                <a
                  href="https://www.facebook.com/share/1BeaHuGUP2/?mibextid=wwXIfr"
                  target="__blank"
                >
                  <FaFacebook className="hover:text-[#0866FF] transition-colors duration-300" />
                </a>
                <a href="">
                  <FaFacebookMessenger className="hover:text-[#4da3ff] transition-colors duration-300" />
                </a>
              </div>
            </div>

            <div className="flex flex-col  md:flex-row gap-8 pr-10 text-sm text-white items-start md:items-center ">
              {/* Mail Section */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left font-cairo">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/message.gif"
                    alt="mail"
                    className="w-10 h-10 rounded-full"
                  />
                  <span className=" text-lg text-gray-300">
                    Drop us a mail
                  </span>
                </div>
                <span className="mt-1 text-lg">contact@programshouse.com</span>
              </div>

              {/* Call Section */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/call.gif"
                    alt="call"
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-cairo text-lg text-gray-300">Call Us</span>
                </div>
                <span className="mt-1 text-lg">(+20) 10 7010 1091</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center pt-20 gap-3 font-normal font-cairo  text-2xl">
          <a
            href=""
            className="group flex gap-1 hover:mr-5 transition-all duration-400 ease-in-out"
          >
            About
            <FiArrowUpRight className="text-3xl opacity-0 group-hover:opacity-100" />
          </a>

          <a
            href=""
            className="group flex gap-1 hover:mr-5 transition-all duration-400 ease-in-out"
          >
            Client Review
            <FiArrowUpRight className="text-3xl opacity-0 group-hover:opacity-100" />
          </a>

          <a
            href=""
            className="group flex gap-1 hover:mr-5 transition-all duration-400 ease-in-out"
          >
            Our Services
            <FiArrowUpRight className="text-3xl opacity-0 group-hover:opacity-100" />
          </a>

          <a
            href=""
            className="group flex gap-1 hover:mr-5 transition-all duration-400 ease-in-out"
          >
            Projects
            <FiArrowUpRight className="text-3xl opacity-0 group-hover:opacity-100" />
          </a>
        </div>

        <div className="text-xl md:text-4xl font- text-center mt-9 font-glitch">
          SMART <span className="text-[#007BFF]">SOLUTIONS</span> FOR SMARTER{" "}
          <span className="text-[#FF6F00]">GROWTH</span>
        </div>
        <div
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "350px",
          maxHeight: "350px",
          width: "100%",
        }}
      >
        <Ballpit
          count={100}
          gravity={1.5}
          friction={0.8}
          wallBounce={0.95}
          followCursor={false}
        />
      </div>
      </div>
     
    </div>
  );
}

export default Footer;
