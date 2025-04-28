import React from "react";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import discoverIcon from "../../assets/Search Icon.svg";
import designIcon from "../../assets/Design Icon.svg";
import developmentIcon from "../../assets/Develop Icon.svg";
import supportIcon from "../../assets/Support icon.svg";
import textButton from "../../assets/Text Button.png";
import textButton2 from "../../assets/text button 2.png";

const services = [
  {
    title: "Discover",
    description:
      "We dive deep into your business needs, analyze challenges, and craft a strategic foundation for long-term success.",
    icon: discoverIcon,
  },
  {
    title: "Design",
    description:
      "Visually compelling and highly functional designs that enhance user engagement and bring your brand to life.",
    icon: designIcon,
  },
  {
    title: "Development",
    description:
      "Scalable, high-performance solutions designed to be efficient, future-proof, and built for growth.",
    icon: developmentIcon,
  },
  {
    title: "Support",
    description:
      "Ongoing maintenance, performance optimizations, and security updates to keep your software running at its best.",
    icon: supportIcon,
  },
];

function ServicesSection() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative bg-back-ground min-h-screen flex flex-col items-center justify-start pt-30">
      <div className="absolute -top--80 left-1/4 transform -translate-x-1/3  font-glitch uppercase">
        <h1 className="text-[140px] font-normal leading-[0.9] relative">
          <span
            className="block text-white relative "
            // style={{ transform: "translateY(-50%)" }}
          >
            OUR
          </span>
        </h1>
      </div>

      <div
        className="relative bg-white w-full max-w-6xl p-8 pt-0 rounded-[30px] shadow-2xl overflow-hidden mt-[140px]"
        style={{
          clipPath:
            "polygon(0% 0%, 60% 0%, 65% 4%, 100% 4%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center ">
          <div className="w-full">
            <h1 className="text-[130px] font-normal font-glitch relative">
              <span className="block font-black ">SERVICES</span>
            </h1>
            <p className="text-3xl tracking-wider font-azonix text-center md:text-left">
              OUR EXPERTISE TURNS <br /> YOUR VISION INTO REALITY
            </p>
          </div>

          {/* <div className="relative pt-8 right-10 md:mt-0 flex-shrink-0">
            <button>
              <img src={textButton} alt="" className="w-52 " />
            </button>
           </div> */}
          <div className="relative pt-8 right-10 md:mt-0 flex-shrink-0 transition-all duration-300 ease-in-out">
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative w-52 h-[300px] transition-all duration-300 ease-in-out animate-spin-slow"
            >
               <img
                src={isHovered ? textButton2 : textButton}
                alt=""
                className="w-52 transition-all duration-300 ease-in-out"
              /> 
               <img
                src={textButton}
                alt=""
                className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out ${
                  isHovered ? "opacity-0" : "opacity-100"
                }`}
              />
              <img
                src={textButton2}
                alt=""
                className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
            {/* <Button className=""/> */}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-100 py-5 px-16 rounded-3xl border border-gray-300 hover:shadow-[-20px_20px_4px_rgba(0,0,0,3)] transition-all duration-500 ease-in-out transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-1 mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12"
                />
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white group-hover:bg-black group-hover:text-white transition-all duration-500">
                  <FiArrowUpRight className="text-3xl" />
                </div>
                <h2 className="text-3xl font-normal pl-5 font-alex">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-600 text-xl pl-32 font-poppin font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 py-5 px-8 rounded-3xl border border-gray-300 hover:shadow-[-20px_20px_4px_rgba(0,0,0,3)] transition"
            >
              <div className="flex items-center gap-1 mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12"
                />
                <img
                  src={contactIcon}
                  alt="Contact Icon"
                  className="w-12 h-12"
                />
                <h2 className="text-3xl font-normal pl-5 font-alex">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-600 text-xl pl-24 font-poppin font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default ServicesSection;
