import React, { useState, useEffect } from "react";

const bgImgs = ["/images/bg.jpg", "/images/bg-2.jpg", "/images/bg-4.jpg"];

export default function Home() {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % bgImgs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mt-[76px]">
      <img
        src={bgImgs[currentImg]}
        alt="carousel"
        className="w-full h-[40vh] sm:h-full object-cover transition-opacity duration-700 ease-in-out"
      />
      <div className="absolute top-[35%] left-[14%] sm:top-[25%] sm:left-[15%] lg:top-[35%] lg:left-[17%] font-logo text-white text-shadow">
        <div className="flex items-center">
          <img
            src="/images/flower.png"
            alt="flower"
            className="w-16 sm:w-24 h-auto"
          />
          <h3 className="text-[1rem] sm:text-[1rem] lg:text-[1.5rem] mx-2">
            welcome
          </h3>
          <img
            src="/images/flower.png"
            alt="flower"
            className="w-16 sm:w-24 h-auto"
          />
        </div>
        <h1 className=" text-[1rem] sm:text-[1.5rem] lg:text-[2.5rem] ">
          web front-end developer portfolio
        </h1>
      </div>
      <div className="hidden sm:flex absolute top-[50%] right-8 flex-col space-y-6 transform -translate-y-1/2 ">
        {bgImgs.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImg(index)}
            className={`w-4 h-4 lg:w-5 lg:h-5 rounded-full border border-gray-600 ${
              currentImg === index ? "bg-yellow-500" : "bg-gray-100"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
