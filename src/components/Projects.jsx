import React, { useState } from "react";
import Modal from "./Modal";
export default function Projects() {
  const project = [
    {
      name: "망고와 구아바",
      period: "2024.08 - 2025.01",
      content: [
        "망고와 구아바는 사용자가 간편하게 상품을 등록하고, 실시간 채팅을 통해 구매자와 원활하게 소통할 수 있는 중고거래 플랫폼입니다.  ",
        " React.js를 기반으로 개발되었으며 Axios를 활용하여 백엔드 API와의 비동기 통신을 최적화하고, 데이터 요청 및 응답을 효율적으로 관리했습니다.",
      ],

      skill: ["react.js", "javascript", "tailwindCss", "axios"],
      gitHub: "https://github.com/zzannorita/MangoAndGuava",
      detail: "1c87979a0bd580e4b18bcc70b9d776a7",
      position: { top: "18vh", left: "36%" },
      img: [
        "/src/images/project-mango-1.png",
        "/src/images/project-mango-2.png",
      ],
    },
    {
      name: "TeamMate",
      period: "2023.12 - 2024.02",
      content: [
        "팀메이트는 협업 해야하는 사람들과 팀을 만들어 문서 공유와 캘린더로 일정 공유를 할 수 있어 원활한 협업을 가능하게하는 서비스입니다.",
      ],
      skill: ["vite", "react.js", "typescript", "axios", "recoil"],
      gitHub: "https://github.com/100backfro/teammate",
      notion: "https://www.notion.so/TEAMMATE-f6266a684b02452d99bcfec7a44192ed",
      detail: "1c87979a0bd580e4b18bcc70b9d776a7",
      position: { top: "9vh", left: "54%" },
      img: [
        "/src/images/project-mango-1.png",
        "/src/images/project-mango-2.png",
      ],
    },
    {
      name: "TeamMate",
      period: "2023.12 - 2024.02",
      content: [
        "협업 해야하는 사람들과 팀을 만들어 문서 공유와 캘린더로 일정 공유를 할 수 있어 원활한 협업을 가능하게하는 서비스입니다.",
      ],
      skill: ["vite", "react.js", "typescript", "axios", "recoil"],
      gitHub: "https://github.com/100backfro/teammate",
      notion: "https://www.notion.so/TEAMMATE-f6266a684b02452d99bcfec7a44192ed",
      detail: "1c87979a0bd580e4b18bcc70b9d776a7",
      position: { top: "78vh", left: "28%" },
      img: [
        "/src/images/project-mango-1.png",
        "/src/images/project-mango-2.png",
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
        className="w-full h-[50vh] sm:h-[70vh] lg:h-[100vh]  
                 bg-[url('/src/images/map.png')] 
                 bg-cover bg-center bg-no-repeat relative"
      >
        {project.map((item, index) => (
          <div
            key={index}
            className="absolute"
            style={{ top: item.position.top, left: item.position.left }}
          >
            <img
              src="/src/images/redPin.png"
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
