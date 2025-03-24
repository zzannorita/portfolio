import { useState, useEffect } from "react";

export default function ImageCarousel({ images, label, text }) {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative group flex flex-col justify-between items-center w-[45%] h-32 sm:w-[30%] sm:h-40">
      <img
        src={images[currentImg]}
        alt={label}
        className="w-24 h-24 sm:w-36 sm:h-32 transition-opacity duration-500 ease-in-out group-hover:opacity-0"
      />
      <div className="absolute top-1/3 flex items-center justify-center text-gray-900 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {text}
      </div>
      <h3 className=" font-bold text-[1rem] text-gray-700">{label}</h3>
    </div>
  );
}
