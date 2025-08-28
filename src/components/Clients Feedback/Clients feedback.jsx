import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Card from "../Card/Card";
import starsImage from "../../assets/star.svg";
import profileImage from "../../assets/doctor.png";
import backgroundImage from "../../assets/card.png";
import arrow1 from "../../assets/arrow1.png";
import arrow2 from "../../assets/arrow2.png";

export default function Clients_feedback() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 2.5,
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1.2, spacing: 15 },
      },
    },
  });

  const handlePrev = () => {
    instanceRef.current?.prev();
  };

  const handleNext = () => {
    instanceRef.current?.next();
  };

  const testimonials = [
    {
      text: "When we approached Programs House for a website redesign, we expected a better look — but what we got was a complete transformation. The site became faster, easier to navigate, and packed with features that make life easier for our team and our clients. They really understood our vision and made it real.",
      name: "Mohammed Said",
      position: "Founder, Prof Company",
    },
    {
      text: "Running a print shop means handling endless paperwork and scattered processes. Programs House built us a custom ERP system that connected everything — client data, order tracking, and daily operations. Their deep understanding of our needs turned a complex system into an easy-to-use platform.",
      name: "Mohammed Said",
      position: "Founder, Prof Company",
    },
    {
      text: "We didn’t just need a website — we needed a full digital ecosystem. Programs House delivered an ERP system, a professional website, and smart forms for client registration. They worked closely with us, understood our workflow, and gave us a seamless solution that drives our daily operations.",
      name: "Mohammed Said",
      position: "Founder, Prof Company",
    },
    {
      text: "Our old website was slow, outdated, and didn’t reflect who we are anymore. Programs House stepped in, redesigned everything, and boosted the site’s speed and performance. Now, we have a modern platform that looks great, works smoothly, and leaves the right impression on our visitors.",
      name: "Mohammed Said",
      position: "Founder, Prof Company",
    },
    {
      text: "As a growing business, our digital presence needed to keep up. Programs House created a custom website that fits our brand and services perfectly. It’s responsive, easy to manage, and built with smart features that help us serve our clients better every day.",
      name: "Mohammed Said",
      position: "Founder, Prof Company",
    },
    {
      text: "Managing contestants, tracking locations, and organizing results used to be a nightmare. Programs House built us a fully automated system that simplified everything. They understood our challenges and provided a smart, reliable solution that saves us time and eliminates errors.",
      name: "Mohammed Said",
      position: "Founder, Prof Company",
    },
    {
      text: "We wanted a website that stands out in a competitive market, something fast, modern, and unique to our brand. Programs House combined creative design with strong technical performance to deliver exactly that — a sleek, responsive site that represents us perfectly.",
      name: "Mohammed Said",
      position: "Founder, Prof Company",
    },
  ];

  return (
    <>
      <section
        id="clientReview"
        className="bg-[#080820] py-28 lg:py-16 lg:px-12"
      >
        <div className="container lg:mx-auto lg:px-6 px-4 flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
          {/* Left Side */}
          <div className="flex flex-col items-center lg:items-start lg:max-w-sm">
            <div className="flex">
              {" "}
              <h2 className="text-3xl lg:text-4xl text-white font-normal font-azonix">
                4.9
              </h2>
              <img src={starsImage} alt="" className="w-10 pl-3 lg:w-12 lg:pl-3" />
            </div>

            <p className="text-white font-cairo text-2xl font-normal mt-5">
              Our clients’ satisfaction isn’t just a goal — it’s the standard we
              set for every project we deliver
            </p>
            <div className="hidden lg:flex gap-6 mt-5 lg:gap-14 lg:mt-18 mx-auto">
              <button
                onClick={handlePrev}
                className="w-10 h-10 cursor-pointer lg:w-14 lg:h-14 flex items-center justify-center rounded-full border-2 border-white text-white  "
              >
                <img src={arrow1} alt="" className="w-3 lg:w-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 cursor-pointer lg:w-14 lg:h-14 flex items-center justify-center rounded-full border-2 border-white text-white "
              >
                <img src={arrow2} alt="" className="w-3 lg:w-5" />
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((item, index) => (
              <Card
                key={index}
                backgroundImage={backgroundImage}
                text={item.text}
                name={item.name}
                position={item.position}
                profileImage={profileImage}
                starsImage={starsImage}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
