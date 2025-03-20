import React, { useState, useEffect } from "react";

export default function About() {
  const items = [
    {
      images: ["/src/images/name.png", "/src/images/name2.png"],
      label: "name",
    },
    { images: ["/src/images/age.png", "/src/images/age2.png"], label: "age" },
    {
      images: ["/src/images/major.png", "/src/images/major2.png"],
      label: "major",
    },
    {
      images: ["/src/images/email.png", "/src/images/email2.png"],
      label: "email",
    },
    {
      images: ["/src/images/phone.png", "/src/images/phone2.png"],
      label: "phone",
    },
    {
      images: ["/src/images/certificate.jpg", "/src/images/certificate2.png"],
      label: "certificate",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center max-w-screen-xl mx-auto h-[70vh] min-h-[500px] my-24">
      <h1 className="flex justify-center items-center h-[15vh] text-3xl text-gray-700 font-logo">
        About me!
      </h1>
      <div className="w-[90%] flex flex-wrap justify-center gap-8">
        {items.map((item, index) => {
          const [currentImg, setCurrentImg] = useState(0);

          useEffect(() => {
            const interval = setInterval(() => {
              setCurrentImg((prev) => (prev + 1) % item.images.length);
            }, 2000); // 2초마다 변경

            return () => clearInterval(interval);
          }, [item.images.length]);

          return (
            <div
              key={index}
              className="flex flex-col justify-between items-center w-[45%] h-32 sm:w-[30%] sm:h-40"
            >
              <img
                src={item.images[currentImg]}
                alt={item.label}
                className="w-24 h-24 sm:w-36 sm:h-32 transition-opacity duration-500 ease-in-out"
              />
              <h3 className="font-logo text-[1rem] text-gray-700">
                {item.label}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
