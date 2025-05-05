import React from "react";

export default function Text2() {
  return (
    <>
      <section className="bg-[#02021E] px-2 lg:py-20 lg:px-6 text-white flex flex-col gap-5 lg:flex-row items-center justify-center lg:gap-40">
        {/* الزر */}

        <div className="lg:inline-block rounded-full bg-gradient-to-r from-[#FF6F00] to-[#007BFF] p-[1px] lg:mb-24">
          <div className="flex items-center justify-center rounded-full font-azonix font-normal bg-[#02021E] px-8 py-3">
            <span className="text-[#FF6F00] text-xl">+ 30</span>
            <span className="text-white text-xl ml-3">REVIEWS</span>
          </div>
        </div>

        {/* النص */}
        <p className="lg:max-w-3xl leading-8 lg:leading-11 tracking-wide text-center">
          <span className="lg:ml-28 text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F00]  to-[#007BFF] font-azonix font-normal lg:text-4xl">
            FROM STARTUPS TO GROWING
          </span>
          <span className=" font-azonix text-lg font-normal lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F00] to-[#bb733b]">
            {" "}
            BUSINESSES
          </span>
          <span className="font-azonix text-lg lg:text-2xl font-normal lg:text-left">
            , WE'VE EMPOWERED OUR CLIENTS TO ACHIEVE THEIR GOALS— AND THEIR
            SUCCESS STORIES ARE OUR GREATEST REWARD
          </span>
        </p>
      </section>
    </>
  );
}
