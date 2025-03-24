import React, { useState, useEffect } from "react";

const bgImgs = [
  "/src/images/bg.jpg",
  "/src/images/bg-2.jpg",
  "/src/images/bg-3.jpg",
];

export default function Home() {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % bgImgs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[50vh] sm:h-[70vh] lg:h-[80vh]">
      <img
        src={bgImgs[currentImg]}
        alt="carousel"
        className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
      />
      <div className="absolute top-[45%] left-[8%] sm:top-[50%] sm:left-[15%] lg:top-[45%] lg:left-[17%] font-logo text-white text-shadow">
        <h1 className=" text-[1.5rem] sm:text-[2rem] lg:text-[3rem]">
          web front-end developer portfolio
        </h1>
        <h3 className="text-[1rem] sm:text-[1.5rem] lg:text-[2rem]">
          끊임없이 도전하는 개발자 장유리입니다
        </h3>
      </div>
      <div className="hidden sm:flex absolute top-[55%] right-8 flex-col space-y-6 transform -translate-y-1/2 ">
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
