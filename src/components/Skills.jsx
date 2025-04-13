import React, { useState } from "react";

export default function Skills() {
  const [selectedText, setSelectedText] = useState("");

  const skillSections = [
    {
      title: "language",
      items: [
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
      ],
    },
    {
      title: "library",
      items: [
        {
          src: "/src/images/react.png",
          alt: "react logo",
          text: "React를 활용한 컴포넌트 기반 UI 설계 경험이 있습니다.",
        },
        {
          src: "/src/images/tailwind.png",
          alt: "tailwind logo",
          text: "Tailwind CSS를 사용하여 반응형 UI를 빠르게 구축할 수 있습니다.",
        },
        {
          src: "/src/images/axios.png",
          alt: "axios logo",
          text: "Axios를 통해 비동기 통신을 구현하고 데이터를 효율적으로 처리할 수 있습니다.",
        },
      ],
    },
    {
      title: "tools",
      items: [
        {
          src: "/src/images/github.png",
          alt: "github logo",
          text: "GitHub를 활용한 버전 관리 및 협업 경험이 있습니다.",
        },
        {
          src: "/src/images/figma.png",
          alt: "figma logo",
          text: "Figma를 이용한 와이어프레임 및 UI 디자인 작업 경험이 있습니다.",
        },
        {
          src: "/src/images/slack.png",
          alt: "slack logo",
          text: "Slack을 이용해 팀원들과 효율적으로 소통하며 협업한 경험이 있습니다.",
        },
        {
          src: "/src/images/discord.png",
          alt: "discord logo",
          text: "디스코드를 통한 프로젝트 회의 및 자료 공유 경험이 있습니다.",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col justify-between items-center max-w-screen-xl mx-auto h-auto mt-24">
      <h1 className="text-2xl font-bold my-8">My Skills</h1>
      <div className="w-full flex flex-col md:flex-row flex-wrap justify-center bg-[url('/src/images/cloud2.jpg')] sm:bg-[url('/src/images/cloud.jpg')] bg-cover bg-center rounded-[40px]">
        {skillSections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col items-center py-16 w-full md:w-1/3 min-w-[300px] relative ${
              index === 1 ? "lg:border-x-2 border-white" : ""
            }`}
          >
            <h2 className="text-xl text-gray-900 mb-12 font-bold">
              {section.title}
            </h2>
            <div className="flex flex-wrap justify-center gap-12 w-56">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-100 rounded-xl w-20 h-20 flex items-center justify-center p-2 shadow-custom hover:scale-110 transition duration-200 cursor-pointer"
                  onClick={() => setSelectedText(item.text)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              ))}
            </div>
            {selectedText &&
              section.items.some((i) => i.text === selectedText) && (
                <div className="absolute top-18 left-1/2 transform -translate-x-1/2 flex justify-center items-center w-[350px] h-[350px] z-10">
                  <img
                    src="/src/images/memo.png"
                    alt="memo background"
                    className="w-full h-full object-contain"
                  />
                  <p className="w-[200px] absolute px-4 text-sm text-gray-700 text-center leading-relaxed">
                    {selectedText}
                  </p>
                  <button
                    onClick={() => setSelectedText("")}
                    className="absolute top-16 right-16 text-lg"
                  >
                    &times;
                  </button>
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}
