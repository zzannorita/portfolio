import React, { useState, useEffect } from "react";
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";

export default function NotionModal({ link, onClose }) {
  const [isJson, setJson] = useState([]);

  useEffect(() => {
    fetch(`https://notion-api.splitbee.io/v1/page/${link}`)
      .then((response) => response.json())
      .then((response) => {
        setJson(response);
      });
  }, [link]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-100"
      onClick={onClose}
    >
      <div
        className="bg-white w-full sm:w-[70%] h-[70%] overflow-scroll p-6 rounded-lg"
        style={{ scrollbarWidth: "none" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="flex justify-center items-center w-6 h-6 "
          >
            &times;
          </button>
        </div>
        {isJson && <NotionRenderer blockMap={isJson} fullPage={true} />}
      </div>
    </div>
  );
}
