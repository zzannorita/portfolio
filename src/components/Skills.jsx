import React from "react";

export default function Skills() {
  return (
    <div className="flex flex-col justify-between items-center max-w-screen-xl mx-auto h-auto mt-16">
      <h1 className="flex justify-center items-center h-[15vh] text-3xl text-black-700 font-retro my-8">
        My Skills
      </h1>
      <div className="w-full flex flex-col md:flex-row flex-wrap justify-center bg-[url('/src/images/cloud2.jpg')] sm:bg-[url('/src/images/cloud.jpg')] bg-cover bg-center rounded-[40px]">
        <div className="flex flex-col items-center py-16 w-full md:w-1/3 min-w-[300px]">
          <h2 className="text-xl text-gray-900 mb-12 font-bold">language</h2>
          <div className="relative flex flex-wrap justify-center gap-12 w-56">
            {[
              {
                src: "/src/images/js.png",
                alt: "js logo",
                text: "주로 자바스크립ES6+ 문법을 활용하여 코드를 작성 할 수 있습니다.",
              },
              {
                src: "/src/images/python.png",
                alt: "python logo",
                text: "간단한 스크립트를 작성 할 수 있습니다.",
              },
              {
                src: "/src/images/html-5.png",
                alt: "html5 logo",
                text: "웹 페이지의 구조를 설계하며 HTML5의 시맨틱 태그와 다양한 기능을 적용할 수 있습니다.",
              },
              {
                src: "/src/images/css-3.png",
                alt: "css3 logo",
                text: "순수 CSS만을 이용하여 레이아웃을 할 수 있습니다.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-xl w-20 h-20 flex items-center justify-center p-2 shadow-custom hover:scale-110 transition duration-200"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-12 h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center py-16 w-full md:w-1/3 min-w-[300px] lg:border-x-2 border-white">
          <h2 className="text-xl text-gray-900 mb-12 font-bold">library</h2>
          <div className="flex flex-wrap justify-center gap-12 w-56">
            {[
              { src: "/src/images/react.png", alt: "react logo" },
              { src: "/src/images/tailwind.png", alt: "tailwind logo" },
              { src: "/src/images/axios.png", alt: "axios logo" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-xl w-20 h-20 flex items-center justify-center p-2 shadow-custom hover:scale-110 transition duration-200"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-12 h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center py-16 w-full md:w-1/3 min-w-[300px]">
          <h2 className="text-xl text-gray-900 mb-12 font-bold">tools</h2>
          <div className="flex flex-wrap justify-center gap-12 w-56">
            {[
              { src: "/src/images/github.png", alt: "github logo" },
              { src: "/src/images/figma.png", alt: "figma logo" },
              { src: "/src/images/slack.png", alt: "slack logo" },
              { src: "/src/images/discord.png", alt: "discord logo" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-xl w-20 h-20 flex items-center justify-center p-2 shadow-custom hover:scale-110 transition duration-200"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-12 h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
