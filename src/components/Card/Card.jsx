import React from "react";

export default function Card({
  backgroundImage,
  text,
  name,
  position,
  profileImage,
  starsImage,
}) {
  return (
    <div
      className="keen-slider__slide flex flex-col justify-between p-5 lg:p-10 rounded-2xl bg-cover bg-start relative mx-auto"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div>
        <div className="flex items-center gap-2 text-white font-cairo font-bold text-xl">
          5.0
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <img key={index} src={starsImage} alt="Star" className="w-5" />
            ))}
          </div>
        </div>
        <hr className="border-white w-55 lg:w-auto my-4 lg:my-6" />
        <p className="text-white text-md lg:text-xl leading-relaxed font-cairo lg:mt-4">
          {text}
        </p>
      </div>

      <div className="flex items-center gap-3 mt-4 lg:mt-8">
        <img
          src={profileImage}
          alt={name}
          className="w-9 h-9 lg:w-12 lg:h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="text-white font-bold text-sm lg:text-base">{name}</h4>
          <p className="text-white/70 text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
}
