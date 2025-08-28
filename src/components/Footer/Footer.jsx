import React from "react";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import Ballpit from "../ball/Ballpit";
function Footer() {
  return (
    <div className="bg-[#02021E]">
      <div className="relative bg-[url('/assets/Footer-bg.png')] bg-cover bg-no-repeat text-white lg:px-0">
        <div className="flex flex-col items-center px-6 lg:gap-30">
          <h1 className="font-glitch py-10 text-center text-5xl font-normal md:text-7xl lg:py-0 lg:text-9xl">
            PROGRAMS
            <br />
            HOUSE
          </h1>

          <div className="flex w-full flex-col gap-15 text-center text-sm md:text-left lg:flex-row lg:justify-between lg:gap-6 lg:pl-10">
            <div className="flex flex-col gap-2">
              <span className="font-azonix text-xl font-thin uppercase md:m-auto">
                Found us here:
              </span>
              <div className="mx-auto flex justify-center gap-7 text-4xl md:justify-start">
                <a href="https://wa.me/201070101091" target="_blank">
                  <FaWhatsapp className="transition-colors duration-300 hover:text-[#25D366] active:text-[#25D366]" />
                </a>
                <a
                  href="https://www.facebook.com/share/1BeaHuGUP2/?mibextid=wwXIfr"
                  target="__blank"
                >
                  <FaFacebook className="transition-colors duration-300 hover:text-[#0866FF] active:text-[#0866FF]" />
                </a>
                <a
                  href="https://www.messenger.com/t/538162776041725"
                  target="_blank"
                >
                  <FaFacebookMessenger className="transition-colors duration-300 hover:text-[#4da3ff] active:text-[#4da3ff]" />
                </a>
              </div>
            </div>

            <div className="flex flex-row justify-evenly gap-5 text-sm text-white lg:items-center lg:gap-8 lg:pr-10">
              {/* Mail Section */}
              <a href="mailto:contact@programshouse.com" target="__blank">
                <div className="font-cairo flex flex-col text-center md:items-start md:text-left lg:items-center">
                  <div className="flex items-center gap-3">
                    <img
                      src="/assets/message.gif"
                      alt="mail"
                      className="w-6 rounded-full lg:h-10 lg:w-10"
                    />
                    <span className="text-gray-300 md:text-lg">
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
                <div className="flex flex-col text-center md:items-start md:text-left lg:items-center">
                  <div className="flex items-center gap-3">
                    <img
                      src="/assets/call.gif"
                      alt="call"
                      className="w-6 rounded-full lg:h-10 lg:w-10"
                    />
                    <span className="font-cairo text-gray-300 md:text-lg">
                      Call Us
                    </span>
                  </div>
                  <span className="mt-1 md:text-lg">(+20) 10 7010 1091</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="font-cairo flex items-center justify-center pt-20 font-normal md:text-2xl lg:flex-wrap lg:gap-3 lg:text-4xl">
          <a
            href="#whoWeAre"
            className="group flex gap-1 transition-all duration-400 ease-in-out hover:mr-5 active:mr-5"
          >
            About
            <FiArrowUpRight className="opacity-0 group-hover:opacity-100 group-active:opacity-100 lg:text-3xl" />
          </a>

          <a
            href="#clientReview"
            className="group flex gap-1 transition-all duration-400 ease-in-out hover:mr-5 active:mr-5"
          >
            Client Review
            <FiArrowUpRight className="opacity-0 group-hover:opacity-100 group-active:opacity-100 lg:text-3xl" />
          </a>

          <a
            href="#services"
            className="group flex gap-1 transition-all duration-400 ease-in-out hover:mr-5 active:mr-5"
          >
            Our Services
            <FiArrowUpRight className="opacity-0 group-hover:opacity-100 group-active:opacity-100 lg:text-3xl" />
          </a>

          <a
            href="#projects"
            className="group flex gap-1 transition-all duration-400 ease-in-out hover:mr-5 active:mr-5"
          >
            Projects
            <FiArrowUpRight className="opacity-0 group-hover:opacity-100 group-active:opacity-100 lg:text-3xl" />
          </a>
        </div>

        <div className="font-glitch mt-9 pb-10 text-center md:text-2xl lg:text-4xl">
          SMART <span className="text-[#007BFF]">SOLUTIONS</span> FOR SMARTER{" "}
          <span className="text-[#FF6F00]">GROWTH</span>
        </div>
        <div
          className="hidden h-[110px] lg:block lg:h-[350px]"
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
