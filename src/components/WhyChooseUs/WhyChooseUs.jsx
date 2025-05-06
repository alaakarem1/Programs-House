import React from "react";
import hands from "../../assets/hand.png";
import fifty from "../../assets/50+.png";
import infinity from "../../assets/infinity.gif";
import { useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import logo from "../../assets/logo2.png";
import card0 from "../../assets/card0.png";

const paragraphs = [
  "A creative team of developers and designers dedicated to turning ideas into smart digital solutions.",
  "Offering customized software and seamless platforms designed to fit every business challenge.",
  "Combining creativity, technology, and industry insight to help businesses grow smarter and faster.",
];
function WhyChooseUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#080820] via-[#281D24] to-[#EDA93F] border-bottom lg:py-28 px-4 lg:px-6  rounded-b-3xl">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl leading-[1.25] md:text-8xl font-normal text-white font-glitch lg:text-left  ">
          <span className="text-[#FF6F00]">WHY </span>
          <br />
          <span className="text-white">BUSINESSES </span>
          <br />
          <span className="text-[#007BFF]">CHOOSE US</span>
        </h2>
        <div className="flex flex-col md:flex-row pt-10 items-center justify-center gap-16 lg:pt-28">
          {/* الكارت الأبيض */}
          <div className="relative w-80 h-[500px] flex items-center justify-center">
            {/* صورة الخلفية */}
            <img
              src={card0}
              alt="Background"
              className="absolute inset-0 w-full h-full object-contain"
            />

            {/* المحتوى فوق الصورة */}
            <div className="relative flex flex-col items-center justify-between text-center text-black h-full w-full p-6">
              {/* لوجو ثابت */}
              <img src={logo} alt="Logo" className="w-20 h-20 mr-36" />

              {/* النصوص سلايدر */}
              <div className="flex flex-col justify-between flex-grow w-full">
                <Splide
                  options={{
                    type: "loop",
                    autoplay: true,
                    interval: 3000,
                    pauseOnHover: false,
                    arrows: false,
                    pagination: false,
                  }}
                  hasTrack={false}
                  onMove={(splide, newIndex) => setCurrentSlide(newIndex)}
                  className="w-full"
                >
                  <SplideTrack>
                    {paragraphs.map((text, index) => (
                      <SplideSlide key={index}>
                        <p className="text-3xl font-normal z-20 font-cairo text-left p-4 pt-10">
                          {text}
                        </p>
                      </SplideSlide>
                    ))}
                  </SplideTrack>
                </Splide>
              </div>

              {/* المؤشرات تحت ثابتة */}
              <div className="flex items-center justify-center gap-3">
                {paragraphs.map((_, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-300 rounded-full ${
                      currentSlide === index
                        ? "w-8 h-2 bg-[#3719C9]"
                        : "w-4 h-2 bg-[#D9D9D9]"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* الكارت 1 */}
          <div className="flex flex-col bg-[url(/assets/card1.png)] p-6 bg-contain bg-no-repeat w-64 h-[400px] lg:w-80 lg:h-auto ">
            <div className="text-2xl mx-auto">
              <img src={hands} alt="" />
            </div>
            <hr className="border-white my-6" />

            <h3 className="text-2xl font-bold mb-2 mx-auto text-white font-cairo ">
              Trusted Partners
            </h3>
            <p className=" text-white font-cairo font-thin text-lg  pt-2 text-left pl-5 ">
              Businesses across industries rely on us not just for software, but
              for strategic tech partnerships that drive long-term success.
            </p>
          </div>

          {/* الكارت 2 */}
          <div className="flex flex-col bg-[url(/assets/card-2.png)] -mt-5 p-6 pt-5 bg-contain bg-no-repeat w-64 h-[400px] lg:w-80">
            <div className="text-2xl mx-auto my-6 lg:pt-15 lg:pb-5">
              <img src={fifty} alt="" />
            </div>
            <hr className="border-white my-6 lg:my-0" />
            <h4 className="text-xl font-bold mb-3 lg:mb-0 lg:pt-4 mx-auto text-white font-cairo  ">
              Completed Projects
            </h4>
            <p className="text-white font-cairo font-thin text-lg pt-6  text-left">
              Every project we deliver is built with precision, creativity, and
              a deep understanding of each client’s unique goals.
            </p>
          </div>

          {/* الكارت 3 */}
          <div
            className="flex flex-col bg-[url(/assets/card3.png)] p-6 bg-contain bg-no-repeat w-64 h-[400px] lg:w-80 "
            style={{
              clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)",
            }}
          >
            <div className="w-20 mx-auto">
              <img src={infinity} alt="" />
            </div>
            <hr className="border-white my-6" />
            <h3 className="text-2xl font-bold mb-2 mx-auto text-white font-cairo ">
              Positive Vibes
            </h3>
            <p className="text-white font-cairo font-thin text-lg  pt-3 text-left pl-3">
              We make technology simple, delivering smart solutions through a
              smooth, collaborative, and friendly process.
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default WhyChooseUs;
