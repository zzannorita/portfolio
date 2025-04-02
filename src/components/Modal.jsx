import React from "react";

export default function Modal({ isOpen, onClose, project }) {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* 모달창 */}
      <div
        className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full lg:w-[50%] h-[70vh] lg:h-[70vh] "
        onClick={(e) => e.stopPropagation()} // 내부 클릭 시 닫히지 않도록 방지
      >
        <div className="w-full flex justify-end ">
          <button
            onClick={onClose}
            className="flex justify-center items-center w-6 h-6 bg-gray-300 text-white rounded-md hover:bg-gray-900 "
          >
            &times;
          </button>
        </div>
        <div className="w-full h-full flex border border-black">
          <div className="border border-black w-1/2">
            <div className="flex flex-col ">
              <div>{project.name}</div>
              <div>{project.period}</div>
              <div>{project.content}</div>
              <div>{project.skill}</div>
            </div>
            <div>
              <div>
                <div>{project.gitHub}</div>
                <div>{project.notion}</div>
              </div>
              <div>{project.detail}</div>
            </div>
          </div>
          <div className="border border-black w-1/2">
            <div>이미지1</div>
            <div>이미지2</div>
          </div>
        </div>
      </div>
    </div>
  );
}
