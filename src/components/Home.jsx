import React, { useState } from "react";

const bgImgs = [
  "/src/images/bg.png",
  "/src/images/bg-2.png",
  "/src/images/bg-3.png",
];

export default function Home() {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div>
      <img src={bgImgs[currentImg]} alt="carousel" className="w-full" />
      <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2"></div>
      <div className="absolute top-[325px] right-16 flex flex-col space-y-8 transform -translate-y-1/2 ">
        {bgImgs.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImg(index)}
            className={`w-5 h-5 rounded-full border border-gray-600 ${
              currentImg === index ? "bg-gray-400" : "bg-gray-100"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
