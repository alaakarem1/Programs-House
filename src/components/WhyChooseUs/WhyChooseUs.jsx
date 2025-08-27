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
    <section
      id="WhoWeAreBtn"
      className="border-bottom md:min-h-20 md:pb-10  lg:min-h-screen rounded-b-3xl bg-gradient-to-b from-[#080820] via-[#281D24] to-[#EDA93F] px-4 lg:px-6 lg:py-28"
    >
      <div className="mx-auto max-w-7xl text-center">
        {/* Title */}
        <h2 className="font-glitch text-4xl leading-[1.25] font-normal text-white lg:text-left lg:text-8xl">
          <span className="text-[#FF6F00]">WHY </span>
          <br />
          <span className="text-white">BUSINESSES </span>
          <br />
          <span className="text-[#007BFF]">CHOOSE US</span>
        </h2>

        <div className="flex flex-col items-center justify-center gap-16 pt-10 md:flex-row md:gap-5 lg:gap-16 lg:pt-28">
          {/* الكارت الأبيض */}
          <div className="relative flex w-80 items-center justify-center md:hidden lg:block">
            {/* صورة الخلفية */}
            <img
              src={card0}
              alt="Background"
              className="absolute inset-0 h-full w-full object-contain"
            />

            {/* المحتوى فوق الصورة */}
            <div className="relative flex h-full w-full flex-col items-center justify-between p-6 text-center text-black">
              {/* لوجو ثابت */}
              <img src={logo} alt="Logo" className="mr-36 h-20 w-20" />

              {/* النصوص سلايدر */}
              <div className="flex w-full flex-grow flex-col justify-between">
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
                        <p className="font-cairo z-20 p-4 pt-10 text-left text-3xl font-normal">
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
                    className={`rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "h-2 w-8 bg-[#3719C9]"
                        : "h-2 w-4 bg-[#D9D9D9]"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* الكارت 1 */}
          {/* الكارت 1 */}
          <div className="flex w-64 flex-col bg-[url(/assets/card1.png)] bg-contain bg-no-repeat p-6 md:bg-[length:100%_100%] md:bg-center md:bg-no-repeat md:p-8 lg:h-auto lg:w-80 lg:bg-contain lg:p-6">
            <div className="mx-auto text-2xl">
              <img src={hands} alt="" />
            </div>

            <hr className="my-6 md:my-3 border-white" />

            <h3 className="font-cairo mx-auto mb-2 text-2xl font-bold text-white">
              Trusted Partners
            </h3>

            <p className="font-cairo pt-2 pl-5 lg:pl-5 md:pl-0 text-left text-lg font-thin text-white">
              Businesses across industries rely on us not just for software, but
              for strategic tech partnerships that drive long-term success.
            </p>
          </div>

          {/* الكارت 2 */}
          <div className="-mt-5 flex h-[400px] w-64 flex-col bg-[url(/assets/card-2.png)] bg-contain bg-no-repeat p-6 pt-5 md:bg-[length:100%_100%] md:bg-center md:bg-no-repeat md:p-8 md:pt-6 lg:w-80 lg:bg-contain lg:p-6 lg:pt-5">
            <div className="mx-auto my-6 text-2xl lg:pt-15 lg:pb-5">
              <img src={fifty} alt="" />
            </div>

            <hr className="my-6 md:my-3 border-white lg:my-0" />

            <h4 className="font-cairo mx-auto mb-3 text-xl font-bold text-white lg:mb-0 lg:pt-4">
              Completed Projects
            </h4>

            <p className="font-cairo pt-6 md:pt-0 lg:pt-6 text-left text-lg font-thin text-white">
              Every project we deliver is built with precision, creativity, and
              a deep understanding of each client’s unique goals.
            </p>
          </div>

          {/* الكارت 3 */}
          <div
            className="flex h-[400px] w-64 flex-col bg-[url(/assets/card3.png)] bg-contain bg-no-repeat p-6 md:bg-[length:100%_100%] md:bg-center md:bg-no-repeat md:p-8 lg:w-80 lg:bg-contain lg:p-6"
            style={{
              clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)",
            }}
          >
            <div className="mx-auto w-20">
              <img src={infinity} alt="" />
            </div>

            <hr className="my-6 md:my-3 border-white" />

            <h3 className="font-cairo mx-auto mb-2 text-2xl font-bold text-white">
              Positive Vibes
            </h3>

            <p className="font-cairo pt-3 lg:pl-3 md:pl-0 md:pt-0 pl-3 text-left text-lg font-thin text-white">
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
