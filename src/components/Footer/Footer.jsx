import React from "react";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import Ballpit from "../ball/Ballpit";
function Footer() {
  return (
    <div className=" bg-[#02021E]">
      <div className="relative text-white bg-[url('/assets/Footer-bg.png')] lg:px-0  bg-cover bg-no-repeat ">
        <div className="px-6 flex flex-col items-center lg:gap-30">
          <h1 className="text-5xl py-10 lg:py-0 md:text-7xl font-normal text-center font-glitch lg:text-9xl ">
            PROGRAMS
            <br />
            HOUSE
          </h1>

          <div className=" flex flex-col lg:flex-row lg:justify-between w-full gap-15 lg:gap-6 lg:pl-10 text-sm text-center md:text-left">
            <div className="flex flex-col gap-2">
              <span className="uppercase font-azonix font-thin text-xl md:m-auto">
                Found us here:
              </span>
              <div className="flex gap-7 justify-center md:justify-start text-4xl mx-auto">
                <a href="https://wa.me/201070101091" target="_blank">
                  <FaWhatsapp className="hover:text-[#25D366] active:text-[#25D366] transition-colors duration-300" />
                </a>
                <a
                  href="https://www.facebook.com/share/1BeaHuGUP2/?mibextid=wwXIfr"
                  target="__blank"
                >
                  <FaFacebook className="hover:text-[#0866FF] active:text-[#0866FF] transition-colors duration-300" />
                </a>
                <a
                  href="https://www.messenger.com/t/538162776041725"
                  target="_blank"
                >
                  <FaFacebookMessenger className="hover:text-[#4da3ff] active:text-[#4da3ff] transition-colors duration-300" />
                </a>
              </div>
            </div>

            <div className="flex flex-row gap-5 lg:gap-8 lg:pr-10 text-sm text-white justify-evenly lg:items-center ">
              {/* Mail Section */}
              <a href="mailto:contact@programshouse.com" target="__blank">
                <div className="flex flex-col lg:items-center md:items-start text-center md:text-left font-cairo">
                  <div className="flex items-center gap-3">
                    <img
                      src="/assets/message.gif"
                      alt="mail"
                      className="w-6 lg:w-10 lg:h-10 rounded-full"
                    />
                    <span className=" md:text-lg text-gray-300">
                      Drop us a mail
                    </span>
                  </div>
                  <span className="mt-1 md:text-lg">
                    contact@programshouse.com
                  </span>
                </div>
              </a>

              {/* Call Section */}
              <a href="tel:201070101091">
                <div className="flex flex-col lg:items-center md:items-start text-center md:text-left">
                  <div className="flex items-center gap-3">
                    <img
                      src="/assets/call.gif"
                      alt="call"
                      className="w-6 lg:w-10 lg:h-10 rounded-full"
                    />
                    <span className="font-cairo md:text-lg text-gray-300">
                      Call Us
                    </span>
                  </div>
                  <span className="mt-1 md:text-lg">(+20) 10 7010 1091</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center lg:flex-wrap justify-center pt-20 lg:gap-3 font-normal font-cairo md:text-2xl  lg:text-4xl">
          <a
            href="#whoWeAre"
            className="group flex gap-1 hover:mr-5 active:mr-5 transition-all duration-400 ease-in-out"
          >
            About
            <FiArrowUpRight className="lg:text-3xl opacity-0 group-hover:opacity-100 group-active:opacity-100" />
          </a>

          <a
            href="#clientReview"
            className="group flex gap-1 hover:mr-5 active:mr-5 transition-all duration-400 ease-in-out"
          >
            Client Review
            <FiArrowUpRight className="lg:text-3xl opacity-0 group-hover:opacity-100 group-active:opacity-100" />
          </a>

          <a
            href="#services"
            className="group flex gap-1 hover:mr-5 active:mr-5 transition-all duration-400 ease-in-out"
          >
            Our Services
            <FiArrowUpRight className="lg:text-3xl opacity-0 group-hover:opacity-100 group-active:opacity-100" />
          </a>

          <a
            href="#projects"
            className="group flex gap-1 hover:mr-5 active:mr-5 transition-all duration-400 ease-in-out"
          >
            Projects
            <FiArrowUpRight className="lg:text-3xl opacity-0 group-hover:opacity-100 group-active:opacity-100" />
          </a>
        </div>

        <div className="text-2xl pb-10 lg:text-4xl text-center mt-9 font-glitch">
          SMART <span className="text-[#007BFF]">SOLUTIONS</span> FOR SMARTER{" "}
          <span className="text-[#FF6F00]">GROWTH</span>
        </div>
        <div
          className="hidden lg:block h-[110px] lg:h-[350px]"
          style={{
            position: "relative",
            overflow: "hidden",
            // minHeight: "350px",
            // maxHeight: "350px",
            width: "100%",
          }}
        >
          <Ballpit
            className=""
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
