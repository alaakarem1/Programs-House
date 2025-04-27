import React from "react";

export default function Text2() {
  return (
    <>
      <section className="bg-[#02021E] py-20 px-6 text-white flex flex-row items-center justify-center gap-40">
        {/* الزر */}

        <div className="inline-block rounded-full bg-gradient-to-r from-[#FF6F00] to-[#007BFF] p-[1px] mb-24">
          <div className="flex items-center justify-center rounded-full font-azonix font-normal bg-[#02021E] px-8 py-3">
            <span className="text-[#FF6F00]  text-xl">+ 30</span>
            <span className="text-white text-xl ml-3">REVIEWS</span>
          </div>
        </div>

        {/* النص */}
        <p className="max-w-3xl leading-11  tracking-wide ">
          <span className="ml-28 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F00]  to-[#007BFF] font-azonix font-normal text-4xl">
            FROM STARTUPS TO GROWING
          </span>
          <span className=" font-azonix font-normal text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F00] to-[#bb733b]">
            {" "}
            BUSINESSES
          </span>
          <span className="font-azonix text-2xl font-normal text-left">
            , WE'VE EMPOWERED OUR CLIENTS TO ACHIEVE THEIR GOALS— AND THEIR
            SUCCESS STORIES ARE OUR GREATEST REWARD
          </span>
        </p>
      </section>
    </>
  );
}
