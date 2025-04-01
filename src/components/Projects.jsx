import React, { useState } from "react";

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="">
          <div className="absolute top-[18vh] left-[36%]">
            <img
              src="/src/images/redPin.png"
              alt="pin"
              className=" w-12 h-12 hover:scale-110 transition duration-200 animate-bounce"
              onClick={() => setIsOpen(true)}
            />
            {isOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                onClick={() => setIsOpen(false)}
              >
                {/* 모달창 */}
                <div
                  className="flex flex-col justify-between items-center bg-white p-6 rounded-lg shadow-lg w-full sm:w-[50%] h-[50vh] sm:h-[70vh]"
                  onClick={(e) => e.stopPropagation()} // 내부 클릭 시 닫히지 않도록 방지
                >
                  <h2 className="text-xl font-bold mb-4">
                    중고거래사이트 - 망고와 구아바
                  </h2>
                  <div className="mb-4">dfdf</div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-black"
                  >
                    close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
