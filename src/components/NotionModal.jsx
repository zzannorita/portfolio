import React from "react";

export default function NotionModal({ link, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-100"
      onClick={onClose}
    >
      <div
        className="bg-white w-full sm:w-[20%] h-[20%] p-6 rounded-lg flex flex-col justify-center items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex justify-end">
          <button
            onClick={onClose}
            className="flex justify-center items-center w-6 h-6"
          >
            &times;
          </button>
        </div>

        <div className="flex flex-col items-center gap-4 mt-6">
          <a
            href={`https://www.notion.so/${link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-black text-white rounded"
          >
            프로젝트 상세 보기
          </a>
        </div>
      </div>
    </div>
  );
}
