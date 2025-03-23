import React from "react";

export default function Skills() {
  return (
    <div className="flex flex-col justify-between items-center max-w-screen-xl mx-auto h-auto my-24">
      <h1 className="flex justify-center items-center h-[15vh] text-3xl text-black-700 font-logo">
        My Skills
      </h1>
      <div className="w-full flex flex-col md:flex-row flex-wrap justify-center border border-black-100 p-4">
        <div className="flex flex-col items-center bg-gray-100 p-4 w-full md:w-[33%] min-w-[300px]">
          <div className="flex items-center h-[20vh] text-xl text-gray-900 font-logo">
            Language
          </div>
          <div className="flex h-auto gap-2">
            <div>내용</div>
          </div>
        </div>
        <div className="flex flex-col items-center bg-gray-200 p-4 w-full md:w-[33%] min-w-[300px]">
          <div className="flex items-center h-[20vh] text-xl text-gray-900 font-logo">
            Library
          </div>
          <div className="flex h-auto gap-2">
            <div>내용</div>
          </div>
        </div>
        <div className="flex flex-col items-center bg-gray-100 p-4 w-full md:w-[33%] min-w-[300px]">
          <div className="flex items-center h-[20vh] text-xl text-gray-900 font-logo">
            Tools
          </div>
          <div className="flex h-auto gap-2">
            <div>내용</div>
          </div>
        </div>
      </div>
    </div>
  );
}
