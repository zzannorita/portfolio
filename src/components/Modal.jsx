import React from "react";

import { useState } from "react";
import NotionModal from "./NotionModal";
export default function Modal({ isOpen, onClose, project }) {
  if (!isOpen) return null;
  const [selectedNotion, setSelectedNotion] = useState(false);
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-70"
      onClick={onClose}
    >
      {/* 모달창 */}
      <div
        className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg overflow-scroll w-[90%] h-[425px] sm:w-[650px] sm:h-[450px] lg:h-[450px] "
        style={{ scrollbarWidth: "none" }}
        onClick={(e) => e.stopPropagation()} // 내부 클릭 시 닫히지 않도록 방지
      >
        <div className="w-full hidden sm:flex justify-end ">
          <button
            onClick={onClose}
            className="flex justify-center items-center w-6 h-6 "
          >
            &times;
          </button>
        </div>
        <div className="w-full h-full flex flex-col sm:flex-row ">
          <div className="w-full sm:w-1/2">
            <div className="flex flex-col p-2">
              <div className="w-full flex justify-between">
                <h1 className="font-logo text-lg w-40">{project.name}</h1>
                <div className="w-full sm:hidden flex justify-end ">
                  <button
                    onClick={onClose}
                    className="flex justify-center items-center w-6 h-6 "
                  >
                    &times;
                  </button>
                </div>
              </div>
              <div className="text-xs text-gray-500 pb-4">{project.period}</div>
              <div className="sm:hidden ">
                <img
                  src={project.img[0]}
                  alt="img"
                  className="sm:w-64 h-auto border-2 border-gray-100 rounded-lg mb-2"
                />
              </div>
              <div>
                {project.content.map((text, index) => (
                  <div
                    key={index}
                    className="text-sm bg-gray-100 px-4 py-2 mb-2 rounded-lg"
                  >
                    {text}
                  </div>
                ))}
              </div>
              <div className="text-sm flex flex-wrap py-2">
                {project.skill.map((item, index) => (
                  <div key={index} className="px-2">
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex pl-2">
                <a
                  href={project.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/github.png"
                    alt="github"
                    className="w-6 mr-2"
                  />
                </a>
                {project.notion && (
                  <a
                    href={project.notion}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="images/notion.png" alt="notion" className="w-6" />
                  </a>
                )}
              </div>
              <div className="flex justify-center sm:justify-end">
                <button
                  className="text-xs border border-gray-200 w-16 p-2 hover:bg-gray-200"
                  onClick={() => setSelectedNotion(true)}
                >
                  상세보기
                </button>
                {selectedNotion && (
                  <NotionModal
                    link={project.detail}
                    onClose={() => setSelectedNotion(false)}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="sm:flex flex-col items-center hidden sm:w-1/2 p-2">
            {project.img.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="img"
                className="sm:w-64 h-auto border-2 border-gray-100 rounded-lg mb-2"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
