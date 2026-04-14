import React from "react";

export default function NotionModal({ link, onClose }) {
  if (!link) return null;

  // 🔥 URL 자동 처리 (ID or full URL 둘 다 대응)
  const notionUrl = link.startsWith("http")
    ? link
    : `https://www.notion.so/${link}`;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]"
      onClick={onClose}
    >
      <div
        className="bg-white w-full sm:w-[50%] h-[40%] p-6 rounded-lg flex flex-col justify-center items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close */}
        <div className="w-full flex justify-end">
          <button onClick={onClose} className="w-6 h-6">
            &times;
          </button>
        </div>

        <div className="flex flex-col items-center gap-4 mt-6">
          <p className="text-lg font-semibold">
            프로젝트 상세는 Notion에서 확인해주세요
          </p>

          <a
            href={notionUrl}
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
