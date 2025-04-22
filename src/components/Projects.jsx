import React, { useState } from "react";
import Modal from "./Modal";
export default function Projects() {
  const project = [
    {
      name: "망고와 구아바",
      period: "2024.08 - 2025.01",
      content: [
        "'망고와 구아바'는 사용자가 간편하게 상품을 등록하고, 실시간 채팅을 통해 구매자와 원활하게 소통할 수 있는 중고거래 플랫폼입니다.  ",
        " React.js를 기반으로 개발되었으며 Axios를 활용하여 백엔드 API와의 비동기 통신을 최적화하고, 데이터 요청 및 응답을 효율적으로 관리했습니다.",
      ],

      skill: ["React.js", "Javascript", "Axios"],
      gitHub: "https://github.com/zzannorita/MangoAndGuava",
      detail: "1c87979a0bd580e4b18bcc70b9d776a7",
      position: { top: "18vh", left: "36%" },
      img: ["images/project-mango-1.png", "images/project-mango-2.png"],
    },
    {
      name: "TeamMate",
      period: "2023.12 - 2024.02",
      content: [
        "'팀메이트'는 팀을 만들어 실시간 문서 작성, 캘린더 공유를 할 수 있는 서비스입니다.",
        "Vite와 React.js, TypeScript를 기반으로 개발되었으며며 Axios와 Recoil을 활용해 API 통신 및 상태 관리를 최적화했습니다. JWT를 활용해 로그인 후 토큰을 저장하고, Axios 인터셉터를 통해 인증 흐름을 간소화했습니다.",
      ],
      skill: ["Vite", "React.js", "Typescript", "Axios", "Recoil"],
      gitHub: "https://github.com/100backfro/teammate",
      notion: "https://www.notion.so/TEAMMATE-f6266a684b02452d99bcfec7a44192ed",
      detail: "1cc7979a0bd580d0ad79e16da8b8f8eb",
      position: { top: "9vh", left: "54%" },
      img: ["images/project-teammate-2.png", "images/project-teammate-1.png"],
    },
    {
      name: "해보자Go",
      period: "2024.06 - 2024.07",
      content: [
        "‘해보자고’는 사용자 고유 번호를 기반으로 등록된 일정을 캘린더와 간트차트 형태로 시각화해주는 일정 관리 서비스입니다.",
        "Fetch API를 활용해 서버와의 비동기 통신으로 사용자 정보를 효율적으로 관리했으며, React Router를 통해 로그인 상태에 따른 페이지 접근을 제어했습니다.",
      ],
      skill: ["React.js", "JavaScript", "CSS Modules"],
      gitHub: "https://github.com/zzannorita/LetsDoIt",
      detail: "1cc7979a0bd5802ba069d2219b90e458",
      position: { top: "78vh", left: "28%" },
      img: ["images/project-todo-1.png", "images/project-todo-2.png"],
    },
    {
      name: "포트폴리오",
      period: "2025.03 - 2025.04",
      content: [""],
      skill: ["vite", "react.js", "Javascript", "TailwindCss"],
      gitHub: "https://github.com/zzannorita/portfolio",
      detail: "1c87979a0bd580e4b18bcc70b9d776a7",
      position: { top: "60vh", left: "58%" },
      img: [
        "images/project-port-1.png",
        "images/project-port-2.png",
        "images/project-port-3.png",
      ],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="w-full flex flex-col mt-36">
      <div className="flex justify-center items-center h-[10vh] text-2xl text-black-700 font-bold">
        Projects map
      </div>
      <div
        className="w-full h-[100vh]  
                 bg-[url('images/map.png')] 
                 bg-cover bg-center bg-no-repeat relative"
      >
        {project.map((item, index) => (
          <div
            key={index}
            className="absolute"
            style={{ top: item.position.top, left: item.position.left }}
          >
            <img
              src="images/redPin.png"
              alt="pin"
              className=" w-12 h-12 hover:scale-110 transition duration-200 animate-bounce"
              onClick={() => setSelectedProject(item)}
            />
          </div>
        ))}
      </div>
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </div>
  );
}
