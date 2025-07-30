import React, { useState } from "react";
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

function ServicesContent({ isHovered, setIsHovered }) {
  return (
    <div id="">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center ">
        <div className="lg:w-full">
          <h1 className="text-5xl lg:text-[130px] font-normal font-glitch relative">
            <span className="block font-black">SERVICES</span>
          </h1>
          <p className="text-md lg:text-3xl pt-7 tracking-wider font-azonix text-center md:text-left">
            OUR EXPERTISE TURNS <br /> YOUR VISION INTO REALITY
          </p>
        </div>

        <div className="relative mx-auto pt-5 lg:pt-8 lg:right-10 md:mt-0 flex-shrink-0 transition-all duration-300 ease-in-out">
          <a
            href="https://wa.me/201070101091"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative  lg:w-52 lg:h-[300px] transition-all duration-300 ease-in-out animate-spin-slow"
            >
              <img
                src={isHovered ? textButton2 : textButton}
                alt=""
                className="w-32 lg:w-52 transition-all duration-300 ease-in-out"
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
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1  pt-3 md:grid-cols-2 gap-8 max-w-4xl lg:w-full lg:max-w-6xl mx-auto ">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-gray-100 lg:py-5 lg:px-16 rounded-3xl border border-gray-300 
             hover:shadow-[-20px_20px_4px_rgba(0,0,0,3)] hover:-translate-y-2
             active:shadow-[-20px_20px_4px_rgba(0,0,0,3)] active:-translate-y-2
             transition-all duration-500 ease-in-out transform py-2"
          >
            <div className="flex items-center gap-1 mb-4 pl-5 lg:pl-0">
              <img
                src={service.icon}
                alt={service.title}
                className="w-8 h-8 lg:w-12 lg:h-12"
              />
              <div className="w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-white group-hover:bg-black group-hover:text-white group-active:bg-black group-active:text-white transition-all duration-500">
                <FiArrowUpRight className="text-xl lg:text-3xl" />
              </div>
              <h2 className="text-md pl-2 lg:text-3xl font-normal lg:pl-5 font-alex">
                {service.title}
              </h2>
            </div>
            <p className="text-gray-600 text-sm  px-5 lg:text-xl lg:pl-32 font-poppin font-light">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServicesSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative bg-back-ground min-h-screen flex flex-col items-center justify-start pt-30">
      <div className="absolute -top--80 lg:left-1/4 transform lg:-translate-x-1/3 font-glitch uppercase">
        <h1 className="text-5xl lg:text-[140px] font-normal leading-[0.9] relative md:mr-110 lg:mr-0">
          <span id="services" className="block text-white relative">
            OUR
          </span>
        </h1>
      </div>

      {/* ✅ Large screens: with clip-path */}
      <div
        className="relative bg-white w-full max-w-6xl p-8 pt-0 rounded-[30px] shadow-2xl overflow-hidden mt-[140px] hidden lg:block"
        style={{
          clipPath:
            "polygon(0% 0%, 60% 0%, 65% 4%, 100% 4%, 100% 100%, 0% 100%)",
        }}
      >
        <ServicesContent isHovered={isHovered} setIsHovered={setIsHovered} />
      </div>

      {/* ✅ Small screens: no clip-path */}
      <div className="block lg:hidden w-[80%] max-w-[85%] bg-white rounded-[30px] shadow-2xl mt-[50px] p-8 pt-5">
        <ServicesContent isHovered={isHovered} setIsHovered={setIsHovered} />
      </div>
    </div>
  );
}

export default ServicesSection;
