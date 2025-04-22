import React, { useState } from "react";

export default function Skills() {
  const [selectedText, setSelectedText] = useState("");

  const skillSections = [
    {
      title: "language",
      items: [
        {
          src: "/images/js.png",
          alt: "js logo",
          text: "JavaScript(ES6+)를 중심으로 컴포넌트 기반 UI 개발, 상태 관리, 비동기 로직 구현 등 다양한 웹 프로젝트를 진행해왔습니다. 타입 안정성을 위해 TypeScript도 간단하게 활용해본 경험이 있습니다.",
        },
        {
          src: "/images/python.png",
          alt: "python logo",
          text: "Python은 주로 코딩 테스트 대비 목적으로 학습했으며, 간단한 알고리즘 문제 해결과 스크립트 작성이 가능합니다.",
        },
        {
          src: "/images/html-5.png",
          alt: "html5 logo",
          text: "대학 시절부터 꾸준히 사용해온 언어로, 시맨틱 태그를 활용한 웹 구조 설계에 익숙하며, 명확하고 유지보수하기 쉬운 마크업을 작성할 수 있습니다.",
        },
        {
          src: "/images/css-3.png",
          alt: "css3 logo",
          text: "순수 CSS만을 이용하여 레이아웃을 할 수 있으며 반응형 UI 구현 경험도 있습니다.",
        },
      ],
    },
    {
      title: "library",
      items: [
        {
          src: "/images/react.png",
          alt: "react logo",
          text: "대규모 팀 프로젝트 2개에서 React를 메인으로 사용하였으며, 컴포넌트 기반 설계와 상태 관리에 익숙합니다. 가장 친숙한 라이브러리로, 복잡한 UI 구조도 구조적으로 설계하고 유지보수할 수 있습니다.",
        },
        {
          src: "/images/tailwind.png",
          alt: "tailwind logo",
          text: "포트폴리오 사이트 제작 시 Tailwind CSS를 활용해 반응형 UI를 효율적으로 구현한 경험이 있습니다. 빠른 스타일링과 클래스 조합에 익숙하며, 컴포넌트 단위로 유연한 UI 설계가 가능합니다.",
        },
        {
          src: "/images/axios.png",
          alt: "axios logo",
          text: "Axios를 활용해 API와의 비동기 통신을 구현한 경험이 있으며, 에러 처리 및 응답 데이터 가공 등 실무에 가까운 로직을 다뤄본 경험이 있습니다.",
        },
      ],
    },
    {
      title: "tools",
      items: [
        {
          src: "/images/github.png",
          alt: "github logo",
          text: "GitHub를 활용하여 기능별 브랜치를 분리하고, 커밋 메시지를 규칙에 맞게 작성하며 체계적인 버전 관리와 협업을 경험했습니다.",
        },
        {
          src: "/images/figma.png",
          alt: "figma logo",
          text: "Figma를 활용해 와이어프레임과 UI 디자인을 구성하며, 디자이너의 디자인 시안을 바탕으로 CSS 작업까지 원활하게 수행할 수 있습니다.",
        },
        {
          src: "/images/slack.png",
          alt: "slack logo",
          text: "6개월간(2023.6~2024.2) Slack을 통해 팀원들과 매일 데일리 스크럼을 진행하며 업무 진행 상황을 공유하고, 팀 내 협업과 일정 조율을 효과적으로 경험했습니다.",
        },
        {
          src: "/images/discord.png",
          alt: "discord logo",
          text: "디스코드와 GitHub를 연동하여 실시간 코드 리뷰와 프로젝트 알림 공유가 가능한 협업 환경을 구성하고, 소규모 및 대규모 프로젝트를 원활히 진행한 경험이 있습니다.",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col justify-between items-center max-w-screen-xl mx-auto h-auto mt-24">
      <h1 className="text-2xl font-bold my-8">My Skills</h1>
      <div className="w-full flex flex-col md:flex-row flex-wrap justify-center bg-[url('/images/cloud2.jpg')] sm:bg-[url('/images/cloud.jpg')] bg-cover bg-center rounded-[40px]">
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
                    src="/images/memo.png"
                    alt="memo background"
                    className="w-full h-full object-contain"
                  />
                  <p className="w-[200px] absolute px-4 text-xs text-gray-700 text-center leading-relaxed">
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
